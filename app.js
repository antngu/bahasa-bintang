const STORAGE_KEY = 'bahasa-bintang-progress-v1';
const STARTER_QUESTION_INDEXES = [0, 1, 5, 6, 10, 15, 20, 21, 25, 26];

const I18N = {
  en: {
    language: 'Language', welcome: 'Welcome', createCharacter: 'Create your learner', starterIntro: 'Next, answer 10 starter questions so the practice can begin at the right level.',
    nickname: 'What is your nickname?', nameExample: 'Example: Alya', gender: 'Gender', optional: '(optional)', female: 'Female', male: 'Male', preferNot: 'Prefer not to say',
    chooseAvatar: 'Choose your avatar', nameError: 'Please enter a nickname.', startStarter: 'Start 10 starter questions', localOnboarding: '⌂ Name, choices and answers stay on this device.',
    tagline: 'Learn a little, shine every day', navToday: 'Today', navSkills: 'Levels', navParents: 'For Parents', savedHere: 'Saved here', todayAdventure: "Today's adventure", hello: 'Hello',
    heroText: 'Ten small questions. One big step towards confidence in Bahasa Melayu.', microcopy: 'About 10 minutes · No timer · Hints allowed', questions: 'questions', dayStreak: 'day streak',
    starCoins: 'star coins', experience: 'experience points', chooseMission: 'Choose a mission', learnByTopic: 'Learn by topic', viewAll: 'View all levels', learningMap: 'Learning map',
    myLevels: 'My levels', skillsIntro: 'Review developing topics and celebrate the ones already mastered.', masteryLegend: 'Mastery is based on answers on this device', privateSummary: 'Private summary',
    forParents: 'For parents', parentIntro: 'All information stays in the browser on this device.', localOnly: '⌂ Local only', learningSummary: 'Learning summary', totalAnswered: 'Questions answered',
    overallAccuracy: 'Overall accuracy', strongestLevel: 'Strongest level', needsPractice: 'Needs more practice', settings: 'Settings', displayName: 'Learner display name', save: 'Save',
    changePin: 'Change parent PIN', currentPin: 'Current PIN', newPin: 'New 4-digit PIN', savePin: 'Save PIN', pinLocalNote: 'The initial PIN is 1357. This is a simple device-local parent gate.',
    exportProgress: 'Export progress', importProgress: 'Import progress', resetProgress: 'Reset progress', backupHelp: 'Export a backup occasionally. Clearing site data or changing devices can remove saved progress.',
    conversationWeek: 'Conversation this week', conversationTip: 'Ask: <strong>“Apakah makanan kegemaran kamu? Mengapa?”</strong> Accept a short answer first, then help add one reason using <em>kerana</em>.',
    listen: 'Listen', chooseAnswer: 'Choose the correct answer.', next: 'Next', missionComplete: 'Mission complete!', wellDone: 'Well done', correct: 'correct', coins: 'coins', backHome: 'Back to home',
    parentPinTitle: 'Parent access', parentPinIntro: 'Enter the 4-digit parent PIN to view progress and settings.', parentPinLabel: 'Parent PIN', pinPlaceholder: '4-digit PIN', pinError: 'That PIN is not correct.', unlock: 'Unlock',
    learner: 'Learner', reviewToday: 'Review today', continueChallenge: 'Continue challenge', startChallenge: 'Start challenge', shortPractice: 'Short practice with an explanation after every answer.', practice: 'Practice',
    mastered: 'Mastered', developing: 'Developing', keepGoing: 'Keep going', newLevel: 'New', notAvailable: 'Not available yet', starterTitle: '10 Starter Questions', dailyTitle: 'Daily Challenge', missionPrefix: 'Mission',
    feedbackCorrect: 'Correct! Great work!', feedbackTry: 'Almost — let’s learn from it.', starterComplete: 'First step complete! Your daily learning path is ready.', perfectComplete: 'Everything correct! You are ready for the next challenge.',
    practiceComplete: 'Every answer helps your brain learn. Return tomorrow to strengthen it.', audioUnavailable: 'Audio is not available in this browser.', nameSaved: 'Display name saved on this device.',
    importSuccess: 'Progress imported successfully.', importFail: 'That backup file could not be read.', resetConfirm: 'Delete all progress on this device? This cannot be undone.', resetDone: 'Progress has been reset.',
    pinChanged: 'Parent PIN updated.', pinCurrentWrong: 'The current PIN is incorrect.', pinFormat: 'Please use exactly 4 digits.',
    skill_diri: 'About Me', skill_keluarga: 'Family', skill_sekolah: 'At School', skill_masa: 'Time & Routine', skill_makanan: 'Food', skill_tempat: 'Places',
    sub_diri: 'Names, ages and feelings', sub_keluarga: 'People at home', sub_sekolah: 'Class and friends', sub_masa: 'Days and activities', sub_makanan: 'Tastes and choices', sub_tempat: 'Directions and travel'
  },
  ms: {
    language: 'Bahasa', welcome: 'Selamat datang', createCharacter: 'Mari cipta watak kamu', starterIntro: 'Selepas ini, jawab 10 soalan pemula supaya latihan kamu bermula pada tahap yang sesuai.',
    nickname: 'Apakah nama panggilan kamu?', nameExample: 'Contoh: Alya', gender: 'Jantina', optional: '(pilihan)', female: 'Perempuan', male: 'Lelaki', preferNot: 'Tidak mahu nyatakan',
    chooseAvatar: 'Pilih avatar kamu', nameError: 'Sila masukkan nama panggilan.', startStarter: 'Mulakan 10 soalan pemula', localOnboarding: '⌂ Nama, pilihan dan jawapan kekal pada peranti ini.',
    tagline: 'Belajar sedikit, bersinar selalu', navToday: 'Hari Ini', navSkills: 'Tahap', navParents: 'Untuk Ibu Bapa', savedHere: 'Disimpan di sini', todayAdventure: 'Pengembaraan hari ini', hello: 'Hai',
    heroText: 'Sepuluh soalan kecil. Satu langkah besar untuk lebih yakin berbahasa Melayu.', microcopy: 'Kira-kira 10 minit · Tiada pemasa · Petunjuk dibenarkan', questions: 'soalan', dayStreak: 'hari berturut-turut',
    starCoins: 'syiling bintang', experience: 'mata pengalaman', chooseMission: 'Pilih satu misi', learnByTopic: 'Belajar mengikut topik', viewAll: 'Lihat semua tahap', learningMap: 'Peta pembelajaran',
    myLevels: 'Tahap saya', skillsIntro: 'Ulang kaji topik yang masih berkembang dan raikan yang sudah dikuasai.', masteryLegend: 'Penguasaan berdasarkan jawapan pada peranti ini', privateSummary: 'Ringkasan peribadi',
    forParents: 'Untuk ibu bapa', parentIntro: 'Semua maklumat kekal dalam pelayar pada peranti ini.', localOnly: '⌂ Local sahaja', learningSummary: 'Ringkasan pembelajaran', totalAnswered: 'Jumlah soalan dijawab',
    overallAccuracy: 'Ketepatan keseluruhan', strongestLevel: 'Tahap terkuat', needsPractice: 'Perlu lebih latihan', settings: 'Tetapan', displayName: 'Nama paparan pelajar', save: 'Simpan',
    changePin: 'Tukar PIN ibu bapa', currentPin: 'PIN semasa', newPin: 'PIN baharu 4 digit', savePin: 'Simpan PIN', pinLocalNote: 'PIN awal ialah 1357. Ini ialah sekatan ibu bapa ringkas pada peranti ini.',
    exportProgress: 'Eksport kemajuan', importProgress: 'Import kemajuan', resetProgress: 'Tetapkan semula', backupHelp: 'Eksport sandaran dari semasa ke semasa. Memadam data laman atau bertukar peranti boleh menghilangkan kemajuan.',
    conversationWeek: 'Perbualan minggu ini', conversationTip: 'Tanya: <strong>“Apakah makanan kegemaran kamu? Mengapa?”</strong> Terima jawapan pendek dahulu, kemudian bantu tambah satu sebab menggunakan <em>kerana</em>.',
    listen: 'Dengar', chooseAnswer: 'Pilih jawapan yang betul.', next: 'Seterusnya', missionComplete: 'Misi selesai!', wellDone: 'Bagus sekali', correct: 'betul', coins: 'syiling', backHome: 'Kembali ke halaman utama',
    parentPinTitle: 'Akses ibu bapa', parentPinIntro: 'Masukkan PIN ibu bapa 4 digit untuk melihat kemajuan dan tetapan.', parentPinLabel: 'PIN ibu bapa', pinPlaceholder: 'PIN 4 digit', pinError: 'PIN itu tidak betul.', unlock: 'Buka',
    learner: 'Pelajar', reviewToday: 'Ulang kaji hari ini', continueChallenge: 'Sambung cabaran', startChallenge: 'Mulakan cabaran', shortPractice: 'Latihan pendek dengan penerangan selepas setiap jawapan.', practice: 'Latih',
    mastered: 'Dikuasai', developing: 'Berkembang', keepGoing: 'Teruskan', newLevel: 'Baharu', notAvailable: 'Belum tersedia', starterTitle: '10 Soalan Pemula', dailyTitle: 'Cabaran Harian', missionPrefix: 'Misi',
    feedbackCorrect: 'Betul! Hebat!', feedbackTry: 'Hampir betul — mari belajar.', starterComplete: 'Langkah pertama selesai! Laluan pembelajaran harian kamu sudah sedia.', perfectComplete: 'Semua betul! Kamu sudah bersedia untuk cabaran seterusnya.',
    practiceComplete: 'Setiap jawapan membantu otak belajar. Datang semula esok untuk menguatkannya.', audioUnavailable: 'Audio tidak tersedia pada pelayar ini.', nameSaved: 'Nama paparan disimpan pada peranti ini.',
    importSuccess: 'Kemajuan berjaya diimport.', importFail: 'Fail sandaran tidak dapat dibaca.', resetConfirm: 'Padam semua kemajuan pada peranti ini? Tindakan ini tidak boleh dibatalkan.', resetDone: 'Kemajuan telah ditetapkan semula.',
    pinChanged: 'PIN ibu bapa telah dikemas kini.', pinCurrentWrong: 'PIN semasa tidak betul.', pinFormat: 'Sila gunakan tepat 4 digit.',
    skill_diri: 'Diri Saya', skill_keluarga: 'Keluarga', skill_sekolah: 'Di Sekolah', skill_masa: 'Masa & Rutin', skill_makanan: 'Makanan', skill_tempat: 'Tempat',
    sub_diri: 'Nama, umur dan perasaan', sub_keluarga: 'Orang di rumah', sub_sekolah: 'Kelas dan kawan', sub_masa: 'Hari dan kegiatan', sub_makanan: 'Rasa dan pilihan', sub_tempat: 'Arah dan perjalanan'
  },
  zh: {
    language: '语言', welcome: '欢迎', createCharacter: '创建你的学习角色', starterIntro: '接下来完成10道入门题，练习将从合适的程度开始。',
    nickname: '你的昵称是什么？', nameExample: '例如：Alya', gender: '性别', optional: '（选填）', female: '女生', male: '男生', preferNot: '不想说明',
    chooseAvatar: '选择你的头像', nameError: '请输入昵称。', startStarter: '开始10道入门题', localOnboarding: '⌂ 姓名、选择和答案只保存在此设备。',
    tagline: '每天学一点，天天闪耀', navToday: '今天', navSkills: '程度', navParents: '家长专区', savedHere: '保存在本机', todayAdventure: '今天的学习旅程', hello: '你好',
    heroText: '十道小题，向自信使用马来语迈进一大步。', microcopy: '约10分钟 · 不计时 · 可使用提示', questions: '题', dayStreak: '天连续学习',
    starCoins: '星星币', experience: '经验值', chooseMission: '选择任务', learnByTopic: '按主题学习', viewAll: '查看全部程度', learningMap: '学习地图',
    myLevels: '我的程度', skillsIntro: '复习仍在进步的主题，也为已掌握的内容庆祝。', masteryLegend: '掌握度根据此设备上的答题记录计算', privateSummary: '私人摘要',
    forParents: '家长专区', parentIntro: '所有资料只保存在此设备的浏览器中。', localOnly: '⌂ 仅限本机', learningSummary: '学习摘要', totalAnswered: '已答题数',
    overallAccuracy: '总正确率', strongestLevel: '最强项目', needsPractice: '需要更多练习', settings: '设置', displayName: '学生显示名称', save: '保存',
    changePin: '更改家长PIN', currentPin: '当前PIN', newPin: '新的4位PIN', savePin: '保存PIN', pinLocalNote: '初始PIN为1357。这只是此设备上的简易家长门锁。',
    exportProgress: '导出进度', importProgress: '导入进度', resetProgress: '重置进度', backupHelp: '请偶尔导出备份。清除网站数据或更换设备可能会删除已保存的进度。',
    conversationWeek: '本周对话', conversationTip: '请问：<strong>“Apakah makanan kegemaran kamu? Mengapa?”</strong> 先接受简短回答，再帮助孩子用 <em>kerana</em> 加上一个理由。',
    listen: '聆听', chooseAnswer: '选择正确答案。', next: '下一题', missionComplete: '任务完成！', wellDone: '做得好', correct: '答对', coins: '星星币', backHome: '返回主页',
    parentPinTitle: '家长访问', parentPinIntro: '请输入4位家长PIN以查看进度和设置。', parentPinLabel: '家长PIN', pinPlaceholder: '4位PIN', pinError: 'PIN不正确。', unlock: '解锁',
    learner: '学生', reviewToday: '复习今天内容', continueChallenge: '继续挑战', startChallenge: '开始挑战', shortPractice: '短练习，每题作答后都有说明。', practice: '练习',
    mastered: '已掌握', developing: '进步中', keepGoing: '继续努力', newLevel: '新内容', notAvailable: '暂未提供', starterTitle: '10道入门题', dailyTitle: '每日挑战', missionPrefix: '任务',
    feedbackCorrect: '答对了！太棒了！', feedbackTry: '差一点——一起学习吧。', starterComplete: '第一步完成！你的每日学习路径已准备好。', perfectComplete: '全部答对！你已准备好迎接下一个挑战。',
    practiceComplete: '每个答案都能帮助大脑学习。明天再来巩固吧。', audioUnavailable: '此浏览器无法播放语音。', nameSaved: '显示名称已保存在此设备。',
    importSuccess: '进度导入成功。', importFail: '无法读取该备份文件。', resetConfirm: '删除此设备上的所有进度？此操作无法撤销。', resetDone: '进度已重置。',
    pinChanged: '家长PIN已更新。', pinCurrentWrong: '当前PIN不正确。', pinFormat: '请输入正好4位数字。',
    skill_diri: '自我介绍', skill_keluarga: '家庭', skill_sekolah: '在学校', skill_masa: '时间与日常', skill_makanan: '食物', skill_tempat: '地点',
    sub_diri: '姓名、年龄和感受', sub_keluarga: '家里的人', sub_sekolah: '课堂与朋友', sub_masa: '日期与活动', sub_makanan: '味道与选择', sub_tempat: '方向与出行'
  }
};

