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
function handleLocationAction() {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Checks if user is logged in

  if (isLoggedIn === 'true') {
    // USER IS LOGGED IN: Run the location detection
    detectLocation();
  } else {
    // USER IS NOT LOGGED IN: Redirect to login or show a message
    alert("Please login first to access nearby hospital tracking.");
    window.location.href = 'login.html'; // Change this to your actual login page URL
  }
}

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

      // 1. Define the Google Maps URL
      const mapUrl = `https://www.google.com/maps/search/hospital/@$${latitude},${longitude},15z`;

      // 2. Fetch the name of the village/town
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
        .then(r => r.json())
        .then(data => {
          const loc =
            data.address.village ||
            data.address.town ||
            data.address.city ||
            data.address.state ||
            'Location detected';

          document.getElementById('inputLocation').value = loc;
          btn.className = 'location-btn detected';
          btn.textContent = `✅ ${loc} (View Hospitals)`;

          // 3. Make the button open Google Maps when clicked again
          btn.onclick = () => window.open(mapUrl, '_blank');
        })
        .catch(() => {
          document.getElementById('inputLocation').value = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          btn.className = 'location-btn detected';
          btn.textContent = '✅ Location detected';
          btn.onclick = () => window.open(mapUrl, '_blank');
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

/* ─── VOICE INPUT (home search bar) ─── */
let homeRec = null;
let homeListening = false;

function toggleVoice() {
  if (homeListening) {
    homeRec && homeRec.stop();
    homeListening = false;
    return;
  }
  homeRec = createVoiceRecognition('mainSearch', 'voiceBtn');
  if (homeRec) {
    homeRec.onend = () => {
      homeListening = false;
      const btn = document.getElementById('voiceBtn');
      if (btn) { btn.classList.remove('listening'); btn.textContent = '🎙️'; }
    };
    homeRec.start();
    homeListening = true;
  }
}

/* ─── MOBILE MENU PLACEHOLDER ─── */
function toggleMenu() {
  // Future: slide-in mobile nav
}

/* ─── AUTO-OPEN LOGIN AFTER 5s ─── */
// window.addEventListener('load', () => {
//   // If user is not already stored in session, show login after 4 seconds
//   const existingPatient = sessionStorage.getItem('patient');
//   if (!existingPatient) {
//     setTimeout(() => {
//       // Only open if modal element exists
//       const modal = document.getElementById('loginModal');
//       if (modal && !modal.classList.contains('active')) {
//         openModal();
//       }
//     }, 4000);
//   }
// });
