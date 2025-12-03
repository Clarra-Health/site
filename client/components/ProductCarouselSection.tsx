"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mic,
  Zap,
  Lightbulb,
  Compass,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Conversational Symptom Capture",
    description:
      "Your lived experience becomes structured health insight — no tracking apps, no forms, no friction. Clarra listens to your story and translates it into actionable data.",
    icon: Mic,
    shortTitle: "Symptom Capture",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F6cafa9845c344ca7b2180f3318786662?format=webp&width=800",
    metrics: {
      primary: {
        label: "MOOD TRACKING",
        value: "92",
        subtitle: "Positive trend",
      },
      secondary: {
        label: "RESPONSE TIME",
        value: "2.3s",
        subtitle: "Quick analysis",
      },
    },
  },
  {
    id: 2,
    title: "Pattern Intelligence",
    description:
      "Clarra finds relationships across sleep, stress, mood, cognition, and temperature changes that no wearable or lab test can see. Discover the hidden connections shaping your midlife.",
    icon: Zap,
    shortTitle: "Pattern Intelligence",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F3f65f374e9b443d496fd67664adf5774?format=webp&width=800",
    metrics: {
      primary: { label: "SLEEP SCORE", value: "86", subtitle: "Optimal rest" },
      secondary: {
        label: "BODY TEMP",
        value: "+1.8°F",
        subtitle: "Normal range",
      },
    },
  },
  {
    id: 3,
    title: "AI Insights",
    description:
      "Personalized interpretations of your health patterns delivered in plain language. Understand not just what's happening, but why — and what it means for you.",
    icon: Lightbulb,
    shortTitle: "AI Insights",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F55b9ca56078f44dfa97225350b00c7eb?format=webp&width=800",
    metrics: {
      primary: { label: "INSIGHTS", value: "7", subtitle: "New findings" },
      secondary: {
        label: "ACCURACY",
        value: "94%",
        subtitle: "High confidence",
      },
    },
    insight:
      "Elevated cortisol during sleep disruption suggests hormonal transition. Consistent sleep timing and magnesium support can help regulate your cycle.",
  },
  {
    id: 4,
    title: "Personalized Guidance",
    description:
      "Clear, actionable next steps tailored to your unique patterns and preferences. Get recommendations that actually fit your life, not generic advice.",
    icon: Compass,
    shortTitle: "Personalized Guidance",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F4f66301e028c49b09f4606c334073c51?format=webp&width=800",
    metrics: {
      primary: {
        label: "RECOMMENDATIONS",
        value: "5",
        subtitle: "Personalized",
      },
      secondary: {
        label: "SUCCESS RATE",
        value: "88%",
        subtitle: "Following advice",
      },
    },
    guidance: [
      { label: "Today: Prioritize consistent sleep schedule", status: "today" },
      {
        label: "Tomorrow: Add 30-min evening walk for stress relief",
        status: "upcoming",
      },
      {
        label: "This week: Schedule vitamin D and iron labs",
        status: "upcoming",
      },
    ],
  },
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
    <section className="w-full py-12 bg-[#1f2d3a] relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl -z-10" />

      <div className="w-full px-3 md:px-6 lg:px-10">
        {/* Tab Navigation */}
        <div className="flex items-center gap-4 mb-10 border-b border-white/20 pb-2 overflow-x-auto">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setCurrentIndex(index)}
              className={`whitespace-nowrap font-semibold text-sm md:text-base transition-all duration-300 pb-4 border-b-2 ${
                index === currentIndex
                  ? "text-white border-white"
                  : "text-white/50 border-transparent hover:text-white/70"
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
              <IconComponent
                className="w-10 h-10 text-white"
                strokeWidth={1.5}
              />
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
                        ? "h-1.5 w-8 bg-white rounded"
                        : "h-1.5 w-2 bg-white/30 rounded"
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

          {/* Right Side - Product Mockup with Image and Metrics or Chat */}
          <div className="relative">
            {currentIndex === 0 ? (
              // Chat Interface for first tab
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex flex-col">
                {/* Background Image */}
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="absolute inset-0 w-full h-full object-cover scale-[1.35]"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Chat Container */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 overflow-hidden">
                  <div className="flex flex-col gap-4 overflow-y-auto max-h-96 scrollbar-hide">
                    {/* User Message 1 */}
                    <div className="flex justify-end">
                      <div className="bg-white/20 backdrop-blur rounded-2xl rounded-tr-lg px-4 py-3 max-w-xs">
                        <p className="text-white text-sm">
                          How's your sleep lately?
                        </p>
                      </div>
                    </div>

                    {/* User Message 2 */}
                    <div className="flex justify-end">
                      <div className="bg-white/20 backdrop-blur rounded-2xl rounded-tr-lg px-4 py-3 max-w-xs">
                        <p className="text-white text-sm">
                          Been struggling, feeling foggy during the day
                        </p>
                      </div>
                    </div>

                    {/* Clarra Message with Graph */}
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-br from-teal-500/70 to-teal-700/70 backdrop-blur-md rounded-2xl rounded-tl-lg p-4 max-w-xs shadow-lg">
                        <p className="text-white text-xs font-semibold mb-3">
                          I've noticed a pattern in your sleep:
                        </p>
                        <svg
                          className="w-full h-16 mb-3"
                          viewBox="0 0 200 60"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="sleepGrad"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#4fb7b3"
                                stopOpacity="0.3"
                              />
                              <stop
                                offset="100%"
                                stopColor="#4fb7b3"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          {/* Sleep quality line chart */}
                          <polyline
                            points="10,45 30,38 50,42 70,35 90,40 110,28 130,32 150,25 170,35 190,20"
                            fill="none"
                            stroke="#4fb7b3"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Filled area under line */}
                          <polygon
                            points="10,45 30,38 50,42 70,35 90,40 110,28 130,32 150,25 170,35 190,20 190,60 10,60"
                            fill="url(#sleepGrad)"
                          />
                          {/* Baseline */}
                          <line
                            x1="10"
                            y1="50"
                            x2="190"
                            y2="50"
                            stroke="white"
                            strokeWidth="1"
                            strokeDasharray="4"
                            opacity="0.3"
                          />
                        </svg>
                        <p className="text-white text-xs">
                          Consistent decline through the week. Let's explore
                          why.
                        </p>
                      </div>
                    </div>

                    {/* Clarra Message 2 */}
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-br from-teal-500/70 to-teal-700/70 backdrop-blur-md rounded-2xl rounded-tl-lg px-4 py-3 max-w-xs">
                        <p className="text-white text-sm">
                          Your sleep timing and caffeine intake might be
                          connected. Can we dig deeper?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentIndex === 1 ? (
              // Pattern Intelligence - Correlation Graph
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                {/* Background Image */}
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Metric Cards Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
                  {/* Top Right - Correlation Metric */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-emerald-600/70 to-emerald-800/70 backdrop-blur-md rounded-2xl p-5 border border-emerald-500/40 max-w-xs shadow-lg">
                      <p className="text-xs font-semibold text-emerald-200/70 uppercase tracking-wider mb-2">
                        Correlations Found
                      </p>
                      <p className="text-4xl font-bold text-white mb-1">7</p>
                      <p className="text-sm text-emerald-100/60">
                        Connected patterns
                      </p>
                    </div>
                  </div>

                  {/* Bottom - Correlation Graph */}
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-slate-900/30 to-slate-950/30 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl max-w-sm w-full">
                      <p className="text-white text-xs font-semibold uppercase tracking-wider mb-4 text-center">
                        Sleep vs Mood Correlation
                      </p>

                      {/* Correlation Graph */}
                      <svg
                        className="w-full h-32 mb-4"
                        viewBox="0 0 220 120"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <linearGradient
                            id="correlationGrad"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#4fb7b3"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#4fb7b3"
                              stopOpacity="0.05"
                            />
                          </linearGradient>
                        </defs>

                        {/* Main correlation line (Sleep) */}
                        <polyline
                          points="15,95 35,75 55,55 75,40 95,35 115,45 135,65 155,85 175,100 195,110"
                          fill="none"
                          stroke="#4fb7b3"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Secondary correlation line (Mood) */}
                        <polyline
                          points="15,85 35,65 55,45 75,50 95,60 115,55 135,45 155,35 175,45 195,55"
                          fill="none"
                          stroke="#fc9a53"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="4 4"
                        />

                        {/* Fill under line */}
                        <polygon
                          points="15,95 35,75 55,55 75,40 95,35 115,45 135,65 155,85 175,100 195,110 195,115 15,115"
                          fill="url(#correlationGrad)"
                        />

                        {/* Key points */}
                        <circle cx="35" cy="75" r="4" fill="#56d257" />
                        <circle cx="95" cy="35" r="4" fill="#56d257" />
                        <circle cx="175" cy="100" r="4" fill="#56d257" />

                        {/* Baseline */}
                        <line
                          x1="10"
                          y1="105"
                          x2="200"
                          y2="105"
                          stroke="white"
                          strokeWidth="1"
                          strokeDasharray="3"
                          opacity="0.2"
                        />
                      </svg>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <span className="text-white/70">Sleep</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#fc9a53]"></div>
                            <span className="text-white/70">Mood</span>
                          </div>
                        </div>
                        <span className="text-white font-semibold">
                          73% Correlation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentIndex === 3 ? (
              // Personalized Guidance - Show actionable steps
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex flex-col">
                {/* Background Image */}
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Guidance Steps Container */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 gap-3">
                  {currentFeature.guidance.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/10"
                    >
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          item.status === "today"
                            ? "bg-gradient-to-br from-orange-500 to-orange-600"
                            : "bg-gradient-to-br from-slate-600 to-slate-700"
                        }`}
                      >
                        {item.status === "today" ? "✓" : idx + 1}
                      </div>
                      <p className="text-white text-sm leading-snug">
                        {item.label}
                      </p>
                    </div>
                  ))}
                  <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mt-2" />
                </div>
              </div>
            ) : currentIndex === 2 ? (
              // AI Insights - Show insight text with metrics
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                {/* Background Image */}
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Metric Cards and Insight Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
                  {/* Primary Metric Card - Top Right */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-amber-700/70 to-amber-900/70 backdrop-blur-md rounded-2xl p-6 border border-amber-600/40 max-w-xs shadow-xl">
                      <p className="text-xs font-semibold text-amber-200/70 uppercase tracking-wider mb-2">
                        {currentFeature.metrics.primary.label}
                      </p>
                      <p className="text-4xl font-bold text-white mb-1">
                        {currentFeature.metrics.primary.value}
                      </p>
                      <p className="text-sm text-amber-100/60">
                        {currentFeature.metrics.primary.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Insight Box - Bottom Right (replaces accuracy card) */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-teal-600/80 to-teal-800/80 backdrop-blur-md rounded-2xl p-5 border border-teal-500/40 max-w-xs shadow-lg">
                      <p className="text-white text-xs leading-snug">
                        {currentFeature.insight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Metric Cards for other tabs
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                {/* Background Image */}
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Metric Cards Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
                  {/* Primary Metric Card - Top Right */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-amber-700/70 to-amber-900/70 backdrop-blur-md rounded-2xl p-6 border border-amber-600/40 max-w-xs shadow-xl">
                      <p className="text-xs font-semibold text-amber-200/70 uppercase tracking-wider mb-2">
                        {currentFeature.metrics.primary.label}
                      </p>
                      <p className="text-4xl font-bold text-white mb-1">
                        {currentFeature.metrics.primary.value}
                      </p>
                      <p className="text-sm text-amber-100/60">
                        {currentFeature.metrics.primary.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Secondary Metric Card - Bottom Right */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-teal-700/60 to-teal-900/60 backdrop-blur-md rounded-2xl p-5 border border-teal-600/40 max-w-xs shadow-lg">
                      <p className="text-xs font-semibold text-teal-200/70 uppercase tracking-wider mb-2">
                        {currentFeature.metrics.secondary.label}
                      </p>
                      <p className="text-3xl font-bold text-white mb-1">
                        {currentFeature.metrics.secondary.value}
                      </p>
                      <p className="text-sm text-teal-100/60">
                        {currentFeature.metrics.secondary.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