const SKILLS = {
  diri: { title: 'Diri Saya', subtitle: 'Nama, umur dan perasaan', icon: '👋', color: '#5b4bdb', soft: '#eeebff' },
  keluarga: { title: 'Keluarga', subtitle: 'Orang di rumah', icon: '🏠', color: '#e47245', soft: '#fff0e8' },
  sekolah: { title: 'Di Sekolah', subtitle: 'Kelas dan kawan', icon: '🎒', color: '#318bbd', soft: '#e6f5fc' },
  masa: { title: 'Masa & Rutin', subtitle: 'Hari dan kegiatan', icon: '⏰', color: '#a36d13', soft: '#fff4cf' },
  makanan: { title: 'Makanan', subtitle: 'Rasa dan pilihan', icon: '🍜', color: '#2f9c72', soft: '#e5f6ef' },
  tempat: { title: 'Tempat', subtitle: 'Arah dan perjalanan', icon: '🚌', color: '#b55887', soft: '#faeaf2' },
};

const QUESTIONS = [
  { skill: 'diri', prompt: 'Apakah maksud “Nama saya Hana”?', options: ['My name is Hana', 'I live with Hana', 'Hana is my friend', 'I am ten'], answer: 0, explanation: '“Nama saya…” digunakan untuk memperkenalkan nama sendiri.' },
  { skill: 'diri', prompt: 'Lengkapkan: Saya ___ sebelas tahun.', options: ['umur', 'berumur', 'nama', 'tinggal'], answer: 1, explanation: 'Gunakan “berumur” apabila menyatakan umur.' },
  { skill: 'diri', prompt: 'Pilih jawapan untuk “Apa khabar?”', options: ['Saya sihat.', 'Nama saya Mei.', 'Di sekolah.', 'Pukul tiga.'], answer: 0, explanation: '“Apa khabar?” bertanya tentang keadaan seseorang.' },
  { skill: 'diri', prompt: 'Saya gembira. Apakah maksud “gembira”?', options: ['Happy', 'Hungry', 'Tired', 'Afraid'], answer: 0, explanation: '“Gembira” bermaksud happy.' },
  { skill: 'diri', prompt: 'Yang manakah kata ganti untuk “we” termasuk pendengar?', options: ['kami', 'kita', 'mereka', 'dia'], answer: 1, explanation: '“Kita” termasuk orang yang sedang bercakap dan orang yang mendengar.' },

  { skill: 'keluarga', prompt: 'Ibu kepada ibu saya ialah…', options: ['nenek', 'kakak', 'adik', 'ibu saudara'], answer: 0, explanation: 'Ibu kepada ibu atau ayah ialah nenek.' },
  { skill: 'keluarga', prompt: 'Pilih ayat yang betul.', options: ['Ini abang saya.', 'Ini saya abang.', 'Abang ini saya.', 'Saya ini abang.'], answer: 0, explanation: 'Susunan mudah: Ini + orang + saya.' },
  { skill: 'keluarga', prompt: '“Adik lelaki” bermaksud…', options: ['younger brother', 'older brother', 'younger sister', 'cousin'], answer: 0, explanation: 'Adik lelaki ialah younger brother.' },
  { skill: 'keluarga', prompt: 'Kami tinggal ___ Kuala Lumpur.', options: ['di', 'ke', 'dari', 'dan'], answer: 0, explanation: '“Di” menunjukkan tempat seseorang berada.' },
  { skill: 'keluarga', prompt: 'Ayah memasak ___ dapur.', options: ['di', 'ke', 'dari', 'tetapi'], answer: 0, explanation: 'Aktiviti berlaku “di dapur”.' },

  { skill: 'sekolah', prompt: 'Tempat kita meminjam buku ialah…', options: ['perpustakaan', 'kantin', 'padang', 'pejabat'], answer: 0, explanation: 'Kita meminjam dan membaca buku di perpustakaan.' },
  { skill: 'sekolah', prompt: 'Cikgu berkata, “Sila buka buku.” Apakah yang perlu dilakukan?', options: ['Open the book', 'Close the door', 'Stand up', 'Write your name'], answer: 0, explanation: '“Buka buku” bermaksud open the book.' },
  { skill: 'sekolah', prompt: 'Saya belajar Matematik ___ Bahasa Melayu.', options: ['dan', 'kerana', 'dari', 'ke'], answer: 0, explanation: '“Dan” menghubungkan dua perkara.' },
  { skill: 'sekolah', prompt: 'Pilih soalan yang sesuai: “Cikgu Farah.”', options: ['Siapakah guru kamu?', 'Di manakah buku?', 'Bilakah kelas bermula?', 'Mengapakah kamu lewat?'], answer: 0, explanation: '“Siapa” digunakan untuk bertanya tentang orang.' },
  { skill: 'sekolah', prompt: 'Kawan saya baik ___ suka membantu.', options: ['dan', 'ke', 'di', 'atau'], answer: 0, explanation: '“Dan” menyambungkan dua sifat atau perbuatan.' },

  { skill: 'masa', prompt: 'Hari selepas Isnin ialah…', options: ['Selasa', 'Ahad', 'Jumaat', 'Sabtu'], answer: 0, explanation: 'Urutan hari: Isnin, Selasa, Rabu.' },
  { skill: 'masa', prompt: 'Saya bangun tidur ___ pukul tujuh.', options: ['pada', 'kepada', 'daripada', 'dengan'], answer: 0, explanation: '“Pada” boleh digunakan sebelum waktu.' },
  { skill: 'masa', prompt: 'Apakah aktiviti yang biasanya dilakukan pada waktu malam?', options: ['tidur', 'bersarapan', 'pergi ke sekolah', 'makan tengah hari'], answer: 0, explanation: 'Kita biasanya tidur pada waktu malam.' },
  { skill: 'masa', prompt: 'Mula-mula saya mandi, ___ saya bersarapan.', options: ['kemudian', 'kerana', 'tetapi', 'atau'], answer: 0, explanation: '“Kemudian” menunjukkan aktiviti yang berlaku selepas itu.' },
  { skill: 'masa', prompt: '“Setiap hari” bermaksud…', options: ['every day', 'yesterday', 'next week', 'sometimes'], answer: 0, explanation: '“Setiap hari” bermaksud every day.' },

  { skill: 'makanan', prompt: 'Saya haus. Saya mahu…', options: ['minum air', 'makan nasi', 'membaca buku', 'menaiki bas'], answer: 0, explanation: 'Apabila haus, kita perlu minum.' },
  { skill: 'makanan', prompt: 'Pilih makanan yang rasanya manis.', options: ['kek', 'garam', 'cili', 'limau nipis'], answer: 0, explanation: 'Kek biasanya mempunyai rasa manis.' },
  { skill: 'makanan', prompt: 'Saya suka mi ___ saya tidak suka bubur.', options: ['tetapi', 'dan', 'di', 'ke'], answer: 0, explanation: '“Tetapi” menunjukkan dua idea yang berbeza.' },
  { skill: 'makanan', prompt: 'Berapa ___ epal yang kamu mahu?', options: ['biji', 'orang', 'ekor', 'helai'], answer: 0, explanation: '“Biji” ialah penjodoh bilangan yang biasa digunakan untuk buah.' },
  { skill: 'makanan', prompt: 'Makanan ini sedap ___ ibu memasaknya dengan baik.', options: ['kerana', 'atau', 'ke', 'dari'], answer: 0, explanation: '“Kerana” memberikan sebab.' },

  { skill: 'tempat', prompt: 'Saya pergi ___ sekolah dengan bas.', options: ['ke', 'di', 'dari', 'pada'], answer: 0, explanation: '“Ke” menunjukkan arah atau destinasi.' },
  { skill: 'tempat', prompt: 'Bas itu datang ___ Johor Bahru.', options: ['dari', 'ke', 'di', 'dan'], answer: 0, explanation: '“Dari” menunjukkan tempat asal.' },
  { skill: 'tempat', prompt: 'Bank berada di sebelah kiri. Ke arah manakah kamu perlu pergi?', options: ['Kiri', 'Kanan', 'Lurus', 'Belakang'], answer: 0, explanation: '“Sebelah kiri” bermaksud left side.' },
  { skill: 'tempat', prompt: 'Di manakah kita boleh membeli ubat?', options: ['farmasi', 'perpustakaan', 'stesen bas', 'taman'], answer: 0, explanation: 'Ubat biasanya dibeli di farmasi.' },
  { skill: 'tempat', prompt: 'Pilih arahan yang bermaksud “go straight”.', options: ['jalan terus', 'belok kiri', 'berhenti di sini', 'patah balik'], answer: 0, explanation: '“Jalan terus” bermaksud terus bergerak ke hadapan.' },
];

