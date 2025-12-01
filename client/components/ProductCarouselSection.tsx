'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Conversational Symptom Capture",
    description: "Your lived experience becomes structured health insight — no tracking apps, no forms, no friction. Clarra listens to your story and translates it into actionable data.",
    icon: "🎤",
    accentColor: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30"
  },
  {
    id: 2,
    title: "Pattern Intelligence",
    description: "Clarra finds relationships across sleep, stress, mood, cognition, and temperature changes that no wearable or lab test can see. Discover the hidden connections shaping your midlife.",
    icon: "⚡",
    accentColor: "from-green-400/20 to-green-400/5",
    borderColor: "border-green-400/30"
  },
  {
    id: 3,
    title: "AI Insights",
    description: "Personalized interpretations of your health patterns delivered in plain language. Understand not just what's happening, but why — and what it means for you.",
    icon: "✨",
    accentColor: "from-orange-400/20 to-orange-400/5",
    borderColor: "border-orange-400/30"
  },
  {
    id: 4,
    title: "Personalized Guidance",
    description: "Clear, actionable next steps tailored to your unique patterns and preferences. Get recommendations that actually fit your life, not generic advice.",
    icon: "🧭",
    accentColor: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/30"
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
    <section className="py-24 bg-gradient-to-b from-white via-primary/3 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 mb-16 flex-wrap">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setCurrentIndex(index)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-primary/20 text-[#1f2d3a] hover:border-primary/40'
              }`}
            >
              {index + 1}. {feature.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Main Carousel */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center rounded-3xl p-12 bg-gradient-to-br ${currentFeature.accentColor} border-2 ${currentFeature.borderColor} transition-all duration-500`}>
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Icon & Title */}
            <div>
              <div className="text-6xl mb-4">{currentFeature.icon}</div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1f2d3a] leading-tight">
                {currentFeature.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              {currentFeature.description}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 pt-8">
              <button
                onClick={goToPrevious}
                className="h-14 w-14 rounded-full bg-white border-2 border-primary/30 hover:border-primary hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center text-[#1f2d3a] hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-primary rounded-full'
                        : 'w-2 bg-primary/20 rounded-full'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="h-14 w-14 rounded-full bg-white border-2 border-primary/30 hover:border-primary hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center text-[#1f2d3a] hover:bg-primary hover:text-white"
              >
                <ChevronRight className="h-6 w-6" />
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
