'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Conversational Symptom Capture",
    description: "Your lived experience becomes structured health insight — no tracking apps, no forms, no friction. Clarra listens to your story and translates it into actionable data.",
    icon: "🎤",
    bgColor: "bg-gradient-to-br from-primary to-primary/80",
    accentColor: "from-primary/40 to-primary/20",
    textColor: "text-white",
    descColor: "text-white/90"
  },
  {
    id: 2,
    title: "Pattern Intelligence",
    description: "Clarra finds relationships across sleep, stress, mood, cognition, and temperature changes that no wearable or lab test can see. Discover the hidden connections shaping your midlife.",
    icon: "⚡",
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    accentColor: "from-green-500/40 to-green-400/20",
    textColor: "text-white",
    descColor: "text-white/90"
  },
  {
    id: 3,
    title: "AI Insights",
    description: "Personalized interpretations of your health patterns delivered in plain language. Understand not just what's happening, but why — and what it means for you.",
    icon: "✨",
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    accentColor: "from-orange-500/40 to-orange-400/20",
    textColor: "text-white",
    descColor: "text-white/90"
  },
  {
    id: 4,
    title: "Personalized Guidance",
    description: "Clear, actionable next steps tailored to your unique patterns and preferences. Get recommendations that actually fit your life, not generic advice.",
    icon: "🧭",
    bgColor: "bg-gradient-to-br from-secondary to-secondary/80",
    accentColor: "from-secondary/40 to-secondary/20",
    textColor: "text-white",
    descColor: "text-white/90"
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

  return (
    <section className="w-full py-32 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${currentFeature.bgColor} transition-all duration-500 -z-10`} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/10 -z-10" />

      <div className="w-full px-4 md:px-12 lg:px-20">
        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-3 mb-20 flex-wrap">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setCurrentIndex(index)}
              className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white text-[#1f2d3a] shadow-2xl scale-110'
                  : 'bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60'
              }`}
            >
              {index + 1}. {feature.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Main Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-all duration-500">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Icon & Title */}
            <div>
              <div className="text-7xl mb-6 drop-shadow-lg">{currentFeature.icon}</div>
              <h2 className={`font-display text-5xl sm:text-6xl font-bold ${currentFeature.textColor} leading-tight drop-shadow-lg`}>
                {currentFeature.title}
              </h2>
            </div>

            {/* Description */}
            <p className={`text-xl ${currentFeature.descColor} leading-relaxed max-w-2xl drop-shadow`}>
              {currentFeature.description}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 pt-12">
              <button
                onClick={goToPrevious}
                className="h-16 w-16 rounded-full bg-white/20 border-2 border-white/40 hover:bg-white hover:text-[#1f2d3a] shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-white"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              <div className="flex gap-3">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'h-3 w-10 bg-white rounded-full'
                        : 'h-3 w-3 bg-white/40 rounded-full hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="h-16 w-16 rounded-full bg-white/20 border-2 border-white/40 hover:bg-white hover:text-[#1f2d3a] shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-white"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>
          </div>

          {/* Right Side - Product Mockup Placeholder */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 flex items-center justify-center overflow-hidden group">
              {/* Placeholder with gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Placeholder content */}
              <div className="relative z-10 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 text-4xl">
                  {currentFeature.icon}
                </div>
                <p className="text-sm font-semibold text-foreground/60 px-6">
                  Product Screenshot Placeholder
                </p>
                <p className="text-xs text-foreground/40 px-6">
                  {currentFeature.title}
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-3xl" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a href="/about" className="inline-flex items-center justify-center px-10 h-14 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 hover:shadow-xl transition-all hover:scale-105">
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
}
