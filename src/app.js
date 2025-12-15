
import quiz from './quiz.js';

let i = 0, score = 0, timerId = null, t = 0;

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
  // baseline color
  fill.style.background = 'linear-gradient(90deg, var(--accent), #66b2ff)';
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

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.addEventListener('click', () => answer(idx, q.bonne_reponse, btn));
    optionsDiv.appendChild(btn);
  });

  updateProgress();
  startTimer(q.timer || quiz.timer);
}

// --- Confetti animation (Christmas palette) ---
function fireConfetti(durationMs = 1600, count = 140) {
  // container
  let container = document.getElementById('confetti');
  if (!container) {
    container = document.createElement('div');
    container.id = 'confetti';
    container.className = 'confetti-container';
    document.body.appendChild(container);
  }
  // Christmas colors: red, green, gold, white, silver
  const colors = ['#C62828','#2E7D32','#FFD54F','#FFFFFF','#B0BEC5','#8B0000','#006400'];
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
  // cleanup
  setTimeout(() => {
    if (container) container.innerHTML = '';
  }, durationMs + 600);
}

// --- Star pop near the correct answer button ---
function spawnStarAtElement(el) {
  const rect = el.getBoundingClientRect();
  const star = document.createElement('div');
  star.className = 'star-pop';
  star.textContent = '⭐';
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
    spawnStarAtElement(btn);
    fireConfetti();
  } else {
    btn.classList.add('wrong');
  }
  document.getElementById('score').textContent = `Score: ${score}`;
}

function next() { i = (i + 1) % quiz.questions.length; showQuestion(); }
function reset() { i = 0; score = 0; document.getElementById('score').textContent = `Score: ${score}`; showQuestion(); }

export function init() {
  document.getElementById('info').textContent = `${quiz.titre} — ${quiz.description}`;
  document.getElementById('nextBtn').addEventListener('click', next);
  document.getElementById('resetBtn').addEventListener('click', reset);
  showQuestion();
}
