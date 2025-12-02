

export const translations = {
  en: {
    nav: {
      features: "Features",
      architecture: "Architecture",
      useCases: "Use Cases",
      team: "Team",
      demos: "Demos",
      star: "Star on GitHub",
      viewCode: "View Code"
    },
    hero: {
      badge: "Vibe Browsing is Here",
      titlePrefix: "We are giving browser",
      titleHighlight: "a Brain and Hands.",
      subtitle: "Browz.AI turns simple natural language commands into complex, autonomous browser actions.",
      ctaDeploy: "Deploy Agent",
      ctaResearch: "Read Research",
      cardInput: "Input",
      cardAction: "Action",
      processing: "Processing DOM...",
      inputExample: "Book a flight to Colombo for next Monday.",
      actionExample: "Clicking 'Search Flights' button on selector #btn-submit"
    },
    about: {
      concept: "THE CONCEPT",
      quote: "Think of it as giving your browser a J.A.R.V.I.S. from Iron Man.",
      desc1: "Individuals utilize web browsers for an estimated 80% of their computer usage. Most of this time is spent on repetitive, monotonous tasks.",
      desc2: "Browz.AI transforms the browser from a passive tool into a proactive, intelligent assistant. By leveraging a stateful, ReAct-based multi-agent architecture, it empowers users to delegate complex web actions simply through voice or text commands.",
      democratized: "Democratized Access",
      democratizedDesc: "Makes the web accessible for differently-abled users via voice.",
      autonomous: "Autonomous Agents",
      autonomousDesc: "Multi-LLM provider support ensuring robust execution.",
      authorQuote: "Users can automate complex tasks by describing them in simple, natural language, eliminating the need for scripting.",
      role: "Lead Developer"
    },
    features: {
      title: "Why Browz.AI?",
      subtitle: "CAPABILITIES",
      list: {
        naturalLanguage: { title: "Natural Language", desc: "No code needed. Just say 'Send an email to my supervisor' and watch it happen." },
        domAnalysis: { title: "Intelligent DOM Analysis", desc: "Simplifies complex web pages into structured data that LLMs can easily understand." },
        multiAgent: { title: "Multi-Agent System", desc: "Specialized agents for Planning, Execution, Monitoring, and Safety work in harmony." },
        selfHealing: { title: "Self-Healing", desc: "Adaptive error handling. If a click fails or a popup appears, the agent retries strategies." },
        privacy: { title: "Privacy & Safety", desc: "Human-in-the-loop confirmation for sensitive actions like payments or auth." },
        playwright: { title: "Playwright Engine", desc: "Built on industry-standard automation tools for reliable cross-browser execution." }
      }
    },
    architecture: {
      title: "ReAct-Based Architecture",
      subtitle: "UNDER THE HOOD",
      desc: "A stateful multi-agent system that reasons, plans, and executes.",
      steps: [
        { title: "User Submits Task", desc: "Natural language input (voice/text) like 'Book a flight to Colombo'." },
        { title: "Agent Analysis", desc: "The Agent captures the browser state (DOM/Screenshot) & simplifies it." },
        { title: "LLM Planning", desc: "Orchestrator sends state & goal to LLM (GPT-4/Claude) to decide next step." },
        { title: "Controller Execution", desc: "Controller validates action and instructs Browser Service (Playwright)." },
        { title: "Browser Action", desc: "The browser performs the click, type, or navigation." },
        { title: "Loop & Complete", desc: "System observes new state and repeats until task completion." }
      ]
    },
    useCases: {
      title: "Key Use Cases",
      subtitle: "From personal productivity to enterprise automation.",
      list: [
        { title: "Travel Booking", desc: "Find and book flights based on complex criteria without touching the keyboard.", cmd: "Book a flight to Colombo for next Monday, cheapest option." },
        { title: "Office Automation", desc: "Automate repetitive emails or scheduling tasks.", cmd: "Send a mail to supervisor to remind about the meeting tomorrow." },
        { title: "Data Collection", desc: "Scrape data from multiple pages and compile it.", cmd: "Search for Python tutorials on Google and extract top 5 results." },
        { title: "Form Filling", desc: "Intelligent form handling for registrations or applications.", cmd: "Fill out the visa application with my saved profile data." }
      ]
    },
    team: {
      title: "Project Team",
      subtitle: "THE MINDS BEHIND BROWZ.AI",
      dept: "Department of Electrical and Information Engineering\nFaculty of Engineering, University of Ruhuna",
      roleLead: "Lead Engineer",
      roleCore: "Core Contributor",
      roleSuper: "Supervisor (Senior Lecturer)"
    },
    demos: {
      title: "Watch it in Action",
      subtitle: "DEMOS",
      desc: "See how Browz.AI handles complex real-world tasks.",
      video1: "Flight Booking Demo",
      video2: "Data Extraction Demo",
      comingSoon: "Video coming soon"
    }
  },
  ta: {
    nav: {
      features: "அம்சங்கள்",
      architecture: "கட்டமைப்பு",
      useCases: "பயன்பாடுகள்",
      team: "குழு",
      demos: "காணொளிகள்",
      star: "GitHub இல் ஸ்டார் செய்யவும்",
      viewCode: "குறியீட்டைக் காண்க"
    },
    hero: {
      badge: "Vibe Browsing வந்துவிட்டது",
      titlePrefix: "நாங்கள் உலாவிக்கு கொடுக்கிறோம்",
      titleHighlight: "ஒரு மூளை மற்றும் கைகள்.",
      subtitle: "Browz.AI எளிய குரல் அல்லது உரை கட்டளைகளை சிக்கலான உலாவி செயல்களாக மாற்றுகிறது.",
      ctaDeploy: "ஏஜெண்டை நிறுவு",
      ctaResearch: "ஆய்வை வாசிக்க",
      cardInput: "உள்ளீடு",
      cardAction: "செயல்",
      processing: "DOM செயலாக்கப்படுகிறத...",
      inputExample: "அடுத்த திங்கட்கிழமை கொழும்புக்கு விமான முன்பதிவு செய்.",
      actionExample: "#btn-submit தேர்வியில் 'விமானங்களைத் தேடு' பொத்தானைக் கிளிக் செய்தல்"
    },
    about: {
      concept: "கருத்துரு",
      quote: "உங்கள் உலாவிக்கு Iron Man-ன் J.A.R.V.I.S. கிடைத்தால் எப்படி இருக்கும்?",
      desc1: "தனிநபர்கள் தங்கள் கணினி பயன்பாட்டில் 80% இணைய உலாவிகளிலேயே செலவிடுகின்றனர். இதில் பெரும்பகுதி சலிப்பான வேலைகளுக்கே செல்கிறது.",
      desc2: "Browz.AI உலாவியை ஒரு செயலற்ற கருவியிலிருந்து புத்திசாலித்தனமான உதவியாளராக மாற்றுகிறது.",
      democratized: "அனைவருக்கும் அணுகல்",
      democratizedDesc: "மாற்றுத்திறனாளிகளுக்கு குரல் மூலம் இணையத்தை அணுக உதவுகிறது.",
      autonomous: "தன்னாட்சி ஏஜெண்டுகள்",
      autonomousDesc: "வலுவான செயல்பாட்டை உறுதி செய்ய பல LLM ஆதரவு.",
      authorQuote: "பயனர்கள் சிக்கலான பணிகளை எளிய மொழியில் விவரிப்பதன் மூலம் தானியியக்கமாக்க முடியும்.",
      role: "முன்னணி டெவலப்பர்"
    },
    features: {
      title: "ஏன் Browz.AI?",
      subtitle: "திறன்கள்",
      list: {
        naturalLanguage: { title: "இயற்கை மொழி", desc: "குறியீடு தேவையில்லை. 'என் மேற்பார்வையாளருக்கு மின்னஞ்சல் அனுப்பு' என்று சொன்னால் போதும்." },
        domAnalysis: { title: "நுண்ணறிவு DOM பகுப்பாய்வு", desc: "சிக்கலான வலைப்பக்கங்களை LLM-கள் புரிந்து கொள்ளக்கூடிய எளிய தரவாக மாற்றுகிறது." },
        multiAgent: { title: "பல-ஏஜெண்ட் அமைப்பு", desc: "திட்டமிடல், செயல்படுத்துதல் மற்றும் கண்காணிப்புக்கான சிறப்பு ஏஜெண்டுகள்." },
        selfHealing: { title: "சுய-சரிசெய்தல்", desc: "பிழைகளைத் தானாகவே சரிசெய்து மீண்டும் முயற்சிக்கும் திறன்." },
        privacy: { title: "தனியுரிமை & பாதுகாப்பு", desc: "பணம் செலுத்துதல் போன்ற முக்கிய செயல்களுக்கு மனித உறுதிப்படுத்தல்." },
        playwright: { title: "Playwright இயந்திரம்", desc: "நம்பகமான உலாவி செயல்பாட்டிற்கான தொழில்துறை தரநிலை கருவி." }
      }
    },
    architecture: {
      title: "ReAct அடிப்படையிலான கட்டமைப்பு",
      subtitle: "உள் கட்டமைப்பு",
      desc: "காரணங்களை ஆராய்ந்து, திட்டமிட்டு, செயல்படுத்தும் ஒரு மாநில அடிப்படையிலான பல-ஏஜெண்ட் அமைப்பு.",
      steps: [
        { title: "பயனர் பணி சமர்ப்பிப்பு", desc: "குரல்/உரை உள்ளீடு." },
        { title: "ஏஜெண்ட் பகுப்பாய்வு", desc: "ஏஜெண்ட் உலாவி நிலையைப் படம் பிடிக்கிறது." },
        { title: "LLM திட்டமிடல்", desc: "அடுத்த படியைத் தீர்மானிக்க LLM பயன்படுத்தப்படுகிறது." },
        { title: "கட்டுப்படுத்தி செயல்படுத்துதல்", desc: "செயலைச் சரிபார்த்து உலாவி சேவைக்கு அறிவுறுத்துகிறது." },
        { title: "உலாவி செயல்", desc: "உலாவி கிளிக் அல்லது தட்டச்சு செய்கிறது." },
        { title: "லூப் & நிறைவு", desc: "பணி முடியும் வரை அமைப்பு தொடர்கிறது." }
      ]
    },
    useCases: {
      title: "முக்கிய பயன்பாடுகள்",
      subtitle: "தனிப்பட்ட மற்றும் நிறுவன தானியங்கு.",
      list: [
        { title: "பயண முன்பதிவு", desc: "விசைப்பலகையைத் தொடாமலே விமானங்களை முன்பதிவு செய்யலாம்.", cmd: "அடுத்த திங்கள் கொழும்புக்கு மலிவான விமானத்தை முன்பதிவு செய்." },
        { title: "அலுவலக தானியங்கு", desc: "மின்னஞ்சல்கள் அல்லது அட்டவணைப்படுத்தலை தானியங்குபடுத்துங்கள்.", cmd: "நாளை கூட்டம் பற்றி என் மேற்பார்வையாளருக்கு நினைவுபடுத்து." },
        { title: "தரவு சேகரிப்பு", desc: "பல பக்கங்களிலிருந்து தரவைச் சேகரித்து தொகுக்கலாம்.", cmd: "கூகுளில் பைதான் பயிற்சிகளைத் தேடி முதல் 5 முடிவுகளை எடு." },
        { title: "படிவம் நிரப்புதல்", desc: "பதிவுகள் அல்லது விண்ணப்பங்களுக்கான நுண்ணறிவு படிவம் கையாளுதல்.", cmd: "என் சேமிக்கப்பட்ட விவரங்களுடன் விசா விண்ணப்பத்தை நிரப்பு." }
      ]
    },
    team: {
      title: "திட்டக் குழு",
      subtitle: "BROWZ.AI இன் மூளைகள்",
      dept: "மின் மற்றும் தகவல் பொறியியல் துறை\nபொறியியல் பீடம், ருஹுன பல்கலைக்கழகம்",
      roleLead: "முன்னணி பொறியாளர்",
      roleCore: "முக்கிய பங்களிப்பாளர்",
      roleSuper: "மேற்பார்வையாளர் (மூத்த விரிவுரையாளர்)"
    },
    demos: {
      title: "செயல்விளக்கம்",
      subtitle: "காணொளிகள்",
      desc: "Browz.AI சிக்கலான பணிகளை எவ்வாறு கையாளுகிறது என்பதைப் பாருங்கள்.",
      video1: "விமான முன்பதிவு செயல்விளக்கம்",
      video2: "தரவு பிரித்தெடுத்தல்",
      comingSoon: "விரைவில் வரும்"
    }
  },
  si: {
    nav: {
      features: "විශේෂාංග",
      architecture: "ව්‍යුහය",
      useCases: "භාවිතයන්",
      team: "කණ්ඩායම",
      demos: "නිරූපණ",
      star: "GitHub හි Star කරන්න",
      viewCode: "කේතය බලන්න"
    },
    hero: {
      badge: "Vibe Browsing දැන් පැමිණ ඇත",
      titlePrefix: "අපි ඔබේ බ්‍රව්සරයට ලබා දෙමු",
      titleHighlight: "මොළයක් සහ දෑත්.",
      subtitle: "Browz.AI සරල හඬ හෝ පෙළ විධාන සංකීර්ණ බ්‍රව්සර් ක්‍රියා බවට පත් කරයි.",
      ctaDeploy: "Agent පිහිටුවන්න",
      ctaResearch: "පර්යේෂණ කියවන්න",
      cardInput: "ඇතුළත් කිරීම",
      cardAction: "ක්‍රියාව",
      processing: "DOM සැකසෙමින්...",
      inputExample: "ලබන සඳුදා කොළඹට ගුවන් ටිකට් පතක් වෙන් කරන්න.",
      actionExample: "#btn-submit හි 'Search Flights' බොත්තම ක්ලික් කිරීම"
    },
    about: {
      concept: "සංකල්පය",
      quote: "එය ඔබේ බ්‍රව්සරයට Iron Man ගේ J.A.R.V.I.S. ලබා දීමක් වැනිය.",
      desc1: "පුද්ගලයින් පරිගණක භාවිතයෙන් 80% ක් පමණ වැය කරන්නේ වෙබ් බ්‍රව්සර් සඳහා ය. මෙයින් වැඩි කාලයක් පුනරාවර්තන කාර්යයන් සඳහා වැය වේ.",
      desc2: "Browz.AI බ්‍රව්සරය අක්‍රිය මෙවලමක සිට බුද්ධිමත් සහායකයෙකු බවට පත් කරයි.",
      democratized: "සැමට ප්‍රවේශය",
      democratizedDesc: "හඬ විධාන හරහා අන්තර්ජාලය භාවිතා කිරීමට හැකියාව ලබා දෙයි.",
      autonomous: "ස්වයංක්‍රීය නියෝජිතයන්",
      autonomousDesc: "බහු LLM සහාය ඇතිව ශක්තිමත් ක්‍රියාකාරිත්වයක් සහතික කරයි.",
      authorQuote: "පරිශීලකයින්ට සරල ස්වභාවික භාෂාවෙන් විස්තර කිරීමෙන් සංකීර්ණ කාර්යයන් ස්වයංක්‍රීය කළ හැකිය.",
      role: "ප්‍රධාන සංවර්ධක"
    },
    features: {
      title: "ඇයි Browz.AI?",
      subtitle: "හැකියාවන්",
      list: {
        naturalLanguage: { title: "ස්වභාවික භාෂාව", desc: "කේත අවශ්‍ය නැත. 'මගේ අධීක්ෂකවරයාට විද්‍යුත් තැපෑලක් යවන්න' යැයි පැවසීම ප්‍රමාණවත්." },
        domAnalysis: { title: "බුද්ධිමත් DOM විශ්ලේෂණය", desc: "සංකීර්ණ වෙබ් පිටු LLM වලට තේරුම් ගත හැකි දත්ත බවට පත් කරයි." },
        multiAgent: { title: "බහු-නියෝජිත පද්ධතිය", desc: "සැලසුම් කිරීම, ක්‍රියාත්මක කිරීම සහ අධීක්ෂණය සඳහා විශේෂිත නියෝජිතයන්." },
        selfHealing: { title: "ස්වයං-සංශෝධනය", desc: "දෝෂ හඳුනාගෙන ඒවා ස්වයංක්‍රීයව නිවැරදි කරයි." },
        privacy: { title: "පුද්ගලිකත්වය & ආරක්ෂාව", desc: "ගෙවීම් වැනි සංවේදී ක්‍රියා සඳහා පරිශීලක අනුමැතිය." },
        playwright: { title: "Playwright එන්ජිම", desc: "විශ්වාසදායක බ්‍රව්සර් ස්වයංක්‍රීයකරණය සඳහා කර්මාන්ත සම්මත මෙවලමකි." }
      }
    },
    architecture: {
      title: "ReAct පදනම් වූ ව්‍යුහය",
      subtitle: "අභ්‍යන්තර ක්‍රියාවලිය",
      desc: "තර්ක කිරීම, සැලසුම් කිරීම සහ ක්‍රියාත්මක කිරීම සිදු කරන පද්ධතියකි.",
      steps: [
        { title: "පරිශීලක විධානය", desc: "හඬ හෝ පෙළ ඇතුළත් කිරීම." },
        { title: "නියෝජිත විශ්ලේෂණය", desc: "නියෝජිතයා බ්‍රව්සර් තත්ත්වය ග්‍රහණය කර ගනී." },
        { title: "LLM සැලසුම් කිරීම", desc: "ඊළඟ පියවර තීරණය කිරීමට LLM භාවිතා කරයි." },
        { title: "පාලක ක්‍රියාත්මක කිරීම", desc: "ක්‍රියාව තහවුරු කර බ්‍රව්සර් සේවාවට උපදෙස් දෙයි." },
        { title: "බ්‍රව්සර් ක්‍රියාව", desc: "බ්‍රව්සරය ක්ලික් කිරීම හෝ ටයිප් කිරීම සිදු කරයි." },
        { title: "පුනරාවර්තනය", desc: "කාර්යය අවසන් වන තෙක් පද්ධතිය ක්‍රියාත්මක වේ." }
      ]
    },
    useCases: {
      title: "ප්‍රධාන භාවිතයන්",
      subtitle: "පුද්ගලික සහ ව්‍යාපාරික ස්වයංක්‍රීයකරණය.",
      list: [
        { title: "ගමන් වෙන්කරවා ගැනීම", desc: "යතුරු පුවරුව ස්පර්ශ නොකර ගුවන් ගමන් සොයා වෙන්කරවා ගන්න.", cmd: "ලබන සඳුදා කොළඹට ලාභදායී ගුවන් ගමනක් වෙන්කරන්න." },
        { title: "කාර්යාල ස්වයංක්‍රීයකරණය", desc: "විද්‍යුත් තැපැල් හෝ කාලසටහන් ස්වයංක්‍රීය කරන්න.", cmd: "හෙට රැස්වීම ගැන මගේ අධීක්ෂකවරයාට මතක් කරන්න." },
        { title: "දත්ත රැස් කිරීම", desc: "වෙබ් පිටු වලින් දත්ත උපුටා ගෙන සකසන්න.", cmd: "Google හි Python පාඩම් සොයා හොඳම ප්‍රතිඵල 5 ලබා දෙන්න." },
        { title: "පෝරම පිරවීම", desc: "ලියාපදිංචි කිරීම් සඳහා බුද්ධිමත් පෝරම හැසිරවීම.", cmd: "මගේ සුරැකූ දත්ත සමඟ වීසා අයදුම්පත පුරවන්න." }
      ]
    },
    team: {
      title: "ව්‍යාපෘති කණ්ඩායම",
      subtitle: "BROWZ.AI පිටුපස සිටින පිරිස",
      dept: "විදුලි හා තොරතුරු ඉංජිනේරු දෙපාර්තමේන්තුව\nඉංජිනේරු පීඨය, රුහුණ විශ්වවිද්‍යාලය",
      roleCore: "ප්‍රධාන දායකත්වය",
      roleSuper: "අධීක්ෂක (ජ්‍යෙෂ්ඨ කථිකාචාර්ය)"
    },
    demos: {
      title: "ක්‍රියාවෙන් බලන්න",
      subtitle: "නිරූපණ",
      desc: "Browz.AI සංකීර්ණ කාර්යයන් හසුරුවන ආකාරය බලන්න.",
      video1: "ගුවන් ගමන් වෙන්කරවා ගැනීමේ නිරූපණය",
      video2: "දත්ත උපුටා ගැනීමේ නිරූපණය",
      comingSoon: "වීඩියෝව ළඟදීම බලාපොරොත්තු වන්න"
    }
  }
};
