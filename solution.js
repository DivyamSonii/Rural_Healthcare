/* ============================================================
   AarogyaPath – Solution Page Logic  (solution.js)
   Depends on: shared.js
   ============================================================ */

/* ─── SYMPTOM DATABASE ─── */
const SYMPTOM_DB = {
  fever: {
    title: 'Fever / High Temperature',
    icon: '🌡️', iconBg: '#fef3c7', urgency: 'medium',
    summary: 'A fever above 38°C (100.4°F) usually means your body is fighting an infection — viral (like flu), bacterial, or parasitic (like malaria).',
    causes: ['Viral infections (flu, dengue, COVID-19)', 'Bacterial infections (typhoid, UTI)', 'Malaria (if in high-risk area)', 'Heat exhaustion', 'Post-vaccination reaction'],
    actions: ['Rest in a cool, well-ventilated place', 'Drink plenty of water (ORS if dehydrated)', 'Take paracetamol for high fever (≥38.5°C)', 'Remove extra clothing / blankets', 'Sponge forehead with lukewarm water', 'Monitor every 4 hours'],
    doctor: ['Fever above 39.5°C that does not reduce', 'Fever lasting more than 3 days', 'Fever with rash, stiff neck, or confusion', 'Child under 2 years with any fever', 'Signs of severe dehydration (no urine)']
  },
  headache: {
    title: 'Headache',
    icon: '🤕', iconBg: '#ede9fe', urgency: 'low',
    summary: 'Most headaches are tension-type (stress, dehydration, eye strain) or migraine. Rarely, a sudden severe headache can indicate something serious.',
    causes: ['Dehydration or skipping meals', 'Stress and lack of sleep', 'Eye strain (screen use)', 'Migraine', 'High blood pressure', 'Viral illness'],
    actions: ['Drink 2–3 glasses of water', 'Rest in a quiet, dark room', 'Apply cold or warm compress on forehead', 'Gentle neck stretches', 'Paracetamol if pain is moderate', 'Avoid bright screens for 1 hour'],
    doctor: ['Sudden "thunderclap" headache (worst ever)', 'Headache with fever + stiff neck', 'Headache after a head injury', 'Persistent headache for more than 2 weeks', 'Headache with vision changes or vomiting']
  },
  chest: {
    title: 'Chest Pain',
    icon: '💔', iconBg: '#fee2e2', urgency: 'high',
    summary: 'Chest pain requires immediate attention. It can range from muscle pain or acidity to serious cardiac conditions. Do not ignore.',
    causes: ['Acidity / GERD (very common)', 'Muscle strain', 'Anxiety or panic attack', 'Angina (reduced blood flow to heart)', 'Heart attack (medical emergency)', 'Pulmonary embolism (clot in lung)'],
    actions: ['Sit down and rest immediately', 'Loosen tight clothing', 'Chew an aspirin if cardiac event suspected and not allergic', 'Do NOT exert yourself', 'Note duration, location, and triggers', 'Call 108 if pain is crushing or spreads to arm/jaw'],
    doctor: ['ANY chest pain lasting more than 5 minutes', 'Pain spreading to arm, jaw, or back', 'Chest pain with sweating, nausea, or dizziness', 'Difficulty breathing with chest pain', 'SEEK EMERGENCY CARE IMMEDIATELY']
  },
  diarrhoea: {
    title: 'Diarrhoea / Loose Motions',
    icon: '🤢', iconBg: '#d1fae5', urgency: 'medium',
    summary: 'Diarrhoea is common in rural areas due to contaminated water or food. The biggest risk is dehydration — especially dangerous for children and elderly.',
    causes: ['Contaminated water or food', 'Rotavirus or norovirus', 'Bacterial infection (E. coli, salmonella)', 'Parasites (Giardia, amoeba)', 'Lactose intolerance'],
    actions: ['Start ORS (Oral Rehydration Salts) immediately', 'Give ORS every time child passes loose motion', 'Continue breastfeeding for infants', 'Eat plain soft foods (rice, banana, curd)', 'Wash hands thoroughly with soap', 'Boil drinking water'],
    doctor: ['More than 10 loose motions in a day', 'Blood or mucus in stool', 'Signs of severe dehydration (no urine, sunken eyes)', 'Child not drinking/eating anything', 'High fever along with diarrhoea', 'Symptoms lasting more than 5 days']
  },
  cough: {
    title: 'Cough & Cold',
    icon: '😷', iconBg: '#dbeafe', urgency: 'low',
    summary: 'Most coughs are caused by common viral infections and resolve on their own. However, a cough lasting more than 2 weeks needs medical evaluation (possible TB).',
    causes: ['Common cold (rhinovirus)', 'Flu (influenza)', 'Allergies / dust', 'Air pollution or smoke', 'Asthma', 'Tuberculosis (if persistent)'],
    actions: ['Stay warm and rest', 'Drink warm fluids (turmeric milk, ginger tea)', 'Steam inhalation 2–3 times daily', 'Honey + ginger juice for sore throat', 'Avoid cold drinks and dusty areas', 'Use a mask in public'],
    doctor: ['Cough lasting more than 2 weeks (screen for TB)', 'Coughing blood', 'Shortness of breath with cough', 'High fever with cough (possible pneumonia)', 'Night sweats with persistent cough']
  },
  weakness: {
    title: 'Weakness & Fatigue',
    icon: '😴', iconBg: '#fef3c7', urgency: 'low',
    summary: 'Chronic weakness in rural communities is often linked to anaemia, poor nutrition, or dehydration. It can also be a symptom of many diseases.',
    causes: ['Anaemia (iron / B12 deficiency)', 'Dehydration', 'Poor nutrition', 'Diabetes', 'Thyroid disorders', 'Chronic infections'],
    actions: ['Eat iron-rich foods: green leafy vegetables, jaggery, lentils', 'Take iron + folic acid supplements (as prescribed)', 'Drink 8+ glasses of water daily', 'Rest adequately (7–8 hours sleep)', 'Avoid overwork in heat', 'Get haemoglobin test at PHC'],
    doctor: ['Extreme weakness with dizziness or fainting', 'Weakness with chest pain or breathlessness', 'Unexplained weight loss', 'Weakness lasting more than 2 weeks', 'Yellow eyes or skin (jaundice)']
  }
};