const defaultState = () => ({
  name: '',
  gender: '',
  avatar: '🦊',
  uiLanguage: 'en',
  parentPin: '1357',
  onboardingComplete: false,
  starterCompleted: false,
  xp: 0,
  coins: 0,
  streak: 0,
  lastPracticeDate: null,
  daily: {},
  skillStats: {},
});

let state = loadState();
let session = null;
let parentUnlocked = false;

function t(key) {
  return I18N[state.uiLanguage]?.[key] || I18N.en[key] || key;
}

function skillTitle(skill) {
  return t(`skill_${skill}`);
}

function skillSubtitle(skill) {
  return t(`sub_${skill}`);
}

function applyLanguage() {
  document.documentElement.lang = state.uiLanguage === 'zh' ? 'zh-Hans' : state.uiLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('.language-select').forEach((select) => { select.value = state.uiLanguage; });
}

function refreshInterface() {
  applyLanguage();
  renderDashboard();
  renderSkills();
  renderParent();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState(), ...saved, skillStats: saved?.skillStats || {}, daily: saved?.daily || {} };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function localDate(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toLocaleDateString('en-CA');
}

function masteryFor(skill) {
  const stats = state.skillStats[skill];
  if (!stats?.attempts) return 0;
  const accuracy = stats.correct / stats.attempts;
  const confidence = Math.min(stats.attempts / 8, 1);
  return Math.round(accuracy * confidence * 100);
}

