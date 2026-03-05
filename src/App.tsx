/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight, 
  Download,
  Code2,
  Cpu,
  BarChart3,
  Calculator,
  Cloud,
  Users,
  Music,
  GraduationCap,
  Trophy,
  Calendar,
  MapPin
} from 'lucide-react';

// --- Types ---

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  date: string;
  association?: string;
  body: string;
  features: string[];
  tags: string[];
  contributors: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  note?: string;
}

interface CertCardProps {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  body: string;
  tags: string[];
  isIndustrySimulation?: boolean;
  recognition?: string;
}

// --- Components ---

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex flex-col gap-2 mb-4">
    <span className="font-mono text-[13px] text-primary tracking-wider">{text}</span>
    <div className="w-[60px] h-[1px] bg-primary" />
  </div>
);

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 bg-[#1A1A1A] border border-primary/30 rounded-full text-[12px] font-mono text-text-primary whitespace-nowrap">
    {text}
  </span>
);

const SkillCard = ({ title, icon, skills }: SkillCardProps) => (
  <motion.div 
    whileHover={{ y: -4, boxShadow: '0 0 20px rgba(232, 72, 26, 0.2)' }}
    className="bg-surface p-6 rounded-[12px] border-t-2 border-primary transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-primary">{icon}</span>
      <h3 className="font-syne font-semibold text-[20px] text-text-primary">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-3 py-1 bg-[#1A1A1A] border border-primary/30 rounded-full text-[12px] font-mono text-text-primary whitespace-nowrap">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ 
  title, 
  subtitle, 
  date, 
  association, 
  body, 
  features, 
  tags, 
  contributors, 
  github, 
  demo, 
  featured,
  note
}: ProjectCardProps) => (
  <motion.div 
    whileHover={{ y: -4, boxShadow: '0 0 20px rgba(232, 72, 26, 0.2)' }}
    className={`bg-surface p-6 rounded-[12px] border-t-2 border-primary transition-all duration-300 relative ${featured ? 'md:scale-[1.02] z-10' : ''}`}
  >
    {featured && (
      <div className="absolute top-4 right-4 px-2 py-1 border border-primary rounded text-[11px] font-mono text-text-primary">
        🏆 Top 10 · InnovateX Hackathon
      </div>
    )}
    <h3 className="font-syne font-semibold text-[22px] text-text-primary mb-1">{title}</h3>
    <p className="font-mono text-[13px] text-primary mb-1">{subtitle}</p>
    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
      <span className="font-mono text-[12px] text-text-muted flex items-center gap-1">
        <Calendar size={12} /> {date}
      </span>
      {association && (
        <span className="font-mono text-[12px] text-text-muted flex items-center gap-1">
          <MapPin size={12} /> {association}
        </span>
      )}
    </div>
    <p className="font-mono text-[14px] text-[#9CA3AF] mb-6 leading-[1.7]">{body}</p>
    
    <div className="grid grid-cols-2 gap-2 mb-6">
      {features.map((f, i) => (
        <div key={i} className="bg-[#1A1A1A] border border-primary/20 p-2 rounded text-[12px] font-mono text-text-primary">
          {f}
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, i) => (
        <span key={i} className="px-2 py-0.5 bg-[#1A1A1A] rounded text-[11px] font-mono text-text-muted border border-border-custom">
          [{tag}]
        </span>
      ))}
    </div>

    <div className="mb-6">
      <p className="font-mono text-[12px] text-text-muted">
        👥 {contributors}
      </p>
      {note && <p className="font-mono text-[12px] text-text-muted italic mt-1">{note}</p>}
    </div>

    <div className="flex gap-4">
      {github && (
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 py-2 border border-primary rounded-[8px] text-center font-syne font-semibold text-[14px] text-text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
        >
          GitHub Repo <ChevronRight size={14} />
        </a>
      )}
      {demo && (
        <a 
          href={demo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 py-2 bg-primary rounded-[8px] text-center font-syne font-semibold text-[14px] text-text-primary hover:bg-accent-glow transition-colors flex items-center justify-center gap-2"
        >
          Live Demo <ExternalLink size={14} />
        </a>
      )}
    </div>
  </motion.div>
);

const CertCard = ({ 
  icon, 
  title, 
  issuer, 
  date, 
  credentialId, 
  body, 
  tags, 
  isIndustrySimulation,
  recognition 
}: CertCardProps) => (
  <motion.div 
    whileHover={{ y: -4, boxShadow: '0 0 20px rgba(232, 72, 26, 0.2)' }}
    className={`bg-surface rounded-[12px] border-l-4 border-primary transition-all duration-300 relative flex flex-col ${isIndustrySimulation ? 'p-7' : 'p-6'}`}
  >
    {isIndustrySimulation && (
      <>
        <div className="absolute top-0 left-[-4px] w-[4px] h-full shimmer-bar overflow-hidden rounded-l-full" />
        <div className="absolute top-4 right-4 px-2 py-1 border border-primary rounded text-[11px] font-mono text-text-primary">
          Industry Simulation
        </div>
      </>
    )}
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="font-syne font-semibold text-[18px] text-text-primary mb-1">{title}</h3>
    <p className="font-mono text-[13px] text-primary mb-1">{issuer}</p>
    <div className="flex justify-between items-center mb-4">
      <span className="font-mono text-[12px] text-text-muted">{date}</span>
      {credentialId && <span className="font-mono text-[11px] text-text-muted">ID: {credentialId}</span>}
    </div>
    <p className="font-mono text-[14px] text-text-muted mb-6 leading-[1.7] flex-grow">{body}</p>
    {recognition && (
      <div className="mb-4">
        <span className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-[11px] font-mono text-primary">
          {recognition}
        </span>
      </div>
    )}
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="px-2 py-0.5 bg-[#1A1A1A] rounded text-[11px] font-mono text-text-muted border border-border-custom">
          [{tag}]
        </span>
      ))}
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typewriterText, setTypewriterText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "a computer science undergrad.",
    "an aspiring software engineer.",
    "a data science & machine learning enthusiast.",
    "an open source contributor."
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'skills', 'projects', 'certifications', 'beyond', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length + 1));
        if (typewriterText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length - 1));
        if (typewriterText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, phraseIndex]);

  // Reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Beyond the Code', id: 'beyond' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-text-primary overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[-5%] left-[30%] w-[400px] h-[400px] bg-accent-glow/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border-custom' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center rounded-[4px] group-hover:bg-primary transition-colors duration-300">
              <span className="font-syne font-bold text-text-primary">BB</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`font-mono text-[14px] transition-all duration-300 relative py-1 ${activeSection === link.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-text-primary"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-syne font-bold text-3xl text-text-primary hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="font-mono text-[13px] text-primary mb-6">
                &lt;barnik.basu /&gt;
              </div>
              <h1 className="font-syne font-extrabold text-[56px] md:text-[72px] leading-[1.1] mb-4">
                Hi, I'm <br />
                <span className="text-[64px] md:text-[80px] text-text-primary">Barnik Basu</span>
              </h1>
              
              <div className="h-8 flex items-center mb-4">
                <span className="font-mono text-text-primary text-[16px] md:text-[18px]">
                  I am {typewriterText}
                  <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse" />
                </span>
              </div>

              <p className="font-mono text-[14px] text-text-muted mb-10">
                B.Tech CSE '29 · IIIT Kalyani · Kolkata, India
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#certifications" 
                  className="px-8 py-3 bg-primary rounded-[8px] font-syne font-semibold text-text-primary hover:bg-accent-glow transition-all duration-300"
                >
                  View Certifications
                </a>
                <a 
                  href="/barnik_basu_cv.pdf" 
                  download="Barnik_Basu_CV.pdf"
                  className="px-8 py-3 border border-primary rounded-[8px] font-syne font-semibold text-text-primary hover:bg-primary transition-all duration-300 flex items-center gap-2"
                >
                  Download CV <Download size={18} />
                </a>
              </div>

              <div className="flex items-center gap-6">
                <a href="https://github.com/barnikbasu" target="_blank" rel="noopener noreferrer"
  aria-label="Visit Barnik's GitHub profile"
  className="text-text-muted hover:text-primary transition-colors">
  <Github size={20} />
</a>
<a href="https://linkedin.com/in/barnik-basu" target="_blank" rel="noopener noreferrer"
  aria-label="Visit Barnik's LinkedIn profile"
  className="text-text-muted hover:text-primary transition-colors">
  <Linkedin size={20} />
</a>
<a href="mailto:barnikbasu@gmail.com"
  aria-label="Send email to Barnik"
  className="text-text-muted hover:text-primary transition-colors">
  <Mail size={20} />
</a>
              </div>
            </div>

            {/* Right Monogram */}
            <div className="relative flex justify-center items-center">
              <div className="relative rotate-[-8deg] flex gap-2 filter drop-shadow-[0_0_30px_rgba(232,72,26,0.3)]">
                <span className="font-syne font-extrabold text-[140px] md:text-[180px] bg-gradient-to-br from-primary to-accent-glow bg-clip-text text-transparent leading-none">B</span>
                <span className="font-syne font-extrabold text-[140px] md:text-[180px] bg-gradient-to-br from-primary to-accent-glow bg-clip-text text-transparent leading-none">B</span>
              </div>

              {/* Floating Badges */}
              {[
                { text: 'C', top: '10%', left: '10%', delay: 0 },
{ text: 'Computer Science', top: '45%', left: '-10%', delay: 1.5 },
{ text: 'Java', bottom: '10%', left: '5%', delay: 1 },
{ text: 'Open Source', top: '10%', right: '0%', delay: 0.5 },
{ text: 'Python', bottom: '10%', right: '10%', delay: 1.5 },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: badge.delay 
                  }}
                  className={`absolute hidden md:block px-4 py-1.5 bg-surface border border-primary rounded-full font-mono text-[12px] text-text-primary z-10 whitespace-nowrap`}
                  style={{ 
                    top: badge.top, 
                    bottom: badge.bottom, 
                    left: badge.left, 
                    right: badge.right 
                  }}
                >
                  {badge.text}
                </motion.div>
              ))}
              
              {/* Mobile Floating Badges (Fewer) */}
              <div className="md:hidden absolute inset-0">
                <div className="absolute top-0 left-0 px-3 py-1 bg-surface border border-primary rounded-full font-mono text-[10px] animate-float">C</div>
                <div className="absolute bottom-0 right-0 px-3 py-1 bg-surface border border-primary rounded-full font-mono text-[10px] animate-float" style={{ animationDelay: '1s' }}>Java</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-[120px] px-6 section-reveal">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="// about_me" />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
              {/* Left - Profile */}
              <div className="flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-[3px] border-primary p-1 bg-background relative z-10">
                    <img 
                      src="/profile.webp" 
                      alt="Barnik Basu" 
                      loading="lazy"
                      className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-all duration-500 z-0" />
                </div>
                <h3 className="font-syne font-semibold text-[24px] text-text-primary mt-6">Barnik Basu</h3>
                <p className="font-mono text-[14px] text-text-muted">B.Tech CSE · IIIT Kalyani</p>
              </div>

              {/* Right - Content */}
              <div>
                <p className="font-mono text-[16px] text-[#9CA3AF] leading-[1.7] mb-8">
  Computer Science undergraduate at IIIT Kalyani, passionate about data structures,
  web development, data science, and machine learning. I love building practical,
  data-driven solutions and contributing to open source.
  <br /><br />
  Alongside code, I'm a <span className="text-primary font-semibold">Scholar (Sarod)</span> at
  ITC Sangeet Research Academy, Kolkata — undergoing advanced training in Hindustani
  Classical Music with formal training since age 5. A discipline that taught me
  pattern recognition, precision, and patience. I bring that same focus to every
  dataset I analyze and every line of code I write.
</p>

                <div className="mb-10">
  <p className="font-mono text-[12px] text-primary uppercase tracking-wider mb-4">// educational qualification</p>
  <div className="flex flex-col gap-4">

    {/* IIIT Kalyani */}
    <div className="bg-surface p-4 border-l-[3px] border-primary rounded-[4px] flex items-start gap-3">
      <GraduationCap className="text-primary mt-0.5 shrink-0" size={20} />
      <div>
        <p className="font-syne font-semibold text-[15px] text-text-primary">Indian Institute of Information Technology, Kalyani</p>
        <p className="font-mono text-[13px] text-primary">B.Tech · Computer Science & Engineering</p>
        <p className="font-mono text-[12px] text-text-muted">2025 – 2029</p>
      </div>
    </div>

    {/* St. Xavier's */}
    <div className="bg-surface p-4 border-l-[3px] border-primary rounded-[4px] flex items-start gap-3">
      <GraduationCap className="text-primary mt-0.5 shrink-0" size={20} />
      <div>
        <p className="font-syne font-semibold text-[15px] text-text-primary">St. Xavier's Institution, Panihati</p>
        <p className="font-mono text-[13px] text-primary">Secondary & Higher Secondary Education</p>
        <p className="font-mono text-[12px] text-text-muted">2010 – 2025</p>
      </div>
    </div>

    {/* JEE */}
    <div className="bg-surface p-4 border-l-[3px] border-primary rounded-[4px] flex items-start gap-3">
      <div className="text-primary mt-0.5 shrink-0 font-syne font-bold text-[14px]">JEE</div>
      <div>
        <p className="font-syne font-semibold text-[15px] text-text-primary">Joint Entrance Examination (JEE) 2025</p>
        <p className="font-mono text-[13px] text-primary">97.52 Percentile</p>
      </div>
    </div>

    {/* Music */}
    <div className="bg-surface p-4 border-l-[3px] border-primary rounded-[4px] flex items-start gap-3">
  <Music className="text-primary mt-0.5 shrink-0" size={20} />
  <div>
    <p className="font-syne font-semibold text-[15px] text-text-primary">Scholar (Sarod)</p>
    <p className="font-mono text-[13px] text-primary">ITC Sangeet Research Academy, Kolkata</p>
    <p className="font-mono text-[12px] text-text-muted">Hindustani Classical Music</p>
  </div>
</div>

  </div>
</div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 border-y border-border-custom py-8">
                  {[
                    { num: '10+', label: 'Certifications' },
                    { num: '3', label: 'Industry Simulations' },
                    { num: '2', label: 'Open Source Badges' },
                    { num: '1', label: 'ITC SRA Scholar' },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center px-2">
                      <span className="font-syne font-bold text-[24px] text-primary">{stat.num}</span>
                      <span className="font-mono text-[12px] text-text-muted uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Bengali — Native", "English — Professional", "Hindi — Professional"].map((lang, i) => (
                    <span key={i} className="px-3 py-1 bg-[#1A1A1A] border border-primary/30 rounded-full text-[12px] font-mono text-text-primary whitespace-nowrap">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-[120px] px-6 section-reveal">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="// technical_skills" />
            <h2 className="font-syne font-bold text-[36px] text-text-primary mb-12">Expertise & Tools</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard 
                title="Programming Languages" 
                icon={<Code2 />} 
                skills={['C', 'C++', 'Java', 'Python']} 
              />
              <SkillCard
    title="Frontend Development"
    icon={<Cpu />}
    skills={['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS']}
  />
  <SkillCard
    title="Backend & Deployment"
    icon={<Cloud />}
    skills={['Firebase', 'Vercel']}
  />
              <SkillCard 
                title="CS Fundamentals" 
                icon={<Cpu />} 
                skills={['Data Structures & Algorithms', 'Problem Solving', 'Code Review', 'Code Quality']} 
              />
              <SkillCard 
                title="Data Science & Applications" 
                icon={<BarChart3 />} 
                skills={['Data Analysis', 'Data Modeling', 'Data Science (Foundational)', 'Machine Learning (Foundational)', 'Excel', 'Tableau']} 
              />
              <SkillCard 
                title="Mathematics & Sciences" 
                icon={<Calculator />} 
                skills={['Linear Algebra', 'Probability & Statistics', 'Physics', 'Basic Electrical & Electronics Engineering', 'Digital Logic & Circuits']} 
              />
              <SkillCard 
                title="Open Source & Collaboration" 
                icon={<Users />} 
                skills={['Git', 'GitHub', 'Open-Source Development', 'GitHub Copilot', 'LLM-Augmented Development', 'Prompt Engineering']} 
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-[120px] px-6 section-reveal">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="// projects" />
            <div className="mb-12">
              <h2 className="font-syne font-bold text-[36px] text-text-primary mb-2">Things I've Built</h2>
              <p className="font-mono text-text-muted">Real projects. Real code. Real impact.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard 
                featured
                title="SafeRoute"
                subtitle="AI-powered navigation for safer travel at night"
                date="Dec 2025 – Jan 2026"
                association="Associated with IIIT Kalyani"
                body="Night travel poses real safety risks — especially for solo travelers. SafeRoute solves this by scoring routes 0–100 for safety using AI and real-time signals, so users always choose the safer path, not just the faster one. Built as a live MVP, selected Top 10 at InnovateX Hackathon."
                features={['🛡️ Safety-aware route scoring (0–100)', '🤖 AI safety explanations via Gemini', '🗺️ Multi-route comparison navigation', '🆘 SOS & emergency-first design']}
                tags={['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Google Maps API', 'Google Gemini API', 'AI']}
                contributors="Team #include: Koustav Das · Nilavo Basu · Soumyajoy Chakraborty"
                github="https://github.com/barnikbasu/saferoute-mvp"
                demo="https://saferoute-three.vercel.app/"
              />
              <ProjectCard 
                title="Circuit Breakers"
                subtitle="Bluetooth-controlled robotic car with HC-05 module"
                date="Oct 2025 – Nov 2025"
                association="Associated with IIIT Kalyani"
                body="A Bluetooth-controlled two-wheel robotic car using Arduino Uno as the main microcontroller. Movement is wirelessly controlled via a smartphone app communicating with the HC-05 Bluetooth module — demonstrating embedded systems, wireless communication, and basic robotics in a practical hands-on build."
                features={['📡 Wireless Bluetooth control (10-20m range)', '🧠 Arduino Uno microcontroller brain', '⚙️ L298N motor driver for DC gear motors', '🔧 Easily extensible with sensors & features']}
                tags={['Arduino Uno', 'HC-05 Bluetooth', 'L298N Motor Driver', 'Embedded Systems', 'C++', 'Robotics', 'Hardware']}
                contributors="Adipta Barman · Suryadeep Pradhan · Sudipta Adak"
                note="Hardware project — no live demo available."
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-[120px] px-6 section-reveal">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="// certifications_and_simulations" />
            <div className="mb-12">
              <h2 className="font-syne font-bold text-[36px] text-text-primary mb-2">Certifications & Simulations</h2>
              <p className="font-mono text-text-muted">Industry simulations, workshops, hackathons, and summits.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CertCard 
                isIndustrySimulation
                icon="🕹️"
                title="Electronic Arts – Software Engineering Simulation"
                issuer="Electronic Arts · via Forage"
                date="Feb 2026"
                credentialId="pP5NzEFccSCqEvZrM"
                body="Proposed a new feature for EA Sports College Football with a full Feature Proposal document. Designed a C++ class diagram and wrote OOP header files. Patched a bugfix and optimized the codebase using an improved data structure."
                tags={['C++', 'OOP', 'Code Review', 'Feature Design', 'Code Quality']}
              />
              <CertCard 
                isIndustrySimulation
                icon="☁️"
                title="AWS Solutions Architecture – Job Simulation"
                issuer="Amazon Web Services · via Forage"
                date="Jan 2026"
                credentialId="38YkQ77tMGoQWM7FN"
                body="Designed a simple and scalable hosting architecture using Elastic Beanstalk. Proposed a cloud solution for a client facing rapid growth and slow response times. Explained architecture decisions and cost estimations in clear business language."
                tags={['Cloud Architecture', 'AWS', 'Elastic Beanstalk', 'System Design']}
              />
              <CertCard 
                isIndustrySimulation
                icon="📊"
                title="Deloitte Australia – Data Analytics Simulation"
                issuer="Deloitte · via Forage"
                date="Jan 2026"
                credentialId="DLd4eDneHz7AA9FLN"
                body="Completed forensic data analytics simulation replicating real client scenarios. Performed structured data analysis and classification. Built a Tableau BI dashboard and derived actionable business insights."
                tags={['Data Analysis', 'Data Modeling', 'Tableau', 'Analytics']}
              />
              <CertCard 
                icon="💻"
                title="Ten Days of Code"
                issuer="NIT Durgapur"
                date="Jan 2026"
                credentialId="6570c4c7-7ba8-41a2-8294-d4bf297ace55"
                body="Participated in a 10-day intensive coding event organized by NIT Durgapur, with focus on Large Language Models and modern AI tooling."
                tags={['LLM', 'AI', 'Coding']}
              />
              <CertCard 
                icon="🛠️"
                title="Git & GitHub Workshop – 'Git, Set, Go!'"
                issuer="GDG on Campus, IIIT Kalyani · FOSS Club"
                date="Nov 2025"
                body="Hands-on workshop covering Git fundamentals, branching strategies, and GitHub Copilot. Organized by GDG on Campus and FOSS Club at IIIT Kalyani."
                tags={['Git', 'GitHub', 'GitHub Copilot', 'Open Source']}
              />
              <CertCard 
                icon="🚀"
                title="Hack<N>Pitch – E-Summit'25"
                issuer="Jadavpur University"
                date="Oct 2025"
                credentialId="3df3de58-dc48-4233-a00c-107e9ca35704"
                body="Participated in the entrepreneurship-focused hackathon at E-Summit'25, Jadavpur University — pitching tech solutions to real-world problems."
                tags={['Entrepreneurship', 'Hackathon', 'Problem Solving']}
              />
              <CertCard 
                icon="🛣️"
                title="National Road Safety Hackathon 2025"
                issuer="IIT Madras"
                date="Dec 2025"
                credentialId="4f747d36-9fb4-4942-a0ac-04b798d33aab"
                body="Participated in the national-level road safety hackathon organized by IIT Madras, working on technology-driven solutions for road safety challenges in India."
                tags={['Hackathon', 'Social Impact', 'Problem Solving']}
              />
              <CertCard 
                icon="⛓️"
                title="East India Blockchain Summit 2.0"
                issuer="IIT Kharagpur"
                date="Jan 2026"
                credentialId="76640e82-a0c6-4bd4-8f5c-cf8a77fd8940"
                body="Attended EIBS 2.0 at IIT Kharagpur — one of East India's premier blockchain and Web3 summits, gaining exposure to decentralized technologies and real-world blockchain applications."
                tags={['Blockchain', 'Web3', 'IIT Kharagpur']}
              />
              <CertCard 
                icon="🌍"
                title="Open Source Connect (OSCG '26)"
                issuer="Open Source Connect"
                date="Jan 2026"
                recognition="Contributor Badge"
                body="Earned a Contributor Badge at Open Source Connect 2026, recognizing active contributions to open-source projects and the developer community."
                tags={['Open Source', 'Contributor', 'Community']}
              />
              <CertCard 
                icon="❄️"
                title="Winter of Code 5.0"
                issuer="Winter of Code"
                date="Jan 2026"
                recognition="Contributor Badge"
                body="Recognized as a contributor in Winter of Code 5.0 — an open-source program encouraging student developers to contribute to meaningful projects."
                tags={['Open Source', 'Winter of Code', 'Development']}
              />
            </div>
          </div>
        </section>

        {/* Beyond the Code Section */}
        <section id="beyond" className="py-[120px] px-6 section-reveal relative">
          <div className="absolute inset-0 bg-primary/5 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionLabel text="// beyond_the_code" />
            <div className="mb-12">
              <h2 className="font-syne font-bold text-[36px] text-text-primary mb-2">There's More Than Code</h2>
              <p className="font-mono text-text-muted">Some of my best debugging instincts come from years of music.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
  {
    title: "Scholar (Sarod)",
    subtitle: "ITC Sangeet Research Academy, Kolkata",
    body: "Undergoing advanced training in Hindustani Classical Music at ITC SRA — one of India's most prestigious classical music institutions. Formal training since age 5, with over a decade of dedicated practice in the Sarod tradition.",
    tags: ["ITC Sangeet Research Academy", "Sarod", "Hindustani Classical Music"]
  },
  {
    title: "Solo Performer · Sarod",
    subtitle: "Anukriti, IIIT Kalyani  ·  Xavi Carnival, St. Xavier's Institution",
    body: "Performed classical Sarod as solo instrumentalist at college and school cultural festivals — bringing Hindustani Classical Music to vibrant stages and diverse audiences.",
    tags: ["Solo Performance", "Sarod", "Kolkata"]
  }
              ].map((card, i) => (
                <div key={i} className="bg-surface p-6 rounded-[12px] border-l-4 border-primary flex flex-col">
                  <div className="text-3xl mb-4">🎵</div>
                  <h3 className="font-syne font-semibold text-[20px] text-text-primary mb-1">{card.title}</h3>
                  <p className="font-mono text-[13px] text-text-muted mb-4">{card.subtitle}</p>
                  <p className="font-mono text-[14px] text-text-muted mb-6 leading-[1.7] flex-grow">{card.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-[#1A1A1A] border border-primary/30 rounded-full text-[12px] font-mono text-text-primary whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative">
              <div className="absolute top-0 left-0 text-primary opacity-20 text-6xl font-serif">"</div>
              <p className="font-mono text-[16px] text-text-muted italic relative z-10 py-8">
                Music taught me that mastery comes from repetition with intention — a principle I carry into every technical challenge.
              </p>
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full z-0" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-[120px] px-6 section-reveal">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col items-center mb-12">
              <SectionLabel text="// get_in_touch" />
              <h2 className="font-syne font-bold text-[40px] text-text-primary mb-4">Let's Build Something Together</h2>
              <p className="font-mono text-[15px] text-text-muted max-w-xl">
                I'm open to collaborations, internships, projects, and interesting 
                conversations. Always up for a good challenge.
              </p>
            </div>

            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:barnikbasu@gmail.com" className="group flex items-center justify-center gap-3 font-mono text-text-primary hover:text-primary transition-colors">
                <Mail className="text-primary" size={20} />
                <span className="group-hover:underline decoration-primary underline-offset-4">barnikbasu@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/barnik-basu" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 font-mono text-text-primary hover:text-primary transition-colors">
                <Linkedin className="text-primary" size={20} />
                <span className="group-hover:underline decoration-primary underline-offset-4">linkedin.com/in/barnik-basu</span>
              </a>
              <a href="https://github.com/barnikbasu" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 font-mono text-text-primary hover:text-primary transition-colors">
                <Github className="text-primary" size={20} />
                <span className="group-hover:underline decoration-primary underline-offset-4">github.com/barnikbasu</span>
              </a>
            </div>

            <a 
              href="mailto:barnikbasu@gmail.com" 
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary rounded-[8px] font-syne font-semibold text-[18px] text-text-primary hover:bg-accent-glow hover:scale-[1.02] transition-all duration-300"
            >
              Send Me an Email <ChevronRight size={20} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-custom bg-background py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-syne font-semibold text-[16px] text-text-primary">
            Barnik Basu
          </div>
          
          <div className="font-mono text-[12px] text-text-muted text-center">
            &copy; 2026 · Built with v0.dev · Deployed on Vercel
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/barnikbasu" target="_blank" rel="noopener noreferrer"
  aria-label="Visit Barnik's GitHub profile"
  className="text-text-muted hover:text-primary transition-colors">
  <Github size={18} />
</a>
<a href="https://linkedin.com/in/barnik-basu" target="_blank" rel="noopener noreferrer"
  aria-label="Visit Barnik's LinkedIn profile"
  className="text-text-muted hover:text-primary transition-colors">
  <Linkedin size={18} />
</a>
<a href="mailto:barnikbasu@gmail.com"
  aria-label="Send email to Barnik"
  className="text-text-muted hover:text-primary transition-colors">
  <Mail size={18} />
</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