/* ─── SYMPTOM DETECTION ─── */
function detectSymptomKey(query) {
  const q = query.toLowerCase();
  if (q.includes('fever') || q.includes('bukhar') || q.includes('temperature')) return 'fever';
  if (q.includes('head') || q.includes('sir dard')) return 'headache';
  if (q.includes('chest') || q.includes('heart') || q.includes('seene')) return 'chest';
  if (q.includes('diarrhoea') || q.includes('loose') || q.includes('motion') ||
    q.includes('vomit') || q.includes('stomach') || q.includes('tummy')) return 'diarrhoea';
  if (q.includes('cough') || q.includes('cold') || q.includes('khansi')) return 'cough';
  if (q.includes('weak') || q.includes('tired') || q.includes('fatigue') ||
    q.includes('kamzori')) return 'weakness';
  return null;
}

/* ─── URGENCY BADGE HELPER ─── */
function getUrgency(level) {
  return {
    low: { cls: 'urgency-low', label: '🟢 Low Urgency', badge: '🟢 Low Urgency' },
    medium: { cls: 'urgency-medium', label: '🟡 Moderate Urgency', badge: '🟡 Moderate' },
    high: { cls: 'urgency-high', label: '🔴 HIGH URGENCY — Seek Care Now', badge: '🔴 Urgent' }
  }[level] || { cls: 'urgency-low', label: '🟢 Low Urgency', badge: '🟢 Low Urgency' };
}