function showView(name) {
  if (name === 'parent' && !parentUnlocked) {
    openParentPin();
    return;
  }
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === `${name}-view`));
  document.querySelectorAll('.nav-button').forEach((button) => button.classList.toggle('active', button.dataset.view === name));
  if (name === 'skills') renderSkills();
  if (name === 'parent') renderParent();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboard() {
  const displayName = state.name || t('learner');
  document.querySelectorAll('#profile-name, #welcome-name').forEach((el) => { el.textContent = displayName; });
  document.getElementById('profile-avatar').textContent = state.avatar || '🦊';
  document.getElementById('learner-name').value = state.name || '';
  document.getElementById('streak-value').textContent = state.streak;
  document.getElementById('coin-value').textContent = state.coins;
  document.getElementById('xp-value').textContent = state.xp;

  const today = state.daily[localDate()] || { answered: 0, correct: 0, complete: false };
  document.getElementById('daily-progress-number').textContent = `${today.answered || 0}/10`;
  document.getElementById('daily-orbit').style.setProperty('--progress', `${Math.min((today.answered || 0) * 10, 100)}%`);
  document.getElementById('daily-button-label').textContent = today.complete ? t('reviewToday') : today.answered ? t('continueChallenge') : t('startChallenge');

  const featured = ['diri', 'keluarga', 'sekolah'];
  document.getElementById('mission-grid').innerHTML = featured.map((key, index) => {
    const item = SKILLS[key];
    const mastery = masteryFor(key);
    return `<article class="mission-card" style="--accent:${item.color};--accent-soft:${item.soft}">
      <span class="mission-number">${item.icon}</span>
      <h3>${skillTitle(key)}</h3>
      <p>${skillSubtitle(key)}. ${t('shortPractice')}</p>
      <div class="mission-footer">
        <div class="mini-progress" aria-label="${mastery}% mastered"><span style="width:${mastery}%"></span></div>
        <button class="mission-start" data-start-skill="${key}">${t('practice')}</button>
      </div>
    </article>`;
  }).join('');

  document.querySelectorAll('[data-start-skill]').forEach((button) => {
    button.addEventListener('click', () => startSession('mission', button.dataset.startSkill));
  });
}

