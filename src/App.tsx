/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, 
  Smartphone, 
  Globe, 
  MessageSquare, 
  Instagram, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Hotel,
  Quote,
  Linkedin,
  Twitter,
  Share2,
  Folder,
  Sun,
  Moon,
  Wrench,
  Cpu,
  Palette,
  Settings,
  Zap,
  Download,
  Clock,
  Facebook,
  Music,
  Search,
  Send,
  User,
  Mail,
  ZoomIn,
  Maximize2
} from "lucide-react";

const projects = [
  {
    title: "Lombok Landscape Series",
    category: "Fotografi",
    desc: "Koleksi foto lanskap yang menangkap keindahan alam Lombok Utara dan Mataram. Tantangan utama adalah pencahayaan ekstrem dan akses medan sulit. Solusinya melibatkan teknik long exposure dan filter ND. Dampaknya meningkatkan apresiasi pariwisata lokal dengan jangkauan lebih dari 5.000 view di media sosial.",
    timeline: "Januari - Maret 2024",
    toolsUsed: ["Long Exposure", "Filter ND", "Adobe Lightroom"],
    image: "https://picsum.photos/seed/lombok/800/600",
    images: [
      "https://picsum.photos/seed/lombok1/800/600",
      "https://picsum.photos/seed/lombok2/800/600",
      "https://picsum.photos/seed/lombok3/800/600",
      "https://picsum.photos/seed/lombok4/800/600"
    ],
    link: "https://www.instagram.com/galleryvena_?igsh=Z2wzZXpqeHUzajBv"
  },
  {
    title: "Digital Branding Strategy",
    category: "Digital Service",
    desc: "Rebranding UMKM lokal NTB untuk mengatasi inkonsistensi identitas visual. Solusi berupa pembuatan brand identity dan style guide konten yang koheren. Proyek ini berhasil meningkatkan engagement rate sebesar 40% dan pertumbuhan followers organik 25% dalam 3 bulan.",
    timeline: "3 Bulan (Feb - Apr 2024)",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop", "Brand Identity Guide"],
    image: "https://picsum.photos/seed/digital/800/600",
    images: [
      "https://picsum.photos/seed/digital1/800/600",
      "https://picsum.photos/seed/digital2/800/600",
      "https://picsum.photos/seed/digital3/800/600"
    ],
    link: "https://venamediaservice-ld8z.vercel.app/"
  },
  {
    title: "Mechanical Component Design",
    category: "Teknik Mesin",
    desc: "Pemodelan komponen mekanik presisi tinggi menggunakan CAD. Tantangannya adalah kompleksitas geometri mesin. Solusinya menggunakan simulasi beban SolidWorks untuk menguji ketahanan. Hasilnya mencapai akurasi dimensi 99.8%, mempercepat proses manufaktur secara signifikan.",
    timeline: "Mei 2024",
    toolsUsed: ["CAD", "SolidWorks", "Simulasi Beban"],
    image: "https://picsum.photos/seed/engineering/800/600",
    images: [
      "https://picsum.photos/seed/eng1/800/600",
      "https://picsum.photos/seed/eng2/800/600"
    ]
  },
  {
    title: "Product Photography",
    category: "Fotografi",
    desc: "Sesi foto produk e-commerce dengan fokus pada detail tekstur. Tantangan pencahayaan studio diatasi dengan teknik macro lighting dan focus stacking. Dampaknya meningkatkan konversi penjualan klien sebesar 15% melalui visual katalog yang lebih profesional.",
    timeline: "Juni 2024",
    toolsUsed: ["Macro Lighting", "Focus Stacking", "Adobe Photoshop"],
    image: "https://picsum.photos/seed/product/800/600",
    images: [
      "https://picsum.photos/seed/prod1/800/600",
      "https://picsum.photos/seed/prod2/800/600",
      "https://picsum.photos/seed/prod3/800/600"
    ],
    link: "https://www.instagram.com/galleryvena_?igsh=Z2wzZXpqeHUzajBv"
  },
  {
    title: "Social Media Management",
    category: "Digital Service",
    desc: "Pengelolaan konten strategis untuk meningkatkan brand awareness di tengah noise informasi. Solusinya adalah konten berbasis data dan optimasi jadwal posting. Berhasil mencapai jangkauan bulanan rata-rata 50.000+ akun unik tanpa iklan berbayar.",
    timeline: "Ongoing (Sejak Jan 2024)",
    toolsUsed: ["Data Analytics", "Content Scheduler", "Canva"],
    image: "https://picsum.photos/seed/social/800/600",
    images: [
      "https://picsum.photos/seed/social1/800/600",
      "https://picsum.photos/seed/social2/800/600"
    ],
    link: "https://venamediaservice-ld8z.vercel.app/"
  },
  {
    title: "Engine Maintenance Guide",
    category: "Teknik Mesin",
    desc: "Penyusunan panduan teknis perawatan mesin yang mudah dipahami awam. Tantangan kompleksitas informasi diatasi dengan infografis langkah-demi-langkah. Panduan ini telah digunakan sebagai referensi oleh lebih dari 200 mahasiswa dan praktisi bengkel lokal.",
    timeline: "Juli 2024",
    toolsUsed: ["Infographics", "Technical Documentation", "Adobe InDesign"],
    image: "https://picsum.photos/seed/engine/800/600",
    images: [
      "https://picsum.photos/seed/engine1/800/600",
      "https://picsum.photos/seed/engine2/800/600"
    ]
  }
];