/* ─── RENDER RESULTS ─── */
function renderResults(data, query) {
  const u = getUrgency(data.urgency);

  document.getElementById('resultSubtitle').textContent = `Analysis for: "${query}"`;
  const badge = document.getElementById('resultsBadge');
  badge.textContent = u.badge;
  badge.className = `results-badge ${u.cls}`;

  document.getElementById('resultCards').innerHTML = `
    <div class="result-card open">
      <div class="result-card-header" onclick="toggleCard(this.parentElement)">
        <div class="result-card-icon" style="background:${data.iconBg}">${data.icon}</div>
        <div>
          <div class="result-card-title">${data.title}</div>
          <div class="result-card-sub">Tap to expand / collapse</div>
        </div>
        <span class="result-card-arrow">▾</span>
      </div>
      <div class="result-card-body">
        <div class="info-grid">
          <div class="info-item summary">
            <div class="info-item-label">📋 What This Means</div>
            <div class="info-item-content">${data.summary}</div>
          </div>
          <div class="info-item causes">
            <div class="info-item-label">🔎 Possible Causes</div>
            <div class="info-item-content">
              <ul class="tip-list">${data.causes.map(c => `<li>${c}</li>`).join('')}</ul>
            </div>
          </div>
          <div class="info-item actions">
            <div class="info-item-label">✅ What To Do Now</div>
            <div class="info-item-content">
              <ul class="tip-list">${data.actions.map(a => `<li>${a}</li>`).join('')}</ul>
            </div>
          </div>
          <div class="info-item when-doctor">
            <div class="info-item-label">🏥 See a Doctor If...</div>
            <div class="info-item-content">
              <ul class="tip-list">${data.doctor.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
        <div class="urgency-badge ${u.cls}">${u.label}</div>
      </div>
    </div>
  `;

  document.getElementById('resultsSection').classList.add('visible');
  document.getElementById('welcomeState').style.display = 'none';
}

