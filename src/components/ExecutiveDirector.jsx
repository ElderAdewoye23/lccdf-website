import React from 'react'
import ED from "/images/executive.jpg"
import { Quote, Award, Sparkles } from 'lucide-react'

function ExecutiveDirector() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-emerald-950 to-slate-950 p-8 md:p-10 shadow-lg text-center md:text-left flex flex-col md:flex-row items-center gap-8 border border-emerald-900/40">
      
      {/* Decorative details inside */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gold/5 blur-2xl pointer-events-none" />
      
      {/* Image frame */}
      <div className="relative shrink-0 select-none">
        <div className="absolute inset-0 rounded-2xl border-2 border-gold/40 scale-105 pointer-events-none animate-pulse-subtle" />
        <img
          src={ED}
          alt="Executive Director Mr. Adewoye Olusesan Elijah"
          className="h-36 w-36 md:h-40 md:w-40 rounded-2xl border-2 border-emerald-900 object-cover shadow-xl relative z-10"
          onError={(e) => {
            // Fallback default avatar style inside image
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Fallback Graphic */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-900 flex items-center justify-center text-white relative z-0 h-36 w-36 md:h-40 md:w-40">
          <Award size={36} className="text-gold" />
        </div>
      </div>

      {/* Content Details */}
      <div className="space-y-4 relative z-10 text-slate-100 flex-grow">
        <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 px-3 py-1 rounded-full text-gold text-[10px] font-bold uppercase tracking-wider">
          <Sparkles size={12} />
          <span>Executive Director Spotlight</span>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white tracking-tight">
            Mr. Adewoye Olusesan Elijah
          </h3>
          <p className="text-sm font-heading font-medium text-emerald-300">
            CEO & Founder, Living Care Community Development Foundation
          </p>
        </div>

        {/* Inspirational quote */}
        <div className="relative pt-4 border-t border-emerald-900/60 max-w-2xl">
          <Quote className="absolute top-2 left-0 text-emerald-800/40 w-10 h-10 -translate-y-2 shrink-0 pointer-events-none" />
          <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed pl-8 italic">
            "Since our founding on March 2, 2007, our mission has been centered on restoration, care, and the elevation of human dignity. True developmental success is measured by the sustainable health, quality education, and resilient livelihoods of the communities we walk alongside."
          </p>
        </div>
      </div>

    </div>
  )
}

export default ExecutiveDirector
