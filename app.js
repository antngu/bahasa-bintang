const STORAGE_KEY = 'bahasa-bintang-progress-v1';

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
  name: 'Pelajar',
  xp: 0,
  coins: 0,
  streak: 0,
  lastPracticeDate: null,
  daily: {},
  skillStats: {},
});

let state = loadState();
let session = null;

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
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === `${name}-view`));
  document.querySelectorAll('.nav-button').forEach((button) => button.classList.toggle('active', button.dataset.view === name));
  if (name === 'skills') renderSkills();
  if (name === 'parent') renderParent();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboard() {
  document.querySelectorAll('#profile-name, #welcome-name').forEach((el) => { el.textContent = state.name; });
  document.getElementById('learner-name').value = state.name === 'Pelajar' ? '' : state.name;
  document.getElementById('streak-value').textContent = state.streak;
  document.getElementById('coin-value').textContent = state.coins;
  document.getElementById('xp-value').textContent = state.xp;

  const today = state.daily[localDate()] || { answered: 0, correct: 0, complete: false };
  document.getElementById('daily-progress-number').textContent = `${today.answered || 0}/10`;
  document.getElementById('daily-orbit').style.setProperty('--progress', `${Math.min((today.answered || 0) * 10, 100)}%`);
  document.getElementById('daily-button-label').textContent = today.complete ? 'Ulang kaji hari ini' : today.answered ? 'Sambung cabaran' : 'Mulakan cabaran';

  const featured = ['diri', 'keluarga', 'sekolah'];
  document.getElementById('mission-grid').innerHTML = featured.map((key, index) => {
    const item = SKILLS[key];
    const mastery = masteryFor(key);
    return `<article class="mission-card" style="--accent:${item.color};--accent-soft:${item.soft}">
      <span class="mission-number">${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.subtitle}. Latihan pendek dengan penerangan segera.</p>
      <div class="mission-footer">
        <div class="mini-progress" aria-label="${mastery}% mastered"><span style="width:${mastery}%"></span></div>
        <button class="mission-start" data-start-skill="${key}">Latih ${index + 1}</button>
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
    const label = mastery >= 80 ? 'Dikuasai' : mastery >= 45 ? 'Berkembang' : mastery > 0 ? 'Teruskan' : 'Baharu';
    return `<article class="skill-row">
      <div class="skill-title"><span>${item.icon}</span><div><strong>${item.title}</strong><small>${label} · ${mastery}%</small></div></div>
      <div class="skill-meter" aria-label="${mastery}% mastered"><span style="width:${mastery}%"></span></div>
      <button class="skill-action" data-start-skill="${key}">Latih</button>
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
  document.getElementById('strongest-skill').textContent = sorted.length ? SKILLS[sorted[0][0]].title : 'Belum tersedia';
  document.getElementById('review-skill').textContent = sorted.length ? SKILLS[sorted.at(-1)[0]].title : 'Belum tersedia';
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
  const pool = skill ? QUESTIONS.filter((question) => question.skill === skill) : QUESTIONS;
  const count = skill ? Math.min(5, pool.length) : 10;
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
  document.getElementById('practice-title').textContent = session.mode === 'daily' ? 'Cabaran Harian' : `Misi: ${SKILLS[session.skill].title}`;
  document.getElementById('question-count').textContent = `${session.index + 1} / ${session.questions.length}`;
  document.getElementById('practice-progress').style.width = `${session.index / session.questions.length * 100}%`;
  document.getElementById('session-score').textContent = session.correct;
  document.getElementById('question-skill').textContent = SKILLS[question.skill].title;
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
  document.getElementById('feedback-title').textContent = isCorrect ? 'Betul! Hebat!' : 'Hampir betul — mari lihat.';
  document.getElementById('feedback-text').textContent = question.explanation;
  document.getElementById('feedback-box').hidden = false;
  document.getElementById('session-score').textContent = session.correct;
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
  }
  saveState();
  document.getElementById('question-screen').hidden = true;
  document.getElementById('completion-screen').hidden = false;
  document.getElementById('completion-name').textContent = state.name;
  document.getElementById('completion-score').textContent = `${session.correct}/${session.questions.length}`;
  document.getElementById('completion-coins').textContent = `+${coinsEarned}`;
  document.getElementById('completion-message').textContent = session.correct === session.questions.length
    ? 'Semua betul! Kamu sudah bersedia untuk cabaran seterusnya.'
    : 'Setiap jawapan membantu otak belajar. Datang semula esok untuk menguatkannya.';
}

function closePractice() {
  document.getElementById('practice-overlay').hidden = true;
  document.body.style.overflow = '';
  session = null;
  renderDashboard();
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
document.getElementById('start-daily').addEventListener('click', () => startSession('daily'));
document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('close-practice').addEventListener('click', closePractice);
document.getElementById('finish-session').addEventListener('click', closePractice);
document.getElementById('speak-question').addEventListener('click', () => {
  if (!session || !('speechSynthesis' in window)) return showToast('Audio tidak tersedia pada pelayar ini.');
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(session.questions[session.index].prompt);
  utterance.lang = 'ms-MY';
  utterance.rate = 0.83;
  speechSynthesis.speak(utterance);
});

document.getElementById('save-name').addEventListener('click', () => {
  const name = document.getElementById('learner-name').value.trim();
  state.name = name || 'Pelajar';
  saveState();
  renderDashboard();
  showToast('Nama paparan telah disimpan pada peranti ini.');
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
    showToast('Kemajuan berjaya diimport.');
  } catch {
    showToast('Fail sandaran tidak dapat dibaca.');
  }
  event.target.value = '';
});

document.getElementById('reset-progress').addEventListener('click', () => {
  if (!window.confirm('Padam semua kemajuan pada peranti ini? Tindakan ini tidak boleh dibatalkan.')) return;
  state = defaultState();
  saveState();
  renderDashboard();
  renderParent();
  showToast('Kemajuan telah ditetapkan semula.');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !document.getElementById('practice-overlay').hidden) closePractice();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}

renderDashboard();