function renderSkills() {
  document.getElementById('skill-list').innerHTML = Object.entries(SKILLS).map(([key, item]) => {
    const mastery = masteryFor(key);
    const label = mastery >= 80 ? t('mastered') : mastery >= 45 ? t('developing') : mastery > 0 ? t('keepGoing') : t('newLevel');
    return `<article class="skill-row">
      <div class="skill-title"><span>${item.icon}</span><div><strong>${skillTitle(key)}</strong><small>${label} · ${mastery}%</small></div></div>
      <div class="skill-meter" aria-label="${mastery}% mastered"><span style="width:${mastery}%"></span></div>
      <button class="skill-action" data-start-skill="${key}">${t('practice')}</button>
    </article>`;
  }).join('');
  document.querySelectorAll('#skill-list [data-start-skill]').forEach((button) => {
    button.addEventListener('click', () => startSession('mission', button.dataset.startSkill));
  });
}

function renderParent() {
  const stats = Object.entries(state.skillStats).filter(([, value]) => value.attempts > 0);
  const totalAttempts = stats.reduce((sum, [, value]) => sum + value.attempts, 0);
  const totalCorrect = stats.reduce((sum, [, value]) => sum + value.correct, 0);
  const sorted = [...stats].sort((a, b) => masteryFor(b[0]) - masteryFor(a[0]));
  document.getElementById('total-attempts').textContent = totalAttempts;
  document.getElementById('overall-accuracy').textContent = totalAttempts ? `${Math.round(totalCorrect / totalAttempts * 100)}%` : '—';
  document.getElementById('strongest-skill').textContent = sorted.length ? skillTitle(sorted[0][0]) : t('notAvailable');
  document.getElementById('review-skill').textContent = sorted.length ? skillTitle(sorted.at(-1)[0]) : t('notAvailable');
}

