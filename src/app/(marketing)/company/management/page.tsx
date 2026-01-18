'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Github, X, ChevronLeft, ChevronRight, Send, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const team = [
  {
    name: 'Karim Alsayed',
    role: 'Chief Executive Officer',
    bio: [
      'Karim is a founder and CEO who started the company back in 2024 and has been leading our team ever since. He personally handles partnership with our key customers and invests a lot of time and effort to ensure that BudGo provides exceptional quality of service and offers cutting edge tech solutions across the board.',
      'Karim is an avid traveller, a master diver and knows everything about fine cuisine in Egypt and Albania, and pretty much the entire world.'
    ],
    email: 'ka@budgo.net',
    linkedin: '#',
  },
  {
    name: 'Michael Donofrio',
    role: 'President',
    bio: [
      'Michael is the President of Mercury, responsible for setting our strategic initiatives, and scaling the company. He leads all revenue and customer facing departments within Mercury, and brings over 15 years of leadership experience.',
      'Michael is passionate about delivering best in class software solutions to our amazing clients. Michael is a proud Father of two boys and a die hard New York Jets fan.'
    ],
    email: 'michael@budgo.net',
    linkedin: '#',
  },
  {
    name: 'Rob Devereaux',
    role: 'Chief Operations Officer',
    bio: [
      'Rob is the one who keeps things moving. He keeps a close eye on project progress, reports and communication making sure all our ongoing projects are on track and customer satisfaction is through the roof.',
      'Rob is a proud father of 2 and cooks the best backyard steaks in Georgia.'
    ],
    email: 'rob@budgo.net',
    linkedin: '#',
  }
];

export default function ManagementPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-bg-dark text-slate-800 dark:text-white overflow-hidden">
      {/* Main Content Area - Full Width Slider with Diagonal Cuts */}
      <div className="flex-grow flex items-stretch justify-center relative w-full h-screen min-h-[600px] overflow-hidden">
        
        {team.map((member, index) => {
          const isHovered = index === hoveredIndex;
          
          return (
            <motion.div
              key={index}
              layout
              className={cn(
                "relative h-full transition-all duration-300 ease-in-out cursor-pointer overflow-hidden border-r border-slate-900/50 flex-1",
                "skew-x-[-10deg]",
                "hover:flex-[1.1] z-10" // Subtle expand on hover
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedMember(member)}
            >
              {/* Inner container to un-skew the content */}
              <div className="absolute inset-0 skew-x-[10deg] scale-125 -ml-[12%] w-[125%] h-full origin-center">
                
                {/* Image Placeholder Background */}
                <div className="absolute inset-0 bg-slate-800">
                  {/* Actual Image Placeholder Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                    <svg className="w-64 h-64 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  
                  {/* Overlay: Default Darkened, Hover Brightened */}
                  <div className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isHovered 
                      ? "bg-transparent mix-blend-normal" // Brighten on hover
                      : "bg-black/60 mix-blend-multiply"  // Darken by default
                  )} />
                  
                  {/* Glow effect on hover */}
                  {isHovered && (
                     <div className="absolute inset-0 bg-white/10 mix-blend-overlay transition-opacity duration-300" />
                  )}
                </div>

                {/* Content Overlay - Visible only on Hover */}
                <div className={cn(
                  "absolute bottom-20 left-10 md:left-20 text-left transition-all duration-300 transform pointer-events-none",
                  isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-1 uppercase tracking-tighter leading-none text-primary drop-shadow-lg">
                    {member.name.split(' ').map((n, i) => (
                      <span key={i} className="block">{n}</span>
                    ))}
                  </h2>
                  <p className="text-xs md:text-base font-medium text-slate-600 dark:text-gray-200 uppercase tracking-widest drop-shadow-md">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal / Profile View */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-8"
            onClick={(e) => {
               if (e.target === e.currentTarget) setSelectedMember(null);
            }}
          >
             <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-bg-dark border border-slate-200 dark:border-white/10 w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
             >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 z-50 flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors uppercase text-sm tracking-widest font-bold"
                >
                  <X size={20} /> Close
                </button>

                {/* Left Column: Image */}
                <div className="w-full md:w-5/12 bg-slate-800 relative h-[40vh] md:h-auto min-h-[400px]">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                      <svg className="w-48 h-48 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                   </div>
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-50 md:hidden" />
                   
                   {/* Prev Navigation (Mobile/Desktop overlap) */}
                   <button 
                     onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                     className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-colors"
                     aria-label="Previous member"
                   >
                     <ChevronLeft size={24} />
                   </button>
                </div>

                {/* Right Column: Content */}
                <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white dark:bg-bg-dark relative">
                   <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                     {selectedMember.name}
                   </h2>
                   <p className="text-xl text-slate-600 dark:text-gray-400 mb-8 font-light">
                    {selectedMember.role}
                   </p>

                   <div className="space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed text-lg font-light mb-12">
                     {selectedMember.bio.map((paragraph, i) => (
                       <p key={i}>{paragraph}</p>
                     ))}
                   </div>

                   <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                      <a href={`mailto:${selectedMember.email}`} className="flex items-center gap-3 text-primary hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-bg-dark transition-all">
                          <Send size={14} />
                        </div>
                        <span className="uppercase tracking-wider text-sm font-bold">Send Mail</span>
                      </a>
                      <a href={selectedMember.linkedin} className="flex items-center gap-3 text-primary hover:text-white transition-colors group">
                         <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-bg-dark transition-all">
                          <Linkedin size={14} />
                        </div>
                        <span className="uppercase tracking-wider text-sm font-bold">View on LinkedIn</span>
                      </a>
                   </div>

                   {/* Next Navigation */}
                   <button 
                     onClick={(e) => { e.stopPropagation(); handleNext(); }}
                     className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-primary transition-colors hidden md:block"
                     aria-label="Next member"
                   >
                     <ChevronRight size={32} />
                   </button>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Section */}
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
                <a href="mailto:sales@budgo.net" className="text-xs text-slate-700 dark:text-white hover:text-primary transition-colors">
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
                <a href="#" className="hover:text-primary transition-colors">SUPPORT</a>
                <a href="#" className="hover:text-primary transition-colors">CUSTOMER LOGIN</a>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

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
