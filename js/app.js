// ===== 主应用逻辑 =====

const App = {
  currentView: 'home',
  currentTab: 'home',
  quizState: null,
  correctingIdx: -1, // 订正模式：正在订正的错题索引，-1表示不是订正模式

  init() {
    // 注册 Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(function(reg) {
          // 检测Service Worker更新
          reg.addEventListener('updatefound', function() {
            var newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', function() {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  App.showUpdateBanner('发现新版本，点击更新', function() {
                    newWorker.postMessage({ action: 'skipWaiting' });
                  });
                }
              });
            }
          });
          // 等待中的SW直接跳过
          if (reg.waiting && navigator.serviceWorker.controller) {
            App.showUpdateBanner('发现新版本，点击更新', function() {
              reg.waiting.postMessage({ action: 'skipWaiting' });
            });
          }
        })
        .catch(function() {});
      // SW切换后刷新页面
      navigator.serviceWorker.addEventListener('controllerchange', function() {
        if (App._swRefreshing) return;
        App._swRefreshing = true;
        window.location.reload();
      });
    }

    // 恢复模式
    const mode = Store.getMode();
    if (mode === 'parent') {
      this.currentView = 'parent-dashboard';
    }

    this.render();
  },

  // ===== 主渲染入口 =====
  render() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    switch (this.currentView) {
      case 'home':
        app.appendChild(this.renderHome());
        break;
      case 'quiz':
        app.appendChild(this.renderQuiz());
        break;
      case 'result':
        app.appendChild(this.renderResult());
        break;
      case 'wrong':
        app.appendChild(this.renderWrongBook());
        break;
      case 'calendar':
        app.appendChild(this.renderCalendar());
        break;
      case 'parent-login':
        app.appendChild(this.renderParentLogin());
        break;
      case 'parent-dashboard':
        app.appendChild(this.renderParentDashboard());
        break;
      case 'parent-settings':
        app.appendChild(this.renderParentSettings());
        break;
      case 'parent-stats':
        app.appendChild(this.renderParentStats());
        break;
    }

    window.scrollTo(0, 0);
  },

  // ===== 导航 =====
  navigate(view) {
    this.currentView = view;
    this.render();
  },

  // ===== 底部Tab栏 =====
  renderTabbar() {
    const tabs = [
      { id: 'home', icon: '🏠', label: '首页' },
      { id: 'wrong', icon: '❌', label: '错题本' },
      { id: 'calendar', icon: '📅', label: '日历' }
    ];

    const bar = document.createElement('div');
    bar.className = 'tabbar';

    // 如果在家长模式，显示不同的tab
    if (Store.getMode() === 'parent') {
      const pTabs = [
        { id: 'parent-dashboard', icon: '🏠', label: '首页' },
        { id: 'parent-settings', icon: '⚙️', label: '布置作业' },
        { id: 'parent-stats', icon: '📊', label: '统计' }
      ];
      pTabs.forEach(t => {
        const item = document.createElement('button');
        item.className = 'tabbar-item' + (this.currentView === t.id ? ' active' : '');
        item.innerHTML = `<span class="icon">${t.icon}</span><span class="label">${t.label}</span>`;
        item.onclick = () => this.navigate(t.id);
        bar.appendChild(item);
      });
      return bar;
    }

    tabs.forEach(t => {
      const item = document.createElement('button');
      item.className = 'tabbar-item' + (this.currentView === t.id ? ' active' : '');
      item.innerHTML = `<span class="icon">${t.icon}</span><span class="label">${t.label}</span>`;
      item.onclick = () => this.navigate(t.id);
      bar.appendChild(item);
    });

    return bar;
  },

  // ===== 首页 =====
  renderHome() {
    const page = document.createElement('div');
    page.className = 'page';

    const childName = Store.getChildName();
    const points = Store.getPoints().total;
    const continuous = Store.getContinuousDays();
    const wrongCount = Store.getWrongQuestions().length;
    const today = Store.today();
    const dateObj = new Date();
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const dateStr = `${dateObj.getMonth() + 1}月${dateObj.getDate()}日 星期${weekDays[dateObj.getDay()]}`;

    // 问候语
    const hour = dateObj.getHours();
    let greeting = '早上好';
    if (hour >= 12 && hour < 18) greeting = '下午好';
    else if (hour >= 18) greeting = '晚上好';

    // 头部
    const header = document.createElement('div');
    header.className = 'home-header';
    header.innerHTML = `
      <div class="greeting">${greeting}，</div>
      <div class="child-name">${childName} 👋</div>
      <div class="date-info">${dateStr}</div>
      <div class="mascot">🦊</div>
      <button class="mode-switch" onclick="App.goParent()">家长入口 🔒</button>
    `;
    page.appendChild(header);

    // 积分栏
    const pointsBar = document.createElement('div');
    pointsBar.className = 'points-bar';
    pointsBar.innerHTML = `
      <div class="points-item">
        <div class="num gold">⭐ ${points}</div>
        <div class="label">学习积分</div>
      </div>
      <div class="points-divider"></div>
      <div class="points-item">
        <div class="num green">🔥 ${continuous}</div>
        <div class="label">连续打卡</div>
      </div>
      <div class="points-divider"></div>
      <div class="points-item">
        <div class="num">❌ ${wrongCount}</div>
        <div class="label">错题待复习</div>
      </div>
    `;
    page.appendChild(pointsBar);

    // 今日任务
    const sectionTitle = document.createElement('div');
    sectionTitle.className = 'section-title';
    sectionTitle.innerHTML = `<h3>📝 今日作业</h3>`;
    page.appendChild(sectionTitle);

    // 学科卡片
    const settings = Store.getSettings();
    for (const [key, subj] of Object.entries(SUBJECTS)) {
      const config = settings[key];
      if (!config || !config.enabled) continue;

      const questions = Store.getDailyQuestions(key);
      const isDone = Store.isSubjectDone(key);
      const score = Store.getSubjectScore(key);

      const card = document.createElement('div');
      card.className = `subject-card ${subj.class}`;

      let statusHtml = '';
      if (isDone) {
        const acc = score.total > 0 ? Math.round(score.correct / score.total * 100) : 0;
        statusHtml = `<span class="status-badge done">✅ ${acc}分</span>`;
      } else if (questions.length > 0) {
        statusHtml = `<span class="status-badge">${questions.length}题</span>`;
      } else {
        statusHtml = `<span class="status-badge">无</span>`;
      }

      card.innerHTML = `
        <div class="subject-icon">${subj.icon}</div>
        <div class="subject-info">
          <div class="subject-name">${subj.name}</div>
          <div class="subject-meta">${isDone ? '已完成' : questions.length + '道题待完成'}</div>
        </div>
        ${statusHtml}
        <span class="arrow">›</span>
      `;

      if (!isDone && questions.length > 0) {
        card.onclick = () => this.startQuiz(key);
      } else if (isDone) {
        card.onclick = () => this.toast('今天的' + subj.name + '作业已完成啦！🎉');
      }

      page.appendChild(card);
    }

    // 检查是否全部完成
    const activeSubjects = Object.keys(SUBJECTS).filter(k => settings[k] && settings[k].enabled);
    const allDone = activeSubjects.every(k => Store.isSubjectDone(k));
    if (allDone && activeSubjects.length > 0 && !Store.isChecked(today)) {
      Store.checkCalendar(today);
      Store.addPoints(10, '全部完成奖励');
      setTimeout(() => this.showAllDoneModal(), 500);
    }

    // 每日一句话
    const quoteIdx = parseInt(today.replace(/-/g, '')) % DAILY_QUOTES.length;
    const quote = DAILY_QUOTES[quoteIdx];
    const quoteBox = document.createElement('div');
    quoteBox.className = 'daily-quote';
    quoteBox.innerHTML = `
      <div class="quote-icon">💡</div>
      <div class="quote-text">"${quote.text}"</div>
      <div class="quote-author">—— ${quote.author}</div>
    `;
    page.appendChild(quoteBox);

    // 底部间距
    const spacer = document.createElement('div');
    spacer.style.height = '80px';
    page.appendChild(spacer);

    page.appendChild(this.renderTabbar());

    return page;
  },

  // ===== 开始订正（从错题本进入）=====
  startCorrectMode(idx) {
    const wrong = Store.getWrongQuestions();
    if (idx < 0 || idx >= wrong.length) return;

    const w = wrong[idx];
    // 从题库找到原题（有完整options等数据）
    const found = QUESTION_BANK[w.subject] && QUESTION_BANK[w.subject].find(q => q.id === w.id);
    if (!found) {
      this.toast('题库中找不到此题，可能已被更新');
      return;
    }

    this.quizState = {
      subject: w.subject,
      questions: [found],
      currentIndex: 0,
      answers: [],
      correctCount: 0
    };
    this.correctingIdx = idx; // 标记正在订正的错题索引
    this.navigate('quiz');
  },

  // ===== 确认家长删除错题 =====
  confirmDeleteWrong(idx) {
    this.showModal({
      icon: '⚠️',
      title: '家长操作：删除错题？',
      body: '仅家长可以跳过订正直接删除。确定要删除这条错题吗？',
      confirmText: '删除',
      cancelText: '取消',
      onConfirm: () => {
        Store.removeWrongQuestion(idx);
        this.render();
      }
    });
  },

  // ===== 开始答题 =====
  startQuiz(subject) {
    const questions = Store.getDailyQuestions(subject);
    if (questions.length === 0) {
      this.toast('今天没有布置这科作业');
      return;
    }

    this.quizState = {
      subject,
      questions,
      currentIndex: 0,
      answers: [],
      correctCount: 0
    };
    this.correctingIdx = -1; // 重置订正状态

    this.navigate('quiz');
  },

  // ===== 答题页面 =====
  renderQuiz() {
    const page = document.createElement('div');
    page.className = 'page';

    if (!this.quizState) {
      this.navigate('home');
      return page;
    }

    const { subject, questions, currentIndex } = this.quizState;
    const subj = SUBJECTS[subject];
    const question = questions[currentIndex];
    const progress = ((currentIndex) / questions.length) * 100;

    // 头部
    const header = document.createElement('div');
    header.className = 'quiz-header';
    const isCorrectMode = this.correctingIdx >= 0;
    header.innerHTML = `
      <div class="quiz-meta">
        <button class="tabbar-item" style="flex:0; padding:4px 8px;" onclick="App.${isCorrectMode ? 'cancelCorrect' : 'confirmQuitQuiz'}()">
          <span class="icon" style="font-size:20px;">‹</span>
        </button>
        <span class="quiz-count">${isCorrectMode ? '📝 订正模式' : '第 ' + (currentIndex + 1) + ' / ' + questions.length + ' 题'}</span>
        <span class="quiz-subject">${subj.icon} ${subj.name}${isCorrectMode ? ' · 订正' : ''}</span>
      </div>
      ${!isCorrectMode ? `<div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${progress}%"></div>
      </div>` : ''}
    `;
    page.appendChild(header);

    // 题目区
    const body = document.createElement('div');
    body.className = 'quiz-body';
    body.id = 'quiz-body';
    body.appendChild(this.renderQuestion(question));
    page.appendChild(body);

    // 底部按钮
    const footer = document.createElement('div');
    footer.className = 'quiz-footer';
    footer.id = 'quiz-footer';
    footer.innerHTML = `
      <button class="btn btn-primary" id="quiz-next-btn" onclick="App.handleAnswer()" disabled>
        确认答案
      </button>
    `;
    page.appendChild(footer);

    return page;
  },

  // ===== 渲染单题 =====
  renderQuestion(question) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'question-card';

    // 难度标签
    const diffMap = { easy: '基础', medium: '提高', hard: '挑战' };
    const diffClass = { easy: 'tag-easy', medium: 'tag-medium', hard: 'tag-hard' };
    const typeMap = { choice: '选择题', fill: '填空题', match: '连线题', recall: '默写题' };

    card.innerHTML = `
      <span class="question-type-tag ${diffClass[question.difficulty]}">${diffMap[question.difficulty]} · ${typeMap[question.type] || question.type}</span>
      <div class="question-text">${this.formatQuestion(question.q)}</div>
      <div id="question-content"></div>
      <div id="feedback-area"></div>
    `;

    const content = card.querySelector('#question-content');

    // 语音播报按钮（有speak属性的题）
    if (question.speak) {
      const speakRow = document.createElement('div');
      speakRow.style.cssText = 'text-align:center;margin:10px 0;';
      const speakBtn = document.createElement('button');
      speakBtn.className = 'btn btn-primary';
      speakBtn.style.cssText = 'font-size:16px;padding:10px 24px;border-radius:20px;';
      const isEn = (question.speakLang || 'zh-CN') === 'en-US';
      speakBtn.innerHTML = '🔊 ' + (isEn ? 'Listen' : '听词语');
      speakBtn.onclick = () => {
        this.speakText(question.speak, question.speakLang || 'zh-CN');
        // 按钮动画
        speakBtn.innerHTML = '🔄 再听一遍';
        setTimeout(() => { speakBtn.innerHTML = '🔊 ' + (isEn ? 'Listen' : '再听一遍'); }, 500);
      };
      speakRow.appendChild(speakBtn);
      content.appendChild(speakRow);

      // 听写题提示
      if (question.type === 'fill') {
        const tip = document.createElement('div');
        tip.style.cssText = 'font-size:12px;color:var(--text-light);text-align:center;margin-bottom:8px;';
        tip.textContent = '👂 听完后再写，可以多次点击听哦～';
        content.appendChild(tip);
      }
    }

    switch (question.type) {
      case 'choice':
        content.appendChild(this.renderChoiceQuestion(question));
        break;
      case 'fill':
        content.appendChild(this.renderFillQuestion(question));
        break;
      case 'match':
        content.appendChild(this.renderMatchQuestion(question));
        break;
      case 'recall':
        content.appendChild(this.renderRecallQuestion(question));
        break;
    }

    return card;
  },

  formatQuestion(text) {
    return text.replace(/\n/g, '<br>');
  },

  // 选择题
  renderChoiceQuestion(question) {
    const container = document.createElement('div');
    container.className = 'options-list';

    question.options.forEach((opt, i) => {
      const item = document.createElement('div');
      item.className = 'option-item';
      item.dataset.index = i;
      item.innerHTML = `
        <div class="option-letter">${String.fromCharCode(65 + i)}</div>
        <div class="option-text">${opt}</div>
      `;
      item.onclick = () => {
        container.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        App.selectedAnswer = i;
        document.getElementById('quiz-next-btn').disabled = false;
      };
      container.appendChild(item);
    });

    return container;
  },

  // 填空题
  renderFillQuestion(question) {
    const container = document.createElement('div');
    const input = document.createElement('input');
    input.className = 'fill-input';
    input.type = 'text';
    input.placeholder = '请输入你的答案...';
    input.autocomplete = 'off';

    input.addEventListener('input', () => {
      document.getElementById('quiz-next-btn').disabled = input.value.trim() === '';
    });

    // 回车确认
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        this.handleAnswer();
      }
    });

    container.appendChild(input);
    setTimeout(() => input.focus(), 100);

    return container;
  },

  // 连线题
  renderMatchQuestion(question) {
    const container = document.createElement('div');
    container.style.position = 'relative';

    const matchDiv = document.createElement('div');
    matchDiv.className = 'match-container';

    const leftCol = document.createElement('div');
    leftCol.className = 'match-column';
    const rightCol = document.createElement('div');
    rightCol.className = 'match-column';

    // 左列打乱
    const leftItems = question.left.map((text, idx) => ({ text, originalIdx: idx }));
    const rightItems = question.right.map((text, idx) => ({ text, originalIdx: idx }));

    // 打乱右列
    const shuffledRight = [...rightItems];
    for (let i = shuffledRight.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledRight[i], shuffledRight[j]] = [shuffledRight[j], shuffledRight[i]];
    }

    this.matchState = {
      pairs: [],
      selectedLeft: null,
      leftItems,
      rightItems: shuffledRight,
      correctAnswer: question.answer
    };

    leftItems.forEach((item, displayIdx) => {
      const el = document.createElement('div');
      el.className = 'match-item';
      el.dataset.side = 'left';
      el.dataset.idx = item.originalIdx;
      el.textContent = item.text;
      el.onclick = () => this.handleMatchClick(el, 'left', item.originalIdx);
      leftCol.appendChild(el);
    });

    shuffledRight.forEach((item) => {
      const el = document.createElement('div');
      el.className = 'match-item';
      el.dataset.side = 'right';
      el.dataset.idx = item.originalIdx;
      el.textContent = item.text;
      el.onclick = () => this.handleMatchClick(el, 'right', item.originalIdx);
      rightCol.appendChild(el);
    });

    matchDiv.appendChild(leftCol);
    matchDiv.appendChild(rightCol);
    container.appendChild(matchDiv);

    // 提示
    const hint = document.createElement('div');
    hint.style.cssText = 'font-size:12px;color:#999;margin-top:10px;text-align:center;';
    hint.textContent = '点击左边再点击右边进行配对';
    container.appendChild(hint);

    return container;
  },

  handleMatchClick(el, side, idx) {
    // 如果已配对，取消配对
    if (el.classList.contains('matched')) {
      el.classList.remove('matched');
      this.matchState.pairs = this.matchState.pairs.filter(p =>
        !(p.left === idx && p.right === this.matchState.pairs.find(pp => pp.left === idx)?.right)
      );
      // 简化：重新检查
      this.matchState.pairs = this.matchState.pairs.filter(p => p.left !== idx);
      // 找到对应的右项也取消
      const rightItems = document.querySelectorAll('.match-item[data-side="right"].matched');
      return;
    }

    if (side === 'left') {
      // 取消之前选中的左项
      document.querySelectorAll('.match-item[data-side="left"].selected').forEach(el => el.classList.remove('selected'));
      el.classList.add('selected');
      this.matchState.selectedLeft = idx;
    } else {
      // 右项被点击
      if (this.matchState.selectedLeft !== null) {
        // 建立配对
        const leftEl = document.querySelector('.match-item[data-side="left"].selected');
        if (leftEl) {
          leftEl.classList.remove('selected');
          leftEl.classList.add('matched');
          el.classList.add('matched');

          // 移除之前的同left配对
          this.matchState.pairs = this.matchState.pairs.filter(p => p.left !== this.matchState.selectedLeft);
          this.matchState.pairs.push({ left: this.matchState.selectedLeft, right: idx });

          this.matchState.selectedLeft = null;

          // 检查是否全部配对
          const totalNeeded = this.matchState.leftItems.length;
          if (this.matchState.pairs.length >= totalNeeded) {
            document.getElementById('quiz-next-btn').disabled = false;
            document.getElementById('quiz-next-btn').textContent = '确认答案';
          }
        }
      }
    }
  },

  // 古诗默写题
  renderRecallQuestion(question) {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;flex-direction:column;gap:10px;';

    const isMulti = question.multiLine;
    const answers = isMulti ? question.answer.split('|') : [question.answer];

    const textareas = [];
    answers.forEach((ans, i) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display:flex;align-items:center;gap:8px;';

      if (isMulti) {
        const label = document.createElement('div');
        label.style.cssText = 'font-size:13px;color:var(--text-light);min-width:60px;';
        label.textContent = `第${i+1}行：`;
        wrapper.appendChild(label);
      }

      const ta = document.createElement('textarea');
      ta.className = 'fill-input';
      ta.style.cssText = 'min-height:44px;resize:vertical;padding:10px 14px;font-size:16px;border:2px solid var(--border);border-radius:12px;width:100%;box-sizing:border-box;';
      ta.placeholder = isMulti ? `请输入第${i+1}行...` : '请写出答案...';
      ta.autocomplete = 'off';

      ta.addEventListener('input', () => {
        const allFilled = textareas.every(t => t.value.trim() !== '');
        document.getElementById('quiz-next-btn').disabled = !allFilled;
      });

      textareas.push(ta);
      wrapper.appendChild(ta);
      container.appendChild(wrapper);
    });

    // 保存引用，供handleAnswer使用
    container.dataset.type = 'recall';
    container.textareas = textareas;

    // 默认禁用确认按钮
    setTimeout(() => {
      const allFilled = textareas.every(t => t.value.trim() !== '');
      const btn = document.getElementById('quiz-next-btn');
      if (btn) btn.disabled = !allFilled;
    }, 50);

    return container;
  },

  // ===== 处理答案 =====
  handleAnswer() {
    const { subject, questions, currentIndex } = this.quizState;
    const question = questions[currentIndex];
    let isCorrect = false;
    let userAnswer = '';

    if (question.type === 'choice') {
      if (this.selectedAnswer === undefined || this.selectedAnswer === null) {
        this.toast('请选择一个答案');
        return;
      }
      userAnswer = this.selectedAnswer;
      isCorrect = this.selectedAnswer === question.answer;
    } else if (question.type === 'fill') {
      const input = document.querySelector('.fill-input');
      userAnswer = input.value.trim();
      if (!userAnswer) {
        this.toast('请输入答案');
        return;
      }
      // 模糊匹配
      isCorrect = this.checkFillAnswer(userAnswer, question.answer);
    } else if (question.type === 'match') {
      // 检查配对
      const correct = true;
      for (const pair of this.matchState.pairs) {
        if (question.answer[pair.left] !== pair.right) {
          // 不正确
        }
      }
      // 全对才算对
      const allCorrect = this.matchState.pairs.every(pair => question.answer[pair.left] === pair.right) &&
                         this.matchState.pairs.length === question.left.length;
      isCorrect = allCorrect;
      userAnswer = this.matchState.pairs.map(p => `${question.left[p.left]}→${question.right[p.right]}`).join('; ');
    } else if (question.type === 'recall') {
      // 古诗默写题：从textarea获取答案
      const content = document.querySelector('#question-content > div');
      const textareas = content ? content.textareas : [];
      if (!textareas.length || textareas.some(t => !t.value.trim())) {
        this.toast('请输入答案');
        return;
      }
      userAnswer = textareas.map(t => t.value.trim()).join(' | ');
      // 批改答案
      if (question.multiLine) {
        const ansLines = question.answer.split('|');
        isCorrect = textareas.every((t, i) => this.checkFillAnswer(t.value.trim(), ansLines[i] || ''));
      } else {
        isCorrect = this.checkFillAnswer(textareas[0].value.trim(), question.answer);
      }
    }

    // 显示反馈
    this.showFeedback(question, isCorrect, userAnswer);

    // 记录答案
    this.quizState.answers.push({ questionId: question.id, userAnswer, isCorrect });
    if (isCorrect) this.quizState.correctCount++;

    // 错题加入错题本
    if (!isCorrect) {
      let correctAnswerText = question.answer;
      if (question.type === 'choice') {
        correctAnswerText = question.options[question.answer];
      } else if (question.type === 'recall' && question.multiLine) {
        correctAnswerText = question.answer.replace(/\|/g, '；');
      }

      Store.addWrongQuestion({
        id: question.id,
        subject,
        type: question.type,
        difficulty: question.difficulty,
        question: question.q,
        userAnswer: String(userAnswer),
        correctAnswer: correctAnswerText,
        hint: question.hint || '',
        date: Store.today()
      });
    }

    // 更新按钮
    const btn = document.getElementById('quiz-next-btn');
    btn.disabled = true;

    // 订正模式特殊处理
    if (this.correctingIdx >= 0) {
      if (isCorrect) {
        // 订正成功：从错题本移除
        Store.removeWrongQuestion(this.correctingIdx);
        this.correctingIdx = -1;
        btn.textContent = '订正成功 ✅';
        btn.onclick = () => {
          this.quizState = null;
          this.toast('已从错题本移除！');
          this.navigate('wrong');
        };
        btn.disabled = false;
      } else {
        // 订正失败：允许再试一次
        btn.textContent = '再试一次 💪';
        btn.onclick = () => {
          this.quizState.answers = [];
          this.selectedAnswer = null;
          this.matchState = null;
          this.render();
        };
        btn.disabled = false;
      }
      return;
    }

    btn.textContent = currentIndex + 1 < questions.length ? '下一题 →' : '完成作业 🎉';
    btn.onclick = () => this.nextQuestion();
    btn.disabled = false;

    // 禁用答题区交互
    document.querySelectorAll('.option-item, .fill-input, .match-item').forEach(el => {
      el.style.pointerEvents = 'none';
    });
  },

  checkFillAnswer(user, answer) {
    // 标准化比较
    const normalize = (s) => s.replace(/\s/g, '').replace(/，/g, ',').toLowerCase();
    const u = normalize(user);
    const a = normalize(answer);

    if (u === a) return true;

    // 检查答案中是否有多个可选答案（用/或空格分隔）
    const alternatives = answer.split(/[/\s]/).filter(s => s.length > 0);
    if (alternatives.length > 1) {
      return alternatives.some(alt => normalize(alt) === u);
    }

    // 包含关键字的判断（如"答案不唯一"的情况）
    if (answer.includes('答案不唯一') || answer.includes('均可')) {
      // 提取可选关键字
      const keys = answer.replace(/答案不唯一|均可|写出|三个|两个/g, '').split(/[、，,\s]/).filter(s => s.length >= 1);
      // 用户答案中包含至少一个关键字
      return keys.some(k => u.includes(normalize(k)));
    }

    return false;
  },

  showFeedback(question, isCorrect, userAnswer) {
    const area = document.getElementById('feedback-area');
    const correctAnswer = question.type === 'choice' ? question.options[question.answer] : question.answer;

    let html = `
      <div class="feedback-box ${isCorrect ? 'correct' : 'wrong'}">
        <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
        <div>
          <div class="feedback-text">${isCorrect ? '回答正确！太棒了！' : '答错了，没关系，继续加油！'}</div>
    `;

    if (!isCorrect) {
      if (question.type === 'choice') {
        html += `<div class="feedback-answer">你的答案：${String.fromCharCode(65 + userAnswer)}　正确答案：${String.fromCharCode(65 + question.answer)}</div>`;
      } else {
        html += `<div class="feedback-answer">正确答案：${correctAnswer}</div>`;
      }
    }

    if (question.hint && !isCorrect) {
      html += `<div class="feedback-hint">💡 ${question.hint}</div>`;
    }

    html += `</div></div>`;
    area.innerHTML = html;

    // 标记正确/错误选项
    if (question.type === 'choice') {
      const items = document.querySelectorAll('.option-item');
      items.forEach((item, i) => {
        if (i === question.answer) item.classList.add('correct');
        if (i === userAnswer && !isCorrect) item.classList.add('wrong');
      });
    } else if (question.type === 'fill') {
      const input = document.querySelector('.fill-input');
      input.classList.add(isCorrect ? 'correct' : 'wrong');
    }

    // 积分动画
    if (isCorrect) {
      this.showPointsFloat('+2 ⭐');
    }
  },

  showPointsFloat(text) {
    const float = document.createElement('div');
    float.className = 'points-float';
    float.textContent = text;
    float.style.left = '50%';
    float.style.top = '50%';
    float.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(float);
    setTimeout(() => float.remove(), 1000);
  },

  nextQuestion() {
    const { questions, currentIndex } = this.quizState;
    if (currentIndex + 1 < questions.length) {
      this.quizState.currentIndex++;
      this.selectedAnswer = null;
      this.matchState = null;
      this.render();
    } else {
      // 完成答题
      this.finishQuiz();
    }
  },

  finishQuiz() {
    const { subject, questions, correctCount } = this.quizState;

    // 保存记录
    Store.saveRecord(Store.today(), subject, {
      completed: true,
      correct: correctCount,
      total: questions.length,
      time: new Date().toISOString()
    });

    // 加积分
    const basePoints = correctCount * 2;
    const bonus = correctCount === questions.length ? 5 : 0; // 全对奖励
    Store.addPoints(basePoints + bonus, `${SUBJECTS[subject].name}作业`);

    // 重置订正状态
    this.correctingIdx = -1;

    // 检查打卡
    const settings = Store.getSettings();
    const activeSubjects = Object.keys(SUBJECTS).filter(k => settings[k] && settings[k].enabled);
    const allDone = activeSubjects.every(k => Store.isSubjectDone(k));
    if (allDone) {
      Store.checkCalendar(Store.today());
    }

    this.navigate('result');
  },

  // ===== 结果页 =====
  renderResult() {
    const page = document.createElement('div');
    page.className = 'page result-container';

    if (!this.quizState) {
      this.navigate('home');
      return page;
    }

    const { subject, questions, correctCount } = this.quizState;
    const total = questions.length;
    const score = Math.round(correctCount / total * 100);
    const subj = SUBJECTS[subject];

    let emoji = '🎉';
    let title = '太棒了！';
    let stars = 3;

    if (score === 100) { emoji = '🏆'; title = '满分通关！'; stars = 3; }
    else if (score >= 80) { emoji = '🌟'; title = '做得很好！'; stars = 3; }
    else if (score >= 60) { emoji = '👍'; title = '继续加油！'; stars = 2; }
    else { emoji = '💪'; title = '别灰心，多练习！'; stars = 1; }

    let starsHtml = '';
    for (let i = 0; i < 3; i++) {
      starsHtml += i < stars ? '⭐' : '☆';
    }

    page.innerHTML = `
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">${title}</div>
      <div class="result-score">${score}</div>
      <div class="result-score-label">${subj.name} · 得分</div>
      <div class="result-stars">${starsHtml}</div>
      <div class="result-stats">
        <div class="result-stat">
          <div class="stat-num" style="color:var(--success)">${correctCount}</div>
          <div class="stat-label">答对</div>
        </div>
        <div class="result-stat">
          <div class="stat-num" style="color:var(--danger)">${total - correctCount}</div>
          <div class="stat-label">答错</div>
        </div>
        <div class="result-stat">
          <div class="stat-num" style="color:var(--accent-dark)">+${correctCount * 2 + (correctCount === total ? 5 : 0)}</div>
          <div class="stat-label">获得积分</div>
        </div>
      </div>
      <div style="width:100%;max-width:300px;display:flex;gap:10px;">
        <button class="btn btn-outline" onclick="App.navigate('wrong')">查看错题</button>
        <button class="btn btn-primary" onclick="App.navigate('home')">返回首页</button>
      </div>
    `;

    this.quizState = null;

    return page;
  },

  // ===== 取消订正 =====
  cancelCorrect() {
    this.correctingIdx = -1;
    this.quizState = null;
    this.toast('已取消订正');
    this.navigate('wrong');
  },

  // ===== 确认退出答题 =====
  confirmQuitQuiz() {
    this.showModal({
      icon: '🤔',
      title: '确定退出吗？',
      body: '退出后答题进度不会保存，需要重新开始。',
      confirmText: '退出',
      cancelText: '继续答题',
      onConfirm: () => {
        this.quizState = null;
        this.navigate('home');
      }
    });
  },

  // ===== 错题本 =====
  renderWrongBook() {
    const page = document.createElement('div');
    page.className = 'page';

    const header = document.createElement('div');
    header.className = 'navbar';
    header.innerHTML = `
      <h1>❌ 错题本</h1>
      <div class="subtitle">巩固复习，消灭错题</div>
    `;
    page.appendChild(header);

    const wrong = Store.getWrongQuestions();

    if (wrong.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.style.marginTop = '60px';
      empty.innerHTML = `
        <div class="empty-icon">🎉</div>
        <div class="empty-text">还没有错题，继续保持！</div>
      `;
      page.appendChild(empty);
    } else {
      // 统计栏
      const stats = document.createElement('div');
      stats.style.cssText = 'display:flex;gap:8px;margin:12px 16px;';
      const subjCount = { chinese: 0, math: 0, english: 0 };
      wrong.forEach(w => { if (subjCount[w.subject] !== undefined) subjCount[w.subject]++; });

      for (const [key, subj] of Object.entries(SUBJECTS)) {
        if (subjCount[key] > 0) {
          const tag = document.createElement('div');
          tag.style.cssText = `flex:1;background:#fff;border-radius:10px;padding:10px;text-align:center;box-shadow:var(--shadow-soft);`;
          tag.innerHTML = `<div style="font-size:20px;">${subj.icon}</div><div style="font-size:18px;font-weight:700;color:${key==='chinese'?'var(--primary)':key==='math'?'var(--secondary)':'var(--info)'}">${subjCount[key]}</div><div style="font-size:11px;color:var(--text-light)">${subj.name}</div>`;
          stats.appendChild(tag);
        }
      }
      page.appendChild(stats);

      // 清空按钮
      const clearBtn = document.createElement('button');
      clearBtn.className = 'btn btn-outline btn-sm';
      clearBtn.style.cssText = 'margin:0 16px 12px;width:calc(100% - 32px);';
      clearBtn.textContent = '🗑️ 清空错题本';
      clearBtn.onclick = () => {
        this.showModal({
          icon: '⚠️',
          title: '清空错题本？',
          body: '清空后所有错题记录将不可恢复。',
          confirmText: '清空',
          cancelText: '取消',
          onConfirm: () => {
            Store.clearWrongQuestions();
            this.render();
          }
        });
      };
      page.appendChild(clearBtn);

    // 错题列表
      wrong.forEach((item, idx) => {
        const subj = SUBJECTS[item.subject] || { name: item.subject, icon: '📝' };
        const diffMap = { easy: '基础', medium: '提高', hard: '挑战' };

        const el = document.createElement('div');
        el.className = 'wrong-item';

        el.innerHTML = `
          <div class="wrong-subject">${subj.icon} ${subj.name} · ${diffMap[item.difficulty] || ''} · ${item.date}</div>
          <div class="wrong-question">${this.formatQuestion(item.question)}</div>
          ${item.userAnswer ? `<div style="font-size:13px;color:var(--danger);margin:6px 0;">你的答案：${item.userAnswer}</div>` : ''}
          <div id="answer-${idx}" style="display:none;">
            <div style="font-size:13px;color:var(--success);margin:6px 0;">✅ 正确答案：<strong>${item.correctAnswer}</strong></div>
            ${item.hint ? `<div style="font-size:12px;color:var(--info);margin-top:6px;background:#EFF6FF;padding:6px 10px;border-radius:8px;">💡 ${item.hint}</div>` : ''}
          </div>
          <div style="display:flex;gap:8px;margin-top:10px;">
            <button class="btn btn-outline btn-sm" style="flex:1;" id="btn-answer-${idx}" onclick="App.toggleAnswer(${idx})">🔍 看答案</button>
            <button class="btn btn-primary btn-sm" style="flex:1;" onclick="App.startCorrectMode(${idx})">📝 重新订正</button>
            ${Store.getMode() === 'parent' ? `<button class="btn btn-outline btn-sm" style="flex:0;" onclick="App.confirmDeleteWrong(${idx})">🗑️</button>` : ''}
          </div>
        `;
        page.appendChild(el);
      });
    }

    const spacer = document.createElement('div');
    spacer.style.height = '80px';
    page.appendChild(spacer);
    page.appendChild(this.renderTabbar());

    return page;
  },

  removeWrong(idx) {
    Store.removeWrongQuestion(idx);
    this.render();
  },

  // 切换错题答案显示/隐藏
  toggleAnswer(idx) {
    const el = document.getElementById('answer-' + idx);
    const btn = document.getElementById('btn-answer-' + idx);
    if (!el) return;
    if (el.style.display === 'none') {
      el.style.display = 'block';
      if (btn) btn.textContent = '🔒 隐藏答案';
    } else {
      el.style.display = 'none';
      if (btn) btn.textContent = '🔍 看答案';
    }
  },

  // ===== 语音朗读 =====
  // TTS语音队列（移动端修复）
  _ttsQueue: [],
  _ttsSpeaking: false,

  speakText(text, lang = 'zh-CN') {
    if (!('speechSynthesis' in window)) {
      this.toast('您的浏览器不支持语音播放');
      return;
    }
    var synth = window.speechSynthesis;
    var self = this;

    // 把播放请求放入队列
    this._ttsQueue.push({ text: text, lang: lang });

    if (this._ttsSpeaking) return; // 正在播放中，排队
    this._processTTSQueue(synth);
  },

  _processTTSQueue(synth) {
    var self = this;
    if (this._ttsQueue.length === 0) {
      this._ttsSpeaking = false;
      return;
    }

    this._ttsSpeaking = true;
    var item = this._ttsQueue.shift();

    // 先停止所有语音
    synth.cancel();

    // 预加载voices（移动端关键修复）
    var voices = synth.getVoices();
    if (voices.length === 0) {
      // voices还没加载，先注册监听
      synth.onvoiceschanged = function() {
        synth.onvoiceschanged = null;
        self._doSpeak(synth, item);
      };
      synth.getVoices(); // 触发加载
      // 加超时：1秒后强制播放
      setTimeout(function() {
        if (self._ttsSpeaking && synth) {
          self._doSpeak(synth, item);
        }
      }, 1000);
    } else {
      this._doSpeak(synth, item);
    }
  },

  _doSpeak(synth, item) {
    var self = this;
    var ut = new SpeechSynthesisUtterance(item.text);
    ut.lang = item.lang;
    ut.pitch = 1;

    // 选择匹配语言的voice
    var voices = synth.getVoices();
    if (voices.length > 0) {
      var matched = voices.filter(function(v) { return v.lang.indexOf(item.lang.split('-')[0]) >= 0; });
      if (item.lang === 'en-US') {
        var enUS = voices.filter(function(v) { return v.lang === 'en-US'; });
        if (enUS.length > 0) ut.voice = enUS[0];
        else if (matched.length > 0) ut.voice = matched[0];
      } else if (item.lang === 'zh-CN') {
        var zhCN = voices.filter(function(v) { return v.lang === 'zh-CN' || v.lang === 'zh-Hans-CN'; });
        if (zhCN.length > 0) ut.voice = zhCN[0];
        else if (matched.length > 0) ut.voice = matched[0];
      }
    }

    if (item.lang === 'zh-CN') ut.rate = 0.85;
    else if (item.lang === 'en-US') ut.rate = 0.9;
    else ut.rate = 0.8;

    // 播放结束处理
    ut.onend = function() {
      // 延迟一下再播下一段
      setTimeout(function() {
        self._processTTSQueue(synth);
      }, 200);
    };

    ut.onerror = function(e) {
      // 移动端可能遇到错误，跳过继续
      setTimeout(function() {
        self._processTTSQueue(synth);
      }, 200);
    };

    // 关键：移动端需要小延迟
    setTimeout(function() {
      synth.speak(ut);
    }, 150);
  },

  // ===== 学习日历 =====
  renderCalendar() {
    const page = document.createElement('div');
    page.className = 'page';

    const header = document.createElement('div');
    header.className = 'navbar';
    header.innerHTML = `
      <h1>📅 学习日历</h1>
      <div class="subtitle">坚持每天学习，养成好习惯</div>
    `;
    page.appendChild(header);

    // 连续打卡
    const continuous = Store.getContinuousDays();
    const cal = Store.getCalendar();
    const totalDays = Object.keys(cal).length;

    const statBar = document.createElement('div');
    statBar.style.cssText = 'display:flex;gap:10px;margin:12px 16px;';
    statBar.innerHTML = `
      <div style="flex:1;background:linear-gradient(135deg,var(--success),#5AB85F);border-radius:12px;padding:14px;text-align:center;color:#fff;">
        <div style="font-size:24px;font-weight:800;">🔥 ${continuous}</div>
        <div style="font-size:12px;opacity:0.9;">连续打卡(天)</div>
      </div>
      <div style="flex:1;background:linear-gradient(135deg,var(--accent-dark),var(--accent));border-radius:12px;padding:14px;text-align:center;color:var(--text);">
        <div style="font-size:24px;font-weight:800;">✅ ${totalDays}</div>
        <div style="font-size:12px;opacity:0.8;">累计打卡(天)</div>
      </div>
    `;
    page.appendChild(statBar);

    // 日历
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const monthDiv = document.createElement('div');
    monthDiv.style.cssText = 'text-align:center;margin:16px 0 8px;font-size:18px;font-weight:700;';
    monthDiv.textContent = `${year}年${month + 1}月`;
    page.appendChild(monthDiv);

    const grid = document.createElement('div');
    grid.className = 'calendar-grid';

    // 星期头
    ['日', '一', '二', '三', '四', '五', '六'].forEach(w => {
      const h = document.createElement('div');
      h.className = 'calendar-header';
      h.textContent = w;
      grid.appendChild(h);
    });

    // 计算第一天是星期几
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 空白
    for (let i = 0; i < firstDay; i++) {
      const e = document.createElement('div');
      e.className = 'calendar-day empty';
      grid.appendChild(e);
    }

    // 日期
    const today = Store.today();
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const dayEl = document.createElement('div');
      dayEl.className = 'calendar-day';
      if (cal[dateStr]) dayEl.classList.add('checked');
      if (dateStr === today) dayEl.classList.add('today');
      if (!cal[dateStr] && dateStr !== today) dayEl.classList.add('normal');
      dayEl.textContent = d;
      grid.appendChild(dayEl);
    }

    page.appendChild(grid);

    // 图例
    const legend = document.createElement('div');
    legend.className = 'calendar-legend';
    legend.innerHTML = `
      <span><span class="legend-dot" style="background:var(--success);"></span>已打卡</span>
      <span><span class="legend-dot" style="background:#fff;border:1px solid var(--primary);"></span>今天</span>
      <span><span class="legend-dot" style="background:#F0F0F0;"></span>未打卡</span>
    `;
    page.appendChild(legend);

    // 积分历史
    const pointsData = Store.getPoints();
    if (pointsData.history.length > 0) {
      const pointsSection = document.createElement('div');
      pointsSection.className = 'section-title';
      pointsSection.innerHTML = `<h3>⭐ 积分明细</h3>`;
      page.appendChild(pointsSection);

      const pointsList = document.createElement('div');
      pointsList.style.cssText = 'margin:0 16px;';

      pointsData.history.slice(0, 15).forEach(h => {
        const item = document.createElement('div');
        item.className = 'card';
        item.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:12px 16px;margin-bottom:6px;';
        item.innerHTML = `
          <div>
            <div style="font-size:14px;font-weight:500;">${h.reason}</div>
            <div style="font-size:11px;color:var(--text-lighter);">${h.date}</div>
          </div>
          <div style="font-size:18px;font-weight:800;color:var(--accent-dark);">+${h.amount} ⭐</div>
        `;
        pointsList.appendChild(item);
      });

      page.appendChild(pointsList);
    }

    const spacer = document.createElement('div');
    spacer.style.height = '80px';
    page.appendChild(spacer);
    page.appendChild(this.renderTabbar());

    return page;
  },

  // ===== 全部完成弹窗 =====
  showAllDoneModal() {
    this.showModal({
      icon: '🏆',
      title: '全部完成！',
      body: '今天的作业全部做完啦！获得10积分打卡奖励！\n继续保持，你是最棒的！',
      confirmText: '太好了！',
      onConfirm: () => {}
    });
  },

  // ===== 家长入口 =====
  goParent() {
    if (Store.getMode() === 'parent') {
      this.navigate('parent-dashboard');
    } else {
      this.navigate('parent-login');
    }
  },

  // 家长登录
  renderParentLogin() {
    const page = document.createElement('div');
    page.className = 'page login-container';
    page.innerHTML = `
      <div class="login-icon">🔒</div>
      <div class="login-title">家长入口</div>
      <div class="login-subtitle">请输入密码进入家长模式</div>
      <input class="login-input" type="password" id="parent-pwd" placeholder="默认密码：1234" maxlength="6">
      <button class="btn btn-primary login-btn" onclick="App.doParentLogin()">进入</button>
      <button class="btn btn-outline btn-sm" style="max-width:300px;margin-top:12px;" onclick="App.navigate('home')">返回学生端</button>
      <div style="margin-top:30px;font-size:12px;color:var(--text-lighter);">
        首次使用默认密码 1234<br>进入后可在设置中修改
      </div>
    `;

    setTimeout(() => {
      const input = document.getElementById('parent-pwd');
      if (input) {
        input.focus();
        input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') this.doParentLogin();
        });
      }
    }, 100);

    return page;
  },

  doParentLogin() {
    const input = document.getElementById('parent-pwd');
    const pwd = input ? input.value.trim() : '';
    if (!pwd) { this.toast('请输入密码'); return; }

    if (pwd === Store.getParentPwd()) {
      Store.setMode('parent');
      this.navigate('parent-dashboard');
    } else {
      input.value = '';
      input.style.borderColor = 'var(--danger)';
      input.style.animation = 'shake 0.4s';
      setTimeout(() => { input.style.animation = ''; }, 400);
      this.toast('密码错误，请重试');
    }
  },

  // ===== 家长仪表盘 =====
  renderParentDashboard() {
    const page = document.createElement('div');
    page.className = 'page';

    // 头部
    const header = document.createElement('div');
    header.className = 'parent-header';
    header.innerHTML = `
      <h1>👨‍👩‍👧 家长中心</h1>
      <div class="subtitle">管理作业 · 查看成绩 · 关注成长</div>
      <button class="mode-switch" onclick="App.exitParent()">退出 🔓</button>
    `;
    page.appendChild(header);

    // 今日完成情况
    const today = Store.today();
    const settings = Store.getSettings();
    const todayRecords = Store.getTodayRecords(today);

    const section1 = document.createElement('div');
    section1.className = 'parent-section';
    section1.innerHTML = `<div class="parent-section-title">📋 今日完成情况</div>`;

    for (const [key, subj] of Object.entries(SUBJECTS)) {
      if (!settings[key] || !settings[key].enabled) continue;
      const rec = todayRecords[key];
      const questions = Store.getDailyQuestions(key);

      const row = document.createElement('div');
      row.className = 'setting-row';

      if (rec && rec.completed) {
        const acc = rec.total > 0 ? Math.round(rec.correct / rec.total * 100) : 0;
        row.innerHTML = `
          <div class="setting-label">${subj.icon} ${subj.name}</div>
          <div class="setting-value" style="color:var(--success);">✅ ${rec.correct}/${rec.total} 正确率${acc}%</div>
        `;
      } else {
        row.innerHTML = `
          <div class="setting-label">${subj.icon} ${subj.name}</div>
          <div class="setting-value" style="color:var(--warning);">⏳ ${questions.length}题待完成</div>
        `;
      }
      section1.appendChild(row);
    }

    if (section1.children.length <= 1) {
      const empty = document.createElement('div');
      empty.className = 'card';
      empty.style.margin = '0';
      empty.style.textAlign = 'center';
      empty.style.color = 'var(--text-lighter)';
      empty.style.fontSize = '13px';
      empty.textContent = '今天没有布置作业';
      section1.appendChild(empty);
    }

    page.appendChild(section1);

    // 快捷操作
    const section2 = document.createElement('div');
    section2.className = 'parent-section';
    section2.innerHTML = `<div class="parent-section-title">⚡ 快捷操作</div>`;

    const actions = [
      { icon: '⚙️', name: '布置每日作业', desc: '设置科目、题量、难度', action: () => App.navigate('parent-settings') },
      { icon: '📊', name: '学习统计', desc: '查看成绩和薄弱项分析', action: () => App.navigate('parent-stats') },
      { icon: '❌', name: '错题本', desc: '查看孩子的错题记录', action: () => { Store.setMode('parent'); App.currentView = 'wrong'; App.render(); } },
      { icon: '📅', name: '学习日历', desc: '查看打卡记录', action: () => { App.currentView = 'calendar'; App.render(); } },
      { icon: '🔄', name: '重置今日作业', desc: '清空今日记录，重新做', action: () => App.resetToday() }
    ];

    actions.forEach(a => {
      const row = document.createElement('div');
      row.className = 'setting-row';
      row.style.cursor = 'pointer';
      row.innerHTML = `
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:24px;">${a.icon}</span>
          <div>
            <div class="setting-label">${a.name}</div>
            <div style="font-size:12px;color:var(--text-light);">${a.desc}</div>
          </div>
        </div>
        <span style="color:var(--text-lighter);font-size:20px;">›</span>
      `;
      row.onclick = a.action;
      section2.appendChild(row);
    });

    page.appendChild(section2);

    // 孩子信息
    const section3 = document.createElement('div');
    section3.className = 'parent-section';
    section3.innerHTML = `<div class="parent-section-title">👶 孩子信息</div>`;

    const nameRow = document.createElement('div');
    nameRow.className = 'setting-row';
    nameRow.innerHTML = `
      <div class="setting-label">孩子姓名</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <input type="text" value="${Store.getChildName()}" style="border:1px solid #E0E0E0;border-radius:8px;padding:6px 10px;font-size:14px;text-align:right;width:100px;font-family:inherit;" id="child-name-input">
        <button class="btn btn-secondary btn-sm" onclick="App.saveChildName()">保存</button>
      </div>
    `;
    section3.appendChild(nameRow);

    // 修改密码
    const pwdRow = document.createElement('div');
    pwdRow.className = 'setting-row';
    pwdRow.innerHTML = `
      <div class="setting-label">修改家长密码</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <input type="password" placeholder="新密码" maxlength="6" style="border:1px solid #E0E0E0;border-radius:8px;padding:6px 10px;font-size:14px;width:100px;font-family:inherit;" id="new-pwd-input">
        <button class="btn btn-secondary btn-sm" onclick="App.saveParentPwd()">修改</button>
      </div>
    `;
    section3.appendChild(pwdRow);

    page.appendChild(section3);

    const spacer = document.createElement('div');
    spacer.style.height = '80px';
    page.appendChild(spacer);
    page.appendChild(this.renderTabbar());

    return page;
  },

  saveChildName() {
    const input = document.getElementById('child-name-input');
    const name = input.value.trim();
    if (name) {
      Store.setChildName(name);
      this.toast('已保存');
      this.render();
    }
  },

  saveParentPwd() {
    const input = document.getElementById('new-pwd-input');
    const pwd = input.value.trim();
    if (pwd.length < 4) { this.toast('密码至少4位'); return; }
    Store.setParentPwd(pwd);
    input.value = '';
    this.toast('密码已修改');
  },

  exitParent() {
    Store.setMode('student');
    this.navigate('home');
  },

  // ===== 重置今日作业 =====
  resetToday() {
    const today = Store.today();
    const correctPwd = Store.getParentPwd();

    this.showPwdModal('请输入家长密码（默认1234）：', (pwd) => {
      if (pwd === null) return;
      if (pwd !== correctPwd) { this.toast('密码错误'); return; }

      this.showModal({
        icon: '🔄',
        title: '重置今日作业',
        body: '确定要重置今日作业吗？\n清空今日答题记录，孩子可以重新做。',
        confirmText: '确定重置',
        cancelText: '取消',
        onConfirm: () => {
          // 清空今日完成记录
          const records = Store.getRecords();
          delete records[today];
          Store.set(Store.KEYS.RECORDS, records);
          // 清空每日题目缓存（强迫重新生成）
          const dailyQs = Store.get('study_daily_questions', {});
          delete dailyQs[today];
          Store.set('study_daily_questions', dailyQs);
          // 清空今日打卡
          const cal = Store.getCalendar();
          delete cal[today];
          Store.set(Store.KEYS.CALENDAR, cal);

          this.toast('已重置今日作业 ✅');
          this.render();
        }
      });
    });
  },

  // ===== 家长设置 - 布置作业 =====
  renderParentSettings() {
    const page = document.createElement('div');
    page.className = 'page';

    const header = document.createElement('div');
    header.className = 'navbar';
    header.innerHTML = `
      <div class="navbar-back">
        <button class="back-btn" onclick="App.navigate('parent-dashboard')">‹</button>
        <h1>⚙️ 布置每日作业</h1>
      </div>
    `;
    page.appendChild(header);

    const settings = Store.getSettings();

    const intro = document.createElement('div');
    intro.style.cssText = 'margin:16px;font-size:13px;color:var(--text-light);background:#FFF9C4;padding:12px 16px;border-radius:12px;';
    intro.innerHTML = '💡 每天自动生成题目，同一天题目不变。修改设置后第二天生效（或当天未做的科目立即生效）。';
    page.appendChild(intro);

    for (const [key, subj] of Object.entries(SUBJECTS)) {
      const config = settings[key];

      const section = document.createElement('div');
      section.className = 'card';
      section.style.margin = '0 16px 12px';
      section.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:24px;">${subj.icon}</span>
            <span style="font-size:17px;font-weight:700;">${subj.name}</span>
          </div>
          <div class="switch ${config.enabled ? 'on' : ''}" id="switch-${key}" onclick="App.toggleSubject('${key}')"></div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-size:14px;">每日题量</span>
          <div class="stepper">
            <button onclick="App.changeCount('${key}', -1)">−</button>
            <span class="stepper-value" id="count-${key}">${config.count}</span>
            <button onclick="App.changeCount('${key}', 1)">+</button>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:14px;">难度</span>
          <div style="display:flex;gap:6px;">
            ${['easy', 'medium', 'hard', 'mixed'].map(d => `
              <button class="btn btn-sm ${config.difficulty === d ? 'btn-primary' : 'btn-outline'}" style="padding:6px 12px;font-size:12px;" onclick="App.setDifficulty('${key}', '${d}')">
                ${{easy:'基础', medium:'提高', hard:'挑战', mixed:'混合'}[d]}
              </button>
            `).join('')}
          </div>
        </div>
      `;
      page.appendChild(section);
    }

    // 保存按钮
    const saveBtn = document.createElement('button');
    saveBtn.className = 'btn btn-primary';
    saveBtn.style.cssText = 'margin:16px;';
    saveBtn.textContent = '💾 保存设置';
    saveBtn.onclick = () => {
      Store.saveSettings(this.tempSettings || settings);
      this.tempSettings = null;
      this.toast('设置已保存');
      setTimeout(() => this.navigate('parent-dashboard'), 800);
    };
    page.appendChild(saveBtn);

    // 初始化临时设置
    if (!this.tempSettings) {
      this.tempSettings = JSON.parse(JSON.stringify(settings));
    }

    const spacer = document.createElement('div');
    spacer.style.height = '80px';
    page.appendChild(spacer);
    page.appendChild(this.renderTabbar());

    return page;
  },

  toggleSubject(key) {
    const settings = this.tempSettings || Store.getSettings();
    settings[key].enabled = !settings[key].enabled;
    this.tempSettings = settings;
    Store.saveSettings(settings);
    this.render();
  },

  changeCount(key, delta) {
    const settings = this.tempSettings || Store.getSettings();
    settings[key].count = Math.max(3, Math.min(20, settings[key].count + delta));
    this.tempSettings = settings;
    Store.saveSettings(settings);

    // 只更新数字，不重渲染
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = settings[key].count;
  },

  setDifficulty(key, diff) {
    const settings = this.tempSettings || Store.getSettings();
    settings[key].difficulty = diff;
    this.tempSettings = settings;
    Store.saveSettings(settings);
    this.render();
  },

  // ===== 家长统计 =====
  renderParentStats() {
    const page = document.createElement('div');
    page.className = 'page';

    const header = document.createElement('div');
    header.className = 'navbar';
    header.innerHTML = `
      <div class="navbar-back">
        <button class="back-btn" onclick="App.navigate('parent-dashboard')">‹</button>
        <h1>📊 学习统计</h1>
      </div>
    `;
    page.appendChild(header);

    const stats = Store.getStats();

    // 总览
    const overview = document.createElement('div');
    overview.className = 'stat-card';
    overview.style.marginTop = '12px';
    overview.innerHTML = `
      <div class="stat-header"><span style="font-size:20px;">📈</span><span class="stat-title">总体情况</span></div>
      <div class="stat-body">
        <div class="stat-block">
          <div class="stat-num" style="color:var(--primary)">${stats.totalDays}</div>
          <div class="stat-label">完成天数</div>
        </div>
        <div class="stat-block">
          <div class="stat-num" style="color:var(--success)">${stats.accuracy}%</div>
          <div class="stat-label">平均正确率</div>
        </div>
        <div class="stat-block">
          <div class="stat-num" style="color:var(--accent-dark)">${stats.points}</div>
          <div class="stat-label">总积分</div>
        </div>
      </div>
    `;
    page.appendChild(overview);

    // 各科分析
    for (const [key, subj] of Object.entries(SUBJECTS)) {
      const ss = stats.subjectStats[key];
      if (ss.total === 0) continue;

      const acc = ss.total > 0 ? Math.round(ss.correct / ss.total * 100) : 0;
      let level = '需加强', levelColor = 'var(--danger)';
      if (acc >= 90) { level = '优秀'; levelColor = 'var(--success)'; }
      else if (acc >= 75) { level = '良好'; levelColor = 'var(--secondary)'; }
      else if (acc >= 60) { level = '一般'; levelColor = 'var(--warning)'; }

      const card = document.createElement('div');
      card.className = 'stat-card';
      card.innerHTML = `
        <div class="stat-header">
          <span style="font-size:20px;">${subj.icon}</span>
          <span class="stat-title">${subj.name}</span>
          <span class="tag" style="background:${levelColor}20;color:${levelColor};margin-left:auto;">${level}</span>
        </div>
        <div class="stat-body">
          <div class="stat-block">
            <div class="stat-num">${ss.done}</div>
            <div class="stat-label">完成次数</div>
          </div>
          <div class="stat-block">
            <div class="stat-num" style="color:var(--success)">${ss.correct}</div>
            <div class="stat-label">答对题数</div>
          </div>
          <div class="stat-block">
            <div class="stat-num" style="color:var(--danger)">${ss.total - ss.correct}</div>
            <div class="stat-label">答错题数</div>
          </div>
        </div>
        <div style="margin-top:10px;">
          <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-light);margin-bottom:4px;">
            <span>正确率</span><span style="font-weight:700;color:${levelColor}">${acc}%</span>
          </div>
          <div style="height:8px;background:#F0F0F0;border-radius:10px;overflow:hidden;">
            <div style="height:100%;width:${acc}%;background:${levelColor};border-radius:10px;transition:width 0.5s;"></div>
          </div>
        </div>
      `;
      page.appendChild(card);
    }

    // 薄弱项分析
    const weakSubjects = [];
    for (const [key, subj] of Object.entries(SUBJECTS)) {
      const ss = stats.subjectStats[key];
      if (ss.total > 0) {
        const acc = ss.correct / ss.total * 100;
        weakSubjects.push({ key, name: subj.name, icon: subj.icon, acc, wrongCount: ss.total - ss.correct });
      }
    }
    weakSubjects.sort((a, b) => a.acc - b.acc);

    if (weakSubjects.length > 0) {
      const weakCard = document.createElement('div');
      weakCard.className = 'stat-card';
      weakCard.innerHTML = `
        <div class="stat-header"><span style="font-size:20px;">🎯</span><span class="stat-title">薄弱项分析</span></div>
      `;

      if (weakSubjects[0].acc < 80) {
        const w = weakSubjects[0];
        const advice = document.createElement('div');
        advice.style.cssText = 'background:#FFF5F5;padding:12px;border-radius:10px;font-size:13px;color:var(--text);line-height:1.6;';
        advice.innerHTML = `${w.icon} <b>${w.name}</b> 正确率较低（${Math.round(w.acc)}%），建议多做练习，重点复习错题本中的题目。`;
        weakCard.appendChild(advice);
      } else {
        const advice = document.createElement('div');
        advice.style.cssText = 'background:#F0FFF4;padding:12px;border-radius:10px;font-size:13px;color:var(--success);';
        advice.textContent = '各科表现都不错，继续保持！👏';
        weakCard.appendChild(advice);
      }

      // 排名
      const ranking = document.createElement('div');
      ranking.style.cssText = 'margin-top:10px;font-size:13px;';
      weakSubjects.forEach((w, i) => {
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #F8F8F8;';
        row.innerHTML = `
          <span>${i + 1}. ${w.icon} ${w.name}</span>
          <span style="font-weight:700;color:${w.acc >= 80 ? 'var(--success)' : 'var(--danger)'}">${Math.round(w.acc)}%</span>
        `;
        ranking.appendChild(row);
      });
      weakCard.appendChild(ranking);

      page.appendChild(weakCard);
    }

    const spacer = document.createElement('div');
    spacer.style.height = '80px';
    page.appendChild(spacer);
    page.appendChild(this.renderTabbar());

    return page;
  },

  // ===== Toast =====
  toast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2000);
  },

  // ===== 新版本提示条 =====
  showUpdateBanner(text, onClick) {
    var existing = document.getElementById('sw-update-banner');
    if (existing) return;
    var banner = document.createElement('div');
    banner.id = 'sw-update-banner';
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:linear-gradient(90deg,#FF6B6B,#FF8E53);color:#fff;text-align:center;padding:10px 16px;font-size:14px;box-shadow:0 2px 8px rgba(0,0,0,0.2);';
    banner.innerHTML = '<span style="display:inline-block;margin-right:8px;">🎉</span>' + text;
    var btn = document.createElement('button');
    btn.textContent = '立即更新';
    btn.style.cssText = 'margin-left:12px;padding:4px 12px;border-radius:12px;border:none;background:#fff;color:#FF6B6B;font-weight:600;font-size:13px;';
    btn.onclick = function() {
      if (onClick) onClick();
      banner.remove();
    };
    banner.appendChild(btn);
    document.body.appendChild(banner);
  },
  showModal({ icon, title, body, confirmText, cancelText, onConfirm, onCancel }) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-icon">${icon}</div>
      <div class="modal-title">${title}</div>
      <div class="modal-body">${(body || '').replace(/\n/g, '<br>')}</div>
      <div class="modal-actions">
        ${cancelText ? `<button class="btn btn-outline" id="modal-cancel">${cancelText}</button>` : ''}
        <button class="btn btn-primary" id="modal-confirm">${confirmText || '确定'}</button>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const close = () => overlay.remove();

    overlay.querySelector('#modal-confirm').onclick = () => {
      close();
      if (onConfirm) onConfirm();
    };

    if (cancelText) {
      overlay.querySelector('#modal-cancel').onclick = () => {
        close();
        if (onCancel) onCancel();
      };
    }

    // 点击遮罩关闭（仅当有取消按钮时）
    if (cancelText) {
      overlay.onclick = (e) => { if (e.target === overlay) close(); };
    }
  },

  // ===== 自定义密码弹窗（替代 prompt，支持手机） =====
  showPwdModal(message, callback) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
      <div class="modal" style="max-width:320px;">
        <div class="modal-icon">🔒</div>
        <div class="modal-title">家长验证</div>
        <div class="modal-body" style="margin-bottom:16px;">${message || '请输入家长密码：'}</div>
        <input class="login-input" type="password" id="pwd-modal-input"
               placeholder="输入密码" maxlength="6"
               style="width:100%;margin-bottom:16px;box-sizing:border-box;">
        <div style="color:var(--danger);font-size:13px;min-height:18px;" id="pwd-modal-err"></div>
        <div class="modal-actions">
          <button class="btn btn-outline" id="pwd-modal-cancel">取消</button>
          <button class="btn btn-primary" id="pwd-modal-ok">确认</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector('#pwd-modal-input');
    const errEl = overlay.querySelector('#pwd-modal-err');

    const close = (pwd) => {
      overlay.remove();
      try { if (callback) callback(pwd); } catch(e) { console.error('pwdModal callback error:', e); App.toast('操作出错，请重试'); }
    };

    input.onkeydown = (e) => { if (e.key === 'Enter') overlay.querySelector('#pwd-modal-ok').click(); };
    overlay.querySelector('#pwd-modal-ok').onclick = () => {
      const val = input.value.trim();
      if (!val) { errEl.textContent = '请输入密码'; input.focus(); return; }
      close(val);
    };
    overlay.querySelector('#pwd-modal-cancel').onclick = () => close(null);
    setTimeout(() => input.focus(), 100);
  },
};

// 启动
document.addEventListener('DOMContentLoaded', () => App.init());
