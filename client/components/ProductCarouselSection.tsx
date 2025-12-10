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
      "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fa41f3ec5df3a4e6eb6ce29ee8ac2fe9e?format=webp&width=1600",
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
      "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F2eca1ac799bb43b2974f8da683512ad9?format=webp&width=800",
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
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#f0f9ff] to-white relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

      <div className="w-full px-3 md:px-6 lg:px-10">
        <p className="text-[17px] font-semibold text-muted-foreground uppercase tracking-widest mb-4 text-left">
          HOW CLARRA WORKS
        </p>
        {/* Tab Navigation */}
        <div className="flex items-center gap-4 mb-10 border-b border-border pb-2 overflow-x-auto">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setCurrentIndex(index)}
              className={`whitespace-nowrap font-semibold text-[15px] md:text-[17px] transition-all duration-300 pb-4 border-b-2 ${
                index === currentIndex
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20">
              <IconComponent
                className="w-10 h-10 text-primary"
                strokeWidth={1.5}
              />
            </div>

            {/* Title */}
            <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground-dark leading-tight">
              {currentFeature.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {currentFeature.description}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center gap-8 pt-8">
              <button
                onClick={goToPrevious}
                className="h-14 w-14 rounded-full bg-white border border-border shadow-sm hover:bg-gray-50 hover:scale-110 transition-all flex items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex gap-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "h-1.5 w-8 bg-primary rounded"
                        : "h-1.5 w-2 bg-primary/20 rounded"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="h-14 w-14 rounded-full bg-white border border-border shadow-sm hover:bg-gray-50 hover:scale-110 transition-all flex items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Right Side - Product Mockup with Image and Metrics or Chat */}
          <div className="relative">
            {currentIndex === 0 ? (
              // Chat Interface for first tab
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-border/50 flex flex-col">
                {/* Background Image */}
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Chat Container */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 overflow-hidden">
                  <div className="flex flex-col gap-4 overflow-y-auto max-h-96 scrollbar-hide">
                    {/* System Message 1 */}
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-br from-teal-500/70 to-teal-700/70 backdrop-blur-md rounded-2xl rounded-tl-lg px-4 py-3 max-w-xs shadow-lg">
                        <p className="text-white text-sm">
                          How's your sleep lately?
                        </p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-white/20 backdrop-blur rounded-2xl rounded-tr-lg px-4 py-3 max-w-xs border border-white/10">
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

                  {/* Input Area */}
                  <div className="mt-4 flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-3 border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    <p className="text-white/80 text-sm flex-1 font-medium">
                      Listening...
                    </p>
                    <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                      <Mic className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ) : currentIndex === 1 ? (
              // Pattern Intelligence - Correlation Graph
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-border/50 flex flex-col">
                {/* Background Image */}
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
                  {/* Top Right - Correlation Metric */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-teal-500/70 to-teal-700/70 backdrop-blur-md rounded-2xl p-5 border border-teal-500/40 max-w-xs shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-teal-200 animate-pulse" />
                        <p className="text-xs font-semibold text-teal-100 uppercase tracking-wider">
                          Correlations Found
                        </p>
                      </div>
                      <p className="text-4xl font-bold text-white mb-1">7</p>
                      <p className="text-sm text-teal-50/80">
                        Connected patterns
                      </p>
                    </div>
                  </div>

                  {/* Bottom - Correlation Graph Widget */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl w-full">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-white text-xs font-semibold uppercase tracking-wider">
                        Sleep vs Mood Correlation
                      </p>
                      <div className="bg-white/20 rounded-full px-2 py-1">
                        <p className="text-[10px] text-white font-medium">
                          Last 30 Days
                        </p>
                      </div>
                    </div>

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
                      <span className="text-white font-semibold bg-white/10 px-2 py-1 rounded-lg">
                        73% Correlation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentIndex === 3 ? (
              // Personalized Guidance - Show actionable steps
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-border/50 flex flex-col">
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
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-white font-semibold">Today's Plan</p>
                      <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                        3 Tasks
                      </span>
                    </div>
                    <div className="space-y-3">
                      {currentFeature.guidance.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 group cursor-pointer"
                        >
                          <div
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs transition-all duration-300 ${
                              item.status === "today"
                                ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg scale-110"
                                : "bg-white/10 border border-white/20 group-hover:border-white/40"
                            }`}
                          >
                            {item.status === "today" ? "✓" : ""}
                          </div>
                          <p
                            className={`text-sm leading-snug transition-colors ${
                              item.status === "today"
                                ? "text-white font-medium"
                                : "text-white/70 group-hover:text-white/90"
                            }`}
                          >
                            {item.label.replace(
                              /^(Today|Tomorrow|This week): /,
                              "",
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                      <p className="text-xs text-white/50">
                        Updated 2 hours ago
                      </p>
                      <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-orange-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentIndex === 2 ? (
              // AI Insights - Show insight text with metrics
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-border/50">
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
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-amber-200" />
                        <p className="text-xs font-semibold text-amber-200/70 uppercase tracking-wider">
                          {currentFeature.metrics.primary.label}
                        </p>
                      </div>
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
                    <div className="bg-gradient-to-br from-teal-600/80 to-teal-800/80 backdrop-blur-md rounded-2xl p-5 border border-teal-500/40 max-w-xs shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-transparent opacity-50" />
                      <div className="flex gap-3 mb-2">
                        <div className="bg-white/20 p-1.5 rounded-lg">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-teal-100 text-xs font-semibold uppercase tracking-wider mt-1">
                          New Insight
                        </p>
                      </div>
                      <p className="text-white text-sm leading-relaxed font-medium">
                        {currentFeature.insight}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-teal-200/80">
                        <span>Tap to learn more</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Metric Cards for other tabs
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-border/50">
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
