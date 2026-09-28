import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  Check, 
  ChevronDown, 
  LogOut, 
  ArrowLeft,
  X as CloseIcon,
  ExternalLink
} from 'lucide-react';

export default function CalStateApply({ onClose }) {
  // Navigation / multi-step state: 'create-account' -> 'loading' -> 'add-program'
  const [currentStep, setCurrentStep] = useState('create-account');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form State initialized with user context
  const [formData, setFormData] = useState({
    firstName: 'Mathew',
    middleName: 'Kiprono',
    lastName: 'Rotich',
    suffix: '',
    email: '888greys@gmail.com',
    confirmEmail: '888greys@gmail.com',
    password: 'Password123!',
    confirmPassword: 'Password123!',
    phone: '712345678',
    phoneType: 'Mobile',
    altPhone: '',
    altPhoneType: 'Mobile',
    termsAccepted: true,
    authAccepted: true,
    euLocated: 'no'
  });

  // Password validation checks
  const passwordCriteria = [
    { label: 'Minimum of 8 characters', met: formData.password.length >= 8 },
    { label: '1 lowercase letter', met: /[a-z]/.test(formData.password) },
    { label: '1 uppercase letter', met: /[A-Z]/.test(formData.password) },
    { label: '1 number', met: /[0-9]/.test(formData.password) },
    { label: '1 special character', met: /[^A-Za-z0-9]/.test(formData.password) }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // 1. Switch to loading blur state matching user screenshot 4
    setCurrentStep('loading');
    
    // 2. Realistic transition delay to Add Program screen matching screenshot 5
    setTimeout(() => {
      setCurrentStep('add-program');
    }, 1800);
  };

  const handleContinueApplication = (mode) => {
    alert(`Starting application flow: ${mode === 'new' ? 'Fresh Application' : 'Transfer Planner'}`);
  };

  const handleLogout = () => {
    if (onClose) {
      onClose();
    } else {
      setCurrentStep('create-account');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#eef2f6] text-[#222] font-sans">
      
      {/* Top Bar for Application Context */}
      <div className="bg-[#1f2937] text-white text-[11px] px-4 py-1.5 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-gray-300">calstate.cas.myliaison.com/applicant/{currentStep}</span>
        </div>
        <button 
          onClick={onClose} 
          className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Cal Poly Pomona</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* STEP 1: CREATE ACCOUNT (Split-screen layout matching Screenshots 1, 2, 3) */}
      {/* ========================================================================= */}
      {currentStep !== 'add-program' && (
        <div className="relative min-h-[calc(100vh-32px)] flex flex-col lg:flex-row">
          
          {/* LEFT COLUMN: Cal Poly Pomona Student Services Building Aerial Photography */}
          <div className="relative w-full lg:w-[60%] min-h-[460px] lg:min-h-full bg-black overflow-hidden flex flex-col justify-end">
            
            {/* High-Resolution Cal Poly Pomona SSB Campus Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter contrast-[1.02]"
              style={{ backgroundImage: `url('/assets/apply-bg-ssb-hd.jpg')` }}
            >
              {/* Soft overlay gradient for bottom text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10"></div>
            </div>

            {/* Left Column Bottom Content (Exact Match to Screenshot 1 & 2) */}
            <div className="relative z-10 p-6 sm:p-10 text-white">
              
              {/* Announcement Block */}
              <div className="max-w-2xl text-[13px] sm:text-[14px] leading-relaxed text-gray-100 mb-6 drop-shadow-md">
                <p className="mb-2">
                  Welcome to Cal State! You’re in the right place to apply for fall 2027. Looking for a prior term?{' '}
                  <a href="#prior-term" className="underline hover:text-white font-medium">Click here to apply to the 2026-2027 cycle</a>. 
                  Need information about deadlines? Visit the{' '}
                  <a href="#deadlines" className="underline hover:text-white font-medium">Application Dates &amp; Deadlines</a> page.
                </p>
                <p className="italic text-gray-300 text-xs mt-3">
                  Background Image Courtesy of Cal Poly Pomona
                </p>
              </div>

              {/* Institutional Footer Links & Socials (Exact Match to Screenshot 1) */}
              <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-gray-300">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <a href="#admissions" className="hover:underline">CSU Admissions</a>
                  <span>•</span>
                  <a href="#help" className="hover:underline">Help Center</a>
                  <span>•</span>
                  <a href="#contact" className="hover:underline">Contact Us</a>
                  <span>•</span>
                  <span>857-304-2087</span>
                  <span>•</span>
                  <a href="#csu" className="hover:underline">The California State University</a>
                  <span>•</span>
                  <a href="#privacy" className="hover:underline">Privacy Policy</a>
                  <span>•</span>
                  <a href="#refund" className="hover:underline">Refund Policy</a>
                  <span>•</span>
                  <a href="#accessibility" className="hover:underline">Accessibility Statement</a>
                  <span>•</span>
                  <a href="#cookies" className="hover:underline">Cookie Policy</a>
                </div>

                {/* Social Media SVG Icons */}
                <div className="flex items-center gap-2.5 shrink-0 text-white">
                  {/* X (Twitter) */}
                  <a href="#x" className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  {/* YouTube */}
                  <a href="#youtube" className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  {/* Instagram */}
                  <a href="#instagram" className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  {/* Facebook */}
                  <a href="#facebook" className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>

              <div className="text-[10px] text-gray-400 mt-2">
                © 2026 Liaison International. All Rights Reserved
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Create Account Form (Exact Match to Screenshots 1, 2, 3) */}
          <div className="w-full lg:w-[40%] bg-[#f8f9fa] p-6 sm:p-10 lg:p-12 overflow-y-auto">
            
            {/* Header: CAL STATE APPLY & Return to Sign in */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div className="flex items-baseline">
                <span className="font-extrabold text-2xl tracking-normal text-[#5c6873]">CAL STATE</span>
                <span className="font-extrabold text-2xl tracking-normal text-[#C41230] ml-1.5">APPLY</span>
              </div>
              <button 
                onClick={onClose}
                className="text-xs font-bold tracking-wider uppercase text-[#005A9C] hover:underline"
              >
                RETURN TO SIGN IN
              </button>
            </div>

            {/* Title & Introduction */}
            <div className="mt-6 mb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl sm:text-[28px] font-bold text-[#1e293b]">Create Account</h1>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mt-3">
                The following information will be shared with the programs you apply to. Be sure to provide complete and accurate information. If necessary, you can provide additional addresses and alternate names within the application.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleCreateAccount} className="space-y-8">
              
              {/* SECTION 1: YOUR NAME */}
              <div>
                <h2 className="text-xs font-bold tracking-wider text-[#475569] uppercase mb-4 pb-1 border-b border-gray-200">
                  YOUR NAME
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Legal First Name<span className="text-red-600">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Middle Name
                    </label>
                    <input 
                      type="text" 
                      value={formData.middleName}
                      onChange={(e) => handleInputChange('middleName', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Last or Family Name<span className="text-red-600">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Suffix
                    </label>
                    <input 
                      type="text" 
                      value={formData.suffix}
                      onChange={(e) => handleInputChange('suffix', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: ACCOUNT INFORMATION */}
              <div>
                <h2 className="text-xs font-bold tracking-wider text-[#475569] uppercase mb-4 pb-1 border-b border-gray-200">
                  ACCOUNT INFORMATION
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address<span className="text-red-600">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Confirm Email Address<span className="text-red-600">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.confirmEmail}
                      onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                    />
                  </div>

                  {/* Password with Eye Toggle */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Password<span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full px-3 py-2 pr-10 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Password Minimal Requirements List (Exact Match to Screenshot 2) */}
                    <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">
                      <p className="font-medium text-gray-700 mb-1.5">Your password must meet these minimal requirements:</p>
                      <ul className="space-y-1">
                        {passwordCriteria.map((c, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                              c.met ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'
                            }`}>
                              {c.met ? '✓' : '•'}
                            </span>
                            <span className={c.met ? 'text-emerald-700 font-medium' : 'text-gray-600'}>
                              {c.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Confirm Password<span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="w-full px-3 py-2 pr-10 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Preferred Phone Number with US Flag (Exact match to Screenshot 2) */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Preferred Phone Number<span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-300 rounded-md text-xs text-gray-700 shrink-0">
                        {/* US Flag SVG */}
                        <svg className="w-4 h-3 rounded-xs" viewBox="0 0 640 480">
                          <g fillRule="evenodd"><path fill="#bd3d44" d="M0 0h640v480H0z"/><path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"/><path fill="#192f5d" d="M0 0h256v258.5H0z"/></g>
                        </svg>
                        <span>+1</span>
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                      </div>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                      />
                      <div className="relative shrink-0">
                        <select 
                          value={formData.phoneType}
                          onChange={(e) => handleInputChange('phoneType', e.target.value)}
                          className="h-full px-3 py-2 bg-white border border-gray-300 rounded-md text-xs text-gray-700 appearance-none pr-7 focus:outline-none"
                        >
                          <option>Mobile</option>
                          <option>Home</option>
                          <option>Work</option>
                        </select>
                        <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Alternate Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Alternate Phone Number
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-300 rounded-md text-xs text-gray-700 shrink-0">
                        <svg className="w-4 h-3 rounded-xs" viewBox="0 0 640 480">
                          <g fillRule="evenodd"><path fill="#bd3d44" d="M0 0h640v480H0z"/><path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"/><path fill="#192f5d" d="M0 0h256v258.5H0z"/></g>
                        </svg>
                        <span>+1</span>
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                      </div>
                      <input 
                        type="tel"
                        value={formData.altPhone}
                        onChange={(e) => handleInputChange('altPhone', e.target.value)}
                        className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#005A9C] focus:border-transparent"
                      />
                      <div className="relative shrink-0">
                        <select 
                          value={formData.altPhoneType}
                          onChange={(e) => handleInputChange('altPhoneType', e.target.value)}
                          className="h-full px-3 py-2 bg-white border border-gray-300 rounded-md text-xs text-gray-700 appearance-none pr-7 focus:outline-none"
                        >
                          <option>Mobile</option>
                          <option>Home</option>
                          <option>Work</option>
                        </select>
                        <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* SECTION 3: TERMS AND CONDITIONS (Exact Match to Screenshot 3) */}
              <div>
                <h2 className="text-xs font-bold tracking-wider text-[#475569] uppercase mb-4 pb-1 border-b border-gray-200">
                  TERMS AND CONDITIONS
                </h2>

                <div className="space-y-4">
                  {/* Terms of Use */}
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="terms"
                      required
                      checked={formData.termsAccepted}
                      onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                      className="mt-1 w-4 h-4 text-[#003B71] border-gray-300 rounded focus:ring-[#005A9C]"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-700 leading-normal">
                      <span className="font-bold text-gray-900">Terms of Use</span><span className="text-red-600">*</span>
                      <br />
                      I have read and agree to the <a href="#terms-link" className="text-[#005A9C] font-semibold underline">Terms of Use</a>
                    </label>
                  </div>

                  {/* Text and Phone Authorization */}
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="auth"
                      checked={formData.authAccepted}
                      onChange={(e) => handleInputChange('authAccepted', e.target.checked)}
                      className="mt-1 w-4 h-4 text-[#003B71] border-gray-300 rounded focus:ring-[#005A9C]"
                    />
                    <label htmlFor="auth" className="text-xs text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">Text and Phone Authorization</span>
                      <br />
                      I agree to the <a href="#tos" className="text-[#005A9C] font-semibold underline">Terms of Service</a> and to receive calls and/or texts at any phone number I have provided or may provide in the future, including any wireless number, from any entity associated with my application process, including but not limited to my designated schools and programs, the Liaison International support team, the association or institution for this Centralized Application Service.
                    </label>
                  </div>
                </div>
              </div>

              {/* SECTION 4: EUROPEAN UNION DATA PROTECTION (Exact Match to Screenshot 3) */}
              <div>
                <h2 className="text-xs font-bold tracking-wider text-[#475569] uppercase mb-4 pb-1 border-b border-gray-200">
                  EUROPEAN UNION DATA PROTECTION
                </h2>

                <div className="space-y-3">
                  <p className="text-xs font-medium text-gray-800">
                    Are you currently located in a European Union country, Iceland, Liechtenstein, Norway, or Switzerland?<span className="text-red-600">*</span>
                  </p>

                  <div className="flex flex-col gap-2 pl-1">
                    <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                      <input 
                        type="radio" 
                        name="eu" 
                        value="yes"
                        checked={formData.euLocated === 'yes'}
                        onChange={(e) => handleInputChange('euLocated', e.target.value)}
                        className="text-[#003B71] focus:ring-[#005A9C]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                      <input 
                        type="radio" 
                        name="eu" 
                        value="no"
                        checked={formData.euLocated === 'no'}
                        onChange={(e) => handleInputChange('euLocated', e.target.value)}
                        className="text-[#003B71] focus:ring-[#005A9C]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons: CREATE ACCOUNT & Return */}
              <div className="pt-4 space-y-4">
                <button 
                  type="submit"
                  className="w-full py-3.5 bg-[#003B71] hover:bg-[#002b54] text-white font-bold text-xs tracking-widest uppercase rounded shadow transition-all transform active:scale-[0.99] cursor-pointer"
                >
                  CREATE ACCOUNT
                </button>

                <div className="text-center">
                  <button 
                    type="button"
                    onClick={onClose}
                    className="text-xs font-bold tracking-wider uppercase text-[#005A9C] hover:underline"
                  >
                    RETURN TO SIGN IN
                  </button>
                </div>
              </div>

            </form>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* LOADING OVERLAY STATE (Exact Match to User Screenshot 4)                  */}
      {/* ========================================================================= */}
      {currentStep === 'loading' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-md bg-black/25 transition-all">
          <div className="flex flex-col items-center">
            {/* Spinning Arc (Cyan-Blue Accent Ring from Screenshot 4) */}
            <div className="w-16 h-16 rounded-full border-4 border-sky-400/20 border-t-sky-400 animate-spin"></div>
            <p className="mt-4 text-xs font-mono tracking-widest text-white/90 uppercase">Verifying &amp; Initializing Account...</p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 2: NEXT PAGE - ADD PROGRAM MODAL (Exact Match to User Screenshot 5) */}
      {/* ========================================================================= */}
      {currentStep === 'add-program' && (
        <div className="min-h-[calc(100vh-32px)] flex items-center justify-center p-4 sm:p-8 bg-[#2d1217]/20 backdrop-blur-xs">
          
          {/* Main Add Program Container Dialog */}
          <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
            
            {/* Left Crimson Burgundy Welcome Sidebar (Exact Match to Screenshot 5) */}
            <div className="w-full md:w-[32%] bg-gradient-to-b from-[#8C1D2F] via-[#781726] to-[#450912] p-8 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <span className="text-lg font-light text-white/90 block mb-1">Welcome,</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {formData.firstName || 'Mathew'} {formData.lastName || 'Rotich'}!
                </h2>

                <p className="text-xs text-white/80 leading-relaxed mt-6">
                  We're excited you've started your application with Cal State Apply.
                </p>

                <p className="text-xs text-white/80 leading-relaxed mt-4">
                  Let's get started with the following questions.
                </p>
              </div>

              {/* CAL STATE APPLY Brand Logo at Bottom Left */}
              <div className="mt-16 pt-6 border-t border-white/15">
                <div className="font-extrabold text-xl sm:text-2xl tracking-tight text-white uppercase">
                  CAL STATE APPLY
                </div>
              </div>
            </div>

            {/* Right Content Panel: Get Started on Your Application */}
            <div className="w-full md:w-[68%] p-6 sm:p-10 flex flex-col justify-between bg-white">
              
              <div>
                {/* Header */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 pb-3 border-b border-gray-200">
                  Get Started on Your Application
                </h1>

                {/* Subtitle instructions */}
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-5 mb-8">
                  <p className="mb-2">
                    <strong className="text-gray-900">Freshman and all other applicants:</strong> Click &ldquo;Don’t Copy, Start a New Application&rdquo; to continue creating your account.
                  </p>
                  <p>
                    <strong className="text-gray-900">Transfer students:</strong> Save time! If you have a Transfer Planner account, copy your data by clicking &ldquo;Continue.&rdquo;
                  </p>
                </div>

                {/* Two Action Option Cards (Exact Match to Screenshot 5) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* CARD 1: Start New Application */}
                  <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center justify-between hover:shadow-lg transition-all bg-white group">
                    <div className="flex flex-col items-center">
                      {/* 3D Isometric House with Cloud Graphic */}
                      <div className="w-24 h-24 mb-4 flex items-center justify-center">
                        <img 
                          src="/assets/icon-new-app.png" 
                          alt="Start a New Application" 
                          className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                        />
                      </div>

                      <h3 className="font-bold text-base text-gray-900 mb-2">
                        Don’t Copy, Start a New Application
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        Start a fresh application without copying data from my previous application or copying data from my Transfer Planner account.
                      </p>
                    </div>

                    <button 
                      onClick={() => handleContinueApplication('new')}
                      className="mt-6 w-full py-2.5 bg-[#003B71] hover:bg-[#002b54] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      CONTINUE
                    </button>
                  </div>

                  {/* CARD 2: Transfer Planner Account */}
                  <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center justify-between hover:shadow-lg transition-all bg-white group">
                    <div className="flex flex-col items-center">
                      {/* 3D Isometric Laptop with Cloud Graphic */}
                      <div className="w-24 h-24 mb-4 flex items-center justify-center">
                        <img 
                          src="/assets/icon-transfer-planner.png" 
                          alt="Transfer Planner Account" 
                          className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                        />
                      </div>

                      <h3 className="font-bold text-base text-gray-900 mb-2">
                        I already have a Transfer Planner Account
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        Use my existing Transfer Planner account to prefill this application.
                      </p>
                    </div>

                    <button 
                      onClick={() => handleContinueApplication('transfer')}
                      className="mt-6 w-full py-2.5 bg-[#003B71] hover:bg-[#002b54] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      CONTINUE
                    </button>
                  </div>

                </div>
              </div>

              {/* Bottom Bar: LOGOUT Button */}
              <div className="mt-10 pt-4 border-t border-gray-200 flex items-center justify-between">
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#005A9C] uppercase tracking-wider hover:underline cursor-pointer"
                >
                  <LogOut className="w-4 h-4 stroke-[2.2]" />
                  <span>LOGOUT</span>
                </button>

                <div className="text-[11px] text-gray-400">
                  Cal State Apply • Liaison International
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