function seededShuffle(items, seedText) {
  let seed = [...seedText].reduce((sum, char) => sum + char.charCodeAt(0), 0) || 1;
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function startSession(mode, skill = null) {
  const pool = mode === 'starter'
    ? STARTER_QUESTION_INDEXES.map((index) => QUESTIONS[index])
    : skill ? QUESTIONS.filter((question) => question.skill === skill) : QUESTIONS;
  const count = mode === 'starter' ? 10 : skill ? Math.min(5, pool.length) : 10;
  const seed = mode === 'daily' ? `${localDate()}-daily` : `${Date.now()}-${skill}`;
  session = {
    mode,
    skill,
    questions: seededShuffle(pool, seed).slice(0, count),
    index: 0,
    correct: 0,
    answered: false,
  };
  document.getElementById('practice-overlay').hidden = false;
  document.getElementById('question-screen').hidden = false;
  document.getElementById('completion-screen').hidden = true;
  document.body.style.overflow = 'hidden';
  renderQuestion();
}

function renderQuestion() {
  const question = session.questions[session.index];
  session.answered = false;
  document.getElementById('question-screen').scrollTop = 0;
  document.getElementById('practice-title').textContent = session.mode === 'starter'
    ? t('starterTitle')
    : session.mode === 'daily' ? t('dailyTitle') : `${t('missionPrefix')}: ${skillTitle(session.skill)}`;
  document.getElementById('question-count').textContent = `${session.index + 1} / ${session.questions.length}`;
  document.getElementById('practice-progress').style.width = `${session.index / session.questions.length * 100}%`;
  document.getElementById('session-score').textContent = session.correct;
  document.getElementById('question-skill').textContent = skillTitle(question.skill);
  document.getElementById('question-prompt').textContent = question.prompt;
  document.getElementById('feedback-box').hidden = true;
  const order = seededShuffle(question.options.map((option, index) => ({ option, index })), `${question.prompt}-${session.index}`);
  document.getElementById('answer-options').innerHTML = order.map(({ option, index }) =>
    `<button class="answer-option" data-answer="${index}">${option}</button>`
  ).join('');
  document.querySelectorAll('.answer-option').forEach((button) => {
    button.addEventListener('click', () => answerQuestion(Number(button.dataset.answer), button));
  });
}

function answerQuestion(selected, selectedButton) {
  if (session.answered) return;
  session.answered = true;
  const question = session.questions[session.index];
  const isCorrect = selected === question.answer;
  const stats = state.skillStats[question.skill] || { attempts: 0, correct: 0 };
  stats.attempts += 1;
  if (isCorrect) {
    stats.correct += 1;
    session.correct += 1;
  }
  state.skillStats[question.skill] = stats;
  state.xp += isCorrect ? 2 : 1;
  saveState();

  document.querySelectorAll('.answer-option').forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.answer) === question.answer) button.classList.add('correct');
  });
  if (!isCorrect) selectedButton.classList.add('wrong');
  document.getElementById('feedback-title').textContent = isCorrect ? t('feedbackCorrect') : t('feedbackTry');
  document.getElementById('feedback-text').textContent = question.explanation;
  document.getElementById('feedback-box').hidden = false;
  document.getElementById('session-score').textContent = session.correct;
  requestAnimationFrame(() => {
    const questionScreen = document.getElementById('question-screen');
    questionScreen.scrollTo({ top: questionScreen.scrollHeight, behavior: 'smooth' });
  });
}