const categories = ["Semua", ...Array.from(new Set(projects.map(p => p.category)))];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AnimatedText = ({ text, className, delay = 0, once = true }: { text: string, className?: string, delay?: number, once?: boolean }) => {
  return (
    <p className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: delay + (i * 0.03) }}
          viewport={{ once }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isContactModalOpen) {
      // Store the element that had focus before opening the modal
      triggerRef.current = document.activeElement as HTMLElement;
      // Small delay to ensure the modal is rendered and visible before focusing
      const timeout = setTimeout(() => {
        initialFocusRef.current?.focus();
      }, 50);

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsContactModalOpen(false);
      };

      // Trap focus logic
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab' || !modalRef.current) return;
        
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      window.addEventListener('keydown', handleEscape);
      window.addEventListener('keydown', handleTab);
      
      return () => {
        window.removeEventListener('keydown', handleEscape);
        window.removeEventListener('keydown', handleTab);
        clearTimeout(timeout);
        // Restore focus when modal closes
        triggerRef.current?.focus();
      };
    }
  }, [isContactModalOpen]);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  const handleShare = (e: React.MouseEvent, project: typeof projects[0], platform: 'twitter' | 'linkedin' | 'copy') => {
    e.stopPropagation();
    const url = window.location.href;
    const text = `Check out this project: ${project.title} - ${project.desc}`;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(`${text} ${url}`);
      // Optional: Add a toast notification here if available
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === "Semua" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-100 selection:text-blue-700 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent cursor-pointer active:scale-95 transition-transform"
          >
            KETUT PENA PALINTINA
          </motion.h1>
          <div className="hidden md:flex space-x-8 font-semibold text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tentang</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pengalaman</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Karya</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Keahlian</a>
            <a href="#business" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Bisnis & Layanan</a>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-90"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="https://wa.me/6285829750779" 
              className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none active:scale-95"
            >
              Kontak
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-100 dark:bg-violet-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block mb-10 group"
            >
              <a 
                href="https://ibb.co.com/MkP4fXFD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative"
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl mx-auto bg-slate-100 dark:bg-slate-800">
                  <img 
                    src="https://i.ibb.co.com/MkP4fXFD/Foto-Profil.jpg" 
                    alt="Ketut Pena Palintina" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/profile/400/400";
                    }}
                  />
                </div>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 inline-flex items-center gap-2 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-800"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Entrepreneur • Engineering Student • Photographer
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tight text-slate-900 dark:text-white"
            >
              {"Mendorong ".split("").map((c, i) => <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.05 }}>{c}</motion.span>)}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent px-1">Inovasi</span> <br />
              {"Melalui ".split("").map((c, i) => <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.05 }}>{c}</motion.span>)}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent px-1">Solusi Digital</span>.
            </motion.h2>
            
            <AnimatedText 
              text="Berbasis di Mataram, NTB. Mengelola ekosistem layanan digital dan teknis sambil menempuh pendidikan di bidang Teknik Mesin."
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
              delay={0.8}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#business" className="w-full sm:w-auto bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group">
                Lihat Layanan
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Tentang Saya
              </a>
            </motion.div>
          </div>
        </header>

        {/* About & Experience Section */}
        <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
                  <motion.a 
                    variants={fadeIn}
                    href="https://ibb.co.com/MkP4fXFD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative flex-shrink-0 block group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800"
                    >
                      <img 
                        src="https://i.ibb.co.com/MkP4fXFD/Foto-Profil.jpg" 
                        alt="Ketut Pena Palintina" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://picsum.photos/seed/profile/400/400";
                        }}
                      />
                    </motion.div>
                  </motion.a>
                  <motion.div variants={fadeIn}>
                    <h3 id="about-title" className="text-3xl font-bold mb-2 flex items-center gap-3 text-slate-900 dark:text-white">
                      <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-5 h-5" />
                      </span>
                      Tentang Saya
                    </h3>
                    <div className="flex gap-[0.2em]">
                      {"Personal Profile".split("").map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.1, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest inline-block"
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <motion.p 
                  variants={fadeIn}
                  className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed overflow-hidden"
                >
                  {"Lahir pada 14 Februari 2006 di Selelos, Lombok Utara, saya adalah individu yang dinamis dengan latar belakang ".split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      viewport={{ once: true }}
                      className="inline-block mr-1"
                    >
                      {word}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 30 * 0.03 }}
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    <span className="font-bold text-slate-900 dark:text-white">Teknik Bisnis dan Sepeda Motor (Lulus 2024)</span>
                  </motion.span>
                  {" . Saat ini, saya memperdalam kompetensi teknis di ".split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: (i + 35) * 0.03 }}
                      viewport={{ once: true }}
                      className="inline-block mr-1"
                    >
                      {word}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 45 * 0.03 }}
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    <span className="font-bold text-slate-900 dark:text-white">Prodi Teknik Mesin, Universitas Mataram</span>.
                  </motion.span>
                </motion.p>
                
                <div className="space-y-6">
                  <motion.a variants={fadeIn} href="#business" className="block">
                    <div className="flex items-start gap-5 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all group cursor-pointer">
                      <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm dark:shadow-none group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-slate-900 dark:text-white">Pekerjaan Saat Ini</p>
                        <p className="text-slate-500 dark:text-slate-400">Owner & Manager di <span className="text-blue-600 dark:text-blue-400 font-bold">VenaStoreLombok</span> & <span className="text-violet-600 dark:text-violet-400 font-bold">VenaMediaService</span>.</p>
                        <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          <Briefcase className="w-3 h-3" />
                          Business Management & Digital Services
                        </div>
                      </div>
                    </div>
                  </motion.a>

                  <motion.a variants={fadeIn} href="#business" className="block">
                    <div className="flex items-start gap-5 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all group cursor-pointer">
                      <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm dark:shadow-none group-hover:scale-110 transition-transform">
                        <Hotel className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-slate-900 dark:text-white">Hospitality Role</p>
                        <p className="text-slate-500 dark:text-slate-400">Staf Operasional di Motel Langko 48, Ampenan.</p>
                        <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          <MapPin className="w-3 h-3" />
                          Jl. Langko, Ampenan
                        </div>
                      </div>
                    </div>
                  </motion.a>

                  <motion.div 
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-4"
                  >
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 dark:shadow-none transition-all group"
                    >
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      Unduh CV / Resume
                    </a>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Tersedia untuk peluang kerja & kolaborasi
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                id="experience"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.h3 variants={fadeIn} className="text-3xl font-bold mb-10 flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  Riwayat & Kesibukan
                </motion.h3>
                
                <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
                  {[
                    {
                      title: "Motel Langko 48",
                      subtitle: "Pekerjaan Aktif • Jl. Langko, Ampenan",
                      desc: "Memberikan pelayanan profesional dalam industri hospitality.",
                      active: true
                    },
                    {
                      title: "Universitas Mataram",
                      subtitle: "Mahasiswa Teknik Mesin • 2024 - Sekarang",
                      desc: "Menempuh pendidikan tinggi untuk memperdalam ilmu mekanika.",
                      active: false
                    },
                    {
                      title: "SMK TBSM",
                      subtitle: "Lulusan Teknik Bisnis & Sepeda Motor • 2024",
                      desc: "Pendidikan vokasi dengan fokus pada teknis otomotif dan bisnis.",
                      active: false
                    }
                  ].map((item, index) => (
                    <motion.div variants={fadeIn} key={index} className="relative pl-12 group">
                      <div className={`absolute left-0 top-1.5 w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center z-10 transition-colors ${item.active ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-300 dark:group-hover:bg-slate-700'}`}>
                        {item.active && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                      </div>
                      <h4 className="font-bold text-xl mb-1 text-slate-900 dark:text-white">{item.title}</h4>
                      <p className={`text-sm font-semibold uppercase tracking-wide mb-2 ${item.active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}>
                        {item.subtitle}
                      </p>
                      <AnimatedText 
                        text={item.desc}
                        className="text-slate-500 dark:text-slate-400 leading-relaxed italic"
                        delay={0.3}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Keahlian & Kompetensi</h3>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
              <AnimatedText 
                text="Kombinasi antara pemahaman teknis yang mendalam dan kreativitas digital untuk memberikan solusi terbaik."
                className="text-slate-600 dark:text-slate-400 text-lg"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Technical Skills */}
              <motion.div 
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </span>
                  Technical Skills
                </h4>
                <div className="space-y-8">
                  {[
                    { name: "Teknik Mesin & Mekanika", level: 85, icon: <Settings className="w-4 h-4" /> },
                    { name: "Perawatan Sepeda Motor", level: 90, icon: <Wrench className="w-4 h-4" /> },
                    { name: "Service Smartphone", level: 80, icon: <Cpu className="w-4 h-4" /> },
                    { name: "CAD & Desain Teknis", level: 75, icon: <Zap className="w-4 h-4" /> }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600 dark:text-blue-400">{skill.icon}</span>
                          <span className="font-bold text-slate-900 dark:text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 50, 
                            damping: 20, 
                            delay: 0.2 + index * 0.1 
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-12 flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold hover:gap-5 transition-all group"
                >
                  Mulai Konsultasi Teknis
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Creative Skills */}
              <motion.div 
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-xl flex items-center justify-center">
                    <Palette className="w-5 h-5" />
                  </span>
                  Creative Skills
                </h4>
                <div className="space-y-8">
                  {[
                    { name: "Fotografi (Landscape/Product)", level: 95, icon: <Camera className="w-4 h-4" /> },
                    { name: "Digital Branding", level: 85, icon: <Palette className="w-4 h-4" /> },
                    { name: "Social Media Management", level: 90, icon: <Smartphone className="w-4 h-4" /> },
                    { name: "Editing (Lightroom/Photoshop)", level: 90, icon: <Zap className="w-4 h-4" /> }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-violet-600 dark:text-violet-400">{skill.icon}</span>
                          <span className="font-bold text-slate-900 dark:text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 50, 
                            damping: 20, 
                            delay: 0.2 + index * 0.1 
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-12 flex items-center gap-3 text-violet-600 dark:text-violet-400 font-bold hover:gap-5 transition-all group"
                >
                  Mulai Konsultasi Kreatif
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business Units Section */}
        <section id="business" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Unit Bisnis & Keahlian</h3>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
              <AnimatedText 
                text="Ekosistem layanan yang saya bangun untuk menjawab berbagai kebutuhan digital dan teknis masyarakat di Lombok."
                className="text-slate-600 dark:text-slate-400 text-lg"
              />
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  name: "VenaMediaService",
                  tagline: "Optimasi & Jasa Media",
                  desc: "Ahli dalam meningkatkan interaksi akun media sosial secara profesional.",
                  icon: <Instagram className="w-6 h-6" />,
                  color: "from-pink-500 to-rose-500",
                  link: "https://whatsapp.com/channel/0029VbCHBAw42DcnZVJlKs1N"
                },
                {
                  name: "VenaStoreLombok",
                  tagline: "Service & Jual Beli HP",
                  desc: "Solusi perbaikan hardware/software dan unit smartphone berkualitas.",
                  icon: <Smartphone className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500",
                  link: "https://whatsapp.com/channel/0029Vb5ezZpJuyA6G5Y4Ca2S"
                },
                {
                  name: "GalleryVena",
                  tagline: "Fotografi Profesional",
                  desc: "Menangkap momen berharga dengan teknik fotografi yang berestetika.",
                  icon: <Camera className="w-6 h-6" />,
                  color: "from-amber-500 to-orange-500",
                  link: "https://www.instagram.com/galleryvena_?igsh=Z2wzZXpqeHUzajBv"
                },
                {
                  name: "JasaMedia",
                  tagline: "Digital Services",
                  desc: "Layanan pendukung ekosistem digital untuk kebutuhan personal maupun bisnis.",
                  icon: <Globe className="w-6 h-6" />,
                  color: "from-indigo-500 to-violet-500",
                  link: "https://venamediaservice-ld8z.vercel.app/"
                }
              ].map((biz, index) => (
                <a 
                  key={index} 
                  href={biz.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div 
                    variants={fadeIn}
                    whileHover={{ y: -8 }}
                    className="h-full bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm dark:shadow-none border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${biz.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      {biz.icon}
                    </div>
                    <h4 className="font-bold text-2xl mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{biz.name}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-bold italic mb-4 tracking-wide">{biz.tagline}</p>
                    <AnimatedText 
                      text={biz.desc}
                      className="text-slate-600 dark:text-slate-400 leading-relaxed"
                      delay={0.1 * index}
                    />
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            >
              <div className="max-w-2xl">
                <h3 id="projects-title" className="text-3xl font-bold mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                    <Folder className="w-5 h-5" />
                  </span>
                  Portofolio Karya
                </h3>
                <AnimatedText 
                  text="Beberapa proyek pilihan yang mencerminkan dedikasi saya dalam bidang teknologi, kreativitas, dan teknik."
                  className="text-slate-500 dark:text-slate-400 text-lg"
                />
              </div>
              <div className="flex flex-col gap-6 items-end w-full md:w-auto">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Cari proyek (e.g. SolidWorks, Fotografi)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div className="flex flex-wrap gap-3 justify-end relative">
                  {categories.map((cat) => {
                    const count = cat === "Semua" 
                      ? projects.length 
                      : projects.filter(p => p.category === cat).length;
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2.5 z-10 ${
                          isActive 
                            ? "text-white" 
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.div 
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-200 dark:shadow-none"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        {cat}
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-black transition-colors ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-500"
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <motion.div 
                      key={project.title}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -12 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProject(project)}
                      transition={{ 
                        layout: { duration: 0.4, ease: "easeInOut" },
                        opacity: { duration: 0.3 }
                      }}
                      className="group cursor-pointer bg-white dark:bg-slate-900 p-5 rounded-[2.5rem] border border-slate-50 dark:border-slate-800/50 hover:border-blue-100 dark:hover:border-blue-900/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all"
                    >
                      <div className="relative overflow-hidden rounded-[1.8rem] mb-6 aspect-[4/3]">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-8">
                          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                            Lihat Detail
                          </span>
                          <div className="flex gap-2">
                            <button 
                              onClick={(e) => handleShare(e, project, 'twitter')}
                              className="p-2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all"
                              title="Share on Twitter"
                            >
                              <Twitter className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={(e) => handleShare(e, project, 'linkedin')}
                              className="p-2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all"
                              title="Share on LinkedIn"
                            >
                              <Linkedin className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-1">
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                        <h4 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">{project.desc}</p>
                        
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                          >
                            Lihat Proyek
                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-8 h-8 text-slate-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Tidak ada proyek ditemukan</h4>
                    <p className="text-slate-500">Coba ganti filter atau kata kunci pencarian Anda.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Apa Kata Mereka?</h3>
              <AnimatedText 
                text="Kepercayaan Anda adalah prioritas kami. Berikut adalah beberapa testimoni dari klien dan kolaborator."
                className="text-slate-500 dark:text-slate-400 text-lg"
              />
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  quote: "Hasil foto dari GalleryVena sangat estetik dan profesional. Momen pernikahan kami tertangkap dengan sangat indah.",
                  author: "Sari Rahmawati",
                  role: "Klien Fotografi",
                  image: "https://picsum.photos/seed/person1/100/100"
                },
                {
                  quote: "VenaStoreLombok menyelamatkan HP saya yang mati total. Servis cepat, transparan, dan harganya sangat bersahabat.",
                  author: "Budi Santoso",
                  role: "Klien VenaStore",
                  image: "https://picsum.photos/seed/person2/100/100"
                },
                {
                  quote: "Interaksi akun bisnis saya naik drastis berkat bantuan VenaMediaService. Sangat direkomendasikan untuk UMKM!",
                  author: "Dewi Lestari",
                  role: "Owner Local Brand",
                  image: "https://picsum.photos/seed/person3/100/100"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative group hover:shadow-xl hover:shadow-blue-900/5 transition-all"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Quote className="w-5 h-5" />
                  </div>
                  <AnimatedText 
                    text={`"${testimonial.quote}"`}
                    className="text-slate-600 dark:text-slate-400 mb-8 italic leading-relaxed"
                    delay={0.2}
                  />
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.author}</h4>
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-6xl bg-slate-900 dark:bg-slate-800 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                {"Tertarik Bekerja Sama?".split("").map((c, i) => <motion.span key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>{c}</motion.span>)}
              </h3>
              <AnimatedText 
                text="Tersedia untuk proyek fotografi, konsultasi bisnis digital, atau layanan teknis smartphone. Mari ciptakan sesuatu yang luar biasa."
                className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                delay={0.5}
              />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20 active:scale-95"
                >
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Mulai Konsultasi
                </button>
                <a 
                  href="https://wa.me/6285829750779" 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 backdrop-blur-sm active:scale-95 border border-white/10"
                >
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/ketut_vena?igsh=MWIzd2thams1Z3lydQ%3D%3D&utm_source=qr" 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 backdrop-blur-sm active:scale-95"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/share/18edhoeGMY/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 backdrop-blur-sm active:scale-95"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
                <a 
                  href="https://www.tiktok.com/@venamediaservice?_r=1&_t=ZS-95WhTsxGJhl" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 backdrop-blur-sm active:scale-95"
                >
                  <Music className="w-5 h-5" />
                  TikTok
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">KP</div>
            <p className="text-sm font-bold text-slate-900 dark:text-white tracking-tight uppercase">Ketut Pena Palintina</p>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} • Selelos - Mataram - Ampenan
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/ketut_vena?igsh=MWIzd2thams1Z3lydQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/share/18edhoeGMY/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@venamediaservice?_r=1&_t=ZS-95WhTsxGJhl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="TikTok"
            >
              <Music className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Image Gallery */}
              <div className="lg:w-3/5 h-[40vh] lg:h-auto bg-slate-100 dark:bg-slate-800 relative flex flex-col group/gallery">
                <div 
                  className="flex-1 relative overflow-hidden cursor-zoom-in"
                  onClick={() => setZoomImage(selectedProject.image)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={selectedProject.image}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover/gallery:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white scale-90 group-hover/gallery:scale-100 transition-transform">
                      <ZoomIn className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                
                {/* Gallery Thumbnails */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="p-6 bg-white/5 backdrop-blur-md border-t border-white/10">
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                      {[selectedProject.image, ...selectedProject.images].map((img, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setSelectedProject({...selectedProject, image: img})}
                          className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                            selectedProject.image === img ? "border-blue-600 scale-105 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Content */}
              <div className="lg:w-2/5 p-8 sm:p-12 overflow-y-auto custom-scrollbar">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    {selectedProject.desc}
                  </p>

                  {selectedProject.toolsUsed && (
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.toolsUsed.map((tool) => (
                        <span 
                          key={tool}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 mb-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bagikan:</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={(e) => handleShare(e, selectedProject, 'twitter')}
                      className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95"
                    >
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => handleShare(e, selectedProject, 'linkedin')}
                      className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95"
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => handleShare(e, selectedProject, 'copy')}
                      className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Klien</p>
                        <p className="font-bold text-slate-900 dark:text-white">Internal Project</p>
                      </div>
                      <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Timeline</p>
                        <p className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          {selectedProject.timeline}
                        </p>
                      </div>
                    </div>

                  <div className="p-8 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-900/20">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Tertarik dengan ini?
                    </h4>
                    <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                      Kami dapat membantu Anda mencapai hasil serupa untuk bisnis atau proyek pribadi Anda.
                    </p>
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 hover:bg-blue-50 active:scale-95"
                    >
                      Mulai Konsultasi
                    </button>
                  </div>

                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Kunjungi Website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-slate-900/95 backdrop-blur-xl"
            onClick={() => setIsContactModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Background Pattern */}
              <div className="h-3 bg-blue-600 w-full"></div>
              
              <div className="p-8 sm:p-12">
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all active:scale-95"
                  aria-label="Tutup modal"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h3 id="contact-modal-title" className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Mulai Konsultasi</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    Punya ide atau proyek luar biasa? Mari kita bicarakan detailnya.
                  </p>
                </div>

                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Just close for demo
                    setIsContactModalOpen(false);
                  }}
                >
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Nama Lengkap</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        id="full-name"
                        ref={initialFocusRef}
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600/20 focus:bg-white dark:focus:bg-slate-800 rounded-2xl text-slate-900 dark:text-white transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        id="email"
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600/20 focus:bg-white dark:focus:bg-slate-800 rounded-2xl text-slate-900 dark:text-white transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project-desc" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Kebutuhan Proyek</label>
                    <textarea 
                      id="project-desc"
                      required
                      placeholder="Ceritakan sedikit tentang proyek Anda..."
                      rows={4}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600/20 focus:bg-white dark:focus:bg-slate-800 rounded-2xl text-slate-900 dark:text-white transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-3 group"
                  >
                    Kirim Permintaan
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                  <p className="text-center text-[10px] text-slate-400">
                    Biasanya saya merespons dalam waktu kurang dari 24 jam.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / Zoomed Image Overlay */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/98 backdrop-blur-2xl p-4 sm:p-20"
            onClick={() => setZoomImage(null)}
          >
            <motion.button 
              onClick={() => setZoomImage(null)}
              className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-red-500 text-white rounded-full transition-all active:scale-95 z-50 backdrop-blur-md"
              aria-label="Tutup zoom"
            >
              <X className="w-8 h-8" />
            </motion.button>
            
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={zoomImage} 
              alt="Zoomed view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl text-white/60 text-sm font-medium border border-white/5">
              Klik di mana saja untuk menutup
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
