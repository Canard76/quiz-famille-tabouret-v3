
import quiz from './quiz.js';

let i = 0, score = 0, timerId = null, t = 0;
let starCount = 0; // cumulative stars
const jokersUsed = { '5050': false, '+10s': false, 'indice': false };
let jokersTotalUsed = 0;
const JOKERS_LIMIT = (quiz.jokers && quiz.jokers.per_game_total_limit) ? quiz.jokers.per_game_total_limit : 2;
let currentTheme = 'halloween';

function setTheme(theme) {
  currentTheme = theme;
  const body = document.body;
  body.classList.remove('theme-halloween','theme-noel');
  body.classList.add(theme === 'noel' ? 'theme-noel' : 'theme-halloween');
}

function initThemeToggle() {
  const sel = document.getElementById('themeSelect');
  if (!sel) return;
  sel.value = currentTheme;
  sel.addEventListener('change', (e) => setTheme(e.target.value));
}

function updateStars() {
  const el = document.getElementById('stars');
  if (el) el.textContent = `Étoiles: ${starCount}`;
}

function updateProgress() {
  const total = quiz.questions.length;
  const current = i + 1; // 1-based for display
  const pct = Math.round((current / total) * 100);
  const bar = document.getElementById('progressBar');
  const label = document.getElementById('progressLabel');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = `Question ${current} / ${total} (${pct}%)`;
}

function updateTimerBar(duration, remaining, warnAt, warnColor) {
  const fill = document.getElementById('timerBarFill');
  if (!fill) return;
  const pct = Math.max(0, Math.min(100, Math.round((remaining / duration) * 100)));
  fill.style.width = pct + '%';
  // baseline color (uses CSS variables for theme)
  fill.style.background = 'linear-gradient(90deg, var(--accent), var(--accent2))';
  if (remaining <= warnAt) {
    fill.style.background = `linear-gradient(90deg, ${warnColor}, #ff9f9f)`;
  }
}

function startTimer(cfg) {
  stopTimer();
  t = cfg.duration_seconds;
  const timerEl = document.getElementById('timer');
  const warnAt = cfg.warning_last_seconds;
  const warnColor = cfg.warning_color || 'red';
  timerEl.classList.remove('warn');
  timerEl.style.color = '';
  timerEl.textContent = t;
  updateTimerBar(cfg.duration_seconds, t, warnAt, warnColor);
  timerId = setInterval(() => {
    t--; timerEl.textContent = t;
    updateTimerBar(cfg.duration_seconds, t, warnAt, warnColor);
    if (t <= warnAt) {
      timerEl.classList.add('warn');
      timerEl.style.color = warnColor;
    }
    if (t <= 0) {
      stopTimer();
      for (const b of document.querySelectorAll('#options button')) b.disabled = true;
    }
  }, 1000);
}

function stopTimer(){ if (timerId) { clearInterval(timerId); timerId = null; } }

function showQuestion() {
  const q = quiz.questions[i];
  const status = document.getElementById('status');
  status.textContent = `Catégorie: ${q.categorie} — Difficulté: ${q.difficulte}`;
  document.getElementById('question').textContent = q.question;
  document.getElementById('hint').textContent = '';

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.addEventListener('click', () => answer(idx, q.bonne_reponse, btn));
    optionsDiv.appendChild(btn);
  });

  // reset joker buttons enabled state (keep disabled if already used or limit reached)
  refreshJokerButtons();

  updateProgress();
  startTimer(q.timer || quiz.timer);
}

function refreshJokerButtons() {
  const disabledAll = jokersTotalUsed >= JOKERS_LIMIT;
  for (const id of Object.keys(jokersUsed)) {
    const el = document.getElementById('joker-' + id);
    if (!el) continue;
    el.disabled = jokersUsed[id] || disabledAll;
  }
  const cap = document.getElementById('joker-cap');
  if (cap) cap.textContent = `Jokers utilisés: ${jokersTotalUsed} / ${JOKERS_LIMIT}`;
}

// --- Confetti animation depending on theme ---
function getThemeColors() {
  if (currentTheme === 'noel') {
    return ['#C62828','#2E7D32','#FFD54F','#FFFFFF','#B0BEC5','#8B0000','#006400'];
  }
  // halloween default
  return ['#FF6A00','#6A4C93','#212121','#39FF14','#FFFFFF','#FF8C00','#9c27b0'];
}