function nextQuestion() {
  session.index += 1;
  if (session.index >= session.questions.length) completeSession();
  else renderQuestion();
}

function completeSession() {
  const coinsEarned = session.correct + 2;
  state.coins += coinsEarned;
  if (session.mode === 'daily') {
    const today = localDate();
    const previous = state.daily[today] || { answered: 0, correct: 0, complete: false };
    state.daily[today] = {
      answered: Math.max(previous.answered, session.questions.length),
      correct: Math.max(previous.correct, session.correct),
      complete: true,
    };
    if (state.lastPracticeDate !== today) {
      state.streak = state.lastPracticeDate === localDate(-1) ? state.streak + 1 : 1;
      state.lastPracticeDate = today;
    }
  } else if (session.mode === 'starter') {
    state.onboardingComplete = true;
    state.starterCompleted = true;
  }
  saveState();
  document.getElementById('question-screen').hidden = true;
  document.getElementById('completion-screen').hidden = false;
  document.getElementById('completion-name').textContent = state.name || t('learner');
  document.getElementById('completion-score').textContent = `${session.correct}/${session.questions.length}`;
  document.getElementById('completion-coins').textContent = `+${coinsEarned}`;
  document.getElementById('completion-message').textContent = session.mode === 'starter'
    ? t('starterComplete')
    : session.correct === session.questions.length
      ? t('perfectComplete')
      : t('practiceComplete');
}

