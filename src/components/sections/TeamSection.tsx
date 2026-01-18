'use client';

import { GlassContainer } from '../layout/GlassContainer';
import { CTAButton } from './CTAButton';
import { teamMembers } from '@/lib/team-data';
import { ImageWithFallback } from '../ui/ImageWithFallback';

/**
 * TeamSection Component
 * Two-column layout: Creative/Professional + Team Profiles
 * Following accessibility best practices
 */
export function TeamSection(): JSX.Element {
  return (
    <section 
      id="about-us"
      className="relative z-10 py-20 px-4 bg-slate-100/50 dark:bg-gray-900/50"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Creative and Professional */}
          <div className="flex flex-col justify-center">
            <GlassContainer className="h-full">
              <h2 
                id="team-heading"
                className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-800 dark:text-white mb-6"
              >
                CREATIVE AND PROFESSIONAL
              </h2>
              <p className="text-slate-700 dark:text-white/90 mb-4 leading-relaxed">
                At BudGo.Net, we combine creativity with technical excellence to deliver
                solutions that not only meet but exceed our clients' expectations. Our
                approach is rooted in understanding your business needs and translating
                them into powerful digital experiences.
              </p>
              <p className="text-slate-700 dark:text-white/90 mb-8 leading-relaxed">
                We pride ourselves on staying at the forefront of technology, continuously
                learning and adapting to bring you the most innovative solutions in iOS
                and web development.
              </p>
              <CTAButton href="#portfolio">READ MORE</CTAButton>
            </GlassContainer>
          </div>

          {/* Right Column - Our Team */}
          <div>
            <GlassContainer>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-800 dark:text-white mb-8">
                OUR TEAM
              </h3>
              <div className="space-y-8">
                {teamMembers.map((member) => (
                  <div 
                    key={member.id}
                    className="flex items-start gap-4"
                  >
                    {/* Team Member Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden bg-slate-200 dark:bg-gray-700 border-2 border-slate-300 dark:border-white/20">
                        <ImageWithFallback
                          src={member.imageUrl}
                          alt={`${member.name} - ${member.role}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                          fallbackText={member.name}
                        />
                      </div>
                    </div>
                    
                    {/* Team Member Info */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1 uppercase">
                        {member.name}
                      </h4>
                      <p className="text-accent-red font-semibold mb-2">
                        {member.role}
                      </p>
                      <p className="text-slate-700 dark:text-white/80 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

