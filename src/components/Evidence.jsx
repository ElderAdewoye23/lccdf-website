
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { carouselData } from '../data/data'
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react'

function Evidence() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % carouselData.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % carouselData.length)
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  const captionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="py-20 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/50 px-3 py-1 rounded-full text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
            <Camera size={12} className="text-gold" />
            <span>Outreach Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-800 tracking-tight">
            Visual Record & Evidence
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-body">
            Our actual community impact in the field - documented proof of health counseling, net distributions, and focus group dialogues.
          </p>
        </div>

        {/* Modern Carousel Container */}
        <div className="bg-white border border-slate-200/60 p-4 sm:p-5 rounded-3xl shadow-md glow-emerald max-w-3xl mx-auto relative overflow-hidden">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 200, damping: 25 },
                  opacity: { duration: 0.8 },
                }}
                className="absolute inset-0"
              >
                {/* Image */}
                <img
                  src={carouselData[currentIndex].image}
                  alt={carouselData[currentIndex].caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Caption - animates WITH image */}
                <motion.div
                  variants={captionVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
                >
                  <p className="text-white text-sm sm:text-base font-body leading-relaxed text-left pl-4 border-l-3 border-gold max-w-2xl font-medium drop-shadow-lg">
                    {carouselData[currentIndex].caption}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {carouselData.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className={`rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-gold w-8 h-2'
                      : 'bg-white/50 w-2 h-2 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Counter */}
          <div className="mt-4 text-center text-xs text-slate-500 font-medium tracking-wide">
            {currentIndex + 1} / {carouselData.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Evidence
