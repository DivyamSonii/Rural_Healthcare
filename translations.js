const TRANSLATIONS = {
  en: {
    keys: {
      logo_text: "AarogyaPath",
      hero_title: "Accessible Healthcare<br>for <em>Everyone</em>",
      hero_desc: "Get better healthcare in your village with smart AI diagnosis, support in your own language, and instant connection to doctors.",
      solution3: "Describe your symptoms in your own language. Our AI will guide you to the right care — instantly.",
      login_btn: "🚀 Login / Get Started"
    },
    selectors: {
      ".notice-bar": { html: "🩺 Free health camps this week in 12 villages. <a href=\"#\">Find nearest camp →</a>" },
      ".hero-eyebrow": { html: "<span class=\"hero-eyebrow-dot\"></span>AI-Powered Healthcare" },
      ".hero-actions .btn-outline": { text: "🔍 Check Symptoms" },
      ".hero-card:nth-child(1) .hero-card-title": { text: "Quick Symptom Check" },
      ".hero-card:nth-child(2) .hero-card-title": { text: "Today's Health Metrics" },
      ".scroll-indicator span": { text: "Scroll" },
      ".search-section .section-label": { text: "AI Symptom Checker" },
      ".search-section .section-title": { text: "What's bothering you today?" },
      ".search-btn": { text: "Find Solutions →" },
      ".quick-tags > span:first-child": { text: "Common:" },
      ".stats-bar .stat-item:nth-child(1) .stat-label-big": { text: "Diagnosis Accuracy" },
      ".stats-bar .stat-item:nth-child(2) .stat-label-big": { text: "Avg Response Time" },
      ".stats-bar .stat-item:nth-child(3) .stat-label-big": { text: "Languages Supported" },
      ".stats-bar .stat-item:nth-child(4) .stat-label-big": { text: "Always & For Everyone" },
      // ".coe-section .section-label": { text: "Specialised Care" },
      ".coe-section .section-title": { text: "Centres of Excellence" },
      ".coe-section .section-desc": { text: "Get expert medical care in your village through remote healthcare and smart AI diagnosis." },
      // ".news-section .section-label": { text: "Health Awareness" },
      // ".news-section .section-title": { html: "News &amp; Health Tips" },
      // ".news-section .section-desc": { text: "Practical health knowledge for rural families — in simple language." },
      ".footer-brand-desc": { text: "Making healthcare accessible to every corner of India — regardless of geography, literacy, or income." },
      ".footer-brand-name": { text: "AarogyaPath" },
      ".footer-brand .helpline .helpline-label": { text: "Free Helpline · Available 24/7 · 12 Languages" },
      ".footer-grid > div:nth-child(2) .footer-heading": { text: "Services" },
      ".footer-grid > div:nth-child(2) li:nth-child(1) a": { text: "AI Symptom Checker" },
      ".footer-grid > div:nth-child(2) li:nth-child(2) a": { text: "Find Nearest Doctor" },
      ".footer-grid > div:nth-child(2) li:nth-child(3) a": { text: "Telemedicine" },
      ".footer-grid > div:nth-child(2) li:nth-child(4) a": { text: "Emergency SOS" },
      ".footer-grid > div:nth-child(3) .footer-heading": { text: "Health Topics" },
      ".footer-grid > div:nth-child(3) li:nth-child(1) a": { text: "Maternal Health" },
      ".footer-grid > div:nth-child(3) li:nth-child(2) a": { text: "Child Nutrition" },
      ".footer-grid > div:nth-child(3) li:nth-child(3) a": { text: "Mental Health" },
      ".footer-grid > div:nth-child(3) li:nth-child(4) a": { text: "Vaccination" },
      ".footer-grid > div:nth-child(4) .footer-heading": { text: "Government Partners" },
      ".footer-grid > div:nth-child(4) li:nth-child(1) a": { text: "PMJAY (Ayushman Bharat)" },
      ".footer-grid > div:nth-child(4) li:nth-child(2) a": { text: "National Health Mission" },
      ".footer-grid > div:nth-child(4) li:nth-child(3) a": { text: "ASHA Workers Network" },
      ".modal-title": { text: "Get Started" },
      ".modal-sub": { text: "Enter your details to access personalised health services." },
      ".form-group .form-label:nth-child(1)": { text: "Your Full Name" },
      ".form-row .form-group:nth-child(1) .form-label": { text: "Age" },
      ".form-row .form-group:nth-child(2) .form-label": { text: "Gender" },
      "#locationLabel": { text: "Your Location" },
      "#locationBtn": { text: "📍 Detect My Location Automatically" },
      ".form-submit": { text: "Continue to Health Services →" },
      ".back-btn span": { text: "Home" },
      ".sidebar-title:first-of-type": { text: "Filter by Department" },
      ".sidebar-title:nth-of-type(2)": { text: "Recent Searches" },
      ".emergency-card h4": { text: "🚨 Emergency?" },
      ".emergency-card p": { text: "Severe chest pain, difficulty breathing, or unconsciousness — call immediately:" },
      ".chat-section .section-heading": { text: "AI Health Assistant" },
      ".chat-section .section-sub": { text: "Type or speak your symptoms — get instant guidance." },
      "#resultsSection .section-heading": { text: "Results" },
      ".doctor-connect h4": { text: "👨‍⚕️ Speak to a Real Doctor" },
      ".doctor-connect p": { text: "Connect with a certified doctor via call or video — free of charge for rural patients." },
      ".connect-btn.primary": { text: "📞 Call Doctor" },
      ".connect-btn.outline": { text: "📹 Video Consult" },
      ".welcome-state h3": { text: "How can we help you today?" },
      ".welcome-state p": { text: "Start by typing your symptoms in the chat above, or tap a common health concern below." },
      ".quick-symptoms .symptom-chip:nth-child(1)": { text: "Fever" },
      ".quick-symptoms .symptom-chip:nth-child(2)": { text: "Headache" },
      ".quick-symptoms .symptom-chip:nth-child(3)": { text: "Chest Pain" },
      ".quick-symptoms .symptom-chip:nth-child(4)": { text: "Cough" },
      ".quick-symptoms .symptom-chip:nth-child(5)": { text: "Fatigue" },
      ".quick-symptoms .symptom-chip:nth-child(6)": { text: "Stomach Pain" },
      ".quick-tags .quick-tag:nth-child(2)": { text: "Fever with chills" },
      ".quick-tags .quick-tag:nth-child(3)": { text: "Chest pain" },
      ".quick-tags .quick-tag:nth-child(4)": { text: "Child weakness" },
      ".quick-tags .quick-tag:nth-child(5)": { text: "Severe headache" },
      ".quick-tags .quick-tag:nth-child(6)": { text: "Skin rash" },
      ".quick-tags .quick-tag:nth-child(7)": { text: "Joint pain" },
      ".coe-card:nth-child(1) .coe-title": { text: "Cardiac Care" },
      ".coe-card:nth-child(2) .coe-title": { text: "Cancer Care" },
      ".coe-card:nth-child(3) .coe-title": { text: "Neuro Sciences" },
      ".coe-card:nth-child(4) .coe-title": { text: "Gastroenterology" },
      ".coe-card:nth-child(5) .coe-title": { text: "Orthopaedics" },
      ".dept-list .dept-item:nth-child(1) .dept-label": { text: "All Departments" },
      ".dept-list .dept-item:nth-child(2) .dept-label": { text: "Cardiac" },
      ".dept-list .dept-item:nth-child(3) .dept-label": { text: "Neurology" },
      ".dept-list .dept-item:nth-child(4) .dept-label": { text: "Gastro" },
      ".dept-list .dept-item:nth-child(5) .dept-label": { text: "Orthopaedics" },
      ".dept-list .dept-item:nth-child(6) .dept-label": { text: "General Medicine" },
      ".dept-list .dept-item:nth-child(7) .dept-label": { text: "Paediatrics" },
      ".dept-list .dept-item:nth-child(8) .dept-label": { text: "Women's Health" },
      ".hospital-near0": { text: "🏥Hospital Near you" },
      ".hospital-near1": { text: "📍 Get Location" },
    },
    placeholders: {
      "#mainSearch": "Describe your symptoms...",
      "#chatInput": "Describe your symptoms here...",
      "#topSearch": "Type symptoms or ask a health question...",
      "#inputLocation": "Village / Town / City"
    },
    titles: {
      "#voiceBtn": "Voice Input",
      "#topVoiceBtn": "Voice input",
      "#chatVoiceBtn": "Voice input"
    }
  },
  hi: {
    keys: {
      logo_text: "आरोग्यपथ",
      hero_title: "सभी के लिए<br><em>सुलभ</em> स्वास्थ्य सेवा",
      hero_desc: "अब आपके गाँव में ही बेहतर इलाज — स्मार्ट AI जांच, अपनी भाषा में मदद, और तुरंत डॉक्टर से जुड़ें।",
      solution3: "अपने लक्षण अपनी भाषा में बताएं। हमारी एआई आपको तुरंत सही देखभाल तक मार्गदर्शन करेगी।",
      login_btn: "🚀 लॉगिन / शुरू करें"
    },
    selectors: {
      ".notice-bar": { html: "🩺 इस सप्ताह 12 गांवों में मुफ्त स्वास्थ्य शिविर। <a href=\"#\">निकटतम शिविर खोजें →</a>" },
      ".hero-eyebrow": { html: "<span class=\"hero-eyebrow-dot\"></span>AI-संचालित स्वास्थ्य सेवा" },
      ".hero-actions .btn-outline": { text: "🔍 लक्षण जांचें" },
      ".hero-card:nth-child(1) .hero-card-title": { text: "जल्दी से अपने लक्षणों की जांच करवाएं" },
      ".hero-card:nth-child(2) .hero-card-title": { text: "आज के स्वास्थ्य मानक" },
      ".scroll-indicator span": { text: "स्क्रॉल करें" },
      ".search-section .section-label": { text: "एआई लक्षण जांच" },
      ".search-section .section-title": { text: "आज आपको क्या परेशानी है?" },
      ".search-btn": { text: "समाधान खोजें →" },
      ".quick-tags > span:first-child": { text: "सामान्य:" },
      ".stats-bar .stat-item:nth-child(1) .stat-label-big": { text: "निदान सटीकता" },
      ".stats-bar .stat-item:nth-child(2) .stat-label-big": { text: "औसत प्रतिक्रिया समय" },
      ".stats-bar .stat-item:nth-child(3) .stat-label-big": { text: "समर्थित भाषाएं" },
      ".stats-bar .stat-item:nth-child(4) .stat-label-big": { text: "हमेशा और सभी के लिए" },
      // ".coe-section .section-label": { text: "विशेष देखभाल" },
      ".coe-section .section-title": { text: "उत्कृष्टता केंद्र" },
      ".coe-section .section-desc": { text: "गाँव में ही बेहतर इलाज पाएं — रिमोट हेल्थकेयर और स्मार्ट AI जांच की मदद से।" },
      // ".news-section .section-label": { text: "स्वास्थ्य जागरूकता" },
      // ".news-section .section-title": { text: "समाचार और स्वास्थ्य सुझाव" },
      // ".news-section .section-desc": { text: "ग्रामीण परिवारों के लिए सरल भाषा में उपयोगी स्वास्थ्य जानकारी।" },
      ".footer-brand-desc": { text: "भारत के हर कोने तक स्वास्थ्य सेवाएं पहुंचाना — चाहे भौगोलिक स्थिति, साक्षरता या आय कुछ भी हो।" },
      ".footer-brand-name": { text: "आरोग्यपथ" },
      ".footer-brand .helpline .helpline-label": { text: "मुफ्त हेल्पलाइन · 24/7 उपलब्ध · 12 भाषाओं में सेवा" },
      ".footer-grid > div:nth-child(2) .footer-heading": { text: "सेवाएं" },
      ".footer-grid > div:nth-child(2) li:nth-child(1) a": { text: "AI लक्षण जांच" },
      ".footer-grid > div:nth-child(2) li:nth-child(2) a": { text: "पास के डॉक्टर को ढूंढें" },
      ".footer-grid > div:nth-child(2) li:nth-child(3) a": { text: "ऑनलाइन इलाज" },
      ".footer-grid > div:nth-child(2) li:nth-child(4) a": { text: "आपातकालीन सहायता" },
      ".footer-grid > div:nth-child(3) .footer-heading": { text: "स्वास्थ्य विषय" },
      ".footer-grid > div:nth-child(3) li:nth-child(1) a": { text: "मां की सेहत" },
      ".footer-grid > div:nth-child(3) li:nth-child(2) a": { text: "बच्चों का पोषण" },
      ".footer-grid > div:nth-child(3) li:nth-child(3) a": { text: "मानसिक स्वास्थ्य" },
      ".footer-grid > div:nth-child(3) li:nth-child(4) a": { text: "टीकाकरण" },
      ".footer-grid > div:nth-child(4) .footer-heading": { text: "सरकारी साझेदार" },
      ".footer-grid > div:nth-child(4) li:nth-child(1) a": { text: "आयुष्मान भारत योजना (प्रधानमंत्री जन आरोग्य योजना)" },
      ".footer-grid > div:nth-child(4) li:nth-child(2) a": { text: "राष्ट्रीय स्वास्थ्य मिशन" },
      ".footer-grid > div:nth-child(4) li:nth-child(3) a": { text: "आशा कार्यकर्ता नेटवर्क" },
      ".modal-title": { text: "शुरू करें" },
      ".modal-sub": { text: "व्यक्तिगत स्वास्थ्य सेवाओं के लिए अपनी जानकारी दर्ज करें।" },
      ".form-group .form-label:nth-child(1)": { text: "पूरा नाम" },
      ".form-row .form-group:nth-child(1) .form-label": { text: "आयु" },
      ".form-row .form-group:nth-child(2) .form-label": { text: "लिंग" },
      "#locationLabel": { text: "आपका स्थान" },
      "#locationBtn": { text: "📍 मेरी लोकेशन अपने आप पहचानें" },
      ".form-submit": { text: "स्वास्थ्य सेवाओं पर आगे बढ़ें →" },
      ".back-btn span": { text: "होम" },
      ".sidebar-title:first-of-type": { text: "विभाग के अनुसार" },
      ".sidebar-title:nth-of-type(2)": { text: "हाल की खोजें" },
      ".emergency-card h4": { text: "🚨 आपातकाल?" },
      ".emergency-card p": { text: "तेज सीने में दर्द, सांस लेने में कठिनाई, या बेहोशी — तुरंत कॉल करें:" },
      ".chat-section .section-heading": { text: "AI स्वास्थ्य सहायक" },
      ".chat-section .section-sub": { text: "अपने लक्षण लिखें या बोलें — तुरंत मार्गदर्शन पाएं।" },
      "#resultsSection .section-heading": { text: "परिणाम" },
      ".doctor-connect h4": { text: "👨‍⚕️ वास्तविक डॉक्टर से बात करें" },
      ".doctor-connect p": { text: "ग्रामीण मरीजों के लिए कॉल या वीडियो के जरिए प्रमाणित डॉक्टर से मुफ्त सलाह लें।" },
      ".connect-btn.primary": { text: "📞 डॉक्टर को कॉल करें" },
      ".connect-btn.outline": { text: "📹 वीडियो परामर्श" },
      ".welcome-state h3": { text: "आज हम आपकी कैसे मदद करें?" },
      ".welcome-state p": { text: "ऊपर चैट में अपने लक्षण लिखें, या नीचे दिए गए सामान्य स्वास्थ्य विषय पर टैप करें।" },
      ".quick-symptoms .symptom-chip:nth-child(1)": { text: "🌡️ बुखार" },
      ".quick-symptoms .symptom-chip:nth-child(2)": { text: "🤕 सिरदर्द" },
      ".quick-symptoms .symptom-chip:nth-child(3)": { text: "💔 सीने में दर्द" },
      ".quick-symptoms .symptom-chip:nth-child(4)": { text: "😷 खांसी" },
      ".quick-symptoms .symptom-chip:nth-child(5)": { text: "😴 थकान" },
      ".quick-symptoms .symptom-chip:nth-child(6)": { text: "🤢 पेट दर्द" },
      ".quick-tags .quick-tag:nth-child(2)": { text: "ठंड लगकर बुखार" },
      ".quick-tags .quick-tag:nth-child(3)": { text: "सीने में दर्द" },
      ".quick-tags .quick-tag:nth-child(4)": { text: "बच्चे में कमजोरी" },
      ".quick-tags .quick-tag:nth-child(5)": { text: "तेज़ सिरदर्द" },
      ".quick-tags .quick-tag:nth-child(6)": { text: "त्वचा पर दाने" },
      ".quick-tags .quick-tag:nth-child(7)": { text: "जोड़ों में दर्द" },
      ".coe-card:nth-child(1) .coe-title": { text: "दिल की देखभाल" },
      ".coe-card:nth-child(2) .coe-title": { text: "कैंसर विभाग" },
      ".coe-card:nth-child(3) .coe-title": { text: "दिमाग और नसों का अध्ययन" },
      ".coe-card:nth-child(4) .coe-title": { text: "पेट और पाचन तंत्र की देखभाल" },
      ".coe-card:nth-child(5) .coe-title": { text: "हड्डियों और जोड़ों की देखभाल" },
      ".dept-list .dept-item:nth-child(1) .dept-label": { text: "सभी विभाग" },
      ".dept-list .dept-item:nth-child(2) .dept-label": { text: "हृदय से संबंधित" },
      ".dept-list .dept-item:nth-child(3) .dept-label": { text: "दिमाग और नसों की चिकित्सा" },
      ".dept-list .dept-item:nth-child(4) .dept-label": { text: "पेट से जुड़ी समस्याएँ" },
      ".dept-list .dept-item:nth-child(5) .dept-label": { text: "हड्डियों और जोड़ों की देखभाल" },
      ".dept-list .dept-item:nth-child(6) .dept-label": { text: "सामान्य इलाज" },
      ".dept-list .dept-item:nth-child(7) .dept-label": { text: "बच्चों की देखभाल" },
      ".dept-list .dept-item:nth-child(8) .dept-label": { text: "महिलाओं की सेहत" },
      ".hospital-near0": { text: "🏥आपके पास के अस्पताल" },
      ".hospital-near1": { text: "📍 स्थान प्राप्त करें" },
    },
    placeholders: {
      "#mainSearch": "अपने लक्षण बताएं...",
      "#chatInput": "अपने लक्षण यहां लिखें...",
      "#topSearch": "लक्षण लिखें या स्वास्थ्य से जुड़ा प्रश्न पूछें...",
      "#inputLocation": "गांव / कस्बा / शहर"
    },
    titles: {
      "#voiceBtn": "आवाज इनपुट",
      "#topVoiceBtn": "आवाज इनपुट",
      "#chatVoiceBtn": "आवाज इनपुट"
    }
  },
  pa: {
    keys: {
      logo_text: "ਆਰੋਗਿਆ ਪਾਥ",
      hero_title: "ਹਰ ਕਿਸੇ ਲਈ<br>ਸੁਲਭ <em>ਸਿਹਤ ਸੇਵਾਵਾਂ</em>",
      hero_desc: "ਸਮਾਰਟ AI ਜਾਂਚ, ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਹਾਇਤਾ ਅਤੇ ਡਾਕਟਰਾਂ ਨਾਲ ਤੁਰੰਤ ਸੰਪਰਕ ਰਾਹੀਂ ਆਪਣੇ ਪਿੰਡ ਵਿੱਚ ਬਿਹਤਰ ਸਿਹਤ ਸੇਵਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।",
      solution3: "ਆਪਣੇ ਲੱਛਣਾਂ ਬਾਰੇ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਦੱਸੋ। ਸਾਡਾ AI ਤੁਹਾਨੂੰ ਤੁਰੰਤ ਸਹੀ ਇਲਾਜ ਲਈ ਮਾਰਗਦਰਸ਼ਨ ਕਰੇਗਾ।",
      login_btn: "🚀 ਲੌਗਇਨ / ਸ਼ੁਰੂ ਕਰੋ"
    },
    selectors: {
      ".notice-bar": { html: "🩺 ਇਸ ਹਫ਼ਤੇ 12 ਪਿੰਡਾਂ ਵਿੱਚ ਮੁਫ਼ਤ ਸਿਹਤ ਕੈਂਪ। <a href=\"#\">ਨੇੜਲਾ ਕੈਂਪ ਲੱਭੋ →</a>" },
      ".hero-eyebrow": { html: "<span class=\"hero-eyebrow-dot\"></span>AI-ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਸਿਹਤ ਸੇਵਾਵਾਂ" },
      ".hero-actions .btn-outline": { text: "🔍 ਲੱਛਣਾਂ ਦੀ ਜਾਂਚ ਕਰੋ" },
      ".hero-card:nth-child(1) .hero-card-title": { text: "ਤੁਰੰਤ ਲੱਛਣ ਜਾਂਚ" },
      ".hero-card:nth-child(2) .hero-card-title": { text: "ਅੱਜ ਦੀ ਸਿਹਤ ਰਿਪੋਰਟ" },
      ".scroll-indicator span": { text: "ਹੇਠਾਂ ਦੇਖੋ" },
      ".search-section .section-label": { text: "AI ਲੱਛਣ ਜਾਂਚਕਰਤਾ" },
      ".search-section .section-title": { text: "ਅੱਜ ਤੁਹਾਨੂੰ ਕੀ ਤਕਲੀਫ ਹੈ?" },
      ".search-btn": { text: "ਸਮਾਧਾਨ ਲੱਭੋ →" },
      ".quick-tags > span:first-child": { text: "ਆਮ ਤੌਰ 'ਤੇ:" },
      ".stats-bar .stat-item:nth-child(1) .stat-label-big": { text: "ਜਾਂਚ ਦੀ ਸ਼ੁੱਧਤਾ" },
      ".stats-bar .stat-item:nth-child(2) .stat-label-big": { text: "ਔਸਤ ਜਵਾਬ ਸਮਾਂ" },
      ".stats-bar .stat-item:nth-child(3) .stat-label-big": { text: "ਸਮਰਥਿਤ ਭਾਸ਼ਾਵਾਂ" },
      ".stats-bar .stat-item:nth-child(4) .stat-label-big": { text: "ਹਮੇਸ਼ਾ ਅਤੇ ਹਰ ਕਿਸੇ ਲਈ" },
      ".coe-section .section-title": { text: "ਉੱਤਮਤਾ ਦੇ ਕੇਂਦਰ" },
      ".coe-section .section-desc": { text: "ਰਿਮੋਟ ਹੈਲਥਕੇਅਰ ਅਤੇ ਸਮਾਰਟ AI ਜਾਂਚ ਰਾਹੀਂ ਆਪਣੇ ਪਿੰਡ ਵਿੱਚ ਮਾਹਿਰ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ।" },
      ".footer-brand-desc": { text: "ਭਾਰਤ ਦੇ ਹਰ ਕੋਨੇ ਵਿੱਚ ਸਿਹਤ ਸੇਵਾਵਾਂ ਨੂੰ ਸੁਲਭ ਬਣਾਉਣਾ — ਭੂਗੋਲ, ਸਾਖਰਤਾ, ਜਾਂ ਆਮਦਨ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ।" },
      ".footer-brand-name": { text: "ਆਰੋਗਿਆ ਪਾਥ" },
      ".footer-brand .helpline .helpline-label": { text: "ਮੁਫ਼ਤ ਹੈਲਪਲਾਈਨ · 24/7 ਉਪਲਬਧ · 12 ਭਾਸ਼ਾਵਾਂ" },
      ".footer-grid > div:nth-child(2) .footer-heading": { text: "ਸੇਵਾਵਾਂ" },
      ".footer-grid > div:nth-child(2) li:nth-child(1) a": { text: "AI ਲੱਛਣ ਜਾਂਚਕਰਤਾ" },
      ".footer-grid > div:nth-child(2) li:nth-child(2) a": { text: "ਨੇੜਲਾ ਡਾਕਟਰ ਲੱਭੋ" },
      ".footer-grid > div:nth-child(2) li:nth-child(3) a": { text: "ਟੈਲੀਮੈਡੀਸਨ" },
      ".footer-grid > div:nth-child(2) li:nth-child(4) a": { text: "ਐਮਰਜੈਂਸੀ SOS" },
      ".footer-grid > div:nth-child(3) .footer-heading": { text: "ਸਿਹਤ ਵਿਸ਼ੇ" },
      ".footer-grid > div:nth-child(3) li:nth-child(1) a": { text: "ਮਾਤਾ ਦੀ ਸਿਹਤ" },
      ".footer-grid > div:nth-child(3) li:nth-child(2) a": { text: "ਬੱਚਿਆਂ ਦਾ ਪੋਸ਼ਣ" },
      ".footer-grid > div:nth-child(3) li:nth-child(3) a": { text: "ਮਾਨਸਿਕ ਸਿਹਤ" },
      ".footer-grid > div:nth-child(3) li:nth-child(4) a": { text: "ਟੀਕਾਕਰਨ" },
      ".footer-grid > div:nth-child(4) .footer-heading": { text: "ਸਰਕਾਰੀ ਭਾਈਵਾਲ" },
      ".footer-grid > div:nth-child(4) li:nth-child(1) a": { text: "PMJAY (ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ)" },
      ".footer-grid > div:nth-child(4) li:nth-child(2) a": { text: "ਰਾਸ਼ਟਰੀ ਸਿਹਤ ਮਿਸ਼ਨ" },
      ".footer-grid > div:nth-child(4) li:nth-child(3) a": { text: "ਆਸ਼ਾ ਵਰਕਰ ਨੈੱਟਵਰਕ" },
      ".modal-title": { text: "ਸ਼ੁਰੂ ਕਰੋ" },
      ".modal-sub": { text: "ਨਿੱਜੀ ਸਿਹਤ ਸੇਵਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਆਪਣੇ ਵੇਰਵੇ ਦਰਜ ਕਰੋ।" },
      ".form-group .form-label:nth-child(1)": { text: "ਤੁਹਾਡਾ ਪੂਰਾ ਨਾਮ" },
      ".form-row .form-group:nth-child(1) .form-label": { text: "ਉਮਰ" },
      ".form-row .form-group:nth-child(2) .form-label": { text: "ਲਿੰਗ" },
      "#locationLabel": { text: "ਤੁਹਾਡੀ ਲੋਕੇਸ਼ਨ" },
      "#locationBtn": { text: "📍 ਮੇਰੀ ਲੋਕੇਸ਼ਨ ਆਟੋਮੈਟਿਕ ਪਤਾ ਕਰੋ" },
      ".form-submit": { text: "ਸਿਹਤ ਸੇਵਾਵਾਂ ਵੱਲ ਵਧੋ →" },
      ".back-btn span": { text: "ਹੋਮ" },
      ".sidebar-title:first-of-type": { text: "ਵਿਭਾਗ ਅਨੁਸਾਰ ਫਿਲਟਰ" },
      ".sidebar-title:nth-of-type(2)": { text: "ਹਾਲੀਆ ਖੋਜਾਂ" },
      ".emergency-card h4": { text: "🚨 ਐਮਰਜੈਂਸੀ?" },
      ".emergency-card p": { text: "ਛਾਤੀ ਵਿੱਚ ਤੇਜ਼ ਦਰਦ, ਸਾਹ ਲੈਣ ਵਿੱਚ ਤਕਲੀਫ, ਜਾਂ ਬੇਹੋਸ਼ੀ — ਤੁਰੰਤ ਕਾਲ ਕਰੋ:" },
      ".chat-section .section-heading": { text: "AI ਸਿਹਤ ਸਹਾਇਕ" },
      ".chat-section .section-sub": { text: "ਆਪਣੇ ਲੱਛਣ ਟਾਈਪ ਕਰੋ ਜਾਂ ਬੋਲੋ — ਤੁਰੰਤ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰੋ।" },
      "#resultsSection .section-heading": { text: "ਨਤੀਜੇ" },
      ".doctor-connect h4": { text: "👨‍⚕️ ਅਸਲੀ ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰੋ" },
      ".doctor-connect p": { text: "ਕਾਲ ਜਾਂ ਵੀਡੀਓ ਰਾਹੀਂ ਪ੍ਰਮਾਣਿਤ ਡਾਕਟਰ ਨਾਲ ਜੁੜੋ — ਪੇਂਡੂ ਮਰੀਜ਼ਾਂ ਲਈ ਮੁਫ਼ਤ।" },
      ".connect-btn.primary": { text: "📞 ਡਾਕਟਰ ਨੂੰ ਕਾਲ ਕਰੋ" },
      ".connect-btn.outline": { text: "📹 ਵੀਡੀਓ ਸਲਾਹ" },
      ".welcome-state h3": { text: "ਅਸੀਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?" },
      ".welcome-state p": { text: "ਉੱਪਰ ਚੈਟ ਵਿੱਚ ਆਪਣੇ ਲੱਛਣ ਟਾਈਪ ਕਰਕੇ ਸ਼ੁਰੂ ਕਰੋ, ਜਾਂ ਹੇਠਾਂ ਦਿੱਤੀ ਕਿਸੇ ਆਮ ਸਮੱਸਿਆ 'ਤੇ ਟੈਪ ਕਰੋ।" },
      ".quick-symptoms .symptom-chip:nth-child(1)": { text: "ਬੁਖਾਰ" },
      ".quick-symptoms .symptom-chip:nth-child(2)": { text: "ਸਿਰ ਦਰਦ" },
      ".quick-symptoms .symptom-chip:nth-child(3)": { text: "ਛਾਤੀ ਵਿੱਚ ਦਰਦ" },
      ".quick-symptoms .symptom-chip:nth-child(4)": { text: "ਖੰਘ" },
      ".quick-symptoms .symptom-chip:nth-child(5)": { text: "ਥਕਾਵਟ" },
      ".quick-symptoms .symptom-chip:nth-child(6)": { text: "ਪੇਟ ਦਰਦ" },
      ".quick-tags .quick-tag:nth-child(2)": { text: "ਕੰਬਣੀ ਨਾਲ ਬੁਖਾਰ" },
      ".quick-tags .quick-tag:nth-child(3)": { text: "ਛਾਤੀ ਵਿੱਚ ਦਰਦ" },
      ".quick-tags .quick-tag:nth-child(4)": { text: "ਬੱਚੇ ਦੀ ਕਮਜ਼ੋਰੀ" },
      ".quick-tags .quick-tag:nth-child(5)": { text: "ਤੇਜ਼ ਸਿਰ ਦਰਦ" },
      ".quick-tags .quick-tag:nth-child(6)": { text: "ਚਮੜੀ 'ਤੇ ਦਾਣੇ" },
      ".quick-tags .quick-tag:nth-child(7)": { text: "ਜੋੜਾਂ ਦਾ ਦਰਦ" },
      ".coe-card:nth-child(1) .coe-title": { text: "ਦਿਲ ਦੀ ਦੇਖਭਾਲ" },
      ".coe-card:nth-child(2) .coe-title": { text: "ਕੈਂਸਰ ਦੀ ਦੇਖਭਾਲ" },
      ".coe-card:nth-child(3) .coe-title": { text: "ਨਿਊਰੋ ਸਾਇੰਸ" },
      ".coe-card:nth-child(4) .coe-title": { text: "ਪੇਟ ਦੇ ਰੋਗ" },
      ".coe-card:nth-child(5) .coe-title": { text: "ਹੱਡੀਆਂ ਦੇ ਰੋਗ" },
      ".dept-list .dept-item:nth-child(1) .dept-label": { text: "ਸਾਰੇ ਵਿਭਾਗ" },
      ".dept-list .dept-item:nth-child(2) .dept-label": { text: "ਦਿਲ ਦੇ ਰੋਗ" },
      ".dept-list .dept-item:nth-child(3) .dept-label": { text: "ਨਿਊਰੋਲੋਜੀ" },
      ".dept-list .dept-item:nth-child(4) .dept-label": { text: "ਮਿਹਦਾ ਅਤੇ ਪੇਟ" },
      ".dept-list .dept-item:nth-child(5) .dept-label": { text: "ਹੱਡੀਆਂ ਦੇ ਰੋਗ" },
      ".dept-list .dept-item:nth-child(6) .dept-label": { text: "ਜਨਰਲ ਦਵਾਈ" },
      ".dept-list .dept-item:nth-child(7) .dept-label": { text: "ਬਾਲ ਰੋਗ" },
      ".dept-list .dept-item:nth-child(8) .dept-label": { text: "ਔਰਤਾਂ ਦੀ ਸਿਹਤ" },
      ".hospital-near0": { text: "🏥 ਤੁਹਾਡੇ ਨੇੜੇ ਹਸਪਤਾਲ" },
      ".hospital-near1": { text: "📍 ਲੋਕੇਸ਼ਨ ਪਤਾ ਕਰੋ" },
    },
    placeholders: {
      "#mainSearch": "ਆਪਣੇ ਲੱਛਣਾਂ ਬਾਰੇ ਦੱਸੋ...",
      "#chatInput": "ਆਪਣੇ ਲੱਛਣ ਇੱਥੇ ਲਿਖੋ...",
      "#topSearch": "ਲੱਛਣ ਲਿਖੋ ਜਾਂ ਸਿਹਤ ਸੰਬੰਧੀ ਸਵਾਲ ਪੁੱਛੋ...",
      "#inputLocation": "ਪਿੰਡ / ਕਸਬਾ / ਸ਼ਹਿਰ"
    },
    titles: {
      "#voiceBtn": "ਆਵਾਜ਼ ਰਾਹੀਂ ਇਨਪੁਟ",
      "#topVoiceBtn": "ਆਵਾਜ਼ ਰਾਹੀਂ ਇਨਪੁਟ",
      "#chatVoiceBtn": "ਆਵਾਜ਼ ਰਾਹੀਂ ਇਨਪੁਟ"
    }
  },
};

