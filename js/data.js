// ===== 三年级上学期预学题库 =====
// 涵盖语文、数学、英语三科，多种题型
// 含一二年级复习内容

const QUESTION_BANK = {
  chinese: [
    // --- 生字（看拼音写汉字）---
    { id: 'c001', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\nfáng zi（  ）', answer: '房子', hint: '上下结构，上面是"户"' },
    { id: 'c002', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\nhuā duǒ（  ）', answer: '花朵', hint: '"花"是艹字头' },
    { id: 'c003', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\ncū xīn（  ）', answer: '粗心', hint: '"粗"是米字旁' },
    { id: 'c004', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\nyōu měi（  ）', answer: '优美', hint: '"优"是亻旁' },
    { id: 'c005', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nguān chá（  ）', answer: '观察', hint: '"察"下面是"示"' },
    { id: 'c006', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nxiū xi（  ）', answer: '休息', hint: '"休"是人靠在树边' },
    { id: 'c007', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\nshān pō（  ）', answer: '山坡', hint: '"坡"是土字旁' },
    { id: 'c008', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nyán jiū（  ）', answer: '研究', hint: '"研"是石字旁' },
    { id: 'c009', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\nkuài lè（  ）', answer: '快乐', hint: '"快"是忄旁' },
    { id: 'c010', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nzhǔn bèi（  ）', answer: '准备', hint: '"准"是冫旁' },

    // --- 词语搭配（选择题）---
    { id: 'c011', type: 'choice', difficulty: 'easy', q: '选出正确的词语搭配：\n（  ）的阳光', options: ['温暖', '寒冷', '黑暗', '猛烈'], answer: 0, hint: '阳光是温暖明亮的' },
    { id: 'c012', type: 'choice', difficulty: 'easy', q: '选出正确的词语搭配：\n（  ）的小草', options: ['枯黄', '翠绿', '雪白', '火红'], answer: 1, hint: '春天的小草是什么颜色？' },
    { id: 'c013', type: 'choice', difficulty: 'easy', q: '选出正确的词语搭配：\n（  ）地听讲', options: ['认真', '粗心', '马虎', '慌张'], answer: 0, hint: '上课应该怎样听讲？' },
    { id: 'c014', type: 'choice', difficulty: 'medium', q: '选出错误的词语搭配：\n', options: ['金色的稻田', '碧绿的荷叶', '火红的雪花', '蔚蓝的天空'], answer: 2, hint: '雪花是什么颜色的？' },
    { id: 'c015', type: 'choice', difficulty: 'medium', q: '"急忙"的近义词是：', options: ['缓慢', '匆忙', '悠闲', '随意'], answer: 1, hint: '急忙和匆忙都表示速度快' },

    // --- 古诗填空 ---
    { id: 'c016', type: 'fill', difficulty: 'easy', q: '古诗填空：\n《山行》——杜牧\n远上寒山石径斜，白云生处有（  ）。', answer: '人家', hint: '有人居住的地方' },
    { id: 'c017', type: 'fill', difficulty: 'medium', q: '古诗填空：\n《山行》——杜牧\n停车坐爱枫林晚，霜叶红于（  ）花。', answer: '二', hint: '比几月的花更红？' },
    { id: 'c018', type: 'fill', difficulty: 'easy', q: '古诗填空：\n《所见》——袁枚\n牧童骑黄牛，歌声振（  ）樾。', answer: '林', hint: '树林的意思' },
    { id: 'c019', type: 'fill', difficulty: 'medium', q: '古诗填空：\n《所见》——袁枚\n意欲捕鸣蝉，忽然（  ）口立。', answer: '闭', hint: '闭上嘴巴不出声' },
    { id: 'c020', type: 'fill', difficulty: 'medium', q: '古诗填空：\n《赠刘景文》——苏轼\n荷尽已无擎雨盖，菊残犹有傲（  ）枝。', answer: '霜', hint: '秋天的霜' },
    { id: 'c021', type: 'choice', difficulty: 'easy', q: '"远上寒山石径斜"中"斜"的正确读音是：', options: ['xié', 'xiá', 'shé', 'yé'], answer: 1, hint: '古诗中押韵读xiá' },
    { id: 'c022', type: 'choice', difficulty: 'medium', q: '《山行》描写的是什么季节的景色？', options: ['春天', '夏天', '秋天', '冬天'], answer: 2, hint: '枫林晚、霜叶——秋天' },

    // --- 句子题 ---
    { id: 'c023', type: 'choice', difficulty: 'easy', q: '选出比喻句：', options: ['他长得很高', '弯弯的月亮像一条小船', '我们去公园玩', '小明在写作业'], answer: 1, hint: '比喻句要有"像"' },
    { id: 'c024', type: 'choice', difficulty: 'medium', q: '选出拟人句：', options: ['蝴蝶在花丛中飞舞', '蝴蝶在花丛中跳舞', '花丛里有蝴蝶', '蝴蝶很漂亮'], answer: 1, hint: '拟人就是把动物当成人来写' },
    { id: 'c025', type: 'fill', difficulty: 'medium', q: '照样子写句子：\n例：树叶落下来。→ 树叶像蝴蝶一样落下来。\n星星亮起来。→ 星星像（  ）一样亮起来。', answer: '眼睛', hint: '星星眨呀眨，像什么？答案不唯一，"眼睛/宝石/钻石"均可' },
    { id: 'c026', type: 'choice', difficulty: 'medium', q: '"小明把窗户打开了"改为"被"字句：', options: ['窗户被小明打开了', '小明被窗户打开了', '窗户把小明打开了', '窗户打开了小明'], answer: 0, hint: '被字句：对象+被+施动者+动作' },
    { id: 'c027', type: 'fill', difficulty: 'hard', q: '修改病句（写出正确的句子）：\n我穿上了红色的上衣和帽子。', answer: '我穿上了红色的上衣，戴上了帽子。', hint: '上衣用"穿"，帽子用"戴"' },

    // --- 量词填空 ---
    { id: 'c028', type: 'fill', difficulty: 'easy', q: '填入合适的量词：\n一（  ）小河', answer: '条', hint: '细长的东西用"条"' },
    { id: 'c029', type: 'fill', difficulty: 'easy', q: '填入合适的量词：\n一（  ）画', answer: '幅', hint: '书画作品用"幅"' },
    { id: 'c030', type: 'fill', difficulty: 'easy', q: '填入合适的量词：\n一（  ）歌', answer: '首', hint: '诗歌歌曲用"首"' },

    // --- 成语 ---
    { id: 'c031', type: 'choice', difficulty: 'medium', q: '"画蛇添足"的意思是：', options: ['画蛇很厉害', '做了多余的事', '蛇有很多脚', '画画很快'], answer: 1, hint: '多此一举的意思' },
    { id: 'c032', type: 'choice', difficulty: 'medium', q: '下列哪个成语形容非常专心？', options: ['三心二意', '聚精会神', '东张西望', '心不在焉'], answer: 1, hint: '注意力集中的意思' },
    { id: 'c033', type: 'fill', difficulty: 'medium', q: '补充成语：\n（  ）心（  ）意', answer: '三三', hint: '形容不专心，三和二' },
    { id: 'c034', type: 'choice', difficulty: 'easy', q: '"亡羊补牢"告诉我们什么道理？', options: ['羊丢了不用找', '出了问题及时补救还不晚', '羊很难养', '要买更多的羊'], answer: 1, hint: '出了差错及时补救' },

    // --- 标点符号 ---
    { id: 'c035', type: 'choice', difficulty: 'easy', q: '选择正确的标点：\n妈妈问我___你今天作业写完了吗___', options: ['" ？" ,', '： " 。"', '： " ？"', '" 。" 。'], answer: 2, hint: '冒号引出，问号结尾' },
    { id: 'c036', type: 'choice', difficulty: 'medium', q: '选择正确的标点：\n多么美丽的景色啊___', options: ['。', '！', '？', '，'], answer: 1, hint: '感叹句用感叹号' },

    // --- 阅读理解 ---
    { id: 'c037', type: 'choice', difficulty: 'medium', q: '阅读短文回答：\n秋天到了，果园里的苹果红了，梨子黄了，葡萄紫了。一阵风吹来，果香扑鼻。农民伯伯笑得合不拢嘴。\n短文写了什么季节？', options: ['春天', '夏天', '秋天', '冬天'], answer: 2, hint: '第一句就说了' },
    { id: 'c038', type: 'choice', difficulty: 'medium', q: '（接上题）短文中提到了几种水果？', options: ['1种', '2种', '3种', '4种'], answer: 2, hint: '苹果、梨子、葡萄' },
    { id: 'c039', type: 'choice', difficulty: 'medium', q: '（接上题）"果香扑鼻"是什么意思？', options: ['果子很香', '果子坏了', '果子很酸', '果子很大'], answer: 0, hint: '扑鼻就是香味很浓' },
    { id: 'c040', type: 'choice', difficulty: 'hard', q: '（接上题）农民伯伯为什么笑得合不拢嘴？', options: ['因为好玩', '因为丰收了很高兴', '因为不用干活了', '因为果子好看'], answer: 1, hint: '丰收了当然高兴' },

    // --- 近反义词 ---
    { id: 'c041', type: 'choice', difficulty: 'easy', q: '"高兴"的反义词是：', options: ['开心', '快乐', '难过', '兴奋'], answer: 2, hint: '高兴的反面是什么？' },
    { id: 'c042', type: 'choice', difficulty: 'easy', q: '"美丽"的近义词是：', options: ['丑陋', '漂亮', '高大', '矮小'], answer: 1, hint: '美丽和漂亮意思相近' },
    { id: 'c043', type: 'choice', difficulty: 'medium', q: '"开始"的反义词是：', options: ['结束', '继续', '中间', '起点'], answer: 0, hint: '开始的反面' },

    // --- 连线题（词语搭配）---
    { id: 'c044', type: 'match', difficulty: 'easy', q: '把词语和拼音连起来：', left: ['翠绿', '笔直', '金黄', '雪白'], right: ['cuì lǜ', 'bǐ zhí', 'jīn huáng', 'xuě bái'], answer: [0,1,2,3], hint: '注意声调' },
    { id: 'c045', type: 'match', difficulty: 'medium', q: '把近义词连起来：', left: ['焦急', '赞许', '居然', '忽然'], right: ['竟然', '着急', '称赞', '突然'], answer: [1,2,0,3], hint: '焦急=着急，赞许=称赞，居然=竟然，忽然=突然' },

    // --- 多音字 ---
    { id: 'c046', type: 'choice', difficulty: 'hard', q: '"假"在"放假"中的正确读音是：', options: ['jiǎ', 'jià', 'xiā', 'jiá'], answer: 1, hint: '放假读jià' },
    { id: 'c047', type: 'choice', difficulty: 'hard', q: '"似"在"似乎"中的正确读音是：', options: ['shì', 'sì', 'shí', 'sī'], answer: 1, hint: "似乎读sì" },

    // --- 按要求写词语 ---
    { id: 'c048', type: 'fill', difficulty: 'medium', q: '写出三个表示颜色的词语：\n红色、（  ）、（  ）', answer: '蓝色绿色', hint: '答案不唯一，写出颜色词即可' },
    { id: 'c049', type: 'fill', difficulty: 'medium', q: '写出"看"的三个同义词：\n（  ）、（  ）、望', answer: '瞧盯', hint: '瞧、盯、望都是看的意思，答案不唯一' },
    { id: 'c050', type: 'choice', difficulty: 'medium', q: '下列哪组词都是动词？', options: ['跑 跳 投', '桌 椅 书', '红 绿 蓝', '大 小 多'], answer: 0, hint: '动词表示动作' },

    // --- 古诗默写（整首/半首填空）---
    { id: 'c051', type: 'recall', difficulty: 'medium', q: '古诗默写：\n《山行》——杜牧\n请写出前两句：\n远上寒山石径斜，□□□□□□□。', answer: '白云生处有人家', hint: '有人居住的地方，在白云深处' },
    { id: 'c052', type: 'recall', difficulty: 'medium', q: '古诗默写：\n《山行》——杜牧\n请写出后两句：\n停车坐爱枫林晚，□□□□□□□。', answer: '霜叶红于二月花', hint: '二月的花，霜叶比它更红' },
    { id: 'c053', type: 'recall', difficulty: 'easy', q: '古诗默写：\n《所见》——袁枚\n请写出前两句：\n牧童骑黄牛，□□□□□。', answer: '歌声振林樾', hint: '歌声在树林中回荡' },
    { id: 'c054', type: 'recall', difficulty: 'medium', q: '古诗默写：\n《所见》——袁枚\n请写出后两句：\n意欲捕鸣蝉，□□□□□。', answer: '忽然闭口立', hint: '闭上嘴巴，静静地站着' },
    { id: 'c055', type: 'recall', difficulty: 'medium', q: '古诗默写：\n《赠刘景文》——苏轼\n请写出前两句：\n荷尽已无擎雨盖，□□□□□□□。', answer: '菊残犹有傲霜枝', hint: '菊花谢了还有傲霜的枝条' },
    { id: 'c056', type: 'recall', difficulty: 'hard', q: '古诗默写：\n《赠刘景文》——苏轼\n请写出后两句：\n一年好景君须记，□□□□□□□。', answer: '最是橙黄橘绿时', hint: '橙子黄了、橘子绿了的时候' },
    { id: 'c057', type: 'recall', difficulty: 'hard', q: '古诗默写（整首）：\n《夜书所见》——叶绍翁\n萧萧梧叶送寒声，□□□□□□□。\n知有儿童挑促织，□□□□□□□。', answer: '江上秋风动客情|夜深篱落一灯明', hint: '秋风让客居的人感到思乡；夜深了还有一盏灯亮着', multiLine: true },
    { id: 'c058', type: 'recall', difficulty: 'hard', q: '古诗默写（整首）：\n《望天门山》——李白\n天门中断楚江开，□□□□□□□。\n两岸青山相对出，□□□□□□□。', answer: '碧水东流至此回|孤帆一片日边来', hint: '碧绿的江水东流到这里回旋；一片孤帆从太阳那边驶来', multiLine: true },

    // --- 词语听写（语音朗读）---
    { id: 'c059', type: 'fill', difficulty: 'easy', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '房子', speak: '房子', hint: '上下结构，户字头' },
    { id: 'c060', type: 'fill', difficulty: 'easy', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '花朵', speak: '花朵', hint: '花是艹字头' },
    { id: 'c061', type: 'fill', difficulty: 'easy', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '快乐', speak: '快乐', hint: '心情好' },
    { id: 'c062', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '观察', speak: '观察', hint: '仔细地看' },
    { id: 'c063', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '休息', speak: '休息', hint: '人靠在树边' },
    { id: 'c064', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '准备', speak: '准备', hint: '预先安排好' },
    { id: 'c065', type: 'fill', difficulty: 'hard', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '研究', speak: '研究', hint: '深入探讨' },
    { id: 'c066', type: 'fill', difficulty: 'hard', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '山坡', speak: '山坡', hint: '山体倾斜的地面' },
    { id: 'c067', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '优美', speak: '优美', hint: '美好、雅致' },
    { id: 'c068', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '粗心', speak: '粗心', hint: '不细心，反义词是细心' },

    // ========== 一二年级语文复习 ==========
    // --- 拼音基础 ---
    { id: 'c101', type: 'choice', difficulty: 'easy', q: '选出整体认读音节：', options: ['b', 'zhi', 'p', 'k'], answer: 1, hint: 'zhi是整体认读音节' },
    { id: 'c102', type: 'choice', difficulty: 'easy', q: '选出韵母：', options: ['b', 'p', 'a', 'm'], answer: 2, hint: 'a是单韵母' },
    { id: 'c103', type: 'choice', difficulty: 'easy', q: '"b—ā →" 拼出来是什么？', options: ['pā', 'bā', 'dā', 'mā'], answer: 1, hint: 'b和ā拼读' },
    { id: 'c104', type: 'choice', difficulty: 'medium', q: '"鱼"的音节是 yú，带的是几声？', options: ['一声', '二声', '三声', '四声'], answer: 1, hint: 'ú是第二声' },
    { id: 'c105', type: 'choice', difficulty: 'easy', q: '下面哪个字的声母是"sh"？', options: ['四', '十', '日', '字'], answer: 1, hint: '十的声母是sh，四的声母是s' },

    // --- 简单汉字 ---
    { id: 'c106', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\nshàng（  ）', answer: '上', hint: '上和下是反义词' },
    { id: 'c107', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\nzuǒ（  ）', answer: '左', hint: '和"右"相反的' },
    { id: 'c108', type: 'fill', difficulty: 'easy', q: '写出反义词：\n大——（  ）', answer: '小', hint: '大的反面' },
    { id: 'c109', type: 'fill', difficulty: 'easy', q: '写出反义词：\n多——（  ）', answer: '少', hint: '多的反面' },
    { id: 'c110', type: 'fill', difficulty: 'easy', q: '写出反义词：\n开——（  ）', answer: '关', hint: '打开的反面' },
    { id: 'c111', type: 'fill', difficulty: 'medium', q: '数笔画："马"共有（  ）画', answer: '3', hint: '横折、竖折折钩、横' },
    { id: 'c112', type: 'choice', difficulty: 'easy', q: '"火"字的第一笔是：', options: ['、', '丿', '丨', '一'], answer: 0, hint: '先写点' },

    // --- 偏旁部首 ---
    { id: 'c113', type: 'choice', difficulty: 'easy', q: '下面哪个字是"木字旁"？', options: ['树', '打', '河', '花'], answer: 0, hint: '树=木+对' },
    { id: 'c114', type: 'choice', difficulty: 'easy', q: '下面哪个字是"三点水旁"？', options: ['地', '河', '灯', '体'], answer: 1, hint: '河=氵+可' },
    { id: 'c115', type: 'choice', difficulty: 'medium', q: '下面哪个字的偏旁是"辶"（走之底）？', options: ['近', '过', '还', '以上都是'], answer: 3, hint: '这三个字都是走之底' },
    { id: 'c116', type: 'fill', difficulty: 'medium', q: '写出偏旁是"口字旁"的一个字：', answer: '吃', hint: '和嘴巴有关的字，呼/叫/唱/吹都可以' },

    // --- 简单词语 ---
    { id: 'c117', type: 'fill', difficulty: 'easy', q: '看拼音写词语：\ntài yáng（  ）', answer: '太阳', hint: '天上那个发光的大圆球' },
    { id: 'c118', type: 'fill', difficulty: 'easy', q: '看拼音写词语：\nxué xiào（  ）', answer: '学校', hint: '你每天上学的地方' },
    { id: 'c119', type: 'choice', difficulty: 'easy', q: '选出量词：\n一（  ）鸟', options: ['只', '条', '个', '匹'], answer: 0, hint: '鸟用"只"' },
    { id: 'c120', type: 'choice', difficulty: 'easy', q: '选出量词：\n一（  ）牛', options: ['只', '头', '个', '条'], answer: 1, hint: '大型动物用"头"' },

    // --- 古诗 (一年级) ---
    { id: 'c121', type: 'fill', difficulty: 'easy', q: '古诗填空：\n《静夜思》——李白\n床前明月光，疑是地上（  ）。', answer: '霜', hint: '白色的，像霜一样' },
    { id: 'c122', type: 'fill', difficulty: 'easy', q: '古诗填空：\n《悯农》——李绅\n谁知盘中餐，粒粒皆（  ）。', answer: '辛苦', hint: '农民伯伯很辛苦' },
    { id: 'c123', type: 'fill', difficulty: 'easy', q: '古诗填空：\n《春晓》——孟浩然\n春眠不觉晓，处处闻啼（  ）。', answer: '鸟', hint: '早上听到什么在叫？' },
    { id: 'c124', type: 'fill', difficulty: 'easy', q: '古诗填空：\n《咏鹅》——骆宾王\n白毛浮绿水，红掌拨（  ）。', answer: '清波', hint: '鹅在水中游' },
    { id: 'c125', type: 'choice', difficulty: 'easy', q: '"举头望明月，低头思故乡"出自哪首诗？', options: ['《静夜思》', '《悯农》', '《春晓》', '《咏鹅》'], answer: 0, hint: '李白的静夜思' },

    // ========== 更多语文新题 ==========
    
    // --- 看拼音写汉字（续）---
    { id: 'c126', type: 'fill', difficulty: 'easy', q: '看拼音写汉字：\nbāng zhù（  ）', answer: '帮助', hint: '"帮"是巾字底，"助"是力字旁' },
    { id: 'c127', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nyǒng gǎn（  ）', answer: '勇敢', hint: '"勇"下面是力' },
    { id: 'c128', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\ncōng ming（  ）', answer: '聪明', hint: '"聪"耳字旁，耳聪目明' },
    { id: 'c129', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nzhěng qí（  ）', answer: '整齐', hint: '"整"上面是敕' },
    { id: 'c130', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nwēn nuǎn（  ）', answer: '温暖', hint: '"暖"日字旁，有太阳才温暖' },
    { id: 'c131', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nān jìng（  ）', answer: '安静', hint: '"静"青字旁' },
    { id: 'c132', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nxīn xiān（  ）', answer: '新鲜', hint: '"鲜"鱼+羊' },
    { id: 'c133', type: 'fill', difficulty: 'hard', q: '看拼音写汉字：\nrè nao（  ）', answer: '热闹', hint: '"闹"门字框，里面是市' },
    { id: 'c134', type: 'fill', difficulty: 'hard', q: '看拼音写汉字：\npú tao（  ）', answer: '葡萄', hint: '都是艹字头' },
    { id: 'c135', type: 'fill', difficulty: 'hard', q: '看拼音写汉字：\nwǔ dǎo（  ）', answer: '舞蹈', hint: '"舞"中间有四竖' },
    { id: 'c136', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\nchì bǎng（  ）', answer: '翅膀', hint: '"翅"支字旁，"膀"月字旁' },
    { id: 'c137', type: 'fill', difficulty: 'hard', q: '看拼音写汉字：\nyóu xì（  ）', answer: '游戏', hint: '"游"右边不是反文旁' },
    { id: 'c138', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\ntǎo yàn（  ）', answer: '讨厌', hint: '"厌"厂字头' },
    { id: 'c139', type: 'fill', difficulty: 'hard', q: '看拼音写汉字：\nmó gu（  ）', answer: '蘑菇', hint: '都是艹字头' },
    { id: 'c140', type: 'fill', difficulty: 'medium', q: '看拼音写汉字：\njiǎn chá（  ）', answer: '检查', hint: '"检"木字旁，"查"木字头' },

    // --- 更多词语搭配 ---
    { id: 'c141', type: 'choice', difficulty: 'easy', q: '选出正确的搭配：\n茂密的（  ）', options: ['森林', '马路', '天空', '大海'], answer: 0, hint: '树木茂密' },
    { id: 'c142', type: 'choice', difficulty: 'easy', q: '选出正确的搭配：\n认真地（  ）', options: ['玩耍', '思考', '睡觉', '跑步'], answer: 1, hint: '认真思考' },
    { id: 'c143', type: 'choice', difficulty: 'easy', q: '选出正确的搭配：\n鲜艳的（  ）', options: ['石头', '花朵', '桌子', '书本'], answer: 1, hint: '花朵颜色鲜艳' },
    { id: 'c144', type: 'choice', difficulty: 'medium', q: '选出错误的搭配：', options: ['明亮的月光', '温暖的春风', '寒冷的太阳', '清新的空气'], answer: 2, hint: '太阳不是寒冷的' },
    { id: 'c145', type: 'choice', difficulty: 'easy', q: '选出量词：一（  ）马', options: ['只', '匹', '头', '条'], answer: 1, hint: '马用"匹"' },
    { id: 'c146', type: 'choice', difficulty: 'easy', q: '选出量词：一（  ）微风', options: ['个', '阵', '块', '片'], answer: 1, hint: '风用"阵"' },
    { id: 'c147', type: 'choice', difficulty: 'medium', q: '"激烈"的近义词是：', options: ['安静', '猛烈', '温柔', '缓慢'], answer: 1, hint: '激烈和猛烈意思相近' },
    { id: 'c148', type: 'choice', difficulty: 'medium', q: '"和蔼"的近义词是：', options: ['凶恶', '亲切', '冷淡', '严肃'], answer: 1, hint: '和蔼和亲切意思相近' },
    { id: 'c149', type: 'choice', difficulty: 'medium', q: '"著名"的近义词是：', options: ['普通', '有名', '无名', '平凡'], answer: 1, hint: '著名=有名' },
    { id: 'c150', type: 'choice', difficulty: 'hard', q: '下列哪个词是"一片"不能搭配的？', options: ['一片树叶', '一片心意', '一片喜悦', '一片书包'], answer: 3, hint: '书包不能说一片' },
    { id: 'c151', type: 'choice', difficulty: 'medium', q: '"叮嘱"和"嘱咐"的关系是：', options: ['反义词', '近义词', '没有关系', '同音词'], answer: 1, hint: '叮嘱=嘱咐，都表示反复告诉' },
    { id: 'c152', type: 'fill', difficulty: 'medium', q: '在括号里填上合适的词：\n（  ）地奔跑', answer: '飞快', hint: '答案不唯一：飞快/快速/快乐等均可' },

    // --- 更多古诗 ---
    { id: 'c153', type: 'fill', difficulty: 'easy', q: '古诗填空：\n《登鹳雀楼》——王之涣\n白日依山尽，黄河入（  ）流。', answer: '海', hint: '大海' },
    { id: 'c154', type: 'fill', difficulty: 'medium', q: '古诗填空：\n《登鹳雀楼》——王之涣\n欲穷千里目，更上一（  ）楼。', answer: '层', hint: '再上一层的层' },
    { id: 'c155', type: 'fill', difficulty: 'medium', q: '古诗填空：\n《望庐山瀑布》——李白\n飞流直下三千尺，疑是银河落（  ）天。', answer: '九', hint: '九天' },
    { id: 'c156', type: 'recall', difficulty: 'medium', q: '古诗默写：\n《草》——白居易\n请写出前两句：\n离离原上草，□□□□□。', answer: '一岁一枯荣', hint: '一年一次枯萎和茂盛' },
    { id: 'c157', type: 'recall', difficulty: 'medium', q: '古诗默写：\n《草》——白居易\n请写出后两句：\n野火烧不尽，□□□□□。', answer: '春风吹又生', hint: '春天来了又长出来' },
    { id: 'c158', type: 'fill', difficulty: 'medium', q: '古诗填空：\n《村居》——高鼎\n草长莺飞二月天，拂堤杨柳醉（  ）烟。', answer: '春', hint: '春天的烟' },
    { id: 'c159', type: 'fill', difficulty: 'medium', q: '古诗填空：\n《村居》——高鼎\n儿童散学归来早，忙趁东风放纸（  ）。', answer: '鸢', hint: '风筝的别称' },
    { id: 'c160', type: 'fill', difficulty: 'hard', q: '古诗填空：\n《饮湖上初晴后雨》——苏轼\n水光潋滟晴方好，山色空蒙雨亦（  ）。', answer: '奇', hint: '奇特、奇妙' },
    { id: 'c161', type: 'fill', difficulty: 'hard', q: '古诗填空：\n《饮湖上初晴后雨》——苏轼\n欲把西湖比西子，淡妆浓抹总（  ）宜。', answer: '相', hint: '都合适' },
    { id: 'c162', type: 'recall', difficulty: 'hard', q: '古诗默写：\n《望洞庭》——刘禹锡\n遥望洞庭山水翠，□□□□□□□。', answer: '白银盘里一青螺', hint: '像是白银盘子里放了一颗青螺' },
    { id: 'c163', type: 'fill', difficulty: 'hard', q: '古诗填空：\n《早发白帝城》——李白\n朝辞白帝彩云间，千里江陵一（  ）还。', answer: '日', hint: '一天就回来了' },
    { id: 'c164', type: 'fill', difficulty: 'hard', q: '古诗填空：\n《早发白帝城》——李白\n两岸猿声啼不住，轻舟已过（  ）重山。', answer: '万', hint: '很多座山' },
    { id: 'c165', type: 'choice', difficulty: 'medium', q: '"疑是银河落九天"中"疑"的意思是：', options: ['怀疑', '好像', '问题', '疑问'], answer: 1, hint: '好像是银河从天上落下来' },
    { id: 'c166', type: 'choice', difficulty: 'medium', q: '下面哪首是李白写的诗？', options: ['《望庐山瀑布》', '《悯农》', '《村居》', '《草》'], answer: 0, hint: '李白写了望庐山瀑布' },
    { id: 'c167', type: 'choice', difficulty: 'easy', q: '《悯农》的作者是：', options: ['李白', '杜甫', '李绅', '白居易'], answer: 2, hint: '谁知盘中餐，粒粒皆辛苦的作者' },
    { id: 'c168', type: 'choice', difficulty: 'medium', q: '"更上一层楼"告诉我们什么道理？', options: ['要多爬楼梯', '要不断进步', '楼房越高越好', '要住在高层'], answer: 1, hint: '比喻不断追求进步' },
    { id: 'c169', type: 'fill', difficulty: 'medium', q: '古诗填空：\n《采莲曲》——王昌龄\n荷叶罗裙一色裁，芙蓉向脸（  ）边开。', answer: '两', hint: '两边' },
    { id: 'c170', type: 'choice', difficulty: 'hard', q: '"接天莲叶无穷碧，映日荷花别样红"描写的是哪个季节？', options: ['春天', '夏天', '秋天', '冬天'], answer: 1, hint: '荷花夏天开放' },

    // --- 更多词语听写 ---
    { id: 'c171', type: 'fill', difficulty: 'easy', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '帮助', speak: '帮助', hint: '伸出援手' },
    { id: 'c172', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '勇敢', speak: '勇敢', hint: '不怕困难' },
    { id: 'c173', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '聪明', speak: '聪明', hint: '头脑灵活' },
    { id: 'c174', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '整齐', speak: '整齐', hint: '不乱，很规整' },
    { id: 'c175', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '新鲜', speak: '新鲜', hint: '刚摘的，很新' },
    { id: 'c176', type: 'fill', difficulty: 'medium', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '葡萄', speak: '葡萄', hint: '一种水果，一串一串的' },
    { id: 'c177', type: 'fill', difficulty: 'hard', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '翅膀', speak: '翅膀', hint: '小鸟用来飞的' },
    { id: 'c178', type: 'fill', difficulty: 'hard', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '舞蹈', speak: '舞蹈', hint: '跳舞' },
    { id: 'c179', type: 'fill', difficulty: 'hard', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '游戏', speak: '游戏', hint: '小朋友爱玩的' },
    { id: 'c180', type: 'fill', difficulty: 'hard', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '蘑菇', speak: '蘑菇', hint: '像小伞一样的食物' },
    { id: 'c181', type: 'fill', difficulty: 'hard', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '检查', speak: '检查', hint: '仔细看看有没有错' },
    { id: 'c182', type: 'fill', difficulty: 'hard', q: '🔊 词语听写：（点击"听词语"按钮，听后写下来）', answer: '讨厌', speak: '讨厌', hint: '不喜欢' },

    // --- 阅读理解新篇 ---
    { id: 'c183', type: 'choice', difficulty: 'medium', q: '阅读短文：\n小蚂蚁发现了一块面包屑，它搬不动，就回去叫来了许多小伙伴。大家齐心协力，终于把面包屑搬回了家。\n小蚂蚁为什么回去叫小伙伴？', options: ['因为它搬不动', '因为它不想搬', '因为它迷路了', '因为它受伤了'], answer: 0, hint: '搬不动才叫帮手' },
    { id: 'c184', type: 'choice', difficulty: 'medium', q: '（接上题）小蚂蚁们用什么方法搬动了面包屑？', options: ['一个人使劲搬', '齐心协力一起搬', '用工具搬', '放弃不搬'], answer: 1, hint: '大家齐心合力' },
    { id: 'c185', type: 'choice', difficulty: 'medium', q: '（接上题）这个故事告诉我们什么道理？', options: ['面包屑很好吃', '蚂蚁会迷路', '团结力量大', '面包很重'], answer: 2, hint: '团结就是力量' },
    { id: 'c186', type: 'choice', difficulty: 'medium', q: '阅读短文：\n春风轻轻地吹，小草从土里探出头来。花儿开了，有红的、黄的、紫的，像给大地铺上了彩色的地毯。\n短文中描写的是什么季节？', options: ['春天', '夏天', '秋天', '冬天'], answer: 0, hint: '春风、小草探出头' },
    { id: 'c187', type: 'choice', difficulty: 'medium', q: '（接上题）文中提到的花有什么颜色？', options: ['只有红色', '只有黄色', '红、黄、紫', '红、蓝、绿'], answer: 2, hint: '文中说了三种颜色' },
    { id: 'c188', type: 'choice', difficulty: 'medium', q: '阅读短文：\n放学了，天空突然下起了大雨。小丽没有带伞，正着急的时候，老师把自己的伞递给了她。小丽感动地说："谢谢老师！"\n小丽为什么着急？', options: ['作业没写完', '没带伞下雨了', '找不到书包', '忘记回家了'], answer: 1, hint: '下雨没带伞' },
    { id: 'c189', type: 'choice', difficulty: 'medium', q: '（接上题）老师是怎么做的？', options: ['批评小丽', '不管小丽', '把自己的伞给了小丽', '叫小丽等雨停'], answer: 2, hint: '老师把伞递给了她' },
    { id: 'c190', type: 'choice', difficulty: 'medium', q: '（接上题）这个故事表现了老师的什么品质？', options: ['严厉', '关心学生', '粗心', '自私'], answer: 1, hint: '关心爱护学生' },
    { id: 'c191', type: 'choice', difficulty: 'medium', q: '阅读短文：\n蒲公英妈妈准备了降落伞，把它送给自己的娃娃。只要有风轻轻吹过，孩子们就乘着风纷纷出发。\n"降落伞"在文中指的是什么？', options: ['真正的降落伞', '蒲公英的种子', '树叶', '花朵'], answer: 1, hint: '蒲公英的种子像降落伞' },
    { id: 'c192', type: 'choice', difficulty: 'medium', q: '（接上题）蒲公英的孩子是怎样出发的？', options: ['自己走路', '被风吹走', '被人带走', '被鸟叼走'], answer: 1, hint: '乘着风纷纷出发' },
    { id: 'c193', type: 'choice', difficulty: 'medium', q: '阅读短文：\n我家有一只小花狗，它全身白白的，只有耳朵是黑色的。它很聪明，会帮我看家，还会和我一起玩球。\n小狗全身是什么颜色？', options: ['全是黑的', '全是白的', '白色，耳朵黑色', '黑白相间'], answer: 2, hint: '全身白白的，耳朵黑色' },
    { id: 'c194', type: 'choice', difficulty: 'easy', q: '（接上题）小狗会做什么？', options: ['只会睡觉', '看家和玩球', '只会吃饭', '什么都不做'], answer: 1, hint: '会看家，会玩球' },
    { id: 'c195', type: 'choice', difficulty: 'medium', q: '（接上题）作者对小狗的态度是：', options: ['讨厌', '害怕', '喜欢', '无所谓'], answer: 2, hint: '作者觉得它聪明可爱' },

    // --- 更多成语 ---
    { id: 'c196', type: 'choice', difficulty: 'easy', q: '"守株待兔"告诉我们什么道理？', options: ['要勤劳等待', '不要存侥幸心理', '兔子很笨', '要多种树'], answer: 1, hint: '不能指望不劳而获' },
    { id: 'c197', type: 'choice', difficulty: 'medium', q: '"拔苗助长"告诉我们什么道理？', options: ['苗要多拔', '做事不能急于求成', '苗长得快好', '要多浇水'], answer: 1, hint: '违反规律反而坏事' },
    { id: 'c198', type: 'choice', difficulty: 'medium', q: '"对牛弹琴"比喻什么？', options: ['牛喜欢音乐', '说话不看对象', '弹琴很好听', '牛很聪明'], answer: 1, hint: '对不懂的人讲道理白费口舌' },
    { id: 'c199', type: 'choice', difficulty: 'medium', q: '"井底之蛙"比喻什么样的人？', options: ['勇敢的人', '目光短浅的人', '聪明的人', '勤劳的人'], answer: 1, hint: '只看到天空一小块' },
    { id: 'c200', type: 'choice', difficulty: 'medium', q: '"狐假虎威"中狐狸靠什么吓走了百兽？', options: ['自己的本事', '老虎的威风', '狐狸的智慧', '运气好'], answer: 1, hint: '借着老虎的威风' },
    { id: 'c201', type: 'choice', difficulty: 'medium', q: '"叶公好龙"告诉我们什么？', options: ['龙很可怕', '表面喜欢实际害怕', '叶公是好人', '要多养龙'], answer: 1, hint: '嘴上说喜欢，实际害怕' },
    { id: 'c202', type: 'choice', difficulty: 'hard', q: '"刻舟求剑"中那个人错在哪里？', options: ['不该带剑', '不该坐船', '不懂事情在变化', '不该做记号'], answer: 2, hint: '船在动，剑不会跟着走' },
    { id: 'c203', type: 'fill', difficulty: 'medium', q: '补充成语：\n一（  ）千里', answer: '泻', hint: '形容水流很快，一泻千里' },
    { id: 'c204', type: 'fill', difficulty: 'medium', q: '补充成语：\n狐（  ）虎威', answer: '假', hint: '借着别人的威风' },
    { id: 'c205', type: 'fill', difficulty: 'medium', q: '补充成语：\n闻鸡起（  ）', answer: '舞', hint: '听到鸡叫就起来练武' },
    { id: 'c206', type: 'fill', difficulty: 'medium', q: '补充成语：\n（  ）到成功', answer: '马', hint: '马年祝福语' },
    { id: 'c207', type: 'fill', difficulty: 'medium', q: '补充成语：\n专心致（  ）', answer: '志', hint: '注意力非常集中' },
    { id: 'c208', type: 'fill', difficulty: 'medium', q: '补充成语：\n（  ）精会神', answer: '聚', hint: '和"专心致志"意思相近' },
    { id: 'c209', type: 'choice', difficulty: 'medium', q: '"聚精会神"的近义成语是：', options: ['三心二意', '全神贯注', '东张西望', '心不在焉'], answer: 1, hint: '都是注意力集中的意思' },
    { id: 'c210', type: 'choice', difficulty: 'hard', q: '"一丝不苟"的反义成语是：', options: ['粗心大意', '小心翼翼', '认认真真', '仔仔细细'], answer: 0, hint: '一丝不苟=非常认真，反义=粗心' },

    // --- 更多句子练习 ---
    { id: 'c211', type: 'choice', difficulty: 'easy', q: '"谦虚"的反义词是：', options: ['虚心', '骄傲', '诚实', '善良'], answer: 1, hint: '谦虚的反面' },
    { id: 'c212', type: 'choice', difficulty: 'easy', q: '"黑暗"的反义词是：', options: ['明亮', '黑色', '夜晚', '阴暗'], answer: 0, hint: '黑暗的反面是光明/明亮' },
    { id: 'c213', type: 'choice', difficulty: 'medium', q: '"模糊"的反义词是：', options: ['糊涂', '清晰', '迷糊', '朦胧'], answer: 1, hint: '看得清就是清晰' },
    { id: 'c214', type: 'choice', difficulty: 'medium', q: '"珍贵"的近义词是：', options: ['便宜', '宝贵', '普通', '平常'], answer: 1, hint: '珍贵=宝贵' },
    { id: 'c215', type: 'choice', difficulty: 'medium', q: '"立刻"的近义词是：', options: ['慢慢', '马上', '已经', '后来'], answer: 1, hint: '立刻=马上' },
    { id: 'c216', type: 'choice', difficulty: 'medium', q: '"仿佛"的近义词是：', options: ['好像', '不同', '真实', '确实'], answer: 0, hint: '仿佛=好像' },
    { id: 'c217', type: 'fill', difficulty: 'medium', q: '扩句（加上合适的词语）：\n小鸟飞。→ 小鸟（  ）地飞。', answer: '自由', hint: '答案不唯一：自由/快乐/高高/快速等' },
    { id: 'c218', type: 'fill', difficulty: 'medium', q: '缩句：\n美丽的蝴蝶在花丛中快乐地飞舞。→（  ）飞舞。', answer: '蝴蝶', hint: '去掉修饰词，留下主干' },
    { id: 'c219', type: 'fill', difficulty: 'medium', q: '填入关联词：\n（  ）下雨了，（  ）我们不去公园了。', answer: '因为所以', hint: '因果关系' },
    { id: 'c220', type: 'fill', difficulty: 'medium', q: '填入关联词：\n（  ）他年纪小，（  ）做事很认真。', answer: '虽然但是', hint: '转折关系' },
    { id: 'c221', type: 'fill', difficulty: 'medium', q: '填入关联词：\n（  ）明天天气好，我们（  ）去爬山。', answer: '如果就', hint: '假设关系' },
    { id: 'c222', type: 'fill', difficulty: 'hard', q: '修改病句（写出正确句子）：\n我断定他可能生病了。', answer: '我断定他生病了。', hint: '"断定"和"可能"矛盾，去掉一个' },
    { id: 'c223', type: 'fill', difficulty: 'hard', q: '修改病句（写出正确句子）：\n我们要养成认真学习的好习惯。', answer: '我们要养成认真学习的好习惯。', hint: '这句话没有毛病哦！（送分题）' },
    { id: 'c224', type: 'choice', difficulty: 'medium', q: '把"春风把柳树吹绿了"改为被字句：', options: ['春风被柳树吹绿了', '柳树被春风吹绿了', '柳树把春风吹绿了', '春风吹绿了柳树'], answer: 1, hint: '什么被什么怎么样了' },
    { id: 'c225', type: 'choice', difficulty: 'medium', q: '选出不是比喻句的一项：', options: ['月亮像小船', '他长得像爸爸', '星星像眼睛', '白云像棉花糖'], answer: 1, hint: '"像爸爸"是同类比较，不是比喻' },

    // --- 多音字/形近字/综合 ---
    { id: 'c226', type: 'choice', difficulty: 'hard', q: '"朝"在"朝代"中读：', options: ['zhāo', 'cháo', 'zhǎo', 'chāo'], answer: 1, hint: '朝代读cháo' },
    { id: 'c227', type: 'choice', difficulty: 'hard', q: '"重"在"重要"中读：', options: ['chóng', 'zhòng', 'cóng', 'zòng'], answer: 1, hint: '重要读zhòng' },
    { id: 'c228', type: 'choice', difficulty: 'hard', q: '"都"在"首都"中读：', options: ['dōu', 'dū', 'dǔ', 'dú'], answer: 1, hint: '首都读dū' },
    { id: 'c229', type: 'choice', difficulty: 'medium', q: '"好"在"好奇"中读：', options: ['hǎo', 'hào', 'hāo', 'háo'], answer: 1, hint: '好奇读hào' },
    { id: 'c230', type: 'choice', difficulty: 'medium', q: '选出正确的字：\n眼（  ）', options: ['睛', '晴', '情', '静'], answer: 0, hint: '眼睛是目字旁' },
    { id: 'c231', type: 'choice', difficulty: 'medium', q: '选出正确的字：\n天（  ）', options: ['睛', '晴', '情', '静'], answer: 1, hint: '晴天是日字旁' },
    { id: 'c232', type: 'choice', difficulty: 'medium', q: '选出正确的字：\n（  ）水', options: ['晴', '清', '情', '睛'], answer: 1, hint: '清水是三点水旁' },
    { id: 'c233', type: 'choice', difficulty: 'hard', q: '选出正确的字：\n吃（  ）了', options: ['饱', '抱', '泡', '跑'], answer: 0, hint: '吃饱是食字旁' },
    { id: 'c234', type: 'choice', difficulty: 'medium', q: '下列句子用了什么修辞手法？\n"太阳像个大火球。"', options: ['比喻', '拟人', '夸张', '排比'], answer: 0, hint: '有"像"，把太阳比作火球' },
    { id: 'c235', type: 'choice', difficulty: 'medium', q: '下列句子用了什么修辞手法？\n"小鸟在枝头唱歌。"', options: ['比喻', '拟人', '夸张', '排比'], answer: 1, hint: '小鸟不会唱歌，是拟人' },
    { id: 'c236', type: 'choice', difficulty: 'hard', q: '下列句子用了什么修辞手法？\n"飞流直下三千尺。"', options: ['比喻', '拟人', '夸张', '排比'], answer: 2, hint: '三千尺是夸张说法' },
    { id: 'c237', type: 'choice', difficulty: 'medium', q: '把下面的句子排成一段通顺的话：\n① 我连忙站起来让座\n② 一位老奶奶上了车\n③ 老奶奶夸我是好孩子\n④ 车上人很多', options: ['④②①③', '②④①③', '①③④②', '②①④③'], answer: 0, hint: '先交代背景→人物出场→我的行动→结果' },
    { id: 'c238', type: 'choice', difficulty: 'medium', q: '"森"字用部首查字法，应查哪个部首？', options: ['木', '林', '森', '一'], answer: 0, hint: '部首是木' },
    { id: 'c239', type: 'choice', difficulty: 'medium', q: '选择正确的标点：\n老师说___"明天记得带课本___"', options: ['： 。', '， 。', '： ！', '。 ！'], answer: 0, hint: '说话用冒号引号，陈述句用句号' },
    { id: 'c240', type: 'choice', difficulty: 'medium', q: '选择正确的标点：\n书上有字___画___还有照片___', options: ['、 、 。', '， ， 。', '、 ， 。', '， 、 。'], answer: 0, hint: '并列词语之间用顿号' },
    { id: 'c241', type: 'choice', difficulty: 'hard', q: '下列哪句话表达最得体？', options: ['喂，让开！', '你走开让我过去。', '对不起，请让一下好吗？', '快让开，听到没？'], answer: 2, hint: '用礼貌用语' },
    { id: 'c242', type: 'choice', difficulty: 'medium', q: '"忐忑不安"中"忐忑"两个字有什么特点？', options: ['都是上下结构', '心上上下下', '都是木字旁', '都是口字旁'], answer: 1, hint: '忐=上+心，忑=下+心，形容心上下不安' },
    { id: 'c243', type: 'fill', difficulty: 'hard', q: '仿写句子：\n例：时间就是生命。\n时间就是（  ）。', answer: '金钱', hint: '答案不唯一：金钱/速度/知识等' },
    { id: 'c244', type: 'choice', difficulty: 'hard', q: '《夜书所见》中"书"的意思是：', options: ['书本', '书写', '书信', '书法'], answer: 1, hint: '"书"在这里是"写"的意思' },
    { id: 'c245', type: 'choice', difficulty: 'hard', q: '选出完全正确的一组：', options: ['辩别 辩论', '辨别 辩论', '辨别 辩认', '辩别 辩认'], answer: 1, hint: '辨=分辨，辩=辩论' },
  ],

  math: [
    // --- 两位数乘一位数 ---
    { id: 'm001', type: 'fill', difficulty: 'easy', q: '计算：\n23 × 3 = ?', answer: '69', hint: '20×3=60，3×3=9，60+9=69' },
    { id: 'm002', type: 'fill', difficulty: 'easy', q: '计算：\n15 × 4 = ?', answer: '60', hint: '10×4=40，5×4=20，40+20=60' },
    { id: 'm003', type: 'fill', difficulty: 'easy', q: '计算：\n32 × 2 = ?', answer: '64', hint: '30×2=60，2×2=4，60+4=64' },
    { id: 'm004', type: 'fill', difficulty: 'medium', q: '计算：\n47 × 5 = ?', answer: '235', hint: '40×5=200，7×5=35，200+35=235' },
    { id: 'm005', type: 'fill', difficulty: 'medium', q: '计算：\n68 × 6 = ?', answer: '408', hint: '60×6=360，8×6=48，360+48=408' },
    { id: 'm006', type: 'fill', difficulty: 'hard', q: '计算：\n79 × 8 = ?', answer: '632', hint: '70×8=560，9×8=72，560+72=632' },
    { id: 'm007', type: 'fill', difficulty: 'medium', q: '计算：\n56 × 7 = ?', answer: '392', hint: '50×7=350，6×7=42，350+42=392' },
    { id: 'm008', type: 'choice', difficulty: 'easy', q: '25 × 4 = ?', options: ['90', '100', '110', '80'], answer: 1, hint: '25×4=100' },

    // --- 除法 ---
    { id: 'm009', type: 'fill', difficulty: 'easy', q: '计算：\n36 ÷ 4 = ?', answer: '9', hint: '四九三十六' },
    { id: 'm010', type: 'fill', difficulty: 'easy', q: '计算：\n48 ÷ 6 = ?', answer: '8', hint: '六八四十八' },
    { id: 'm011', type: 'fill', difficulty: 'medium', q: '计算：\n72 ÷ 8 = ?', answer: '9', hint: '八九七十二' },
    { id: 'm012', type: 'fill', difficulty: 'medium', q: '计算：\n85 ÷ 5 = ?', answer: '17', hint: '80÷5=16，5÷5=1，16+1=17' },
    { id: 'm013', type: 'fill', difficulty: 'medium', q: '计算：\n96 ÷ 4 = ?', answer: '24', hint: '80÷4=20，16÷4=4，20+4=24' },
    { id: 'm014', type: 'choice', difficulty: 'easy', q: '63 ÷ 9 = ?', options: ['6', '7', '8', '9'], answer: 1, hint: '七九六十三' },
    { id: 'm015', type: 'choice', difficulty: 'medium', q: '91 ÷ 7 = ?', options: ['11', '12', '13', '14'], answer: 2, hint: '7×13=91' },

    // --- 除法应用题 ---
    { id: 'm016', type: 'fill', difficulty: 'easy', q: '应用题：\n有24个苹果，平均分给4个小朋友，每人分到几个？', answer: '6', hint: '24÷4=6' },
    { id: 'm017', type: 'fill', difficulty: 'medium', q: '应用题：\n一本故事书有45页，小明每天看5页，几天能看完？', answer: '9', hint: '45÷5=9' },
    { id: 'm018', type: 'fill', difficulty: 'medium', q: '应用题：\n学校买了5箱粉笔，每箱12盒，一共买了多少盒？', answer: '60', hint: '12×5=60' },
    { id: 'm019', type: 'choice', difficulty: 'medium', q: '应用题：\n3个班去春游，每班36人，一共去了多少人？', options: ['108', '98', '118', '39'], answer: 0, hint: '36×3=108' },
    { id: 'm020', type: 'choice', difficulty: 'medium', q: '应用题：\n84元钱买7本同样的书，每本书多少钱？', options: ['11元', '12元', '13元', '14元'], answer: 1, hint: '84÷7=12' },

    // --- 时分秒 ---
    { id: 'm021', type: 'fill', difficulty: 'easy', q: '时间换算：\n3时 = （  ）分', answer: '180', hint: '1时=60分，3×60=180' },
    { id: 'm022', type: 'fill', difficulty: 'easy', q: '时间换算：\n2分 = （  ）秒', answer: '120', hint: '1分=60秒，2×60=120' },
    { id: 'm023', type: 'fill', difficulty: 'medium', q: '时间换算：\n240秒 = （  ）分', answer: '4', hint: '240÷60=4' },
    { id: 'm024', type: 'fill', difficulty: 'medium', q: '应用题：\n小红7:30从家出发，7:55到学校，路上用了多少分钟？', answer: '25', hint: '55-30=25分钟' },
    { id: 'm025', type: 'choice', difficulty: 'medium', q: '一节课40分钟，第一节课8:00开始，几点结束？', options: ['8:30', '8:40', '8:50', '9:00'], answer: 1, hint: '8:00+40分=8:40' },
    { id: 'm026', type: 'choice', difficulty: 'hard', q: '小明9:15开始做作业，做了35分钟，几点完成的？', options: ['9:40', '9:45', '9:50', '10:00'], answer: 2, hint: '15+35=50，所以9:50' },

    // --- 周长 ---
    { id: 'm027', type: 'fill', difficulty: 'easy', q: '计算周长：\n一个正方形边长是5厘米，周长是多少厘米？', answer: '20', hint: '正方形周长=边长×4，5×4=20' },
    { id: 'm028', type: 'fill', difficulty: 'easy', q: '计算周长：\n一个长方形长8厘米，宽3厘米，周长是多少厘米？', answer: '22', hint: '长方形周长=(长+宽)×2，(8+3)×2=22' },
    { id: 'm029', type: 'fill', difficulty: 'medium', q: '计算周长：\n一个正方形周长是36厘米，边长是多少厘米？', answer: '9', hint: '边长=周长÷4，36÷4=9' },
    { id: 'm030', type: 'choice', difficulty: 'medium', q: '一个长方形长10厘米，宽6厘米，周长是多少？', options: ['16厘米', '26厘米', '32厘米', '60厘米'], answer: 2, hint: '(10+6)×2=32' },
    { id: 'm031', type: 'choice', difficulty: 'hard', q: '用一根24厘米长的铁丝围成正方形，边长是多少？', options: ['4厘米', '6厘米', '8厘米', '12厘米'], answer: 1, hint: '24÷4=6' },

    // --- 分数初步 ---
    { id: 'm032', type: 'choice', difficulty: 'easy', q: '把一个蛋糕平均分成4份，每份是它的：', options: ['1/2', '1/3', '1/4', '1/5'], answer: 2, hint: '分成4份就是四分之一' },
    { id: 'm033', type: 'choice', difficulty: 'easy', q: '3/8 里面有几个 1/8？', options: ['3个', '8个', '5个', '1个'], answer: 0, hint: '分子是3就是3个' },
    { id: 'm034', type: 'fill', difficulty: 'medium', q: '比较大小（填 >、< 或 =）：\n1/3 （  ） 1/5', answer: '>', hint: '分母越小，分数越大' },
    { id: 'm035', type: 'fill', difficulty: 'medium', q: '比较大小（填 >、< 或 =）：\n2/7 （  ） 5/7', answer: '<', hint: '分母相同，分子小的分数小' },
    { id: 'm036', type: 'choice', difficulty: 'medium', q: '1/4 + 2/4 = ?', options: ['3/4', '3/8', '1/2', '2/4'], answer: 0, hint: '分母不变，分子相加：1+2=3' },
    { id: 'm037', type: 'choice', difficulty: 'hard', q: '5/9 - 2/9 = ?', options: ['3/9', '3/0', '7/9', '3/18'], answer: 0, hint: '分母不变，分子相减：5-2=3' },

    // --- 混合运算 ---
    { id: 'm038', type: 'fill', difficulty: 'medium', q: '计算：\n45 + 15 × 3 = ?', answer: '90', hint: '先算乘法：15×3=45，再算45+45=90' },
    { id: 'm039', type: 'fill', difficulty: 'medium', q: '计算：\n(36 + 14) ÷ 5 = ?', answer: '10', hint: '先算括号：36+14=50，再算50÷5=10' },
    { id: 'm040', type: 'fill', difficulty: 'hard', q: '计算：\n100 - 48 ÷ 6 = ?', answer: '92', hint: '先算除法：48÷6=8，再算100-8=92' },
    { id: 'm041', type: 'choice', difficulty: 'medium', q: '12 + 8 × 5 = ?', options: ['52', '100', '60', '68'], answer: 0, hint: '先乘后加：8×5=40，12+40=52' },

    // --- 启发思维 ---
    { id: 'm042', type: 'fill', difficulty: 'hard', q: '思维题：\n找规律填数：2, 5, 8, 11, （  ）', answer: '14', hint: '每次加3' },
    { id: 'm043', type: 'fill', difficulty: 'hard', q: '思维题：\n一根绳子对折后再对折，量了一下是3米，这根绳子原来长多少米？', answer: '12', hint: '对折两次变成4段，3×4=12' },
    { id: 'm044', type: 'choice', difficulty: 'hard', q: '思维题：\n小明比小红大3岁，5年后小明比小红大几岁？', options: ['3岁', '5岁', '8岁', '2岁'], answer: 0, hint: '年龄差不变' },
    { id: 'm045', type: 'fill', difficulty: 'hard', q: '思维题：\n□ + □ + ○ = 17\n□ + ○ = 12\n□ = （  ）', answer: '5', hint: '两个□+一个○=17，一个□+一个○=12，所以一个□=17-12=5' },

    // --- 基础计算 ---
    { id: 'm046', type: 'fill', difficulty: 'easy', q: '计算：\n120 + 380 = ?', answer: '500', hint: '120+380=500' },
    { id: 'm047', type: 'fill', difficulty: 'easy', q: '计算：\n1000 - 365 = ?', answer: '635', hint: '1000-365=635' },
    { id: 'm048', type: 'fill', difficulty: 'medium', q: '计算：\n304 × 2 = ?', answer: '608', hint: '300×2=600，4×2=8，600+8=608' },
    { id: 'm049', type: 'choice', difficulty: 'medium', q: '350 + 280 = ?', options: ['530', '630', '620', '580'], answer: 1, hint: '350+280=630' },
    { id: 'm050', type: 'choice', difficulty: 'easy', q: '下面哪个数最接近500？', options: ['488', '512', '496', '508'], answer: 2, hint: '496和500差4，最小' },

    // --- 应用题（更多）---
    { id: 'm051', type: 'fill', difficulty: 'easy', q: '应用题：\n操场上有男生18人，女生24人，一共有多少人在操场上？', answer: '42', hint: '18+24=42' },
    { id: 'm052', type: 'fill', difficulty: 'easy', q: '应用题：\n一包糖有36颗，分给6个小朋友，每人分到几颗？', answer: '6', hint: '36÷6=6' },
    { id: 'm053', type: 'fill', difficulty: 'medium', q: '应用题：\n书店新书到了，放在4个书架上，每个书架放25本，一共到了多少本新书？', answer: '100', hint: '4×25=100' },
    { id: 'm054', type: 'fill', difficulty: 'medium', q: '应用题：\n一根绳子长80米，第一次用去25米，第二次用去35米，还剩多少米？', answer: '20', hint: '80-25-35=20' },
    { id: 'm055', type: 'fill', difficulty: 'medium', q: '应用题：\n学校组织植树，三年级种了68棵，四年级比三年级多种15棵，四年级种了几棵？', answer: '83', hint: '68+15=83' },
    { id: 'm056', type: 'choice', difficulty: 'medium', q: '应用题：\n一箱苹果有30个，3箱有多少个苹果？', options: ['60个', '90个', '33个', '10个'], answer: 1, hint: '30×3=90' },
    { id: 'm057', type: 'choice', difficulty: 'medium', q: '应用题：\n妈妈买了4件衣服，每件85元，一共花了多少钱？', options: ['320元', '340元', '360元', '380元'], answer: 1, hint: '85×4=340' },
    { id: 'm058', type: 'choice', difficulty: 'hard', q: '应用题：\n三年级有4个班，每班有38人，全校三年级一共有多少人？', options: ['142人', '150人', '152人', '160人'], answer: 2, hint: '38×4=152' },
    { id: 'm059', type: 'fill', difficulty: 'hard', q: '应用题：\n一块长方形菜地，长12米，宽8米，围成这块菜地的篱笆长多少米？（求周长）', answer: '40', hint: '(12+8)×2=40米' },
    { id: 'm060', type: 'fill', difficulty: 'hard', q: '应用题：\n小红有100元，买了一本书35元，剩下的钱还能买几支7元的笔？（取整数）', answer: '9', hint: '100-35=65，65÷7=9余2，所以能买9支' },

    // ========== 一二年级数学复习 ==========
    // --- 20以内加减 ---
    { id: 'm101', type: 'fill', difficulty: 'easy', q: '计算：\n8 + 7 = ?', answer: '15', hint: '凑十法：8+2=10，10+5=15' },
    { id: 'm102', type: 'fill', difficulty: 'easy', q: '计算：\n13 - 5 = ?', answer: '8', hint: '13-3=10，10-2=8' },
    { id: 'm103', type: 'fill', difficulty: 'easy', q: '计算：\n9 + 6 = ?', answer: '15', hint: '9+1=10，10+5=15' },
    { id: 'm104', type: 'fill', difficulty: 'easy', q: '计算：\n17 - 9 = ?', answer: '8', hint: '17-7=10，10-2=8' },
    { id: 'm105', type: 'choice', difficulty: 'easy', q: '6 + 5 = ?', options: ['10', '11', '12', '9'], answer: 1, hint: '5+5=10，10+1=11' },

    // --- 100以内加减 ---
    { id: 'm106', type: 'fill', difficulty: 'easy', q: '计算：\n35 + 42 = ?', answer: '77', hint: '30+40=70，5+2=7，70+7=77' },
    { id: 'm107', type: 'fill', difficulty: 'easy', q: '计算：\n68 - 25 = ?', answer: '43', hint: '60-20=40，8-5=3，40+3=43' },
    { id: 'm108', type: 'fill', difficulty: 'medium', q: '计算：\n54 + 37 = ?', answer: '91', hint: '50+30=80，4+7=11，80+11=91' },
    { id: 'm109', type: 'fill', difficulty: 'medium', q: '计算：\n72 - 46 = ?', answer: '26', hint: '72-40=32，32-6=26' },
    { id: 'm110', type: 'choice', difficulty: 'medium', q: '43 + 29 = ?', options: ['62', '72', '52', '82'], answer: 1, hint: '43+30=73，73-1=72' },

    // --- 九九乘法表 ---
    { id: 'm111', type: 'fill', difficulty: 'easy', q: '乘法口诀：\n三七（  ）', answer: '二十一', hint: '3×7=21' },
    { id: 'm112', type: 'fill', difficulty: 'easy', q: '乘法口诀：\n四九（  ）', answer: '三十六', hint: '4×9=36' },
    { id: 'm113', type: 'fill', difficulty: 'easy', q: '计算：\n6 × 7 = ?', answer: '42', hint: '六七四十二' },
    { id: 'm114', type: 'fill', difficulty: 'easy', q: '计算：\n8 × 5 = ?', answer: '40', hint: '五八四十' },
    { id: 'm115', type: 'choice', difficulty: 'easy', q: '九九乘法表中，哪一句等于24？', options: ['四六二十四', '三八二十四', '以上都可以', '以上都不可以'], answer: 2, hint: '4×6=24，3×8=24，都对' },

    // --- 简单应用题 ---
    { id: 'm116', type: 'fill', difficulty: 'easy', q: '应用题：\n树上有12只小鸟，飞走了5只，还剩几只？', answer: '7', hint: '12-5=7' },
    { id: 'm117', type: 'fill', difficulty: 'easy', q: '应用题：\n妈妈买了8个苹果，又买了6个橘子，一共买了多少个水果？', answer: '14', hint: '8+6=14' },
    { id: 'm118', type: 'fill', difficulty: 'medium', q: '应用题：\n每个小朋友分4个糖果，5个小朋友需要多少个糖果？', answer: '20', hint: '4×5=20' },
    { id: 'm119', type: 'fill', difficulty: 'medium', q: '应用题：\n有30本练习本，平均分给6个同学，每人几本？', answer: '5', hint: '30÷6=5' },
    { id: 'm120', type: 'choice', difficulty: 'easy', q: '应用题：\n小明有9支铅笔，小红比小明多3支，小红有几支？', options: ['6支', '9支', '12支', '15支'], answer: 2, hint: '9+3=12' },

    // --- 图形与长度 ---
    { id: 'm121', type: 'choice', difficulty: 'easy', q: '从正面看一个长方体，看到的形状是：', options: ['圆形', '长方形', '三角形', '梯形'], answer: 1, hint: '长方体有6个面，都是长方形' },
    { id: 'm122', type: 'choice', difficulty: 'easy', q: '下面哪个是长度单位？', options: ['千克', '厘米', '小时', '元'], answer: 1, hint: '厘米是长度单位' },
    { id: 'm123', type: 'fill', difficulty: 'easy', q: '单位换算：\n1米 = （  ）厘米', answer: '100', hint: '1米=100厘米' },
    { id: 'm124', type: 'fill', difficulty: 'medium', q: '比100小，比98大的数是（  ）。', answer: '99', hint: '98和100中间的数' },
    { id: 'm125', type: 'choice', difficulty: 'medium', q: '下面哪个数是最大的？', options: ['78', '87', '80', '88'], answer: 3, hint: '88最大' },

    // ========== 更多数学新题 ==========

    // --- 更多口算 ---
    { id: 'm126', type: 'fill', difficulty: 'easy', q: '计算：\n125 + 275 = ?', answer: '400', hint: '125+275=400' },
    { id: 'm127', type: 'fill', difficulty: 'easy', q: '计算：\n650 - 280 = ?', answer: '370', hint: '650-280=370' },
    { id: 'm128', type: 'fill', difficulty: 'easy', q: '计算：\n45 × 4 = ?', answer: '180', hint: '40×4=160，5×4=20，160+20=180' },
    { id: 'm129', type: 'fill', difficulty: 'easy', q: '计算：\n96 ÷ 3 = ?', answer: '32', hint: '90÷3=30，6÷3=2，30+2=32' },
    { id: 'm130', type: 'choice', difficulty: 'easy', q: '17 × 5 = ?', options: ['75', '85', '95', '105'], answer: 1, hint: '10×5=50，7×5=35，50+35=85' },
    { id: 'm131', type: 'fill', difficulty: 'medium', q: '计算：\n208 × 3 = ?', answer: '624', hint: '200×3=600，8×3=24，600+24=624' },
    { id: 'm132', type: 'fill', difficulty: 'easy', q: '计算：\n720 ÷ 8 = ?', answer: '90', hint: '八九七十二，720÷8=90' },
    { id: 'm133', type: 'fill', difficulty: 'easy', q: '计算：\n515 + 385 = ?', answer: '900', hint: '500+300=800，15+85=100，800+100=900' },
    { id: 'm134', type: 'fill', difficulty: 'medium', q: '计算：\n1000 - 645 = ?', answer: '355', hint: '1000-600=400，400-45=355' },
    { id: 'm135', type: 'choice', difficulty: 'easy', q: '24 × 5 = ?', options: ['100', '110', '120', '130'], answer: 2, hint: '20×5=100，4×5=20，100+20=120' },
    { id: 'm136', type: 'fill', difficulty: 'medium', q: '计算：\n78 ÷ 6 = ?', answer: '13', hint: '60÷6=10，18÷6=3，10+3=13' },
    { id: 'm137', type: 'fill', difficulty: 'medium', q: '计算：\n35 × 4 = ?', answer: '140', hint: '30×4=120，5×4=20，120+20=140' },
    { id: 'm138', type: 'fill', difficulty: 'easy', q: '计算：\n225 + 175 = ?', answer: '400', hint: '200+100=300，25+75=100，300+100=400' },
    { id: 'm139', type: 'fill', difficulty: 'medium', q: '计算：\n408 ÷ 4 = ?', answer: '102', hint: '400÷4=100，8÷4=2，100+2=102' },
    { id: 'm140', type: 'fill', difficulty: 'hard', q: '计算：\n19 × 6 = ?', answer: '114', hint: '20×6=120，120-6=114' },
    { id: 'm141', type: 'fill', difficulty: 'medium', q: '计算：\n930 - 458 = ?', answer: '472', hint: '930-400=530，530-58=472' },
    { id: 'm142', type: 'fill', difficulty: 'medium', q: '计算：\n66 ÷ 3 = ?', answer: '22', hint: '60÷3=20，6÷3=2，20+2=22' },
    { id: 'm143', type: 'choice', difficulty: 'medium', q: '125 × 8 = ?', options: ['800', '900', '1000', '1100'], answer: 2, hint: '125×8=1000，巧算' },
    { id: 'm144', type: 'fill', difficulty: 'medium', q: '计算：\n504 ÷ 7 = ?', answer: '72', hint: '490÷7=70，14÷7=2，70+2=72' },
    { id: 'm145', type: 'choice', difficulty: 'hard', q: '13 × 15 = ?', options: ['185', '195', '205', '175'], answer: 1, hint: '10×15=150，3×15=45，150+45=195' },

    // --- 更多应用题 ---
    { id: 'm146', type: 'fill', difficulty: 'easy', q: '应用题：\n小明有45张邮票，送给朋友18张，还剩多少张？', answer: '27', hint: '45-18=27' },
    { id: 'm147', type: 'fill', difficulty: 'easy', q: '应用题：\n一箱苹果有28个，3箱苹果有多少个？', answer: '84', hint: '28×3=84' },
    { id: 'm148', type: 'fill', difficulty: 'medium', q: '应用题：\n教室里有6排桌子，每排8张，一共有多少张桌子？', answer: '48', hint: '6×8=48' },
    { id: 'm149', type: 'fill', difficulty: 'medium', q: '应用题：\n学校图书馆有360本书，平均放在4个书架上，每个书架放多少本？', answer: '90', hint: '360÷4=90' },
    { id: 'm150', type: 'fill', difficulty: 'medium', q: '应用题：\n同学们去植树，每行种15棵，种了8行，一共种了多少棵？', answer: '120', hint: '15×8=120' },
    { id: 'm151', type: 'fill', difficulty: 'medium', q: '应用题：\n小红今年9岁，妈妈的年龄是小红的4倍，妈妈今年多少岁？', answer: '36', hint: '9×4=36' },
    { id: 'm152', type: 'fill', difficulty: 'medium', q: '应用题：\n小明从家到学校要走15分钟，他7:40从家出发，几点到达学校？', answer: '7:55', hint: '40+15=55分，所以7:55' },
    { id: 'm153', type: 'fill', difficulty: 'medium', q: '应用题：\n一支笔3元，小华买了8支笔，付了50元，应找回多少元？', answer: '26', hint: '8×3=24，50-24=26' },
    { id: 'm154', type: 'fill', difficulty: 'medium', q: '应用题：\n一袋饼干5元钱，妈妈给了40元，可以买几袋？', answer: '8', hint: '40÷5=8' },
    { id: 'm155', type: 'fill', difficulty: 'medium', q: '应用题：\n三年级有男生56人，女生48人，一共多少人？平均分成4个班，每班几人？', answer: '104|26', hint: '先算总人数56+48=104，再算每班104÷4=26', multiLine: true },
    { id: 'm156', type: 'fill', difficulty: 'hard', q: '应用题：\n水果店运来5箱苹果，每箱24千克，又运来3箱梨，每箱20千克。一共运来多少千克水果？', answer: '180', hint: '苹果5×24=120，梨3×20=60，120+60=180' },
    { id: 'm157', type: 'fill', difficulty: 'hard', q: '应用题：\n一根绳子长120米，第一次剪去35米，第二次剪去42米，还剩多少米？', answer: '43', hint: '120-35-42=43' },
    { id: 'm158', type: 'fill', difficulty: 'hard', q: '应用题：\n小红和小明共有90张卡片，小红比小明多10张，小红有多少张？', answer: '50', hint: '设小明x张，小红x+10，x+x+10=90，x=40，小红50张' },
    { id: 'm159', type: 'fill', difficulty: 'hard', q: '应用题：\n一条路长400米，每隔20米种一棵树（两端都种），一共种了多少棵树？', answer: '21', hint: '400÷20=20段，棵数=段数+1=21' },
    { id: 'm160', type: 'choice', difficulty: 'medium', q: '应用题：\n一辆大巴车可以坐45人，三年级有175人，至少需要几辆大巴车？', options: ['3辆', '4辆', '5辆', '6辆'], answer: 1, hint: '175÷45=3余40，所以需要4辆' },
    { id: 'm161', type: 'fill', difficulty: 'medium', q: '应用题：\n买3支钢笔花18元，买同样的5支钢笔需要多少钱？', answer: '30', hint: '18÷3=6元/支，6×5=30元' },
    { id: 'm162', type: 'choice', difficulty: 'medium', q: '应用题：\n小丽有2件上衣和3条裙子，每天穿一套，有几种不同的搭配？', options: ['5种', '6种', '3种', '2种'], answer: 1, hint: '2×3=6种搭配' },
    { id: 'm163', type: 'fill', difficulty: 'hard', q: '应用题：\n商店促销"买3送1"，每个本子2元，买12个本子需要多少钱？', answer: '18', hint: '买3送1=4个，12÷4=3组，每组花3×2=6元，6×3=18元' },
    { id: 'm164', type: 'choice', difficulty: 'hard', q: '应用题：\n一张桌子比一把椅子贵120元，桌子和椅子一共380元。桌子多少钱？（多选条件，直接算）', options: ['180元', '200元', '250元', '300元'], answer: 2, hint: '(380+120)÷2=250元，或者(380-120)÷2=130是椅子' },
    { id: 'm165', type: 'fill', difficulty: 'hard', q: '应用题：\n一本书，小明第一天看了28页，第二天看了32页，第三天从第几页开始看？', answer: '61', hint: '28+32=60页看完了，第三天从61页开始' },

    // --- 更多时间/年月日 ---
    { id: 'm166', type: 'fill', difficulty: 'easy', q: '填空：\n1年 = （  ）个月', answer: '12', hint: '一年有12个月' },
    { id: 'm167', type: 'fill', difficulty: 'easy', q: '填空：\n半年 = （  ）个月', answer: '6', hint: '12÷2=6' },
    { id: 'm168', type: 'fill', difficulty: 'easy', q: '填空：\n平年2月有（  ）天', answer: '28', hint: '平年28天，闰年29天' },
    { id: 'm169', type: 'fill', difficulty: 'easy', q: '填空：\n闰年2月有（  ）天', answer: '29', hint: '闰年比平年多1天' },
    { id: 'm170', type: 'choice', difficulty: 'easy', q: '一年中，大月（31天）有几个月？', options: ['5个', '6个', '7个', '8个'], answer: 2, hint: '1,3,5,7,8,10,12共7个大月' },
    { id: 'm171', type: 'fill', difficulty: 'medium', q: '时间换算：\n100分 = （  ）时（  ）分', answer: '1时40分', hint: '100÷60=1余40' },
    { id: 'm172', type: 'fill', difficulty: 'medium', q: '时间换算：\n90秒 = （  ）分（  ）秒', answer: '1分30秒', hint: '90÷60=1余30' },
    { id: 'm173', type: 'fill', difficulty: 'medium', q: '应用题：\n从8:15到9:00，经过了多长时间？', answer: '45分钟', hint: '8:15到9:00差45分钟' },
    { id: 'm174', type: 'choice', difficulty: 'medium', q: '2024年是闰年吗？', options: ['是', '不是', '不确定'], answer: 0, hint: '2024÷4=506整除' },
    { id: 'm175', type: 'fill', difficulty: 'medium', q: '应用题：\n小明每天早上7:20到校，中午11:40放学，上午在学校待了多长时间？', answer: '4小时20分钟', hint: '11:40-7:20=4小时20分' },
    { id: 'm176', type: 'choice', difficulty: 'medium', q: '晚上10时用24时记时法是：', options: ['10:00', '21:00', '22:00', '23:00'], answer: 2, hint: '10+12=22时' },
    { id: 'm177', type: 'fill', difficulty: 'medium', q: '下午3:30用24时记时法写作：', answer: '15:30', hint: '3+12=15时' },
    { id: 'm178', type: 'fill', difficulty: 'hard', q: '应用题：\n一部电影从14:30开始，到16:10结束，电影放了多长时间？', answer: '100分钟', hint: '16:10-14:30=1小时40分=100分钟' },
    { id: 'm179', type: 'choice', difficulty: 'medium', q: '2026年6月1日是星期一，6月30日是星期几？', options: ['星期一', '星期二', '星期六', '星期日'], answer: 1, hint: '29天后，29÷7=4...1，往后推1天=星期二' },
    { id: 'm180', type: 'choice', difficulty: 'hard', q: '下列说法正确的是：', options: ['每年都是365天', '闰年有366天', '2月总是28天', '每个月都是30天'], answer: 1, hint: '闰年366天' },

    // --- 更多分数 ---
    { id: 'm181', type: 'fill', difficulty: 'medium', q: '比较大小（填 >、< 或 =）：\n1/5 （  ） 1/3', answer: '<', hint: '分母大，分数小' },
    { id: 'm182', type: 'fill', difficulty: 'medium', q: '计算：\n3/8 + 5/8 = ?', answer: '1', hint: '3/8+5/8=8/8=1' },
    { id: 'm183', type: 'fill', difficulty: 'medium', q: '计算：\n7/10 - 3/10 = ?', answer: '2/5', hint: '(7-3)/10=4/10=2/5' },
    { id: 'm184', type: 'fill', difficulty: 'medium', q: '计算：\n2/9 + 5/9 = ?', answer: '7/9', hint: '(2+5)/9=7/9' },
    { id: 'm185', type: 'fill', difficulty: 'hard', q: '计算：\n1 - 3/8 = ?', answer: '5/8', hint: '1=8/8，8/8-3/8=5/8' },
    { id: 'm186', type: 'choice', difficulty: 'medium', q: '下面哪个分数最大？', options: ['1/2', '1/3', '1/4', '1/5'], answer: 0, hint: '分母越小，分数越大' },
    { id: 'm187', type: 'choice', difficulty: 'medium', q: '1/6 + 4/6 = ?', options: ['5/12', '5/6', '4/6', '1/2'], answer: 1, hint: '(1+4)/6=5/6' },
    { id: 'm188', type: 'choice', difficulty: 'hard', q: '5/9 - 2/9 = ?', options: ['3/0', '3/9', '7/9', '3/18'], answer: 1, hint: '(5-2)/9=3/9' },
    { id: 'm189', type: 'fill', difficulty: 'hard', q: '填空：\n把一个西瓜平均切成8块，吃了3块，吃了这个西瓜的（  ）。', answer: '3/8', hint: '吃了3块=3/8' },
    { id: 'm190', type: 'choice', difficulty: 'hard', q: '一杯果汁，喝了1/4，还剩几分之几？', options: ['1/4', '3/4', '2/4', '4/4'], answer: 1, hint: '1-1/4=3/4' },

    // --- 更多图形 ---
    { id: 'm191', type: 'fill', difficulty: 'easy', q: '计算周长：\n正方形边长7厘米，周长是多少？', answer: '28', hint: '7×4=28厘米' },
    { id: 'm192', type: 'fill', difficulty: 'medium', q: '计算周长：\n长方形长15厘米，宽8厘米，周长是多少？', answer: '46', hint: '(15+8)×2=46厘米' },
    { id: 'm193', type: 'fill', difficulty: 'medium', q: '一个正方形周长是48厘米，边长是多少？', answer: '12', hint: '48÷4=12厘米' },
    { id: 'm194', type: 'fill', difficulty: 'hard', q: '一个长方形周长是36厘米，长是12厘米，宽是多少？', answer: '6', hint: '36÷2=18，18-12=6厘米' },
    { id: 'm195', type: 'choice', difficulty: 'medium', q: '下面哪一组小棒能围成三角形？（小棒长度单位：厘米）', options: ['3,4,8', '5,5,10', '4,5,6', '2,3,6'], answer: 2, hint: '较短两边之和大于最长边' },
    { id: 'm196', type: 'choice', difficulty: 'medium', q: '下面哪个图形是轴对称图形？', options: ['平行四边形', '等腰三角形', '普通梯形', '不规则四边形'], answer: 1, hint: '等腰三角形有对称轴' },
    { id: 'm197', type: 'choice', difficulty: 'easy', q: '正方形有（  ）条对称轴。', options: ['1条', '2条', '3条', '4条'], answer: 3, hint: '正方形有4条对称轴' },
    { id: 'm198', type: 'choice', difficulty: 'easy', q: '长方形有（  ）条对称轴。', options: ['1条', '2条', '3条', '4条'], answer: 1, hint: '长方形有2条对称轴' },
    { id: 'm199', type: 'choice', difficulty: 'medium', q: '下面哪个现象是平移？', options: ['电梯上下', '风车转动', '钟摆摆动', '旋转木马'], answer: 0, hint: '平移=直线运动' },
    { id: 'm200', type: 'choice', difficulty: 'medium', q: '下面哪个现象是旋转？', options: ['推拉门', '升国旗', '电风扇转动', '人走路'], answer: 2, hint: '旋转=绕中心转动' },
    { id: 'm201', type: 'fill', difficulty: 'medium', q: '应用题：\n一面长方形镜子，长80厘米，宽50厘米，要给镜子做一圈边框，边框长多少厘米？', answer: '260', hint: '(80+50)×2=260厘米' },
    { id: 'm202', type: 'fill', difficulty: 'hard', q: '应用题：\n一个正方形花坛的周长是36米，沿花坛每3米种一棵树，需要几棵树？（四个角都种）', answer: '12', hint: '36÷3=12棵' },
    { id: 'm203', type: 'choice', difficulty: 'hard', q: '把两个边长4厘米的正方形拼成一个长方形，周长是多少？', options: ['24厘米', '32厘米', '28厘米', '20厘米'], answer: 0, hint: '拼成8×4长方形，周长(8+4)×2=24' },
    { id: 'm204', type: 'choice', difficulty: 'hard', q: '如图（想象）：一个大正方形里画了16个小正方形。数一数有多少个正方形？', options: ['16个', '20个', '26个', '30个'], answer: 3, hint: '1×1:16个, 2×2:9个, 3×3:4个, 4×4:1个=30个' },
    { id: 'm205', type: 'fill', difficulty: 'medium', q: '填空：\n边长为1厘米的正方形，面积是（  ）平方厘米。', answer: '1', hint: '1×1=1平方厘米' },

    // --- 更多思维拓展 ---
    { id: 'm206', type: 'fill', difficulty: 'medium', q: '找规律填数：\n1, 4, 9, 16, （  ）', answer: '25', hint: '1²=1, 2²=4, 3²=9, 4²=16, 5²=25' },
    { id: 'm207', type: 'fill', difficulty: 'medium', q: '找规律填数：\n3, 6, 12, 24, （  ）', answer: '48', hint: '每次×2' },
    { id: 'm208', type: 'fill', difficulty: 'hard', q: '找规律填数：\n1, 1, 2, 3, 5, （  ）', answer: '8', hint: '前两个相加=第三个，斐波那契' },
    { id: 'm209', type: 'fill', difficulty: 'hard', q: '思维题：\n△ + □ = 15\n△ - □ = 3\n△ = （  ）', answer: '9', hint: '(15+3)÷2=9' },
    { id: 'm210', type: 'fill', difficulty: 'hard', q: '思维题：\n○ + ○ + △ = 19\n○ + △ + △ = 23\n○ = （  ）', answer: '5', hint: '两式相加：3○+3△=42，○+△=14，代入第一式：○+14=19，○=5' },
    { id: 'm211', type: 'choice', difficulty: 'hard', q: '思维题：\n小兔子爬楼梯，从1楼到3楼用了6分钟，照这样计算，从1楼到6楼用几分钟？', options: ['12分钟', '15分钟', '10分钟', '18分钟'], answer: 1, hint: '1楼到3楼爬了2层，每层3分钟；1楼到6楼爬5层，5×3=15' },
    { id: 'm212', type: 'fill', difficulty: 'hard', q: '思维题：\n把一根木头锯成5段，每锯一次要3分钟，一共需要几分钟？', answer: '12', hint: '锯5段需要锯4次，4×3=12' },
    { id: 'm213', type: 'fill', difficulty: 'hard', q: '思维题：\n井深10米，蜗牛白天爬3米，晚上滑2米，第几天能爬到井口？', answer: '8', hint: '每天净爬1米，第7天到7米，第8天白天爬3米=10米到顶' },
    { id: 'm214', type: 'fill', difficulty: 'hard', q: '思维题：\n1个苹果和2个梨重800克，1个苹果和1个梨重550克，1个梨重多少克？', answer: '250', hint: '800-550=250克（一个梨的重量）' },
    { id: 'm215', type: 'choice', difficulty: 'hard', q: '思维题：\n甲、乙、丙三人中，一人是医生，一人是教师，一人是司机。甲比教师高，乙和教师不一样高，教师比丙矮。请问谁是教师？', options: ['甲', '乙', '丙', '无法判断'], answer: 2, hint: '甲和乙都不是教师，所以丙是教师' },
    { id: 'm216', type: 'fill', difficulty: 'hard', q: '思维题：\n在算式中填入+或-：\n5 □ 5 □ 5 □ 5 = 10', answer: '5+5+5-5=10', hint: '脑筋急转弯：5+5+5-5=10，答案不唯一' },
    { id: 'm217', type: 'choice', difficulty: 'hard', q: '思维题：\n妈妈今年35岁，小红今年7岁。几年后妈妈的年龄是小红的3倍？', options: ['5年', '6年', '7年', '8年'], answer: 2, hint: '设x年后，(35+x)÷(7+x)=3，35+x=21+3x，14=2x，x=7' },
    { id: 'm218', type: 'fill', difficulty: 'medium', q: '找规律填数：\n2, 4, 8, 14, （  ）', answer: '22', hint: '差：2,4,6,8，每次差+2' },
    { id: 'm219', type: 'choice', difficulty: 'medium', q: '思维题：\n一根绳子对折3次后，每段长4厘米，绳子原来长多少？', options: ['16厘米', '24厘米', '32厘米', '12厘米'], answer: 2, hint: '对折3次=8段，4×8=32厘米' },
    { id: 'm220', type: 'fill', difficulty: 'hard', q: '思维题：\n把1~6填入○中，使每条边三个数的和相等：（提示，每条边的和是12）\n答案不唯一，填写一个顶点填的数字即可。', answer: '1', hint: '三条边和相等=12，顶点可以是1/2/3' },

    // --- 更多单位换算/估算 ---
    { id: 'm221', type: 'fill', difficulty: 'easy', q: '单位换算：\n1千米 = （  ）米', answer: '1000', hint: '1km=1000m' },
    { id: 'm222', type: 'fill', difficulty: 'easy', q: '单位换算：\n3分米 = （  ）厘米', answer: '30', hint: '1dm=10cm，3×10=30' },
    { id: 'm223', type: 'fill', difficulty: 'medium', q: '单位换算：\n5吨 = （  ）千克', answer: '5000', hint: '1吨=1000千克' },
    { id: 'm224', type: 'fill', difficulty: 'medium', q: '单位换算：\n4000克 = （  ）千克', answer: '4', hint: '1000克=1千克' },
    { id: 'm225', type: 'choice', difficulty: 'medium', q: '一个苹果约重：', options: ['2克', '20克', '200克', '2千克'], answer: 2, hint: '一个苹果约200克' },
    { id: 'm226', type: 'choice', difficulty: 'medium', q: '一节课的时间约是：', options: ['4分钟', '40分钟', '4小时', '4秒'], answer: 1, hint: '一节课40分钟' },
    { id: 'm227', type: 'choice', difficulty: 'medium', q: '你的身高大约是：', options: ['14厘米', '14分米', '14米', '140分米'], answer: 1, hint: '14分米=140厘米，三年级身高约1.4米' },
    { id: 'm228', type: 'fill', difficulty: 'medium', q: '计算（带单位）：\n3米 + 40厘米 = （  ）厘米', answer: '340', hint: '3米=300厘米，300+40=340' },
    { id: 'm229', type: 'fill', difficulty: 'medium', q: '计算（带单位）：\n2吨 - 800千克 = （  ）千克', answer: '1200', hint: '2吨=2000千克，2000-800=1200' },
    { id: 'm230', type: 'choice', difficulty: 'medium', q: '估算：398+205的结果大约是多少？', options: ['500', '600', '700', '800'], answer: 1, hint: '398≈400，205≈200，400+200=600' },
    { id: 'm231', type: 'choice', difficulty: 'hard', q: '混合运算：\n125 × 4 ÷ 5 = ?', options: ['80', '100', '120', '150'], answer: 1, hint: '先×后÷：125×4=500，500÷5=100' },
    { id: 'm232', type: 'fill', difficulty: 'medium', q: '混合运算：\n(48 + 32) ÷ 8 = ?', answer: '10', hint: '先括号：48+32=80，80÷8=10' },
    { id: 'm233', type: 'fill', difficulty: 'hard', q: '混合运算：\n36 + 64 ÷ 8 × 3 = ?', answer: '60', hint: '先÷：64÷8=8，再×：8×3=24，再+：36+24=60' },
    { id: 'm234', type: 'choice', difficulty: 'medium', q: '在有余数的除法中，45 ÷ 8 的余数是：', options: ['3', '4', '5', '6'], answer: 2, hint: '8×5=40，45-40=5' },
    { id: 'm235', type: 'fill', difficulty: 'medium', q: '应用题：\n在有余数的除法中，除数最小是（  ），如果余数是7。', answer: '8', hint: '余数<除数，所以除数最小=8' },
    { id: 'm236', type: 'choice', difficulty: 'hard', q: '一个三位数，个位上的数字是最大的一位数，十位上的数字比个位小3，百位上的数字是十位的一半。这个数是：', options: ['369', '639', '396', '963'], answer: 0, hint: '个位9，十位6，百位3→369' },
    { id: 'm237', type: 'fill', difficulty: 'hard', q: '思维题：\n□ + □ + ○ = 19\n□ + ○ = 12\n□ = （  ）', answer: '7', hint: '两式相减：(2□+○)-(□+○)=19-12，所以□=7' },
    { id: 'm238', type: 'choice', difficulty: 'medium', q: '下列算式中，结果最大的是：', options: ['25×4', '125×2', '80×3', '50×5'], answer: 3, hint: '25×4=100，125×2=250，80×3=240，50×5=250=250' },
    { id: 'm239', type: 'fill', difficulty: 'hard', q: '在括号里填上合适的数字：\n4□8 × 3 ≈ 1500', answer: '9', hint: '498×3=1494≈1500' },
    { id: 'm240', type: 'choice', difficulty: 'hard', q: '下面哪个乘积最大？', options: ['□□×8', '□□×9', '□□×7', '□□×6'], answer: 1, hint: '乘数越大积越大' },
    { id: 'm241', type: 'fill', difficulty: 'hard', q: '思维题：\n两个自然数的和是18，积最大是（  ）。', answer: '81', hint: '9+9=18，9×9=81最大' },
    { id: 'm242', type: 'choice', difficulty: 'hard', q: '小明做一道乘法题，把因数6看成了9，结果积多了45。正确的积是多少？', options: ['45', '60', '90', '135'], answer: 2, hint: '另一个因数为45÷(9-6)=15，正确积15×6=90' },
    { id: 'm243', type: 'fill', difficulty: 'medium', q: '验算：\n256 + 378 = 634，验算：634 - 256 = （  ）', answer: '378', hint: '验算用减法' },
    { id: 'm244', type: 'choice', difficulty: 'medium', q: '最小的三位数与最大的两位数的差是：', options: ['0', '1', '2', '10'], answer: 1, hint: '100-99=1' },
    { id: 'm245', type: 'choice', difficulty: 'hard', q: '一个数乘5，再除以5，再加5，结果是15。这个数是多少？', options: ['5', '10', '15', '20'], answer: 1, hint: '倒推：15-5=10，10×5=50÷5=10，验证：10×5÷5+5=15' },
  ],

  english: [
    // --- 字母 ---
    { id: 'e001', type: 'match', difficulty: 'easy', q: '大小写字母配对：', left: ['A', 'B', 'G', 'H'], right: ['h', 'b', 'a', 'g'], answer: [2,1,3,0], hint: '注意大小写对应' },
    { id: 'e002', type: 'match', difficulty: 'easy', q: '大小写字母配对：', left: ['D', 'E', 'F', 'C'], right: ['c', 'f', 'e', 'd'], answer: [3,2,1,0], hint: '注意大小写对应' },
    { id: 'e003', type: 'choice', difficulty: 'easy', q: 'Which letter comes after "D"? (D后面是哪个字母)', options: ['C', 'E', 'F', 'B'], answer: 1, hint: 'A B C D E' },
    { id: 'e004', type: 'choice', difficulty: 'easy', q: 'Which letter comes before "G"? (G前面是哪个字母)', options: ['F', 'H', 'E', 'I'], answer: 0, hint: '...E F G H...' },
    { id: 'e005', type: 'fill', difficulty: 'easy', q: '写出字母表第5个字母（小写）：', answer: 'e', hint: 'A B C D E' },

    // --- 单词认读 ---
    { id: 'e006', type: 'match', difficulty: 'easy', q: '单词和中文配对：', left: ['apple', 'book', 'cat', 'dog'], right: ['狗', '苹果', '书', '猫'], answer: [1,2,3,0], hint: 'apple=苹果，book=书，cat=猫，dog=狗' },
    { id: 'e007', type: 'match', difficulty: 'easy', q: '单词和中文配对：', left: ['red', 'blue', 'green', 'yellow'], right: ['黄色', '红色', '蓝色', '绿色'], answer: [1,2,3,0], hint: 'red=红，blue=蓝，green=绿，yellow=黄' },
    { id: 'e008', type: 'choice', difficulty: 'easy', q: '"teacher" 的意思是：', options: ['学生', '老师', '医生', '司机'], answer: 1, hint: 'teacher=老师' },
    { id: 'e009', type: 'choice', difficulty: 'easy', q: '"school" 的意思是：', options: ['家庭', '商店', '学校', '公园'], answer: 2, hint: 'school=学校' },
    { id: 'e010', type: 'choice', difficulty: 'easy', q: '"morning" 的意思是：', options: ['下午', '晚上', '早上', '中午'], answer: 2, hint: 'morning=早上' },
    { id: 'e011', type: 'choice', difficulty: 'medium', q: 'Which one is a fruit? (哪个是水果？)', options: ['pen', 'apple', 'ruler', 'bag'], answer: 1, hint: 'apple是苹果' },
    { id: 'e012', type: 'fill', difficulty: 'easy', q: '写出英文单词：\n书', answer: 'book', hint: 'b-o-o-k' },
    { id: 'e013', type: 'fill', difficulty: 'easy', q: '写出英文单词：\n猫', answer: 'cat', hint: 'c-a-t' },
    { id: 'e014', type: 'fill', difficulty: 'medium', q: '写出英文单词：\n朋友', answer: 'friend', hint: 'f-r-i-e-n-d' },
    { id: 'e015', type: 'fill', difficulty: 'medium', q: '写出英文单词：\n星期一', answer: 'Monday', hint: 'M-o-n-d-a-y' },

    // --- 句型 ---
    { id: 'e016', type: 'choice', difficulty: 'easy', q: '别人对你说 "Hello!"，你应该回答：', options: ['Goodbye!', 'Hello!', 'Sorry!', 'Thanks!'], answer: 1, hint: '别人打招呼你也打招呼' },
    { id: 'e017', type: 'choice', difficulty: 'easy', q: '别人对你说 "Thank you!"，你应该回答：', options: ['Hello!', 'Sorry!', 'You\'re welcome!', 'OK!'], answer: 2, hint: '不用谢 = You\'re welcome' },
    { id: 'e018', type: 'choice', difficulty: 'medium', q: '___ is your name?', options: ['What', 'How', 'Where', 'Who'], answer: 0, hint: '问名字用What' },
    { id: 'e019', type: 'fill', difficulty: 'medium', q: '填空：\nMy ___ is Tom. (我的名字叫Tom)', answer: 'name', hint: 'name=名字' },
    { id: 'e020', type: 'fill', difficulty: 'medium', q: '填空：\nHow ___ you? (你好吗？)', answer: 'are', hint: 'How are you?' },
    { id: 'e021', type: 'choice', difficulty: 'medium', q: '— How are you?\n— I\'m ___, thanks.', options: ['fine', 'five', 'four', 'friend'], answer: 0, hint: 'fine=好的' },
    { id: 'e022', type: 'choice', difficulty: 'medium', q: '___ old are you?', options: ['What', 'How', 'Where', 'When'], answer: 1, hint: '问年龄用How old' },
    { id: 'e023', type: 'fill', difficulty: 'medium', q: '填空：\nI ___ 9 years old. (我9岁了)', answer: 'am', hint: 'I用am' },

    // --- 听力/语音 ---
    { id: 'e024', type: 'choice', difficulty: 'easy', q: 'Which word starts with "B"? (哪个单词以B开头？)', options: ['Apple', 'Banana', 'Cat', 'Dog'], answer: 1, hint: 'Banana以B开头' },
    { id: 'e025', type: 'choice', difficulty: 'medium', q: 'Which word rhymes with "cat"? (哪个词和cat押韵？)', options: ['dog', 'hat', 'book', 'pen'], answer: 1, hint: 'cat和hat都以-at结尾' },
    { id: 'e026', type: 'choice', difficulty: 'medium', q: 'Which word starts with "S"? (哪个单词以S开头？)', options: ['sun', 'moon', 'star', 'tree'], answer: 0, hint: 'sun以S开头（注意star也是S开头，但sun排在前面）' },

    // --- 对话排序 ---
    { id: 'e027', type: 'choice', difficulty: 'medium', q: '选择正确的对话顺序：\n① I\'m fine, thanks.\n② How are you?\n③ Hello!', options: ['③②①', '②③①', '①③②', '③①②'], answer: 0, hint: '先打招呼→问好→回答' },
    { id: 'e028', type: 'choice', difficulty: 'hard', q: '选择正确的对话顺序：\n① Nice to meet you!\n② Hi, I\'m Tom.\n③ Nice to meet you, too!', options: ['②①③', '①②③', '②③①', '③②①'], answer: 0, hint: '先自我介绍→说很高兴认识你→回答我也是' },

    // --- 颜色/数字 ---
    { id: 'e029', type: 'choice', difficulty: 'easy', q: '"three" 表示数字：', options: ['2', '3', '4', '5'], answer: 1, hint: 'three=3' },
    { id: 'e030', type: 'choice', difficulty: 'easy', q: '"seven" 表示数字：', options: ['6', '7', '8', '9'], answer: 1, hint: 'seven=7' },
    { id: 'e031', type: 'fill', difficulty: 'medium', q: '写出英文数字：\n10', answer: 'ten', hint: 't-e-n' },
    { id: 'e032', type: 'fill', difficulty: 'medium', q: '写出英文数字：\n12', answer: 'twelve', hint: 't-w-e-l-v-e' },
    { id: 'e033', type: 'choice', difficulty: 'medium', q: 'What color is the sky? (天空是什么颜色？)', options: ['Red', 'Blue', 'Green', 'Yellow'], answer: 1, hint: '天空是蓝色的' },
    { id: 'e034', type: 'choice', difficulty: 'medium', q: 'What color is grass? (草是什么颜色？)', options: ['Red', 'Blue', 'Green', 'Black'], answer: 2, hint: '草是绿色的' },

    // --- 情景对话 ---
    { id: 'e035', type: 'choice', difficulty: 'medium', q: '早上见到老师，你应该说：', options: ['Good evening!', 'Good morning!', 'Good night!', 'Goodbye!'], answer: 1, hint: '早上好=Good morning' },
    { id: 'e036', type: 'choice', difficulty: 'medium', q: '晚上睡觉前对妈妈说：', options: ['Good morning!', 'Good afternoon!', 'Good night!', 'Hello!'], answer: 2, hint: '晚安=Good night' },
    { id: 'e037', type: 'choice', difficulty: 'hard', q: '你想知道对方的名字，应该问：', options: ['How are you?', 'What\'s your name?', 'How old are you?', 'Goodbye!'], answer: 1, hint: '问名字用What\'s your name?' },
    { id: 'e038', type: 'choice', difficulty: 'hard', q: '你想介绍自己叫Mike，应该说：', options: ['You are Mike.', 'My name is Mike.', 'He is Mike.', 'Is Mike?'], answer: 1, hint: 'My name is... = 我叫...' },

    // --- 动词/动作 ---
    { id: 'e039', type: 'match', difficulty: 'medium', q: '动词和中文配对：', left: ['run', 'jump', 'swim', 'read'], right: ['读', '跑', '游泳', '跳'], answer: [1,3,2,0], hint: 'run=跑，jump=跳，swim=游泳，read=读' },
    { id: 'e040', type: 'choice', difficulty: 'medium', q: 'I can ___ a book. (我能读书)', options: ['run', 'read', 'swim', 'jump'], answer: 1, hint: '读书用read' },

    // --- 复习综合 ---
    { id: 'e041', type: 'fill', difficulty: 'easy', q: '填空（首字母已给出）：\n___ pple (苹果)', answer: 'a', hint: 'apple' },
    { id: 'e042', type: 'fill', difficulty: 'medium', q: '填空（首字母已给出）：\n___ lexteen (十六)', answer: 's', hint: 'sixteen，注意拼写' },
    { id: 'e043', type: 'choice', difficulty: 'hard', q: '— What\'s this?\n— It\'s ___ eraser.', options: ['a', 'an', 'the', '/'], answer: 1, hint: '元音音素前用an' },
    { id: 'e044', type: 'choice', difficulty: 'hard', q: '选出不同类的单词：', options: ['pen', 'pencil', 'ruler', 'red'], answer: 3, hint: 'pen/pencil/ruler是文具，red是颜色' },
    { id: 'e045', type: 'choice', difficulty: 'medium', q: '选出不同类的单词：', options: ['Monday', 'Sunday', 'Friday', 'January'], answer: 3, hint: '前三个是星期，January是月份' },

    // --- 英语听写（语音朗读）---
    { id: 'e046', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'apple', speak: 'apple', speakLang: 'en-US', hint: 'A fruit, red outside' },
    { id: 'e047', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'book', speak: 'book', speakLang: 'en-US', hint: 'You read it' },
    { id: 'e048', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'cat', speak: 'cat', speakLang: 'en-US', hint: 'A small animal, says "meow"' },
    { id: 'e049', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'teacher', speak: 'teacher', speakLang: 'en-US', hint: 'A person who teaches in school' },
    { id: 'e050', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'school', speak: 'school', speakLang: 'en-US', hint: 'You go there to learn' },
    { id: 'e051', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'friend', speak: 'friend', speakLang: 'en-US', hint: 'Someone you like to be with' },
    { id: 'e052', type: 'fill', difficulty: 'hard', q: '🔊 Listen and write（听写短语）：', answer: 'Hello', speak: 'Hello', speakLang: 'en-US', hint: 'A greeting' },
    { id: 'e053', type: 'fill', difficulty: 'hard', q: '🔊 Listen and write（听写句子）：', answer: "I'm fine", speak: "I'm fine", speakLang: 'en-US', hint: 'Answer to "How are you?"' },

    // --- 英语单词听写（新增）---
    { id: 'e054', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'mother', speak: 'mother', speakLang: 'en-US', hint: 'Female parent, m-o-t-h-e-r' },
    { id: 'e055', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'father', speak: 'father', speakLang: 'en-US', hint: 'Male parent, f-a-t-h-e-r' },
    { id: 'e056', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'sister', speak: 'sister', speakLang: 'en-US', hint: 'A female sibling, s-i-s-t-e-r' },
    { id: 'e057', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'brother', speak: 'brother', speakLang: 'en-US', hint: 'A male sibling, b-r-o-t-h-e-r' },
    { id: 'e058', type: 'fill', difficulty: 'hard', q: '🔊 Listen and write（听写单词）：', answer: 'morning', speak: 'morning', speakLang: 'en-US', hint: 'Early part of the day, m-o-r-n-i-n-g' },
    { id: 'e059', type: 'fill', difficulty: 'hard', q: '🔊 Listen and write（听写单词）：', answer: 'afternoon', speak: 'afternoon', speakLang: 'en-US', hint: 'Middle part of the day, a-f-t-e-r-n-o-o-n' },
    { id: 'e060', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写句子）：', answer: 'How are you?', speak: 'How are you?', speakLang: 'en-US', hint: 'A greeting question' },
    { id: 'e061', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写句子）：', answer: 'Nice to meet you.', speak: 'Nice to meet you.', speakLang: 'en-US', hint: 'When you first meet someone' },
    { id: 'e062', type: 'fill', difficulty: 'hard', q: '🔊 Listen and write（听写句子）：', answer: 'Thank you very much.', speak: 'Thank you very much.', speakLang: 'en-US', hint: 'To show gratitude' },

    // ========== 一二年级英语复习 ==========
    // --- 基础单词 ---
    { id: 'e101', type: 'match', difficulty: 'easy', q: '单词和中文配对：', left: ['nose', 'eye', 'mouth', 'ear'], right: ['嘴巴', '鼻子', '耳朵', '眼睛'], answer: [1,3,0,2], hint: '五官单词：nose鼻子, eye眼睛, mouth嘴巴, ear耳朵' },
    { id: 'e102', type: 'choice', difficulty: 'easy', q: '"monkey" 的意思是：', options: ['兔子', '猴子', '小鸟', '小狗'], answer: 1, hint: 'monkey=猴子' },
    { id: 'e103', type: 'choice', difficulty: 'easy', q: '"rice" 的意思是：', options: ['面包', '牛奶', '米饭', '鸡蛋'], answer: 2, hint: 'rice=米饭' },
    { id: 'e104', type: 'choice', difficulty: 'easy', q: 'Which one is an animal? (哪个是动物？)', options: ['pen', 'bag', 'dog', 'book'], answer: 2, hint: 'dog=狗' },
    { id: 'e105', type: 'fill', difficulty: 'easy', q: '写出英文单词：\n妈妈', answer: 'mother', hint: 'm-o-t-h-e-r' },
    { id: 'e106', type: 'fill', difficulty: 'easy', q: '写出英文单词：\n狗', answer: 'dog', hint: 'd-o-g' },
    { id: 'e107', type: 'fill', difficulty: 'medium', q: '写出英文单词：\n鸡蛋', answer: 'egg', hint: 'e-g-g' },

    // --- 基础句型 ---
    { id: 'e108', type: 'choice', difficulty: 'easy', q: '— Goodbye!\n— ___', options: ['Hello!', 'Goodbye!', 'Thank you!', 'Sorry!'], answer: 1, hint: '别人说再见，你也说再见' },
    { id: 'e109', type: 'choice', difficulty: 'easy', q: '对别人说 "Sorry!"，你应该怎么回应？', options: ['It\'s OK.', 'Goodbye!', 'OK!', 'Yes!'], answer: 0, hint: '没关系 = It\'s OK' },
    { id: 'e110', type: 'choice', difficulty: 'medium', q: '— What\'s this?\n— It\'s ___ apple.', options: ['a', 'an', 'the', '/'], answer: 1, hint: 'apple以元音开头，用an' },
    { id: 'e111', type: 'fill', difficulty: 'easy', q: '填空：\nI ___ a boy. (我是一个男孩)', answer: 'am', hint: 'I用am' },
    { id: 'e112', type: 'fill', difficulty: 'medium', q: '填空：\nHe ___ a student. (他是一个学生)', answer: 'is', hint: 'He用is' },
    { id: 'e113', type: 'choice', difficulty: 'easy', q: '选出正确的句子：', options: ['I are a student.', 'I am a student.', 'I is a student.', 'I be a student.'], answer: 1, hint: 'I用am' },

    // --- 数字/颜色 ---
    { id: 'e114', type: 'choice', difficulty: 'easy', q: '"one" 加上 "one" 等于什么数字？', options: ['one', 'two', 'three', 'four'], answer: 1, hint: '1+1=2，two=2' },
    { id: 'e115', type: 'choice', difficulty: 'easy', q: 'What color is a banana? (香蕉是什么颜色？)', options: ['Red', 'Yellow', 'Blue', 'Green'], answer: 1, hint: '香蕉是黄色的' },

    // ========== 更多英语新题 ==========
    
    // --- 更多单词听写 ---
    { id: 'e116', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'pencil', speak: 'pencil', speakLang: 'en-US', hint: 'You write with it, p-e-n-c-i-l' },
    { id: 'e117', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'ruler', speak: 'ruler', speakLang: 'en-US', hint: 'You measure with it, r-u-l-e-r' },
    { id: 'e118', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'eraser', speak: 'eraser', speakLang: 'en-US', hint: 'You use it to clean mistakes, e-r-a-s-e-r' },
    { id: 'e119', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'bag', speak: 'bag', speakLang: 'en-US', hint: 'You carry books in it, b-a-g' },
    { id: 'e120', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'door', speak: 'door', speakLang: 'en-US', hint: 'You open it to enter, d-o-o-r' },
    { id: 'e121', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'window', speak: 'window', speakLang: 'en-US', hint: 'You look outside through it, w-i-n-d-o-w' },
    { id: 'e122', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'blackboard', speak: 'blackboard', speakLang: 'en-US', hint: 'The teacher writes on it, b-l-a-c-k-b-o-a-r-d' },
    { id: 'e123', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'chair', speak: 'chair', speakLang: 'en-US', hint: 'You sit on it, c-h-a-i-r' },
    { id: 'e124', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'water', speak: 'water', speakLang: 'en-US', hint: 'You drink it every day, w-a-t-e-r' },
    { id: 'e125', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'milk', speak: 'milk', speakLang: 'en-US', hint: 'White drink, from cows, m-i-l-k' },
    { id: 'e126', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'bread', speak: 'bread', speakLang: 'en-US', hint: 'You eat it for breakfast, b-r-e-a-d' },
    { id: 'e127', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'fish', speak: 'fish', speakLang: 'en-US', hint: 'Lives in water, f-i-s-h' },
    { id: 'e128', type: 'fill', difficulty: 'easy', q: '🔊 Listen and write（听写单词）：', answer: 'bird', speak: 'bird', speakLang: 'en-US', hint: 'It can fly, b-i-r-d' },
    { id: 'e129', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'rabbit', speak: 'rabbit', speakLang: 'en-US', hint: 'Long ears, white and cute, r-a-b-b-i-t' },
    { id: 'e130', type: 'fill', difficulty: 'hard', q: '🔊 Listen and write（听写单词）：', answer: 'elephant', speak: 'elephant', speakLang: 'en-US', hint: 'Very big animal, long nose, e-l-e-p-h-a-n-t' },
    { id: 'e131', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'tiger', speak: 'tiger', speakLang: 'en-US', hint: 'Big cat with stripes, t-i-g-e-r' },
    { id: 'e132', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写单词）：', answer: 'panda', speak: 'panda', speakLang: 'en-US', hint: 'Black and white, from China, p-a-n-d-a' },
    { id: 'e133', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写句子）：', answer: 'I like apples.', speak: 'I like apples.', speakLang: 'en-US', hint: 'You are saying what fruit you like' },
    { id: 'e134', type: 'fill', difficulty: 'medium', q: '🔊 Listen and write（听写句子）：', answer: 'This is my book.', speak: 'This is my book.', speakLang: 'en-US', hint: 'You are showing your book' },
    { id: 'e135', type: 'fill', difficulty: 'hard', q: '🔊 Listen and write（听写句子）：', answer: 'Can I have some water?', speak: 'Can I have some water?', speakLang: 'en-US', hint: 'You are asking for water politely' },

    // --- 更多句型 ---
    { id: 'e136', type: 'choice', difficulty: 'easy', q: '— What\'s your name?\n— ___ name is Amy.', options: ['My', 'I', 'Me', 'Mine'], answer: 0, hint: '我的名字用My' },
    { id: 'e137', type: 'choice', difficulty: 'easy', q: '— How old are you?\n— I\'m ___ years old.', options: ['nine', 'nice', 'nose', 'name'], answer: 0, hint: 'nine=9' },
    { id: 'e138', type: 'fill', difficulty: 'easy', q: '填空：\nI ___ two books. (我有两本书)', answer: 'have', hint: '拥有用have' },
    { id: 'e139', type: 'choice', difficulty: 'easy', q: 'She ___ a teacher.', options: ['am', 'is', 'are', 'be'], answer: 1, hint: 'She用is' },
    { id: 'e140', type: 'choice', difficulty: 'easy', q: 'They ___ students.', options: ['am', 'is', 'are', 'be'], answer: 2, hint: 'They用are' },
    { id: 'e141', type: 'fill', difficulty: 'medium', q: '填空：\n— Do you like apples?\n— Yes, I ___.', answer: 'do', hint: 'Do问do答' },
    { id: 'e142', type: 'fill', difficulty: 'medium', q: '填空：\n— Can you swim?\n— Yes, I ___.', answer: 'can', hint: 'Can问can答' },
    { id: 'e143', type: 'fill', difficulty: 'medium', q: '填空：\n— What color is it?\n— It\'s ___. (红色)', answer: 'red', hint: '红色=red' },
    { id: 'e144', type: 'choice', difficulty: 'medium', q: 'This is ___ umbrella.', options: ['a', 'an', 'the', '/'], answer: 1, hint: 'umbrella元音开头用an' },
    { id: 'e145', type: 'choice', difficulty: 'medium', q: 'I see ___ orange.', options: ['a', 'an', 'the', '/'], answer: 1, hint: 'orange元音开头用an' },
    { id: 'e146', type: 'choice', difficulty: 'medium', q: 'There ___ a book on the desk.', options: ['am', 'is', 'are', 'be'], answer: 1, hint: '单数用is' },
    { id: 'e147', type: 'choice', difficulty: 'medium', q: 'There ___ two pens in the bag.', options: ['am', 'is', 'are', 'be'], answer: 2, hint: '复数用are' },
    { id: 'e148', type: 'fill', difficulty: 'medium', q: '填空：\nLet\'s ___ to school. (go/goes)', answer: 'go', hint: 'Let\'s后用动词原形' },
    { id: 'e149', type: 'choice', difficulty: 'medium', q: 'I want ___ apple.', options: ['a', 'an', 'the', '/'], answer: 1, hint: 'apple元音开头' },
    { id: 'e150', type: 'fill', difficulty: 'easy', q: '填空：\nNice ___ meet you.', answer: 'to', hint: 'Nice to meet you.' },
    { id: 'e151', type: 'choice', difficulty: 'medium', q: 'Where ___ my book?', options: ['am', 'is', 'are', 'be'], answer: 1, hint: '单数用is' },
    { id: 'e152', type: 'fill', difficulty: 'easy', q: '填空：\n___ is a cat. (这是一只猫)', answer: 'This', hint: '这=This' },
    { id: 'e153', type: 'fill', difficulty: 'medium', q: '填空：\nI go to school ___ bus.', answer: 'by', hint: '乘公交车=by bus' },
    { id: 'e154', type: 'fill', difficulty: 'easy', q: '填空：\n___ morning! (早上好)', answer: 'Good', hint: 'Good morning!' },
    { id: 'e155', type: 'fill', difficulty: 'medium', q: '填空：\nSee you ___! (晚点见)', answer: 'later', hint: 'See you later!' },
    { id: 'e156', type: 'choice', difficulty: 'medium', q: '选出正确的句子：\n(你想知道这是什么东西)', options: ['What is this?', 'What color is it?', 'How are you?', 'Where is it?'], answer: 0, hint: '问是什么用What' },
    { id: 'e157', type: 'choice', difficulty: 'hard', q: '"I don\'t know." 的意思是：', options: ['我知道', '我不知道', '我喜欢', '我不喜欢'], answer: 1, hint: 'don\'t know=不知道' },
    { id: 'e158', type: 'choice', difficulty: 'hard', q: '"What about you?" 的意思是：', options: ['你在哪里', '你是谁', '你呢', '你怎么了'], answer: 2, hint: '反问对方' },

    // --- 更多情景对话 ---
    { id: 'e159', type: 'choice', difficulty: 'medium', q: '你想借用同学的橡皮，应该说：', options: ['Give me your eraser.', 'May I use your eraser?', 'I want your eraser.', 'This is my eraser.'], answer: 1, hint: '有礼貌地请求用May I...?' },
    { id: 'e160', type: 'choice', difficulty: 'easy', q: '你不小心踩到同学的脚，应该说：', options: ['Thank you!', 'Hello!', 'I\'m sorry.', 'Goodbye!'], answer: 2, hint: '道歉=I\'m sorry' },
    { id: 'e161', type: 'choice', difficulty: 'easy', q: '别人帮助了你，你应该说：', options: ['Sorry!', 'Thank you!', 'Hello!', 'Goodbye!'], answer: 1, hint: '感谢=Thank you' },
    { id: 'e162', type: 'choice', difficulty: 'easy', q: '你离开朋友家时，应该说：', options: ['Hello!', 'Thank you!', 'Goodbye!', 'Sorry!'], answer: 2, hint: '再见=Goodbye' },
    { id: 'e163', type: 'choice', difficulty: 'medium', q: '你想知道铅笔是什么颜色，应该问：', options: ['What is this?', 'What color is the pencil?', 'This is a pencil.', 'Is this a pencil?'], answer: 1, hint: '问颜色用What color' },
    { id: 'e164', type: 'choice', difficulty: 'medium', q: '你想告诉别人你叫Lucy，应该说：', options: ['You are Lucy.', 'My name is Lucy.', 'I am fine.', 'This is Lucy.'], answer: 1, hint: '自我介绍=My name is...' },
    { id: 'e165', type: 'choice', difficulty: 'medium', q: '别人说"Nice to meet you."，你应该回答：', options: ['Goodbye!', 'I\'m sorry.', 'Nice to meet you, too.', 'Thank you.'], answer: 2, hint: '回答"见到你也很高兴"' },
    { id: 'e166', type: 'choice', difficulty: 'medium', q: '你想问别人喜欢什么食物，应该问：', options: ['What do you like?', 'Do you like apples?', 'What food do you like?', 'Are you hungry?'], answer: 2, hint: '问喜欢什么食物最准确' },
    { id: 'e167', type: 'choice', difficulty: 'hard', q: '别人问你"How are you?"，你不舒服时可以说：', options: ['I\'m fine.', 'Not so good.', 'I\'m great!', 'Thank you.'], answer: 1, hint: '不太好=Not so good' },
    { id: 'e168', type: 'choice', difficulty: 'medium', q: '你想让朋友过来，应该说：', options: ['Go away!', 'Come here, please.', 'Stop!', 'Run!'], answer: 1, hint: '过来请=Come here, please' },
    { id: 'e169', type: 'choice', difficulty: 'hard', q: '— What would you like?\n— I\'d like some ___.', options: ['rice', 'rices', 'a rice', 'an rice'], answer: 0, hint: 'rice不可数，不用a/an/s' },
    { id: 'e170', type: 'choice', difficulty: 'hard', q: '— Happy birthday!\n— ___', options: ['Happy birthday!', 'Thank you!', 'The same to you!', 'OK!'], answer: 1, hint: '别人祝你生日快乐要说谢谢' },
    { id: 'e171', type: 'choice', difficulty: 'hard', q: '你想知道现在几点，应该问：', options: ['What time is it?', 'What day is it?', 'What date is it?', 'What is today?'], answer: 0, hint: '问时间用What time' },
    { id: 'e172', type: 'choice', difficulty: 'medium', q: '周末你对朋友说"Have a nice weekend!"，朋友回答：', options: ['You too!', 'I\'m sorry.', 'Never mind.', 'Not at all.'], answer: 0, hint: '你也一样=You too' },
    { id: 'e173', type: 'choice', difficulty: 'medium', q: '选出正确的回答：\n— How many books do you have?\n— ___', options: ['I have five.', 'I like books.', 'It\'s a book.', 'I\'m fine.'], answer: 0, hint: '问数量，回答数字' },

    // --- 更多连线/分类 ---
    { id: 'e174', type: 'match', difficulty: 'easy', q: '文具单词配对：', left: ['pen', 'pencil', 'ruler', 'eraser'], right: ['尺子', '钢笔', '铅笔', '橡皮'], answer: [2,1,0,3], hint: 'pen钢笔, pencil铅笔, ruler尺子, eraser橡皮' },
    { id: 'e175', type: 'match', difficulty: 'easy', q: '食物单词配对：', left: ['rice', 'milk', 'egg', 'bread'], right: ['鸡蛋', '米饭', '牛奶', '面包'], answer: [1,2,0,3], hint: 'rice米饭, milk牛奶, egg鸡蛋, bread面包' },
    { id: 'e176', type: 'match', difficulty: 'easy', q: '家庭成员配对：', left: ['grandpa', 'grandma', 'uncle', 'aunt'], right: ['阿姨', '叔叔', '爷爷', '奶奶'], answer: [2,3,1,0], hint: 'grandpa爷爷, grandma奶奶, uncle叔叔, aunt阿姨' },
    { id: 'e177', type: 'choice', difficulty: 'medium', q: '选出不同类的单词：', options: ['pen', 'pencil', 'ruler', 'dog'], answer: 3, hint: '前三个是文具，dog是动物' },
    { id: 'e178', type: 'choice', difficulty: 'medium', q: '选出不同类的单词：', options: ['cat', 'dog', 'bird', 'book'], answer: 3, hint: '前三个是动物，book是书本' },
    { id: 'e179', type: 'choice', difficulty: 'medium', q: '选出不同类的单词：', options: ['red', 'blue', 'green', 'apple'], answer: 3, hint: '前三个是颜色，apple是水果' },
    { id: 'e180', type: 'choice', difficulty: 'medium', q: '选出不同类的单词：', options: ['one', 'three', 'five', 'book'], answer: 3, hint: '前三个是数字，book是书' },
    { id: 'e181', type: 'choice', difficulty: 'hard', q: '选出不同类的单词：', options: ['Monday', 'March', 'Friday', 'Sunday'], answer: 1, hint: 'Monday/Friday/Sunday是星期，March是月份' },
    { id: 'e182', type: 'choice', difficulty: 'hard', q: '选出不同类的单词：', options: ['eye', 'ear', 'nose', 'run'], answer: 3, hint: '前三个是身体部位，run是动作' },
    { id: 'e183', type: 'match', difficulty: 'medium', q: '反义词配对：', left: ['big', 'hot', 'up', 'open'], right: ['down', 'small', 'close', 'cold'], answer: [1,3,0,2], hint: 'big↔small, hot↔cold, up↔down, open↔close' },
    { id: 'e184', type: 'match', difficulty: 'medium', q: '缩写形式配对：', left: ['I\'m', 'isn\'t', 'can\'t', 'don\'t'], right: ['is not', 'I am', 'do not', 'can not'], answer: [1,0,3,2], hint: "I'm=I am, isn't=is not, can't=can not, don't=do not" },
    { id: 'e185', type: 'choice', difficulty: 'medium', q: '选出不同类的单词：', options: ['swim', 'run', 'jump', 'book'], answer: 3, hint: '前三个是动作，book是名词' },
    { id: 'e186', type: 'choice', difficulty: 'medium', q: '选出不同类的单词：', options: ['apple', 'banana', 'orange', 'pencil'], answer: 3, hint: '前三个是水果，pencil是文具' },
    { id: 'e187', type: 'match', difficulty: 'medium', q: '交通工具配对：', left: ['car', 'bus', 'bike', 'plane'], right: ['飞机', '汽车', '自行车', '公交车'], answer: [1,3,2,0], hint: 'car汽车, bus公交车, bike自行车, plane飞机' },
    { id: 'e188', type: 'choice', difficulty: 'hard', q: '"Let\'s"是下面哪个的缩写？', options: ['Let is', 'Let us', 'Let has', 'Let was'], answer: 1, hint: "Let's = Let us" },

    // --- 更多综合选择与填空 ---
    { id: 'e189', type: 'choice', difficulty: 'medium', q: '选出正确的翻译：\n"我可以进来吗？"', options: ['May I come in?', 'I can come in.', 'Let me in.', 'Do I come in?'], answer: 0, hint: '礼貌询问用May I...?' },
    { id: 'e190', type: 'choice', difficulty: 'medium', q: '选出正确的翻译：\n"请坐下。"', options: ['Stand up, please.', 'Sit down, please.', 'Come here, please.', 'Go away, please.'], answer: 1, hint: '坐下=Sit down' },
    { id: 'e191', type: 'choice', difficulty: 'easy', q: '选出正确的翻译：\n"打开你的书。"', options: ['Close your book.', 'Open your book.', 'Read your book.', 'Take your book.'], answer: 1, hint: '打开=Open' },
    { id: 'e192', type: 'fill', difficulty: 'easy', q: '写出英文：\n你好！', answer: 'Hello!', hint: 'H-e-l-l-o' },
    { id: 'e193', type: 'fill', difficulty: 'easy', q: '写出英文：\n谢谢你。', answer: 'Thank you.', hint: 'T-h-a-n-k y-o-u' },
    { id: 'e194', type: 'fill', difficulty: 'medium', q: '写出英文数字：\n20', answer: 'twenty', hint: 't-w-e-n-t-y' },
    { id: 'e195', type: 'fill', difficulty: 'medium', q: '写出英文数字：\n15', answer: 'fifteen', hint: 'f-i-f-t-e-e-n' },
    { id: 'e196', type: 'fill', difficulty: 'hard', q: '写出英文数字：\n30', answer: 'thirty', hint: 't-h-i-r-t-y' },
    { id: 'e197', type: 'fill', difficulty: 'medium', q: '写出英文：\n我的家庭', answer: 'my family', hint: 'm-y f-a-m-i-l-y' },
    { id: 'e198', type: 'choice', difficulty: 'hard', q: '— ___ is the weather today?\n— It\'s sunny.', options: ['What', 'How', 'Where', 'When'], answer: 1, hint: '问天气=How is the weather?' },
    { id: 'e199', type: 'choice', difficulty: 'hard', q: '— ___ is your birthday?\n— It\'s in June.', options: ['What', 'How', 'When', 'Where'], answer: 2, hint: '问时间=When' },
    { id: 'e200', type: 'choice', difficulty: 'hard', q: '— ___ do you live?\n— I live in Beijing.', options: ['What', 'How', 'When', 'Where'], answer: 3, hint: '问地点=Where' },
    { id: 'e201', type: 'fill', difficulty: 'hard', q: '填空：\nI ___ (like) apples, but I ___ (not like) bananas.', answer: 'like|don\'t like', hint: '喜欢苹果，不喜欢香蕉', multiLine: true },
    { id: 'e202', type: 'choice', difficulty: 'medium', q: '选出正确的句子：', options: ['She like apples.', 'She likes apples.', 'She liking apples.', 'She is like apples.'], answer: 1, hint: '三单+s：She likes' },
    { id: 'e203', type: 'choice', difficulty: 'hard', q: 'Two and three ___ five.', options: ['makes', 'make', 'making', 'is making'], answer: 0, hint: '加法算式看作整体，用三单makes（也可用make，但makes更常见）' },
    { id: 'e204', type: 'choice', difficulty: 'hard', q: '— Whose book is this?\n— It\'s ___. (我的)', options: ['I', 'my', 'me', 'mine'], answer: 3, hint: '物主代词用mine=我的（东西）' },
    { id: 'e205', type: 'choice', difficulty: 'hard', q: 'There is ___ "m" in the word "mom".', options: ['a', 'an', 'the', '/'], answer: 1, hint: 'm是元音音素开头，用an' },
    { id: 'e206', type: 'fill', difficulty: 'hard', q: '写出英文：\n我不喜欢下雨天。', answer: 'I don\'t like rainy days.', hint: "不要=don't，雨=rain，天=days" },
    { id: 'e207', type: 'choice', difficulty: 'hard', q: '选出完全正确的句子：', options: ["I like apples, and I like oranges too.", "I likes apples, and I like oranges too.", "I like apple, and I like oranges too.", "I like apples, and I likes oranges too."], answer: 0, hint: 'I用like原形，apples和oranges用复数' },
    { id: 'e208', type: 'choice', difficulty: 'hard', q: '"在桌子上面"用英语怎么说？', options: ['on the desk', 'in the desk', 'under the desk', 'behind the desk'], answer: 0, hint: '上面=on' },
    { id: 'e209', type: 'choice', difficulty: 'hard', q: '"在书包里面"用英语怎么说？', options: ['on the bag', 'in the bag', 'under the bag', 'behind the bag'], answer: 1, hint: '里面=in' },
    { id: 'e210', type: 'fill', difficulty: 'hard', q: '写出英文：\n我能看到一只小鸟。', answer: 'I can see a bird.', hint: '能=can，看到=see，小鸟=a bird' },
    { id: 'e211', type: 'choice', difficulty: 'medium', q: '"beautiful" 的意思是：', options: ['丑陋的', '美丽的', '高大的', '矮小的'], answer: 1, hint: 'beautiful=美丽的' },
    { id: 'e212', type: 'choice', difficulty: 'medium', q: '"delicious" 的意思是：', options: ['难吃的', '好看的', '美味的', '好听的'], answer: 2, hint: 'delicious=美味的' },
    { id: 'e213', type: 'fill', difficulty: 'hard', q: '连词成句（写出完整句子）：\nis / a / this / cat\n', answer: 'This is a cat.', hint: '这是一只猫' },
    { id: 'e214', type: 'fill', difficulty: 'hard', q: '连词成句（写出完整句子）：\nyou / like / do / milk\n', answer: 'Do you like milk?', hint: '你喜欢牛奶吗？' },
    { id: 'e215', type: 'choice', difficulty: 'hard', q: '下面哪个句子的意思和其他三个不同？', options: ['I like reading.', 'I enjoy reading.', 'I love reading.', 'I don\'t like reading.'], answer: 3, hint: '前三个都是喜欢，最后是不喜欢' },
    { id: 'e216', type: 'fill', difficulty: 'hard', q: '写出英文：\n请给我一杯水。', answer: 'Please give me a glass of water.', hint: '请=Please，给=give，一杯水=a glass of water' },
    { id: 'e217', type: 'choice', difficulty: 'hard', q: '"Look at the blackboard." 意思是：', options: ['看窗户', '看黑板', '看书', '看门'], answer: 1, hint: 'blackboard=黑板' },
    { id: 'e218', type: 'choice', difficulty: 'medium', q: '"Put up your hand." 意思是：', options: ['放下手', '举起手', '拍拍手', '挥挥手'], answer: 1, hint: 'Put up=举起' },
    { id: 'e219', type: 'choice', difficulty: 'medium', q: '"Be quiet." 意思是：', options: ['大声点', '安静', '快点', '慢点'], answer: 1, hint: 'quiet=安静' },
    { id: 'e220', type: 'fill', difficulty: 'hard', q: '写出英文句子（至少5个单词）：\n"这是我的学校，它很大很漂亮。"', answer: 'This is my school. It is big and beautiful.', hint: '这是我的学校。它又大又漂亮。' },
    { id: 'e221', type: 'choice', difficulty: 'medium', q: '"Can I help you?" 常用于什么场景？', options: ['打招呼', '道歉', '商店购物', '道别'], answer: 2, hint: '店员常用，意思是"需要帮忙吗？"' },
    { id: 'e222', type: 'choice', difficulty: 'medium', q: '"Have a good day!" 常用于什么场景？', options: ['上学前', '道别时', '道歉时', '问路时'], answer: 1, hint: '祝你有愉快的一天' },
    { id: 'e223', type: 'choice', difficulty: 'hard', q: '下面哪个词既可以做名词又可以做动词？', options: ['book', 'water', 'cat', 'dog'], answer: 1, hint: 'water=水(名词)，浇水(动词)' },
    { id: 'e224', type: 'fill', difficulty: 'hard', q: '写出对应的英文数字单词：\n89', answer: 'eighty-nine', hint: '80+9，eighty-nine' },
    { id: 'e225', type: 'choice', difficulty: 'hard', q: '"I have no idea." 的意思是：', options: ['我有一个主意', '我不知道', '我不喜欢', '我没有'], answer: 1, hint: 'have no idea=不知道' },
  ]
};

// 每日激励语
const DAILY_QUOTES = [
  { text: '书山有路勤为径，学海无涯苦作舟。', author: '韩愈' },
  { text: '少壮不努力，老大徒伤悲。', author: '汉乐府' },
  { text: '读书破万卷，下笔如有神。', author: '杜甫' },
  { text: '学如逆水行舟，不进则退。', author: '古语' },
  { text: '世上无难事，只怕有心人。', author: '谚语' },
  { text: '千里之行，始于足下。', author: '老子' },
  { text: '百闻不如一见，百见不如一干。', author: '谚语' },
  { text: '今日事，今日毕。', author: '古语' },
  { text: '虚心使人进步，骄傲使人落后。', author: '谚语' },
  { text: '一寸光阴一寸金，寸金难买寸光阴。', author: '王贞白' },
  { text: '业精于勤，荒于嬉。', author: '韩愈' },
  { text: '读万卷书，行万里路。', author: '董其昌' },
  { text: '锲而不舍，金石可镂。', author: '荀子' },
  { text: '宝剑锋从磨砺出，梅花香自苦寒来。', author: '古语' },
  { text: '天行健，君子以自强不息。', author: '《周易》' }
];

// 科目配置
const SUBJECTS = {
  chinese: { name: '语文', icon: '📚', class: 'bg-chinese' },
  math: { name: '数学', icon: '🔢', class: 'bg-math' },
  english: { name: '英语', icon: '🔤', class: 'bg-english' }
};
