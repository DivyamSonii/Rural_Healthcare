/* ============================================================
   AarogyaPath – Shared JavaScript  (shared.js)
   Used by: index.html, solution.html
   ============================================================ */

/* ─── SCROLL REVEAL ─── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
})();

// /* ─── LANGUAGE PLACEHOLDERS ─── */
// const PLACEHOLDERS = {
//   en: { search: 'Describe your symptoms..."', chat: 'Describe your symptoms here...' },
//   hi: { search: 'अपने लक्षण बताएं..."', chat: 'अपने लक्षण यहाँ लिखें...' },
// };

function changeLanguage(lang) {
  const phrases = PLACEHOLDERS[lang] || PLACEHOLDERS.en;
  const searchEl = document.getElementById('mainSearch') || document.getElementById('topSearch');
  const chatEl = document.getElementById('chatInput');
  if (searchEl) searchEl.placeholder = phrases.search;
  if (chatEl) chatEl.placeholder = phrases.chat;
}

/* ─── PATIENT BADGE (shared across pages via sessionStorage) ─── */
function loadPatientBadge() {
  const stored = sessionStorage.getItem('patient');
  if (!stored) return;
  const p = JSON.parse(stored);
  const nameEl = document.getElementById('patientName');
  const metaEl = document.getElementById('patientMeta');
  const avatarEl = document.getElementById('patientAvatar');
  if (nameEl) nameEl.textContent = p.name;
  if (metaEl) metaEl.textContent = `${p.age}y · ${p.gender}`;
  if (avatarEl) avatarEl.textContent = p.name.charAt(0).toUpperCase();
}

window.addEventListener('load', loadPatientBadge);


/* ─── VOICE INPUT FACTORY ─── */
function createVoiceRecognition(inputId, btnId, onResult) {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Voice input is not supported in this browser. Please type your symptoms.');
    return null;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const r = new SR();
  r.continuous = false;
  r.lang = 'en-IN';
  r.interimResults = true;

  r.onstart = () => {
    const btn = document.getElementById(btnId);
    if (btn) { btn.classList.add('listening'); btn.textContent = '🔴'; }
  };
  r.onresult = (e) => {
    const transcript = Array.from(e.results).map(r => r[0].transcript).join('');
    const input = document.getElementById(inputId);
    if (input) input.value = transcript;
    if (typeof onResult === 'function') onResult(transcript);
  };
  r.onend = () => {
    const btn = document.getElementById(btnId);
    if (btn) { btn.classList.remove('listening'); btn.textContent = '🎙️'; }
  };
  return r;
}

