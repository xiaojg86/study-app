// ===== 数据存储层 =====
// 封装 localStorage，管理所有持久化数据

const Store = {
  KEYS: {
    SETTINGS: 'study_settings',
    RECORDS: 'study_records',
    WRONG: 'study_wrong',
    POINTS: 'study_points',
    CALENDAR: 'study_calendar',
    MODE: 'study_mode',
    PARENT_PWD: 'study_parent_pwd',
    CHILD_NAME: 'study_child_name'
  },

  // 读取
  get(key, def) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : def;
    } catch(e) {
      return def;
    }
  },

  // 写入
  set(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
      return true;
    } catch(e) {
      return false;
    }
  },

  // === 设置 ===
  getSettings() {
    return this.get(this.KEYS.SETTINGS, {
      chinese: { enabled: true, count: 10, difficulty: 'mixed' },
      math: { enabled: true, count: 10, difficulty: 'mixed' },
      english: { enabled: true, count: 8, difficulty: 'mixed' },
      notifyTime: '19:00'
    });
  },

  saveSettings(settings) {
    this.set(this.KEYS.SETTINGS, settings);
  },

  // === 完成记录 ===
  getRecords() {
    return this.get(this.KEYS.RECORDS, {});
  },

  // date格式: YYYY-MM-DD
  getTodayRecords(date) {
    const records = this.getRecords();
    return records[date] || {};
  },

  saveRecord(date, subject, record) {
    const records = this.getRecords();
    if (!records[date]) records[date] = {};
    records[date][subject] = record;
    this.set(this.KEYS.RECORDS, records);
  },

  // === 错题本 ===
  getWrongQuestions() {
    return this.get(this.KEYS.WRONG, []);
  },

  addWrongQuestion(q) {
    let wrong = this.getWrongQuestions();
    // 去重（同一天同一题不重复加入）
    const exists = wrong.find(w => w.id === q.id && w.date === q.date);
    if (!exists) {
      wrong.unshift(q);
      if (wrong.length > 200) wrong = wrong.slice(0, 200);
      this.set(this.KEYS.WRONG, wrong);
    }
  },

  removeWrongQuestion(index) {
    let wrong = this.getWrongQuestions();
    wrong.splice(index, 1);
    this.set(this.KEYS.WRONG, wrong);
  },

  clearWrongQuestions() {
    this.set(this.KEYS.WRONG, []);
  },

  // === 积分 ===
  getPoints() {
    return this.get(this.KEYS.POINTS, { total: 0, history: [] });
  },

  addPoints(amount, reason) {
    let points = this.getPoints();
    points.total += amount;
    points.history.unshift({
      amount,
      reason,
      date: this.today()
    });
    if (points.history.length > 100) points.history = points.history.slice(0, 100);
    this.set(this.KEYS.POINTS, points);
    return points.total;
  },

  // === 打卡日历 ===
  getCalendar() {
    return this.get(this.KEYS.CALENDAR, {});
  },

  checkCalendar(date) {
    const cal = this.getCalendar();
    cal[date] = true;
    this.set(this.KEYS.CALENDAR, cal);
  },

  isChecked(date) {
    const cal = this.getCalendar();
    return !!cal[date];
  },

  getContinuousDays() {
    const cal = this.getCalendar();
    let count = 0;
    let d = new Date();
    while (true) {
      const ds = this.formatDate(d);
      if (cal[ds]) {
        count++;
        d.setDate(d.getDate() - 1);
      } else {
        // 今天还没打卡不算断
        if (ds === this.today()) {
          d.setDate(d.getDate() - 1);
          continue;
        }
        break;
      }
    }
    return count;
  },

  // === 模式 ===
  getMode() {
    return this.get(this.KEYS.MODE, 'student');
  },

  setMode(mode) {
    this.set(this.KEYS.MODE, mode);
  },

  // === 家长密码 ===
  getParentPwd() {
    return this.get(this.KEYS.PARENT_PWD, '1234');
  },

  setParentPwd(pwd) {
    this.set(this.KEYS.PARENT_PWD, pwd);
  },

  // === 孩子姓名 ===
  getChildName() {
    return this.get(this.KEYS.CHILD_NAME, '小朋友');
  },

  setChildName(name) {
    this.set(this.KEYS.CHILD_NAME, name);
  },

  // === 工具方法 ===
  today() {
    return this.formatDate(new Date());
  },

  formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  },

  // === 按日期生成题目 ===
  // 用日期做种子，保证同一天题目不变
  getDailyQuestions(subject) {
    const settings = this.getSettings();
    const config = settings[subject];
    if (!config || !config.enabled) return [];

    const allQuestions = QUESTION_BANK[subject];
    const count = Math.min(config.count, allQuestions.length);

    // 日期种子
    const seed = this.today().replace(/-/g, '');
    const rng = this.mulberry32(parseInt(seed) + subject.charCodeAt(0) * 1000);

    // 打乱并取前N题
    const shuffled = [...allQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    let selected = shuffled.slice(0, count);

    // 难度筛选
    if (config.difficulty !== 'mixed') {
      const filtered = allQuestions.filter(q => q.difficulty === config.difficulty);
      if (filtered.length >= count) {
        const sFiltered = [...filtered];
        for (let i = sFiltered.length - 1; i > 0; i--) {
          const j = Math.floor(rng() * (i + 1));
          [sFiltered[i], sFiltered[j]] = [sFiltered[j], sFiltered[i]];
        }
        selected = sFiltered.slice(0, count);
      }
    }

    return selected;
  },

  // 判断今天某科目是否已完成
  isSubjectDone(subject) {
    const records = this.getTodayRecords(this.today());
    return !!(records[subject] && records[subject].completed);
  },

  // 获取某科目今天的成绩
  getSubjectScore(subject) {
    const records = this.getTodayRecords(this.today());
    return records[subject] ? records[subject] : null;
  },

  // 获取所有统计
  getStats() {
    const records = this.getRecords();
    const dates = Object.keys(records).sort().reverse();

    let totalDone = 0, totalCorrect = 0, totalQuestions = 0;
    let subjectStats = { chinese: { done: 0, correct: 0, total: 0 }, math: { done: 0, correct: 0, total: 0 }, english: { done: 0, correct: 0, total: 0 } };

    for (const date of dates) {
      const dayRec = records[date];
      for (const subject of ['chinese', 'math', 'english']) {
        if (dayRec[subject] && dayRec[subject].completed) {
          totalDone++;
          totalCorrect += dayRec[subject].correct;
          totalQuestions += dayRec[subject].total;
          subjectStats[subject].done++;
          subjectStats[subject].correct += dayRec[subject].correct;
          subjectStats[subject].total += dayRec[subject].total;
        }
      }
    }

    return {
      totalDays: totalDone,
      totalCorrect,
      totalQuestions,
      accuracy: totalQuestions > 0 ? Math.round(totalCorrect / totalQuestions * 100) : 0,
      subjectStats,
      continuousDays: this.getContinuousDays(),
      points: this.getPoints().total
    };
  },

  // 伪随机数生成器（种子化）
  mulberry32(a) {
    return function() {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = a;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
};
