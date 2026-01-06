"use client";

import React, { useState } from 'react';
import { Phone, MapPin, ArrowRight, Star, Menu, X, ShieldCheck, Calendar, Check, Instagram, Facebook } from 'lucide-react';

// --- DATA SOURCE ---
const SITE_DATA = {
  name: "Prakyath Dental",
  fullName: "Prakyath Dental & Orthodontic Centre",
  phone: "+91 97407 89474",
  whatsappLink: "https://wa.me/919740789474",
  address: "1st Floor, Shriya Tower, Kundapura Main Rd, opp. Old Bus Stand",
  email: "prakrathipramod474@gmail.com",
  hours: {
    weekdays: "10:00 AM – 7:00 PM",
    sunday: "10:00 AM – 6:30 PM",
    closed: "Tuesday"
  }
};

const SERVICES = [
  { id: 1, title: "Orthodontics", desc: "Braces & Clear Aligners", icon: "🦷", color: "bg-blue-50 text-blue-600" },
  { id: 2, title: "Implants", desc: "Permanent Tooth Replacement", icon: "🔩", color: "bg-orange-50 text-orange-600" },
  { id: 3, title: "Smile Design", desc: "Veneers & Whitening", icon: "✨", color: "bg-purple-50 text-purple-600" },
  { id: 4, title: "Root Canal", desc: "Advanced Endodontics", icon: "🛡️", color: "bg-teal-50 text-teal-600" },
  { id: 5, title: "Oral Surgery", desc: "Wisdom Teeth & Extractions", icon: "🏥", color: "bg-rose-50 text-rose-600" },
  { id: 6, title: "Kids Dental", desc: "Gentle Pediatric Care", icon: "🧸", color: "bg-yellow-50 text-yellow-600" }
];

//
const DOCTORS = [
  { name: "Prof. Dr. Pramod Shetty", role: "Orthodontist", exp: "30 Yrs Exp", image: "/prof-Dr-promod.webp" },
  { name: "Dr. Prakrathi P. Shetty", role: "Dental Surgeon", exp: "30 Yrs Exp", image: "/dr-prakrathi.webp" },
  { name: "Prof. Dr. Vidyadhar Shetty", role: "Endodontist", exp: "25 Yrs Exp", image: "/dr-vidyadhar.webp"  },
  { name: "Prof. Dr. Padmaraj Hegde", role: "Oral Surgeon", exp: "25 Yrs Exp", image: "/Dr-Padmaraj.webp" },
  { name: "Prof. Dr. Chaithanya Shanbhag", role: "Periodontist", exp: "25 Yrs Exp", image: "/Dr-Chaithanya.webp" },
  { name: "Dr. Prathiksha Shetty", role: "Endodontist", exp: "Specialist", image: "/dr-prathiksha.webp" },
];