function renderGenericResults(query) {
  document.getElementById('resultSubtitle').textContent = `General guidance for: "${query}"`;
  document.getElementById('resultsBadge').textContent = '🟡 Moderate';
  document.getElementById('resultsBadge').className = 'results-badge urgency-medium';

  document.getElementById('resultCards').innerHTML = `
    <div class="result-card open">
      <div class="result-card-header" onclick="toggleCard(this.parentElement)">
        <div class="result-card-icon" style="background:#dbeafe">🩺</div>
        <div>
          <div class="result-card-title">Health Concern Detected</div>
          <div class="result-card-sub">General guidance based on your description</div>
        </div>
        <span class="result-card-arrow">▾</span>
      </div>
      <div class="result-card-body">
        <div class="info-grid">
          <div class="info-item summary">
            <div class="info-item-label">📋 Overview</div>
            <div class="info-item-content">Your described symptoms need professional assessment. Please use our doctor connect feature below for accurate diagnosis.</div>
          </div>
          <div class="info-item actions">
            <div class="info-item-label">✅ General Steps</div>
            <div class="info-item-content">
              <ul class="tip-list">
                <li>Rest adequately</li>
                <li>Stay hydrated — drink clean water</li>
                <li>Monitor and note your symptoms</li>
                <li>Avoid self-medication without guidance</li>
              </ul>
            </div>
          </div>
          <div class="info-item when-doctor">
            <div class="info-item-label">🏥 See a Doctor If...</div>
            <div class="info-item-content">
              <ul class="tip-list">
                <li>Symptoms worsen rapidly</li>
                <li>Difficulty breathing</li>
                <li>High fever persists</li>
                <li>Any emergency symptom</li>
              </ul>
            </div>
          </div>
          <div class="info-item causes">
            <div class="info-item-label">ℹ️ Nearest Help</div>
            <div class="info-item-content">Visit your Primary Health Centre (PHC) or call <strong>108</strong> for ambulance. ASHA workers in your village can also guide you.</div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('resultsSection').classList.add('visible');
  document.getElementById('welcomeState').style.display = 'none';
}

function toggleCard(card) {
  card.classList.toggle('open');
}

/* ─── CHAT ENGINE ─── */
function addChatMsg(html, type) {
  const msgs = document.getElementById('chatMessages');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const isBot = type === 'bot';
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  div.innerHTML = `
    <div class="chat-avatar ${isBot ? 'bot-avatar' : 'user-avatar'}">${isBot ? 'AI' : '👤'}</div>
    <div>
      <div class="chat-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}">${html}</div>
      <div class="chat-time">${isBot ? 'AarogyaPath AI' : 'You'} · ${time}</div>
    </div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = 'typingIndicator';
  div.innerHTML = `
    <div class="chat-avatar bot-avatar">AI</div>
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function processQuery(query) {
  if (!query.trim()) return;

  addChatMsg(query, 'user');
  document.getElementById('chatInput').value = '';
  document.getElementById('topSearch').value = query;
  saveRecent(query);
  showTyping();

  setTimeout(() => {
    removeTyping();
    const key = detectSymptomKey(query);
    if (key && SYMPTOM_DB[key]) {
      const data = SYMPTOM_DB[key];
      const urgentWarning = data.urgency === 'high'
        ? ' <strong>⚠️ This could be urgent — please see a doctor soon.</strong>'
        : '';
      addChatMsg(
        `I found information about <strong>${data.title}</strong>. Check the detailed results below.${urgentWarning}`,
        'bot'
      );
      renderResults(data, query);
    } else {
      addChatMsg(
        "I've noted your symptoms. Here's some general guidance below. For an accurate diagnosis, connect with one of our doctors via call or video — it's free!",
        'bot'
      );
      renderGenericResults(query);
    }
  }, 1600);
}

function sendChat() {
  const chatInput = document.getElementById('chatInput');
  const userText = chatInput.value.trim();

  if (!userText) return;
  processQuery(userText); 
  
  chatInput.value = ""; 
}

// Helper function to keep code clean
function appendMessage(sender, text) {
  const chatMessages = document.getElementById('chatMessages');
  const msgHtml = `
    <div class="chat-msg ${sender}">
      <div class="chat-avatar ${sender}-avatar">${sender === 'bot' ? 'AI' : 'You'}</div>
      <div>
        <div class="chat-bubble ${sender}-bubble">${text}</div>
        <div class="chat-time">AarogyaPath AI · Just now</div>
      </div>
    </div>
  `;
  chatMessages.insertAdjacentHTML('beforeend', msgHtml);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatInput(e) { if (e.key === 'Enter') sendChat(); }
function quickAsk(text) { processQuery(text); }
function doTopSearch() { processQuery(document.getElementById('topSearch').value); }
function handleTopSearch(e) { if (e.key === 'Enter') doTopSearch(); }

/* ─── VOICE ─── */
let solRec = null;
let solListening = false;

function makeVoiceToggle(inputId, btnId) {
  return function () {
    if (solListening) { solRec && solRec.stop(); solListening = false; return; }
    solRec = createVoiceRecognition(inputId, btnId);
    if (solRec) {
      solRec.onend = () => {
        solListening = false;
        const btn = document.getElementById(btnId);
        if (btn) { btn.classList.remove('listening'); btn.textContent = '🎙️'; }
      };
      solRec.start();
      solListening = true;
    }
  };
}

const toggleChatVoice = makeVoiceToggle('chatInput', 'chatVoiceBtn');
const toggleTopVoice = makeVoiceToggle('topSearch', 'topVoiceBtn');

/* ─── RECENT SEARCHES ─── */
function saveRecent(q) {
  let list = JSON.parse(sessionStorage.getItem('recent') || '[]');
  list = [q, ...list.filter(x => x !== q)].slice(0, 4);
  sessionStorage.setItem('recent', JSON.stringify(list));
  renderRecents();
}

function renderRecents() {
  const list = JSON.parse(sessionStorage.getItem('recent') || '[]');
  const el = document.getElementById('recentSearches');
  if (!el) return;
  el.innerHTML = list.map(q => `
    <div
      style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;
             cursor:pointer;font-size:0.82rem;color:var(--gray-600);transition:var(--transition);"
      onclick="quickAsk('${q.replace(/'/g, "\\'")}')"
      onmouseover="this.style.background='var(--blue-light)';this.style.color='var(--blue-mid)'"
      onmouseout="this.style.background='';this.style.color='var(--gray-600)'"
    >
      🕐 ${q.length > 30 ? q.substring(0, 30) + '…' : q}
    </div>
  `).join('');
}

/* ─── DEPARTMENT FILTER ─── */
function filterDept(dept, el) {
  document.querySelectorAll('.dept-item').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
}

/* ─── PAGE INIT ─── */
window.addEventListener('load', () => {
  renderRecents();

  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  const dept = params.get('dept');

  if (q) {
    document.getElementById('topSearch').value = q;
    setTimeout(() => processQuery(q), 500);
  }

  if (dept) {
    document.querySelectorAll('.dept-item').forEach(d => {
      if (d.textContent.toLowerCase().includes(dept)) d.click();
    });
  }
});
