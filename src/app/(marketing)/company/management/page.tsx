'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Github, X, ChevronLeft, ChevronRight, Send, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';

// ═══════════════════════════════════════════════════════════════
// TEAM DATA - Management Team Information
// ═══════════════════════════════════════════════════════════════
const team = [
  {
    name: 'Karim Alsayed',
    role: 'President & CEO',
    image: '/images/team/karim.png',
    bio: [
      'Karim is a founder and CEO who started the company back in 2024 and has been leading our team ever since. He personally handles partnership with our key customers and invests a lot of time and effort to ensure that BudGo provides exceptional quality of service and offers cutting edge tech solutions across the board.',
      'Karim is an avid traveller, a master diver and knows everything about fine cuisine in Egypt and Albania, and pretty much the entire world.'
    ],
    email: 'ka@budgo.net',
    linkedin: '#',
  },
  {
    name: 'Nahla Dawood',
    role: 'Chief Technology Officer',
    image: null,
    bio: [
      'Nahla is ..., responsible for setting our strategic initiatives, and scaling the company. He leads all revenue and customer facing departments within Mercury, and brings over 15 years of leadership experience.',
      'Nahla is passionate about delivering best in class software solutions to our amazing clients. Michael is a proud Father of two boys and a die hard New York Jets fan.'
    ],
    email: 'nahla@budgo.net',
    linkedin: '#',
  },
  {
    name: 'Desiree Imperial',
    role: 'Chief Operations Officer',
    image: null,
    bio: [
      'Desiree is the one who keeps things moving. She keeps a close eye on project progress, reports and communication making sure all our ongoing projects are on track and customer satisfaction is through the roof.',
      'Desiree is a proud mother of 2 and cooks the best backyard steaks in Georgia.'
    ],
    email: 'desiree@budgo.net',
    linkedin: '#',
  }
];