export default function ModernDentalSite() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-blue-500 selection:text-white">
      
      {/* --- FLOATING GLASS NAV --- */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl transition-all">
          
         {/* Logo - Bolder Text & Full Name */}
         <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
            <img src="/logo1.png" alt="Logo" className="h-20 md:h-22 w-auto rounded-full" />
            <div className="leading-tight">
              <span className="block font-bold text-slate-900 tracking-tight text-base md:text-xl">PRAKYATH</span>
              {/* Updated subtext to full name */}
              <span className="text-[10px] md:text-xs uppercase font-bold text-blue-600 tracking-widest">Dental & Orthodontic Centre</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full">
            {['Home', 'About', 'Services', 'Doctors'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm transition-all"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a 
              href={SITE_DATA.whatsappLink} 
              className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Book Now
            </a>
            <button className="md:hidden p-2 bg-slate-100 rounded-full" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 animate-in fade-in slide-in-from-top-10">
          <div className="flex flex-col gap-6 text-center">
            {['Home', 'About', 'Services', 'Doctors'].map((item) => (
               <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-2xl font-bold text-slate-800">
                 {item}
               </button>
            ))}
             <a href={SITE_DATA.whatsappLink} className="bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200">
               Book Appointment
             </a>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-40 pb-20 lg:pt-52 lg:pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm text-sm font-medium text-slate-600 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Accepting New Patients
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                Modern dentistry, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">timeless care.</span>
              </h1>
              
              <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                Experience 30 years of clinical excellence with Prof. Dr. Pramod Shetty. Advanced orthodontics and implants in the heart of Kundapura.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href={SITE_DATA.whatsappLink} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/30 hover:scale-105 flex items-center gap-2">
                  Book Visit <ArrowRight size={18} />
                </a>
                <button onClick={() => scrollTo('services')} className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-2xl font-bold transition-all hover:bg-slate-50">
                  Our Services
                </button>
              </div>

              {/* Stats Strip */}
              <div className="pt-8 flex items-center gap-8 border-t border-slate-200/60 mt-8">
                <div><p className="text-3xl font-bold text-slate-900">30+</p><p className="text-sm text-slate-500 font-medium">Years Exp.</p></div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div><p className="text-3xl font-bold text-slate-900">5.0</p><p className="text-sm text-slate-500 font-medium">Google Rating</p></div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div><p className="text-3xl font-bold text-slate-900">6</p><p className="text-sm text-slate-500 font-medium">Specialists</p></div>
              </div>
            </div>

            {/* Right Image (Abstract Shape) */}
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-orange-100 rounded-[3rem] rotate-6 scale-95 blur-3xl opacity-60"></div>
               <img 
                 src="/prakyathdentalclinic.webp" 
                 alt="Clinic" 
                 className="relative w-full h-[500px] object-cover rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] z-10 transition-transform hover:scale-[1.01] duration-700"
               />
               
               {/* Floating Badge */}
               <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-600"><Star size={20} fill="currentColor" /></div>
                    <span className="font-bold text-slate-900">Top Rated</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Best in Class<br/>Equipment</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (BENTO GRID) --- */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
               <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Our Expertise</h2>
               <h3 className="text-4xl font-bold text-slate-900">Comprehensive care for <br/>every smile.</h3>
            </div>
            <a href={SITE_DATA.whatsappLink} className="group flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition">
              View all treatments <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((item) => (
              <div key={item.id} className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-transparent transition-all duration-300 cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION (Modern Cards) --- */}
      <section id="doctors" className="py-24 bg-[#F1F5F9]">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet the Doctors</h2>
             <p className="text-slate-500">Led by Dr. Pramod Shetty, our team consists of academic leaders and specialists.</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {DOCTORS.map((doc, idx) => (
    <div key={idx} className="bg-white p-2 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
      
      {/* IMAGE CONTAINER - Fixed Height ensures alignment */}
      <div className="h-72 w-full bg-slate-100 rounded-[1.5rem] overflow-hidden relative">
        <img 
          src={doc.image} 
          alt={doc.name} 
          // object-cover: Ensures no stretching
          // object-top: Focuses on the face
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
        />
      </div>

      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
          {doc.exp}
        </div>
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{doc.name}</h3>
        <p className="text-slate-500 text-sm font-medium">{doc.role}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* --- ABOUT FEATURE --- */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
               <div className="lg:w-1/2 space-y-8">
                 <h2 className="text-3xl lg:text-5xl font-bold leading-tight">30 Years of Trust.<br/><span className="text-blue-400">One Location.</span></h2>
                 <p className="text-slate-300 text-lg leading-relaxed">
                   "At Prakyath Dental, we don't just treat teeth; we treat people. Located in Shriya Tower, Kundapura, we combine state-of-the-art technology with a warm, welcoming environment to ensure your smile is in the safest hands."
                 </p>
                 <div className="grid grid-cols-2 gap-6 pt-4">
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-white/10 rounded-full"><ShieldCheck size={20} className="text-blue-400"/></div>
                     <span className="font-medium text-sm">Sterile Environment</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-white/10 rounded-full"><Check size={20} className="text-blue-400"/></div>
                     <span className="font-medium text-sm">Advanced Diagnostics</span>
                   </div>
                 </div>
               </div>
               <div className="lg:w-1/2">
                 <img src="/PKDteam.webp" alt="Team" className="rounded-3xl shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img src="/logo1.png" alt="Logo" className="h-20  opacity-100" />
                <span className="font-bold text-slate-900 tracking-tight">Prakyath Dental & Orthodontic Centre.</span>
              </div>
              <p className="text-slate-500 max-w-sm">
                Your trusted partner for a healthy, beautiful smile in Kundapura. Visit us today for a consultation.
              </p>
              <div className="flex gap-4">
                 <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Instagram size={18}/></button>
                 <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18}/></button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Clinic Info</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex gap-3"><MapPin size={18} className="text-blue-600 shrink-0"/> <span className="flex-1">{SITE_DATA.address}</span></li>
                <li className="flex gap-3"><Phone size={18} className="text-blue-600 shrink-0"/> {SITE_DATA.phone}</li>
                <li className="flex gap-3">
  <Calendar size={18} className="text-blue-600 shrink-0"/> 
  <span>Mon-Sun <span className="text-orange-600 font-bold">(Tue Closed)</span></span>
</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><button onClick={() => scrollTo('home')} className="hover:text-blue-600 transition">Home</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-blue-600 transition">About Us</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-blue-600 transition">Treatments</button></li>
                <li><a href={SITE_DATA.whatsappLink} className="hover:text-blue-600 transition">Book Appointment</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Prakyath Dental & Orthodontic Centre. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}