function closePractice() {
  document.getElementById('practice-overlay').hidden = true;
  document.body.style.overflow = '';
  session = null;
  updateAppVisibility();
  renderDashboard();
}

function updateAppVisibility() {
  const isReady = Boolean(state.onboardingComplete);
  document.getElementById('onboarding-view').hidden = isReady;
  document.getElementById('app-header').hidden = !isReady;
  document.getElementById('app-main').hidden = !isReady;
  if (!isReady) {
    document.getElementById('onboarding-name').value = state.name === 'Pelajar' ? '' : state.name || '';
    document.querySelectorAll('input[name="gender"]').forEach((input) => { input.checked = input.value === state.gender; });
    document.querySelectorAll('.avatar-option').forEach((option) => {
      const selected = option.dataset.avatar === (state.avatar || '🦊');
      option.classList.toggle('selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
  }
}

function openParentPin() {
  const overlay = document.getElementById('parent-pin-overlay');
  document.getElementById('parent-pin-error').hidden = true;
  document.getElementById('parent-pin-input').value = '';
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('parent-pin-input').focus(), 0);
}

function closeParentPin() {
  document.getElementById('parent-pin-overlay').hidden = true;
  document.body.style.overflow = '';
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-view-link]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.viewLink)));
document.querySelectorAll('.language-select').forEach((select) => {
  select.addEventListener('change', () => {
    state.uiLanguage = ['en', 'ms', 'zh'].includes(select.value) ? select.value : 'en';
    saveState();
    refreshInterface();
  });
});
document.getElementById('start-daily').addEventListener('click', () => startSession('daily'));
document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('close-practice').addEventListener('click', closePractice);
document.getElementById('finish-session').addEventListener('click', closePractice);
document.getElementById('speak-question').addEventListener('click', () => {
  if (!session || !('speechSynthesis' in window)) return showToast(t('audioUnavailable'));
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(session.questions[session.index].prompt);
  utterance.lang = 'ms-MY';
  utterance.rate = 0.83;
  speechSynthesis.speak(utterance);
});

document.getElementById('save-name').addEventListener('click', () => {
  const name = document.getElementById('learner-name').value.trim();
  state.name = name;
  saveState();
  renderDashboard();
  showToast(t('nameSaved'));
});

document.getElementById('parent-pin-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('parent-pin-input');
  if (input.value !== state.parentPin) {
    document.getElementById('parent-pin-error').hidden = false;
    input.select();
    return;
  }
  parentUnlocked = true;
  closeParentPin();
  showView('parent');
});

document.getElementById('close-parent-pin').addEventListener('click', closeParentPin);

document.getElementById('save-parent-pin').addEventListener('click', () => {
  const current = document.getElementById('current-parent-pin');
  const next = document.getElementById('new-parent-pin');
  if (current.value !== state.parentPin) {
    showToast(t('pinCurrentWrong'));
    current.select();
    return;
  }
  if (!/^\d{4}$/.test(next.value)) {
    showToast(t('pinFormat'));
    next.select();
    return;
  }
  state.parentPin = next.value;
  saveState();
  current.value = '';
  next.value = '';
  showToast(t('pinChanged'));
});

document.getElementById('export-progress').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify({ app: 'Bahasa Bintang', version: 1, exportedAt: new Date().toISOString(), progress: state }, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `bahasa-bintang-backup-${localDate()}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
});

document.getElementById('import-progress').addEventListener('change', async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!data.progress || data.app !== 'Bahasa Bintang') throw new Error('Invalid backup');
    state = { ...defaultState(), ...data.progress };
    saveState();
    renderDashboard();
    renderParent();
    updateAppVisibility();
    parentUnlocked = false;
    applyLanguage();
    showToast(t('importSuccess'));
  } catch {
    showToast(t('importFail'));
  }
  event.target.value = '';
});

document.getElementById('reset-progress').addEventListener('click', () => {
  if (!window.confirm(t('resetConfirm'))) return;
  state = defaultState();
  parentUnlocked = false;
  saveState();
  updateAppVisibility();
  refreshInterface();
  showToast(t('resetDone'));
});

document.querySelectorAll('.avatar-option').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.avatar-option').forEach((option) => {
      const selected = option === button;
      option.classList.toggle('selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
  });
});

document.getElementById('onboarding-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('onboarding-name').value.trim();
  if (!name) {
    document.getElementById('onboarding-error').hidden = false;
    document.getElementById('onboarding-name').focus();
    return;
  }
  document.getElementById('onboarding-error').hidden = true;
  state.name = name;
  state.gender = document.querySelector('input[name="gender"]:checked')?.value || '';
  state.avatar = document.querySelector('.avatar-option.selected')?.dataset.avatar || '🦊';
  saveState();
  document.getElementById('onboarding-view').hidden = true;
  startSession('starter');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !document.getElementById('practice-overlay').hidden) closePractice();
  else if (event.key === 'Escape' && !document.getElementById('parent-pin-overlay').hidden) closeParentPin();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}

updateAppVisibility();
refreshInterface();
