'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Mic, Zap, Lightbulb, Compass } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Conversational Symptom Capture",
    description: "Your lived experience becomes structured health insight — no tracking apps, no forms, no friction. Clarra listens to your story and translates it into actionable data.",
    icon: Mic,
    shortTitle: "Symptom Capture"
  },
  {
    id: 2,
    title: "Pattern Intelligence",
    description: "Clarra finds relationships across sleep, stress, mood, cognition, and temperature changes that no wearable or lab test can see. Discover the hidden connections shaping your midlife.",
    icon: Zap,
    shortTitle: "Pattern Intelligence"
  },
  {
    id: 3,
    title: "AI Insights",
    description: "Personalized interpretations of your health patterns delivered in plain language. Understand not just what's happening, but why — and what it means for you.",
    icon: Lightbulb,
    shortTitle: "AI Insights"
  },
  {
    id: 4,
    title: "Personalized Guidance",
    description: "Clear, actionable next steps tailored to your unique patterns and preferences. Get recommendations that actually fit your life, not generic advice.",
    icon: Compass,
    shortTitle: "Personalized Guidance"
  }
];

export default function ProductCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const currentFeature = features[currentIndex];
  const IconComponent = currentFeature.icon;

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#2a1a2e] via-[#3d2645] to-[#2a1a2e] relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Tab Navigation */}
        <div className="flex items-center gap-8 mb-20 border-b border-white/20 pb-4 overflow-x-auto">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setCurrentIndex(index)}
              className={`whitespace-nowrap font-semibold text-sm md:text-base transition-all duration-300 pb-4 border-b-2 ${
                index === currentIndex
                  ? 'text-white border-white'
                  : 'text-white/50 border-transparent hover:text-white/70'
              }`}
            >
              {feature.shortTitle}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/20">
              <IconComponent className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight">
              {currentFeature.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              {currentFeature.description}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center gap-8 pt-8">
              <button
                onClick={goToPrevious}
                className="h-14 w-14 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all flex items-center justify-center text-white/70 hover:text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'h-1.5 w-8 bg-white rounded'
                        : 'h-1.5 w-2 bg-white/30 rounded'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="h-14 w-14 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all flex items-center justify-center text-white/70 hover:text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Right Side - Product Mockup Placeholder */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden group">
              {/* Placeholder content */}
              <div className="relative z-10 text-center space-y-8 px-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 border border-white/20">
                  <IconComponent className="w-12 h-12 text-white/70" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-4">
                  <p className="text-base font-semibold text-white/80">
                    Product Screenshot
                  </p>
                  <p className="text-sm text-white/50">
                    {currentFeature.title}
                  </p>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-start mt-20">
          <a href="/about" className="inline-flex items-center justify-center px-8 py-3 bg-white/90 text-[#2a1a2e] font-semibold rounded-lg hover:bg-white hover:shadow-xl transition-all hover:scale-105">
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
}