function applyDataKeyTranslations(langPack) {
  const elements = document.querySelectorAll("[data-key], [data-lang-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key") || el.getAttribute("data-lang-key");
    if (langPack.keys[key]) el.innerHTML = langPack.keys[key];
  });
}

function applySelectorTranslations(langPack) {
  Object.entries(langPack.selectors).forEach(([selector, value]) => {
    const el = document.querySelector(selector);
    if (!el) return;
    if (typeof value.html === "string") {
      el.innerHTML = value.html;
      return;
    }
    if (typeof value.text === "string") {
      el.textContent = value.text;
    }
  });
}

function applyPlaceholders(langPack) {
  Object.entries(langPack.placeholders).forEach(([selector, value]) => {
    const el = document.querySelector(selector);
    if (el) el.placeholder = value;
  });
}

function applyTitles(langPack) {
  Object.entries(langPack.titles).forEach(([selector, value]) => {
    const el = document.querySelector(selector);
    if (el) el.title = value;
  });
}

function syncLanguagePickers(lang) {
  const pickers = document.querySelectorAll("#langSelect, .lang-select-top");
  pickers.forEach((picker) => {
    picker.value = lang;
  });
}

function changeLanguage(lang) {
  const langPack = TRANSLATIONS[lang] || TRANSLATIONS.en;

  applyDataKeyTranslations(langPack);
  applySelectorTranslations(langPack);
  applyPlaceholders(langPack);
  applyTitles(langPack);
  syncLanguagePickers(lang);

  document.documentElement.lang = lang;
  localStorage.setItem("selectedLanguage", lang);
}

window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  changeLanguage(savedLang);
});