// ════════════════════════════==═══════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════==═══════════════════════════════════
export default function ManagementPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  // Navigation handlers for modal
  const handlePrev = () => {
    if (!selectedMember) return;
    const currentIndex = team.findIndex(m => m.name === selectedMember.name);
    const prevIndex = (currentIndex - 1 + team.length) % team.length;
    setSelectedMember(team[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedMember) return;
    const currentIndex = team.findIndex(m => m.name === selectedMember.name);
    const nextIndex = (currentIndex + 1) % team.length;
    setSelectedMember(team[nextIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800 dark:text-white">
      
      {/* ═══════════════════════════════════════════════════════════════
          DIAGONAL SLIDER SECTION - Full Viewport Background Coverage
          ═══════════════════════════════════════════════════════════════ */}
      <div className="h-screen w-full overflow-hidden flex">
        
        {team.map((member, index) => {
          const isHovered = index === hoveredIndex;
          
          return (
            <motion.div
              key={index}
              layout
              className={cn(
                // FIX #3: Smooth hover transitions with 500ms duration
                "relative h-full transition-all duration-500 ease-out cursor-pointer overflow-hidden border-r border-slate-900/50 flex-1",
                "skew-x-[-10deg]",
                // FIX #6: Enhanced hover effects - subtle expansion
                "hover:flex-[1.15]",
                // FIX #6: Add subtle scale on hover
                "hover:scale-102 transform origin-center"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedMember(member)}
              style={{ zIndex: isHovered ? 20 : 10 }}
            >
              {/* Inner container to un-skew the content */}
              <div className="absolute inset-0 skew-x-[10deg] scale-125 -ml-[12%] w-[125%] h-full origin-center">
                
                {/* ═══════════════════════════════════════════════════════
                    IMAGE BACKGROUND - With Placeholder Icon
                    ═══════════════════════════════════════════════════════ */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
                  {/* Background Image or Placeholder Icon */}
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 dark:text-slate-700">
                      <svg className="w-64 h-64 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Overlay: Darken by default, brighten on hover - No glow effects */}
                  <div className={cn(
                    "absolute inset-0 transition-all duration-500 ease-out",
                    isHovered 
                      ? "bg-black/20" // Brighten on hover
                      : "bg-black/70"  // Darken by default
                  )} />
                </div>

                {/* ═══════════════════════════════════════════════════════
                    TEXT CONTENT - Perfect Centering & Spacing
                    Smaller text sizes on hover
                    ═══════════════════════════════════════════════════════ */}
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center",
                  "px-4 md:px-8 py-12 md:py-16",
                  "transition-all duration-500 ease-out transform pointer-events-none",
                  isHovered ? "translate-y-[2in] opacity-100 scale-100" : "translate-y-[calc(2in+1rem)] opacity-0 scale-95"
                )}>
                  {/* Text container with max-width to prevent overflow */}
                  <div className="text-center max-w-md w-full">
                    {/* Smaller text sizing - Name */}
                    <h2 className={cn(
                      "text-xl md:text-2xl lg:text-3xl font-bold mb-2 uppercase tracking-tighter leading-none text-primary",
                      "drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                    )}>
                      {member.name.split(' ').map((n, i) => (
                        <span key={i} className="block">{n}</span>
                      ))}
                    </h2>
                    {/* Smaller text sizing - Role */}
                    <p className={cn(
                      "text-xs md:text-sm lg:text-base font-medium text-white uppercase tracking-widest",
                      "drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                    )}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MODAL / PROFILE VIEW
          FIX #7: Enhanced modal animations with staggered content
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // FIX #7: Improved backdrop blur for professional look
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-0 md:p-8"
            onClick={(e) => {
               if (e.target === e.currentTarget) setSelectedMember(null);
            }}
          >
             <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white dark:bg-bg-dark border border-slate-200 dark:border-white/10 w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
             >
                {/* FIX #7: Close Button with hover scale */}
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 z-50 flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors duration-300 uppercase text-sm tracking-widest font-bold"
                >
                  <X size={20} /> Close
                </motion.button>

                {/* ═══════════════════════════════════════════════════════
                    LEFT COLUMN: Image Section
                    ═══════════════════════════════════════════════════════ */}
                <div className="w-full md:w-5/12 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative h-[40vh] md:h-auto min-h-[400px]">
                   {/* Background Image or Placeholder Icon */}
                   {selectedMember.image ? (
                     <Image
                       src={selectedMember.image}
                       alt={selectedMember.name}
                       fill
                       className="object-cover"
                       sizes="(max-width: 768px) 100vw, 40vw"
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                        <svg className="w-48 h-48 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                     </div>
                   )}
                   {/* Gradient Overlay for mobile */}
                   <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-50 md:hidden" />
                   
                   {/* FIX #7: Prev Navigation with hover scale */}
                   <motion.button 
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                     className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all duration-300"
                     aria-label="Previous member"
                   >
                     <ChevronLeft size={24} />
                   </motion.button>
                </div>

                {/* ═══════════════════════════════════════════════════════
                    RIGHT COLUMN: Content Section
                    FIX #7: Staggered content animations
                    ═══════════════════════════════════════════════════════ */}
                <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white dark:bg-bg-dark relative overflow-y-auto">
                   {/* FIX #7: Name with staggered animation (delay: 0.1s) */}
                   <motion.h2 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 0.1 }}
                     className="text-4xl md:text-5xl font-bold text-primary mb-2"
                   >
                     {selectedMember.name}
                   </motion.h2>
                   
                   {/* FIX #7: Role with staggered animation (delay: 0.2s) */}
                   <motion.p 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 0.2 }}
                     className="text-xl text-slate-600 dark:text-gray-400 mb-8 font-light"
                   >
                    {selectedMember.role}
                   </motion.p>

                   {/* FIX #7: Bio with staggered animation (delay: 0.3s) */}
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 0.3 }}
                     className="space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed text-lg font-light mb-12"
                   >
                     {selectedMember.bio.map((paragraph, i) => (
                       <p key={i}>{paragraph}</p>
                     ))}
                   </motion.div>

                   {/* FIX #7: Contact links with staggered animation (delay: 0.4s) */}
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 0.4 }}
                     className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
                   >
                      {/* FIX #7: Email link with hover scale */}
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        href={`mailto:${selectedMember.email}`} 
                        className="flex items-center gap-3 text-primary hover:text-white transition-colors duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300">
                          <Send size={14} />
                        </div>
                        <span className="uppercase tracking-wider text-sm font-bold">Send Mail</span>
                      </motion.a>
                      
                      {/* FIX #7: LinkedIn link with hover scale */}
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        href={selectedMember.linkedin} 
                        className="flex items-center gap-3 text-primary hover:text-white transition-colors duration-300 group"
                      >
                         <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300">
                          <Linkedin size={14} />
                        </div>
                        <span className="uppercase tracking-wider text-sm font-bold">View on LinkedIn</span>
                      </motion.a>
                   </motion.div>

                   {/* FIX #7: Next Navigation with hover scale */}
                   <motion.button 
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={(e) => { e.stopPropagation(); handleNext(); }}
                     className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-primary transition-all duration-300 hidden md:block"
                     aria-label="Next member"
                   >
                     <ChevronRight size={32} />
                   </motion.button>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER SECTION
          FIX #8: Code optimization with consolidated styles
          ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 bg-black border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            
            {/* Top Row: Copyright & Contact, Social Icons, Links */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
              
              {/* Left: Copyright & Contact */}
              <div className="text-center lg:text-left">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  © 2020-2026 Bud Go LLC
                </p>
                <a 
                  href="mailto:sales@budgo.net" 
                  className="text-xs text-slate-700 dark:text-white hover:text-primary transition-colors duration-300"
                >
                  sales@budgo.net
                </a>
              </div>

              {/* Center: Social Icons */}
              <div className="flex items-center gap-3">
                <SocialIcon icon={Linkedin} href="#" />
                <SocialIcon icon={Github} href="#" />
                <SocialIcon icon={Facebook} href="#" />
                <SocialIcon icon={Twitter} href="#" />
              </div>

              {/* Right: Links */}
              <div className="flex items-center gap-6 text-xs font-bold tracking-widest text-slate-600 dark:text-white/60">
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  SUPPORT
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  CUSTOMER LOGIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SOCIAL ICON COMPONENT
// FIX #8: Optimized with consistent transitions
// ═══════════════════════════════════════════════════════════════
function SocialIcon({ icon: Icon, href }: { icon: LucideIcon, href: string }) {
  return (
    <a 
      href={href}
      className="w-8 h-8 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-primary dark:hover:border-white transition-all duration-300"
    >
      <Icon size={14} />
    </a>
  );
}
