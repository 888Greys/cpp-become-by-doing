import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ChevronDown, 
  Calendar, 
  ArrowRight, 
  X, 
  MessageSquare, 
  ArrowLeft,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export default function CsuApplyLanding({ onStartApplication, onBackToCpp }) {
  const [selectedTerm, setSelectedTerm] = useState('Fall 2027');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deadlinesOpen, setDeadlinesOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(true);
  const [chatbotMinimized, setChatbotMinimized] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi there! I’m a chatbot here to answer your questions. What would you like to know?' }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const dropdownRef = useRef(null);

  // Dynamic Favicon and Page Title matching user requirement:
  // "on apply page use this favicon: https://www.calstate.edu/_catalogs/masterpage/assets/images/csuicon.ico?v=5"
  useEffect(() => {
    const originalTitle = document.title;
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.head.appendChild(link);
    }
    const originalFavicon = link.href;

    document.title = "Go From Here. | CSU";
    link.href = '/assets/csuicon.ico';

    return () => {
      document.title = originalTitle;
      link.href = originalFavicon;
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const terms = [
    'Fall 2027',
    'Spring 2027',
    'Fall 2026',
    'Summer 2027'
  ];

  const searchingCards = [
    {
      id: 1,
      image: '/assets/csu-searching-1.png',
      question: 'Is college affordable for me?',
      description: 'More than half of CSU students graduate debt-free. See how financial aid can get you to a four-year degree without the burden of loans.'
    },
    {
      id: 2,
      image: '/assets/csu-searching-2.png',
      question: 'Will it get me career-ready?',
      description: 'With over 4,000 degree programs built for the real world, the CSU prepares you for the job you want.'
    },
    {
      id: 3,
      image: '/assets/csu-searching-3.png',
      question: 'What advantages does it offer?',
      description: 'Every CSU major provides real, hands-on experience because the best learning happens by doing. Explore programs and see which major is right for you.'
    },
    {
      id: 4,
      image: '/assets/csu-searching-4.png',
      question: 'Is it the right place for me?',
      description: 'From student clubs to campus events, there’s a place for you at any of the CSU’s 22 campuses. Explore campus life and discover where you’ll feel right at home.'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const userText = inputMsg;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputMsg('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { 
          sender: 'bot', 
          text: `Thanks for asking about "${userText}"! Fall 2027 applications are open. Click 'Apply Now' to create your Cal State account and begin.` 
        }
      ]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white text-[#222] font-sans overflow-x-hidden selection:bg-[#C41230] selection:text-white">
      
      {/* 1. TOP BROWSER CONTEXT BAR */}
      <div className="bg-[#1e293b] text-white text-[11px] px-4 py-1.5 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <img src="/assets/csuicon.ico" alt="CSU" className="w-3.5 h-3.5" />
          <span className="font-mono text-gray-300">calstate.edu/apply</span>
        </div>
        <button 
          onClick={onBackToCpp} 
          className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Cal Poly Pomona</span>
        </button>
      </div>

      {/* 2. PRIMARY CSU BRAND HEADER (Exact Match to Screenshot 1) */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 sm:px-8 py-3.5 shadow-xs">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between">
          
          {/* CSU Official Logo */}
          <div className="flex items-center">
            <a href="#apply-home" className="flex items-center">
              <img 
                src="/assets/csu-logo.png" 
                alt="CSU The California State University" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-gray-700">
            <a href="#why" className="hover:text-[#C41230] transition-colors">Why Choose the CSU?</a>
            <a href="#how" className="hover:text-[#C41230] transition-colors">How to Apply</a>
            <a href="#students" className="hover:text-[#C41230] transition-colors">Our Students</a>
            <a href="#counselors" className="hover:text-[#C41230] transition-colors">For Counselors</a>
            <a href="#faq" className="hover:text-[#C41230] transition-colors">FAQ</a>
          </nav>

          {/* Right Action: Red 'Start Your Fall 2027 Application' Button + Search */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onStartApplication(selectedTerm)}
              className="bg-[#C41230] hover:bg-[#a60f28] text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-sm shadow transition-all cursor-pointer whitespace-nowrap"
            >
              Start Your Fall 2027 Application
            </button>

            <button 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              title="Search Cal State"
            >
              <Search className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>

        </div>
      </header>

      {/* 3. SUB-NAV BAR: 'Apply' & 'Priority Dates and Deadlines*' (Exact Match to Screenshot 1 & 2) */}
      <div className="bg-[#f6f6f2] border-b border-gray-200 px-4 sm:px-8 py-2 text-xs sm:text-sm text-gray-700">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between">
          <span className="font-bold text-gray-900">Apply</span>

          <div className="relative">
            <button 
              onClick={() => setDeadlinesOpen(!deadlinesOpen)}
              className="flex items-center gap-1.5 text-gray-700 hover:text-black font-medium cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-gray-500" />
              <span>Priority Dates and Deadlines*</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${deadlinesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Priority Dates Dropdown Accordion */}
            {deadlinesOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-300 rounded shadow-xl p-4 z-50 animate-in fade-in">
                <h4 className="font-bold text-xs text-[#C41230] uppercase tracking-wider mb-2">Priority Application Windows</h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex justify-between border-b pb-1">
                    <span className="font-semibold">Fall 2027:</span>
                    <span>Oct 1 – Nov 30</span>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                    <span className="font-semibold">Spring 2027:</span>
                    <span>Aug 1 – Aug 31</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Winter / Summer:</span>
                    <span>Varies by campus</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. HERO SECTION: Forester in Redwoods + Skyline Cutout + Term Selector (Exact Match to Screenshot 1 & 2) */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] bg-[#1e2a1e] overflow-hidden flex flex-col justify-between">
        
        {/* Full-bleed Hero Background Image: Hero.jpg */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter contrast-[1.05]"
          style={{ backgroundImage: `url('/assets/csu-hero.jpg')` }}
        >
          {/* Subtle dark vignette to ensure text contrast */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Hero Center Content: "Go From Here." */}
        <div className="relative z-10 max-w-[1500px] mx-auto w-full px-4 sm:px-8 pt-16 sm:pt-24 flex flex-col items-center text-center">
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight drop-shadow-lg">
            Go From Here.
          </h1>

          <p className="mt-4 max-w-xl text-base sm:text-xl text-white font-medium drop-shadow-md leading-relaxed">
            The CSU unlocks opportunity with affordable degrees that lead to careers.
          </p>

          {/* Term Selector Box & Apply Now Button (Exact Match to Screenshot 1 & 2) */}
          <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-sm">
            
            {/* Custom Term Selector Dropdown */}
            <div className="relative w-full" ref={dropdownRef}>
              <button 
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full bg-white border border-gray-300 py-3 px-4 rounded text-sm text-gray-800 flex items-center justify-between shadow-md cursor-pointer hover:border-gray-400"
              >
                <span className="font-medium">{selectedTerm}</span>
                <ChevronDown className="w-4 h-4 text-[#C41230] stroke-[2.5]" />
              </button>

              {/* Dropdown Menu (Exact match to Screenshot 2) */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 shadow-xl rounded overflow-hidden z-30">
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b">
                      Select a Term to Apply For
                    </div>
                    {terms.map((term, idx) => (
                      <button 
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedTerm(term);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                          selectedTerm === term 
                            ? 'bg-[#005A9C] text-white font-semibold' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Crimson Apply Now Button */}
            <button 
              onClick={() => onStartApplication(selectedTerm)}
              className="bg-[#C41230] hover:bg-[#a60f28] text-white font-bold text-sm tracking-wider px-8 py-3.5 rounded shadow-lg transition-transform transform hover:scale-102 active:scale-98 cursor-pointer w-44"
            >
              Apply Now!
            </button>

          </div>

        </div>

        {/* 5. Architectural White Skyline Cutout Silhouette (Exact Match to Screenshot 1 & 2) */}
        <div className="relative z-10 w-full leading-none pointer-events-none mt-12">
          <svg 
            viewBox="0 0 1440 90" 
            preserveAspectRatio="none" 
            className="w-full h-16 sm:h-24 fill-white"
          >
            <path d="M0,90 L0,70 L25,70 L25,76 L40,76 L40,68 L60,68 L75,55 L90,55 L90,70 L115,70 L115,62 L130,62 L130,76 L150,76 L150,58 L170,58 L180,48 L195,48 L205,58 L220,58 L220,72 L240,72 L250,60 L275,60 L275,76 L310,76 L310,50 L335,50 L335,76 L360,76 L375,65 L395,65 L405,74 L430,74 L430,55 L450,55 L450,75 L480,75 L495,62 L520,62 L520,74 L550,74 L550,48 L570,48 L575,38 L585,38 L590,48 L610,48 L610,76 L640,76 L655,60 L685,60 L685,76 L720,76 L720,52 L745,52 L745,76 L780,76 L795,60 L825,60 L835,72 L865,72 L865,48 L890,48 L890,74 L920,74 L935,58 L960,58 L960,74 L990,74 L1005,62 L1035,62 L1035,76 L1070,76 L1070,50 L1095,50 L1095,76 L1130,76 L1145,62 L1175,62 L1185,74 L1215,74 L1215,48 L1240,48 L1240,74 L1270,74 L1285,58 L1310,58 L1310,74 L1345,74 L1360,62 L1390,62 L1400,74 L1440,74 L1440,90 Z" />
          </svg>
        </div>

      </section>

      {/* 6. "The CSU: What You’re Searching For." 4-Card Section (Exact Match to Screenshots 3, 4, 5) */}
      <section className="w-full bg-[#fdfdfc] py-14 sm:py-20 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-gray-900 text-center mb-10 sm:mb-16 tracking-tight">
            The CSU: What You’re Searching For.
          </h2>

          {/* 4 Photo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {searchingCards.map((card) => (
              <div 
                key={card.id}
                className="group relative rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all aspect-[3/4] sm:aspect-[4/5] flex flex-col justify-end p-6 text-white"
              >
                {/* Background Image with Gradient */}
                <img 
                  src={card.image} 
                  alt={card.question}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Semi-transparent dark overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug drop-shadow-sm">
                    {card.question}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-gray-200 leading-relaxed font-sans">
                    {card.description}
                  </p>

                  {/* Red Square Button with Arrow */}
                  <div className="pt-2">
                    <button 
                      onClick={() => onStartApplication(selectedTerm)}
                      className="w-10 h-10 bg-[#C41230] hover:bg-[#a60f28] text-white flex items-center justify-center rounded shadow transition-transform transform group-hover:translate-x-1 cursor-pointer"
                    >
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. "One Application, 22 Campuses" Section (Exact Match to Screenshot 5) */}
      <section className="w-full bg-white py-14 sm:py-20 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-gray-900 tracking-tight">
              One Application, 22 Campuses
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Fall applications are open. Start your journey with just one application.
            </p>
          </div>

          {/* Step 1 Card with CTA Banner */}
          <div className="bg-[#fcfcfb] border border-gray-200 rounded-lg p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 justify-between">
            
            {/* Step info */}
            <div className="flex items-start gap-5 max-w-lg">
              <div className="w-12 h-12 rounded-full bg-[#C41230] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#C41230] mb-2">
                  Create your account.
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Choose your application term, the campuses that inspire you, and keep track of all your applications in one centralized dashboard.
                </p>
                <div className="mt-4">
                  <button 
                    onClick={() => onStartApplication(selectedTerm)}
                    className="inline-flex items-center gap-2 bg-[#C41230] hover:bg-[#a60f28] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded shadow transition-all cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA.png Image */}
            <div className="w-full md:w-80 shrink-0 flex items-center justify-center">
              <img 
                src="/assets/csu-cta.png" 
                alt="CSU Application Process" 
                className="w-full h-auto object-contain rounded"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="w-full bg-[#1b262c] text-white py-10 px-4 sm:px-8 border-t border-gray-700 text-xs text-gray-400">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/assets/csu-logo.png" alt="CSU" className="h-8 brightness-0 invert opacity-80" />
            <span>© 2026 The California State University. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:underline">Terms of Use</a>
            <span>•</span>
            <a href="#accessibility" className="hover:underline">Accessibility</a>
            <span>•</span>
            <button onClick={onBackToCpp} className="text-[#A4D65E] hover:underline font-semibold cursor-pointer">
              Return to Cal Poly Pomona
            </button>
          </div>
        </div>
      </footer>

      {/* 9. FLOATING CHATBOT WIDGET: Ocelot AI Chat (Exact Match to Screenshots 1, 2, 3, 4, 5) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        
        {/* Chatbot Dialog Box */}
        {chatbotOpen && (
          <div className="w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden mb-3 animate-in slide-in-from-bottom-2 duration-200">
            
            {/* Header: Red "May I help you?" Bar */}
            <div className="bg-[#C41230] text-white px-4 py-3 flex items-center justify-between">
              <span className="font-bold text-sm">May I help you?</span>
              <button 
                onClick={() => setChatbotOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 max-h-72 overflow-y-auto space-y-3 bg-[#fafafa]">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'bot' && (
                    <img 
                      src="/assets/csu-chatbot-avatar.png" 
                      alt="CSU Bot" 
                      className="w-7 h-7 rounded-full object-cover border border-gray-200 shrink-0" 
                    />
                  )}
                  <div className={`p-3 rounded-lg text-xs leading-relaxed max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-[#C41230] text-white' 
                      : 'bg-white border border-gray-200 text-gray-800 shadow-xs'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-gray-200 flex gap-2">
              <input 
                type="text" 
                placeholder="Ask about admissions, deadlines..." 
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                className="flex-1 px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#C41230]"
              />
              <button 
                type="submit"
                className="bg-[#C41230] hover:bg-[#a60f28] text-white text-xs font-bold px-3 py-1.5 rounded transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>

          </div>
        )}

        {/* Floating Bubble Toggle Button */}
        {!chatbotOpen && (
          <button 
            onClick={() => setChatbotOpen(true)}
            className="w-13 h-13 rounded-full bg-gray-900 hover:bg-black text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 cursor-pointer"
            title="Open CSU Chatbot"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        )}

      </div>

    </div>
  );
}
