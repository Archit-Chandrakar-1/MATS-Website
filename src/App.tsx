import React, { useState, useEffect } from 'react';

import PlacementPage from './pages/placementPage/placement';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen,
  ChevronRight,
  Star,
  Globe,
  Calendar,
  Target,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  MessageCircle,
  Send,
  Minimize2,
  Bell,
  FileText,
  Building,
  UserCheck,
  Lightbulb,
  Quote,
  Route,
  Router
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! I am Niaa, your admission assistant. How can I help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMobileMcdoe, setShowMobileMcdoe] = useState(false);

  // Carousel images
  const carouselImages = [
    'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages(prev => [...prev, { type: 'user', message: chatInput }]);
    setIsTyping(true);
    
    // Actual API integration
    fetchChatResponse(chatInput);

    setChatInput('');
  };

  const fetchChatResponse = async (message: string) => {
    try {
      const response = await fetch('https://chatbot.in5.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/513161f38605af463/06db5a84b38148f2a2d3ab09cb15529d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ 
          message: message,
          sessionId: 'web-session-' + Date.now()
        }),
      });
      
      console.log('API Response Status:', response.status);
      console.log('API Response Headers:', response.headers);
      
      const data = await response.json();
      console.log('API Response Data:', data);
      
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        message: data.response || data.message || data.reply || data.answer || 'Thank you for your message! Our admission team will get back to you soon.' 
      }]);
      
    } catch (error) {
      console.error('Chat API error details:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        message: 'Sorry, I am unable to respond right now. Please try again later or call us at 0771-4078995 for immediate assistance. Error: ' + errorMessage
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#142143] shadow-lg' : 'bg-[#142143]/95 backdrop-blur-sm'
      }`}>
        {/* Top Row */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 border-b border-[#ffaf00]/20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://matsuniversity.ac.in/image/NEW%20LOGO.jpg" 
                alt="MATS University Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Top Right Navigation */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <button className="text-white hover:text-[#ffaf00] font-bold transition-colors">Alumni</button>
              <button className="text-white hover:text-[#ffaf00] font-bold transition-colors">Career</button>
              <button className="text-white hover:text-[#ffaf00] font-bold transition-colors">International Admission</button>
              <a 
                href="https://apply.matsuniversity.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ffaf00] text-[#142143] px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors"
              >
                Apply Online
              </a>
              <div className="flex items-center space-x-4 ml-6">
                <div className="flex items-center space-x-2 text-white">
                  <Phone className="h-4 w-4" />
                  <span>0771-4078995</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Phone className="h-4 w-4" />
                  <span>1800123819999</span>
                </div>
                <div className="flex items-center space-x-3 ml-4">
                  <Facebook className="h-5 w-5 text-white hover:text-[#ffaf00] cursor-pointer transition-colors" />
                  <Instagram className="h-5 w-5 text-white hover:text-[#ffaf00] cursor-pointer transition-colors" />
                  <Twitter className="h-5 w-5 text-white hover:text-[#ffaf00] cursor-pointer transition-colors" />
                  {/* <button className="text-white hover:text-[#ffaf00] font-bold transition-colors">Gallery</button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation - Right Aligned */}
          <div className="flex items-center justify-between py-3">
            <div className="flex-1"></div>
            <nav className="hidden lg:flex items-center space-x-8">
              <button className="text-white hover:text-[#ffaf00] font-bold transition-colors">
                Home
              </button>
              {/* About Desktop Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-[#ffaf00] font-bold transition-colors flex items-center focus:outline-none" type="button">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-[220%] min-w-max bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-30 py-[6%]" style={{ minWidth: '220%' }}>
                  <a
                    href="https://matsodl.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                    Overview & Leadership
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                     Governance & Administration
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                    Regulations & Approvals
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                   Development & Accreditation
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                    Reports & Publications
                  </a>
                </div>
              </div>
              {/* Academic Dropdown Desktop */}
              <div className="relative group">
                <button className="text-white hover:text-[#ffaf00] font-bold transition-colors flex items-center focus:outline-none" type="button">
                  Academic <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-[220%] min-w-max bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-30 py-[6%]" style={{ minWidth: '220%' }}>
                  <a
                    href="https://matsodl.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                    University Academic
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                    Beyond Academic
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                    Admission
                  </a>
                </div>
              </div>

              <div className="relative group">
                <button className="text-white hover:text-[#ffaf00] font-bold transition-colors flex items-center focus:outline-none" type="button">
                  MATS School <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-[220%] min-w-max bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-30 py-[6%]" style={{ minWidth: '220%' }}>
                  <a
                    href="https://matsodl.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Management & Business Studies
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Engineering & Information Technology
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Education
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Information Technology
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Library Science
                  </a>                
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Sciences & Forensic Science
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Arts & Humanities
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Pharmacy
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Physical Education & Yoga
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '1.5em' }}
                  >
                    MATS School of Fashion Designing and Technology
                  </a>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-white hover:text-[#ffaf00] font-bold transition-colors flex items-center focus:outline-none" type="button">
                  MCDOE <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-[220%] min-w-max bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-30 py-[6%]" style={{ minWidth: '220%' }}>
                  <a
                    href="https://matsodl.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                    MATS CENTRE FOR OPEN AND DISTANCE EDUCATION (ODL MODE)
                  </a>
                  <a
                    href="https://matsuniversityonline.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                    style={{ minHeight: '3.5em' }}
                  >
                    MATS CENTRE FOR ONLINE EDUCATION (ONLINE MODE)
                  </a>
                </div>
              </div>
              <button className="text-white hover:text-[#ffaf00] font-bold transition-colors">
                Placement
              </button>
              <button className="text-white hover:text-[#ffaf00] font-bold transition-colors">
                Gallery
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-[#ffaf00]/20"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-[#ffaf00]/20">
              <nav className="flex flex-col space-y-3 pt-4">
                <button className="text-white hover:text-[#ffaf00] font-bold text-left">Home</button>
                {/* About */}
                <div className="relative">
                  <button className="text-white hover:text-[#ffaf00] font-bold text-left flex items-center w-full" type="button" onClick={() => setShowMobileMcdoe(!showMobileMcdoe)}>
                  About <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {showMobileMcdoe && (
                    <div className="mt-1 w-[100%] bg-white rounded-md shadow-lg z-30 py-[6%]">
                      <a
                        href="https://matsodl.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        Overview & Leadership
                      </a>
                      <a
                        href="https://matsuniversityonline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        Governance & Administration
                      </a>
                      <a
                        href="https://matsuniversityonline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        Regulations & Approvals
                      </a>
                      <a
                        href="https://matsuniversityonline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        Development & Accreditation
                      </a>
                      <a
                        href="https://matsuniversityonline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        Reports & Publications
                      </a>
                    </div>
                  )}
                </div>
                {/* Academic Dropdown Mobile */}
                <div className="relative">
                  <button className="text-white hover:text-[#ffaf00] font-bold text-left flex items-center w-full" type="button" onClick={() => setShowMobileMcdoe(!showMobileMcdoe)}>
                    Academic <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {showMobileMcdoe && (
                    <div className="mt-1 w-[100%] bg-white rounded-md shadow-lg z-30 py-[6%]">
                      <a
                        href="https://matsodl.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        University Academic
                      </a>
                      <a
                        href="https://matsuniversityonline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        Beyond Academic
                      </a>
                      <a
                        href="https://matsuniversityonline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        Admission
                      </a>
                    </div>
                  )}
                </div>
                
                <button className="text-white hover:text-[#ffaf00] font-bold text-left">MATS School</button>
                
                <div className="relative">
                  <button className="text-white hover:text-[#ffaf00] font-bold text-left flex items-center w-full" type="button" onClick={() => setShowMobileMcdoe(!showMobileMcdoe)}>
                    MCDOE <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {showMobileMcdoe && (
                    <div className="mt-1 w-[100%] bg-white rounded-md shadow-lg z-30 py-[6%]">
                      <a
                        href="https://matsodl.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        MATS CENTRE FOR OPEN AND DISTANCE EDUCATION (ODL MODE)
                      </a>
                      <a
                        href="https://matsuniversityonline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-[8%] py-[10%] text-[#142143] hover:bg-[#ffaf00] hover:text-white font-semibold text-sm whitespace-normal break-words leading-snug transition-colors text-left"
                        style={{ minHeight: '3.5em' }}
                      >
                        MATS CENTRE FOR ONLINE EDUCATION (ONLINE MODE)
                      </a>
                    </div>
                  )}
                </div>
                <button className="text-white hover:text-[#ffaf00] font-bold text-left">Placement</button>
                <button className="text-white hover:text-[#ffaf00] font-bold text-left">Gallery</button>
                <a 
                  href="https://apply.matsuniversity.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ffaf00] hover:text-white font-bold text-left"
                >
                  Apply Online
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden pt-32">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#142143]/40"></div>
            </div>
          ))}
        </div>

        {/* Action Buttons - 10% from bottom */}
        <div className="absolute bottom-[10%] left-0 right-0 z-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ffaf00] text-[#142143] px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              MATS CENTRE FOR OPEN AND DISTANCE EDUCATION (ODL MODE)
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button className="bg-[#ffaf00] text-[#142143] px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              MATS CENTRE FOR ONLINE EDUCATION (ONLINE MODE)
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <a 
                href="https://panel123.s3.ap-south-1.amazonaws.com/360Vtour_Mats_Univ/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#142143] transition-colors font-bold text-lg text-center"
              >
                Virtual Tour
              </a>
              <a 
                href="https://smarthubeducation.hdfcbank.com/SmartFees/DirectLoadQuickPay.action;jsessionid=D2kyJKUFpbxO_ynTCB1y1BKutUexST3J0Cn1AaLe.dr-we-eq2-pgpr-l34?uniqueSessionIdentifier=null&redirectionURL="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#142143] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-bold text-lg text-center"
              >
                Online Fee Payment
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#ffaf00]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#ffaf00] to-yellow-400 py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#142143] mb-2">10000+</div>
              <div className="text-[#142143] font-semibold">Enthusiastic Students</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#142143] mb-2">10</div>
              <div className="text-[#142143] font-semibold">Acres Modern Campus</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#142143] mb-2">100+</div>
              <div className="text-[#142143] font-semibold">Student Activity Every Year</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#142143] mb-2">100+</div>
              <div className="text-[#142143] font-semibold">Companies Placements</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#142143] mb-2">10+</div>
              <div className="text-[#142143] font-semibold">World Class Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid - 3x2 layout */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-96">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="University Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Classroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Library" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Students" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Laboratory" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Campus Life" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#142143] mb-6">About Us</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                MATS University is one of the leading universities of Central India.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At MATS, we are committed to developing leaders who are not merely skilled professionals but also compassionate people with strong ethical values and discipline.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide our students with the <strong>information, skills, confidence,</strong> and <strong>experience</strong> necessary to improve the world around them. MATS University not only develops their students individually but also gives them time and opportunity to develop new interests, learn new skills, and meet new people.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Established in <strong>2006</strong>, MATS University has emerged as a leading educational institute in Raipur, committed to nurturing future leaders and professionals across various disciplines. We take pride in our distinguished faculty members who are experts in their respective roles, dedicating themselves to imparting knowledge and mentorship to our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-[#142143] mb-2">Examination Timetable</h3>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-[#142143] mb-2">Examination Notification</h3>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-[#142143] mb-2">Information Brochure</h3>
            </div>
          </div>

          {/* What Makes University Unique */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#142143] mb-8">What makes University Unique?</h2>
          </div>

          <div className="bg-[#ffaf00] rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#142143] mb-4">Modern Infrastructure</h3>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#142143] mb-4">Expert Faculty</h3>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#142143] mb-4">Campus Culture</h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <ul className="space-y-4 text-[#142143]">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>State-of-the-Art Facilities:</strong> Advanced classrooms and labs for enhanced learning.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Sustainability:</strong> Green buildings and eco-friendly practices.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Technology Integration:</strong> Smart classrooms and digital resources for better education.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#142143] mb-6">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful graduates and current students about their MATS University experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - Yellow */}
            <div className="bg-[#ffaf00] rounded-2xl p-8 text-[#142143] relative">
              <Quote className="h-12 w-12 mb-4 opacity-50" />
              <p className="text-lg mb-6 leading-relaxed">
                "MATS University provided me with not just quality education but also the confidence to pursue my dreams. The faculty support and modern facilities made my learning journey exceptional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#142143] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-bold">Anita Sharma</h4>
                  <p className="text-sm opacity-80">MBA Graduate, 2023</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Blue */}
            <div className="bg-[#142143] rounded-2xl p-8 text-white relative">
              <Quote className="h-12 w-12 mb-4 opacity-50" />
              <p className="text-lg mb-6 leading-relaxed">
                "The practical approach to learning at MATS University helped me secure a great placement. The industry connections and placement support are truly remarkable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ffaf00] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#142143] font-bold">R</span>
                </div>
                <div>
                  <h4 className="font-bold">Rahul Patel</h4>
                  <p className="text-sm opacity-80">B.Tech Graduate, 2022</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Yellow */}
            <div className="bg-[#ffaf00] rounded-2xl p-8 text-[#142143] relative">
              <Quote className="h-12 w-12 mb-4 opacity-50" />
              <p className="text-lg mb-6 leading-relaxed">
                "The ODL program at MATS University allowed me to continue my education while working. The flexibility and quality of education exceeded my expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#142143] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <h4 className="font-bold">Priya Singh</h4>
                  <p className="text-sm opacity-80">MCA Student, Current</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360° Virtual Tour and Maps Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#142143] mb-6">Explore Our Campus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art campus and find our location.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* 360° Virtual Tour */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div 
                className="relative bg-gradient-to-br from-[#142143] to-blue-800 cursor-pointer group h-80"
                onDoubleClick={() => window.open('https://panel123.s3.ap-south-1.amazonaws.com/360Vtour_Mats_Univ/index.html', '_blank')}
              >
                <div className="h-full flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-[#ffaf00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Globe className="h-10 w-10 text-[#142143]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">360° Virtual Tour</h3>
                    <p className="text-lg opacity-90 mb-4">Double-click to explore our campus</p>
                    <div className="inline-flex items-center bg-[#ffaf00] text-[#142143] px-4 py-2 rounded-full font-bold text-sm">
                      Start Virtual Tour
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#142143] mb-2">Virtual Campus Experience</h4>
                <p className="text-gray-600">Explore our modern facilities, classrooms, laboratories, and campus life through an immersive 360° experience.</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16696.453134020983!2d81.99978068230338!3d21.250920021621013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28bd079978adad%3A0x6f0422cd945200ed!2sMATS%20University%20l%20Best%20University%20In%20Raipur!5e0!3m2!1sen!2sin!4v1754547306951!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MATS University Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#142143] mb-2">Find Our Campus</h4>
                <div className="text-gray-600">
                  <div className="flex items-start mb-2">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#ffaf00] flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Campus Address:</p>
                      <p className="text-sm">Aarang-Kharora Highway, Gullu, Aarang, Raipur (Chhattisgarh)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">
        {/* Half Yellow, Half Blue Background - Increased height by 20% */}
        <div className="h-[37rem] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffaf00] from-50% to-[#142143] to-50%"></div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8 h-full">
              {/* Admission Office */}
              <div className="text-[#142143]">
                <h3 className="text-2xl font-bold mb-4">Admission Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Address Raipur:</p>
                      <p className="text-sm">MATS Tower, Pandri, Raipur (Chhattisgarh), Pincode-492 004</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-xl font-bold mb-2">Campus</h4>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Address Gullu, Aarang:</p>
                        <p className="text-sm">Aarang-Kharora Highway, Gullu, Aarang, Raipur (Chhattisgarh)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start mt-4">
                    <Phone className="h-5 w-5 mr-3" />
                    <div>
                      <p className="font-semibold">Admission Helpline No.:</p>
                      <p className="text-sm">1800123819999</p>
                      <p className="text-sm">(0771) 4078995, 4078996, 4078998</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3" />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p className="text-sm">admissions@matsuniversity.ac.in</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-bold">Public Self Disclosure</h4>
                </div>
              </div>

              {/* Top Links */}
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Top Link</h3>
                <ul className="space-y-2 text-sm">
                  <li><button className="hover:text-[#142143] transition-colors">Admission</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Examination</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Library</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Placement</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Anti Ragging</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Grievances Redressal</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Internal Complaints Committee</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">NCC And NSS</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Convocation</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">IQAC</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Job Openings</button></li>
                  <li><button className="hover:text-[#142143] transition-colors">Contact Us</button></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><button className="hover:text-[#ffaf00] transition-colors">UGC</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">NAAC</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">Rajbhavan</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">CG Higher Education</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">CG PURC</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">AICTE</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">BCI</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">PCI</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">NCTE</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">NCTE WRC</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">NIRF</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">AISHE</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">UGC E-Samadhan</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">Study in India</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">AIU</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">ECI – Voter Portal</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">Academic Bank of Credits</button></li>
                  <li><button className="hover:text-[#ffaf00] transition-colors">NAD – Digilocker</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-900 text-white py-6">
          <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
            <p>© MATS University. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-[#ffaf00] text-[#142143] p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col">
            {/* Chat Header */}
            <div className="bg-[#142143] text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#ffaf00] rounded-full flex items-center justify-center">
                  <span className="text-[#142143] font-bold text-sm">N</span>
                </div>
                <div>
                  <h4 className="font-bold">Niaa</h4>
                  <p className="text-xs opacity-80">Admission Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-[#ffaf00] transition-colors"
              >
                <Minimize2 className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      msg.type === 'user'
                        ? 'bg-[#142143] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#142143] text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#142143] text-white p-2 rounded-lg hover:bg-[#142143]/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
    
    
    
    </>
    
  );
}

export default App;