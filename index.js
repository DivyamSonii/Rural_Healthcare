/* ============================================================
   AarogyaPath – Home Page Logic  (index.js)
   Depends on: shared.js
   ============================================================ */

/* ─── NAVBAR SCROLL SHADOW ─── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ─── LOGIN MODAL ─── */
function openModal() {
  document.getElementById('loginModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('loginModal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target === e.currentTarget) closeModal();
}

/* ─── GEOLOCATION ─── */
function detectLocation() {
  const btn = document.getElementById('locationBtn');
  btn.textContent = '📡 Detecting...';

  if (!navigator.geolocation) {
    btn.textContent = '📍 Detect My Location Automatically';
    alert('Geolocation is not supported in this browser.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      // Reverse geocode via OpenStreetMap Nominatim
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
        .then(r => r.json())
        .then(data => {
          const loc =
            data.address.village ||
            data.address.town    ||
            data.address.city    ||
            data.address.state   ||
            'Location detected';
          document.getElementById('inputLocation').value = loc;
          btn.className   = 'location-btn detected';
          btn.textContent = `✅ ${loc}`;
        })
        .catch(() => {
          document.getElementById('inputLocation').value = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          btn.className   = 'location-btn detected';
          btn.textContent = '✅ Location detected';
        });
    },
    () => {
      btn.textContent = '📍 Detect My Location Automatically';
      alert('Could not detect location. Please type your village / town name.');
    }
  );
}

/* ─── LOGIN FORM SUBMIT ─── */
function submitLogin() {
  const name = document.getElementById('inputName').value.trim();
  const age = document.getElementById('inputAge').value.trim();
  const gender = document.getElementById('inputGender').value;
  const location = document.getElementById('inputLocation').value.trim();

  if (!name || !age || !gender) {
    alert('Please fill in your name, age, and gender to continue.');
    return;
  }

  // Persist to session so solution.html can read it too
  sessionStorage.setItem('patient', JSON.stringify({ name, age, gender, location }));

  // Update navbar badge immediately
  document.getElementById('patientName').textContent = name;
  document.getElementById('patientMeta').textContent = `${age}y · ${gender}`;
  document.getElementById('patientAvatar').textContent = name.charAt(0).toUpperCase();

  closeModal();
}

/* ─── SYMPTOM SEARCH BAR ─── */
function handleSearch(e) {
  if (e.key === 'Enter') doSearch();
}

function doSearch() {
  const q = document.getElementById('mainSearch').value.trim();
  window.location.href = q
    ? `solution.html?q=${encodeURIComponent(q)}`
    : 'solution.html';
}

function fillSearch(text) {
  const el = document.getElementById('mainSearch');
  el.value = text;
  el.focus();
}

function goToSymptom(symptom) {
  window.location.href = `solution.html?q=${encodeURIComponent(symptom)}`;
}

/* ─── MOBILE MENU PLACEHOLDER ─── */
function toggleMenu() {
  // Future: slide-in mobile nav
}

/* ─── VOICE INPUT (home search bar) ─── */
let homeRec       = null;
let homeListening = false;

function toggleVoice() {
  if (homeListening) {
    homeRec && homeRec.stop();
    homeListening = false;
    return;
  }
  homeRec = createVoiceRecognition('mainSearch', 'voiceBtn');
  if (homeRec) {
    const previousOnResult = homeRec.onresult;
    homeRec.onresult = (event) => {
      if (typeof previousOnResult === 'function') previousOnResult(event);
      const text = Array.from(event.results || [])
        .map((result) => result[0] && result[0].transcript ? result[0].transcript : '')
        .join(' ')
        .trim();
      if (text) homeVoiceTranscript = text;
    };

    homeRec.onend = () => {
      homeListening = false;
      const btn = document.getElementById('voiceBtn');
      if (btn) { btn.classList.remove('listening'); btn.textContent = '🎙️'; }
    };
    homeRec.start();
    homeListening = true;
  }
}

/* ─── AUTO-OPEN LOGIN AFTER 4s ─── */
window.addEventListener('load', () => {
  const existingPatient = sessionStorage.getItem('patient');
  if (!existingPatient) {
    setTimeout(() => {
      const modal = document.getElementById('loginModal');
      if (modal && !modal.classList.contains('active')) {
        openModal();
      }
    }, 4000);
  }
});