function fireConfetti(durationMs = 1600, count = 140) {
  let container = document.getElementById('confetti');
  if (!container) {
    container = document.createElement('div');
    container.id = 'confetti';
    container.className = 'confetti-container';
    document.body.appendChild(container);
  }
  const colors = getThemeColors();
  const shapes = ['square','circle','triangle'];
  for (let k = 0; k < count; k++) {
    const p = document.createElement('div');
    p.className = 'confetti';
    const color = colors[Math.floor(Math.random()*colors.length)];
    const shape = shapes[Math.floor(Math.random()*shapes.length)];
    const left = Math.random()*100; // vw
    const size = 6 + Math.random()*10; // px
    const delay = Math.random()*0.4; // s
    const rot = Math.random()*360;
    p.style.left = left + 'vw';
    p.style.setProperty('--c', color);
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.animationDelay = delay + 's';
    p.style.transform = `rotate(${rot}deg)`;
    p.dataset.shape = shape;
    container.appendChild(p);
  }
  setTimeout(() => { if (container) container.innerHTML = ''; }, durationMs + 600);
}

function spawnStarAtElement(el) {
  const rect = el.getBoundingClientRect();
  const star = document.createElement('div');
  star.className = 'star-pop';
  star.textContent = currentTheme === 'noel' ? '⭐' : '🎃';
  star.style.left = (rect.left + rect.width/2) + 'px';
  star.style.top = (rect.top) + 'px';
  document.body.appendChild(star);
  setTimeout(() => { star.remove(); }, 1400);
}

function answer(choice, correctIdx, btn) {
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach(b => b.disabled = true);
  stopTimer();
  buttons.forEach((b, idx) => { if (idx === correctIdx) b.classList.add('correct'); });
  if (choice === correctIdx) {
    btn.classList.add('correct');
    score++;
    starCount++;
    updateStars();
    spawnStarAtElement(btn);
    fireConfetti();
  } else {
    btn.classList.add('wrong');
  }
  document.getElementById('score').textContent = `Score: ${score}`;
}

function next() { i = (i + 1) % quiz.questions.length; showQuestion(); }
function reset() {
  i = 0; score = 0; starCount = 0; jokersTotalUsed = 0; for (const k in jokersUsed) jokersUsed[k] = false;
  document.getElementById('score').textContent = `Score: ${score}`;
  updateStars(); refreshJokerButtons(); showQuestion();
}

// --- Jokers ---
function consumeJokerAndCheckLimit(buttonId) {
  if (jokersTotalUsed >= JOKERS_LIMIT) return false;
  jokersTotalUsed++;
  const btn = document.getElementById(buttonId);
  if (btn) btn.disabled = true;
  refreshJokerButtons();
  return true;
}

function use5050() {
  if (jokersUsed['5050']) return; if (!consumeJokerAndCheckLimit('joker-5050')) return; jokersUsed['5050'] = true;
  const q = quiz.questions[i];
  const correct = q.bonne_reponse;
  const buttons = Array.from(document.querySelectorAll('#options button'));
  const wrongIndices = buttons.map((_, idx) => idx).filter(idx => idx !== correct);
  // Randomly choose 2 wrongs
  const shuffled = wrongIndices.sort(() => Math.random() - 0.5).slice(0,2);
  for (let r of shuffled) { buttons[r].disabled = true; buttons[r].classList.add('eliminated'); }
}

function usePlus10s() {
  if (jokersUsed['+10s']) return; if (!consumeJokerAndCheckLimit('joker-+10s')) return; jokersUsed['+10s'] = true;
  t = t + 10; const timerEl = document.getElementById('timer'); timerEl.textContent = t;
}

function useHint() {
  if (jokersUsed['indice']) return; if (!consumeJokerAndCheckLimit('joker-indice')) return; jokersUsed['indice'] = true;
  const q = quiz.questions[i];
  const hintEl = document.getElementById('hint');
  hintEl.textContent = 'Indice: ' + (q.indice || "Pas d'indice pour cette question.");
}

export function init() {
  setTheme('halloween');
  initThemeToggle();
  updateStars();
  document.getElementById('nextBtn').addEventListener('click', next);
  document.getElementById('resetBtn').addEventListener('click', reset);
  // Joker buttons
  const j5050 = document.getElementById('joker-5050'); if (j5050) j5050.addEventListener('click', use5050);
  const j10s  = document.getElementById('joker-+10s'); if (j10s)  j10s.addEventListener('click', usePlus10s);
  const jHint = document.getElementById('joker-indice'); if (jHint) jHint.addEventListener('click', useHint);
  showQuestion();
}
