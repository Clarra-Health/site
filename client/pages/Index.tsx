import { Link } from "react-router-dom";
import NotInYourHead from "@/components/layout/NotInYourHead";
import AutoPlayVideo from "../components/media/AutoPlayVideo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate z-10 overflow-hidden bg-transparent pt-12 md:pt-24 pb-12 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-extrabold text-foreground tracking-tight">
                Midlife care designed for you —
                <span className="block text-primary mt-2">compassionate, modern, and personalised.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-foreground/85 max-w-xl leading-relaxed">
                Combining biomarker testing, wearable data and conversational AI to give women clarity and confidence through perimenopause and beyond.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/about" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto text-base px-8 h-14">Meet Clarra</Button>
                </Link>
                <Link to="/how-it-works" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 h-14">How it works</Button>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3 text-sm font-medium text-muted-foreground bg-secondary/20 px-4 py-2 rounded-full">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Trusted by clinicians & women worldwide
              </div>
            </div>

            <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none lg:pl-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-12">
                  <div className="overflow-hidden rounded-2xl shadow-lg bg-muted aspect-[4/3]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1032b528b95f49c3aa2bd1f410d418fb?format=webp&width=800"
                      alt="Sleep and mood"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg bg-muted aspect-[3/4]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F691c8343a44543aba27bccf71813cf7d?format=webp&width=800"
                      alt="Hormone Health"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg bg-muted aspect-[3/4]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fa363af82f5f14461ae882311697aaeff?format=webp&width=800"
                      alt="Woman smiling"
                      className="w-full h-full object-cover scale-[1.3] hover:scale-[1.35] transition-transform duration-700"
                      loading="eager"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg bg-muted aspect-[4/3]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F158ff49eec9646b58110a237143353c1?format=webp&width=800"
                      alt="Healthy lifestyle"
                      className="w-full h-full object-cover object-top scale-125 hover:scale-150 transition-transform duration-700"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Meets Function Section */}
      <section className="pt-15 pb-20 bg-gradient-to-r from-[#f0f9ff] to-[#ecfdf5] relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Insights That Matter
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-[#1f2d3a] leading-tight">
                Clinical precision,
                <span className="block font-serif italic font-light text-primary mt-2">designed for simplicity</span>
              </h2>
            </div>
            <div className="space-y-8 pt-4">
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Hormonal health is complex. Understanding it shouldn't be. Clarra translates sophisticated biomarker data into clear, actionable insights delivered through conversational AI that feels like talking to a trusted health partner.
              </p>
              <div>
                <Link to="/how-it-works">
                  <Button size="lg" className="bg-[#4fb7b3] hover:bg-[#4fb7b3]/90 text-white px-8 h-14 rounded-full text-base">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-12 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/5 to-primary/6 pointer-events-none" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl pt-9">
            <h2 className="font-display text-6xl sm:text-7xl font-bold text-[#1f2d3a] mb-4 text-center leading-tight">
              Meet the Midlife Intelligence Layer
            </h2>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto text-center mb-0">
              Clarra listens, interprets, and connects the dots across your symptoms, patterns, and daily experience.
            </p>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center lg:justify-start relative h-full items-center">
                <div className="absolute -inset-32 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl -z-10" />
                <div className="absolute -inset-16 bg-gradient-to-tr from-secondary/15 to-primary/10 rounded-full blur-2xl -z-10" />
                <div className="relative inline-block translate-y-[25%] drop-shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-3xl blur-2xl -z-10 scale-110" />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F223e62b63b4545cfbb4a6baad23f675e?format=webp&width=800"
                    alt="Clarra app showcasing sleep tracking and AI assistant"
                    className="w-full max-w-4xl scale-[2.5] origin-center -translate-x-[5%] relative z-10"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {/* Story Capture - Premium Pillar 1 */}
                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border border-white/30 hover:border-primary/40 transition-all duration-300 hover:shadow-xl p-8">
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2V7h2v10zm4 0h-2v-3h2v3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#1f2d3a] mb-2">Story Capture</h3>
                        <p className="text-base text-foreground/80 leading-relaxed">Your lived experience becomes structured health insight — no tracking apps, no forms, no friction.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pattern Intelligence - Premium Pillar 2 */}
                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-8">
                  <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-secondary/10 blur-3xl group-hover:bg-secondary/20 transition-all" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-4">
                      <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#1f2d3a] mb-2">Pattern Intelligence</h3>
                        <p className="text-base text-foreground/80 leading-relaxed">Clarra finds relationships across sleep, stress, mood, cognition, and temperature changes that no wearable or lab test can see.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Context-Aware Guidance - Premium Pillar 3 */}
                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10 backdrop-blur-sm border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl p-8">
                  <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/15 transition-all" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0 text-primary">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M13 10l7-7m0 0l-7 7m7-7v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#1f2d3a] mb-2">Context-Aware Guidance</h3>
                        <p className="text-base text-foreground/80 leading-relaxed">Clear next steps based on your unique patterns — not generic advice.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-14">
              <Link to="/about">
                <Button size="lg" className="bg-[#4fb7b3] hover:bg-[#4fb7b3]/90 text-white px-12 h-14 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  Experience Clarra
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-[#1f2d3a] mb-6 leading-tight">
              Technology that understands you
            </h2>
            <p className="text-xl text-foreground/70">
              Intelligent systems designed for your midlife journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Conversational Symptom Capture Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-[28.8rem]">
                  <div className="relative overflow-hidden flex-[2]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F11809448be4748f185c39cbba643e589?format=webp&width=800"
                      alt="Conversational Symptom Capture"
                      className="absolute inset-0 w-full h-full object-cover scale-[1.25] transition-transform duration-300 group-hover:scale-[1.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Chat Badge Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 z-20 h-20">
                      <div className="space-y-1.5 h-full flex flex-col justify-between overflow-hidden">
                        <div className="flex gap-2 items-end">
                          <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0"></div>
                          <p className="text-white text-xs bg-white/10 rounded-lg px-2 py-1 inline-block max-w-[145px] truncate">How's your sleep...</p>
                        </div>
                        <div className="flex gap-2 justify-end items-end">
                          <p className="text-white text-xs bg-primary/40 rounded-lg px-2 py-1 inline-block max-w-[130px] truncate">Better this week...</p>
                          <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0"></div>
                        </div>
                        <div className="flex gap-2 items-end">
                          <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0"></div>
                          <p className="text-white text-xs bg-white/10 rounded-lg px-2 py-1 inline-block">...</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-primary p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-primary-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Symptom Capture
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-white/30 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                      </button>
                    </div>
                    <p className="font-serif text-primary-foreground text-lg italic font-light leading-tight">Log your experience by talking</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F11809448be4748f185c39cbba643e589?format=webp&width=1000"
                    alt="Conversational Symptom Capture"
                    className="w-full h-96 object-cover blur-sm opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-primary-foreground mb-3">Log your experience by talking</h2>
                        <p className="text-lg text-primary-foreground/90">Clarra turns natural conversation into structured data</p>
                      </div>
                      <DialogClose className="text-primary-foreground hover:opacity-80 flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                      </DialogClose>
                    </div>
                    <p className="text-primary-foreground/90 text-base leading-relaxed">Talk naturally about how you're feeling. Clarra listens, understands context, and captures your symptoms as structured health data automatically.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Pattern Recognition Across Midlife Systems Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-[28.8rem]">
                  <div className="relative overflow-hidden flex-[2]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F06dec3eeaf2f47ce8637e6c8af7fb803?format=webp&width=800"
                      alt="Pattern Recognition"
                      className="absolute inset-0 w-full h-full object-cover scale-[1.0] transition-transform duration-300 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Correlation Graph Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 z-20 h-20">
                      <div className="h-full flex flex-col justify-between">
                        <svg className="w-full h-10" viewBox="0 0 200 50" preserveAspectRatio="none">
                          {/* Sleep line - smooth wave pattern */}
                          <polyline points="0,25 10,20 20,15 30,12 40,18 50,25 60,32 70,36 80,33 90,28 100,25 110,20 120,15 130,12 140,18 150,25 160,32 170,36 180,33 190,28 200,25" fill="none" stroke="#4fb7b3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Brain fog line - inverse wave pattern */}
                          <polyline points="0,25 10,30 20,35 30,38 40,32 50,25 60,18 70,14 80,17 90,22 100,25 110,30 120,35 130,38 140,32 150,25 160,18 170,14 180,17 190,22 200,25" fill="none" stroke="#fc9a53" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Intersection points */}
                          <circle cx="50" cy="25" r="5.5" fill="#56d257" />
                          <circle cx="150" cy="25" r="5.5" fill="#56d257" />
                        </svg>
                        <div className="flex justify-between items-center text-white px-1">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4fb7b3' }}></div>
                            <p className="text-[0.65rem] font-medium">Sleep</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#fc9a53' }}></div>
                            <p className="text-[0.65rem] font-medium">Brain Fog</p>
                          </div>
                        </div>
                        <p className="text-white text-[0.6rem] opacity-70 text-center">73% Correlation</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-secondary p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-secondary-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Pattern Recognition
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-secondary-foreground hover:bg-white/30 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                      </button>
                    </div>
                    <p className="font-serif text-secondary-foreground text-lg italic font-light leading-tight">See patterns across sleep, stress, mood, cognition</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F06dec3eeaf2f47ce8637e6c8af7fb803?format=webp&width=1000"
                    alt="Pattern Recognition"
                    className="w-full h-96 object-cover blur-sm opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-secondary-foreground mb-3">See patterns across sleep, stress, mood, cognition</h2>
                        <p className="text-lg text-secondary-foreground/90">Clarra connects your signals automatically</p>
                      </div>
                      <DialogClose className="text-secondary-foreground hover:opacity-80 flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                      </DialogClose>
                    </div>
                    <p className="text-secondary-foreground/90 text-base leading-relaxed">Our AI analyzes correlations across all your health dimensions. Discover how sleep impacts mood, how stress affects cognition, and uncover connections you never noticed before.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Personalized, Contextual Insights Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-[28.8rem]">
                  <div className="relative overflow-hidden flex-[2]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fe10470d39ce946388edb3e937d9cca34?format=webp&width=800"
                      alt="Personalized Insights"
                      className="absolute inset-0 w-full h-full object-cover object-center scale-[1.05] transition-transform duration-300 group-hover:scale-[1.09]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Insight Bubble Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 z-20 h-20">
                      <div className="space-y-2">
                        <div className="bg-accent/30 rounded-lg px-3 py-2">
                          <p className="text-white text-xs leading-relaxed">Your energy dips correlate with lower sleep quality. Consider a consistent bedtime.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-accent p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-accent-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        AI Insights
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-accent-foreground hover:bg-white/30 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                      </button>
                    </div>
                    <p className="font-serif text-accent-foreground text-lg italic font-light leading-tight">Insights that actually explain what's happening</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fe10470d39ce946388edb3e937d9cca34?format=webp&width=1000"
                    alt="Personalized Insights"
                    className="w-full h-96 object-cover blur-sm opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/80 to-accent/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-accent-foreground mb-3">Insights that actually explain what's happening</h2>
                        <p className="text-lg text-accent-foreground/90">Clear, clinically meaningful interpretation—no generic tips</p>
                      </div>
                      <DialogClose className="text-accent-foreground hover:opacity-80 flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                      </DialogClose>
                    </div>
                    <p className="text-accent-foreground/90 text-base leading-relaxed">Receive insights grounded in clinical evidence. Every recommendation explains the "why"—connecting your data to meaningful health outcomes based on peer-reviewed research and your personal patterns.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Daily Guidance & Next Steps Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-[28.8rem]">
                  <div className="relative overflow-hidden flex-[2]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fd1cf7468180245bba323e597d3ae9953?format=webp&width=800"
                      alt="Daily Guidance"
                      className="absolute inset-0 w-full h-full object-cover scale-[2.15] transition-transform duration-300 group-hover:scale-[2.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Recommendation Steps Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 z-20 h-20">
                      <div className="space-y-2">
                        <div className="flex gap-2 items-start">
                          <div className="w-5 h-5 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">✓</div>
                          <p className="text-white text-xs">Today: Try magnesium before bed</p>
                        </div>
                        <div className="flex gap-2 items-start">
                          <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">2</div>
                          <p className="text-white text-xs">Tomorrow: 20-min morning walk</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-destructive p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-destructive-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Daily Guidance
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-destructive-foreground hover:bg-white/30 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                      </button>
                    </div>
                    <p className="font-serif text-destructive-foreground text-lg italic font-light leading-tight">Know what to do next</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fd1cf7468180245bba323e597d3ae9953?format=webp&width=1000"
                    alt="Daily Guidance"
                    className="w-full h-96 object-cover blur-sm opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-destructive via-destructive/80 to-destructive/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-destructive-foreground mb-3">Know what to do next</h2>
                        <p className="text-lg text-destructive-foreground/90">Actionable steps based on your real-world patterns</p>
                      </div>
                      <DialogClose className="text-destructive-foreground hover:opacity-80 flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                      </DialogClose>
                    </div>
                    <p className="text-destructive-foreground/90 text-base leading-relaxed">Get prioritized, specific recommendations for today and beyond. Clarra translates insights into concrete steps you can take right now—tailored to your schedule, preferences, and health goals.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Three-Column Feature Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fc60a637f7c7842128abe93525dc2096c?format=webp&width=800"
                  alt="Sleep and mood"
                  className="w-full h-full object-cover scale-[1.25] transition-transform duration-700 group-hover:scale-[1.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Sleep Icon Badge */}
                <div className="absolute bottom-24 left-6 z-10 flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl px-5 py-3">
                  <svg className="w-7 h-7 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">Sleep Quality</span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70 cursor-pointer">
                      <Plus className="h-6 w-6 text-white" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fc60a637f7c7842128abe93525dc2096c?format=webp&width=1200"
                        alt="Sleep and mood expanded"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-display text-3xl font-bold leading-none mb-2">
                          Sleep & Mood Harmony
                        </p>
                        <p className="font-serif text-lg italic opacity-90 font-light mb-4">
                          Restore your natural rhythm
                        </p>
                        <p className="text-base leading-relaxed max-w-lg opacity-95">
                          Understand how your sleep patterns connect to your emotional well-being. Track restful nights and recognize the profound impact quality sleep has on mood stability throughout your cycle.
                        </p>
                      </div>
                      <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm p-2 text-white hover:bg-black/70 transition-colors">
                        <Plus className="h-6 w-6 rotate-45" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none space-y-2">
                  <p className="font-display text-2xl font-bold leading-tight hidden">
                    Sleep & Mood Harmony
                  </p>
                  <p className="font-serif text-lg italic opacity-90 font-light">
                    Restore your natural rhythm
                  </p>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#1f2d3a] mb-3 group-hover:text-primary transition-colors leading-tight">
                Sleep & Mood Harmony
              </h3>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F6bb2493097a4497da3c80210e2d3dbf6?format=webp&width=800"
                  alt="Cognitive and emotional clarity"
                  className="w-full h-full object-cover scale-[1.25] transition-transform duration-700 group-hover:scale-[1.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Cognitive Health Icon Badge */}
                <div className="absolute bottom-24 left-6 z-10 flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl px-5 py-3">
                  <svg className="w-7 h-7 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">Mental Clarity</span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70 cursor-pointer">
                      <Plus className="h-6 w-6 text-white" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F6bb2493097a4497da3c80210e2d3dbf6?format=webp&width=1200"
                        alt="Cognitive clarity expanded"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-display text-3xl font-bold leading-none mb-2">
                          Cognitive & Emotional Clarity
                        </p>
                        <p className="font-serif text-lg italic opacity-90 font-light mb-4">
                          Understand your emotional and mental patterns
                        </p>
                        <p className="text-base leading-relaxed max-w-lg opacity-95">
                          Navigate brain fog, mood shifts, and emotional fluctuations with data-driven insights. Recognize how your cycle influences focus, memory, and emotional resilience.
                        </p>
                      </div>
                      <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm p-2 text-white hover:bg-black/70 transition-colors">
                        <Plus className="h-6 w-6 rotate-45" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none space-y-2">
                  <p className="font-display text-2xl font-bold leading-tight hidden">
                    Cognitive & Emotional Clarity
                  </p>
                  <p className="font-serif text-lg italic opacity-90 font-light">
                    Understand your emotional and mental patterns
                  </p>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#1f2d3a] mb-3 group-hover:text-primary transition-colors leading-tight">
                Cognitive & Emotional Clarity
              </h3>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1ca7edaae6d047fe8f9d4b11440157ba?format=webp&width=800"
                  alt="Stress and energy"
                  className="w-full h-full object-cover scale-[1.25] transition-transform duration-700 group-hover:scale-[1.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Stress & Energy Icon Badge */}
                <div className="absolute bottom-24 left-6 z-10 flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl px-5 py-3">
                  <svg className="w-7 h-7 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">Daily Energy</span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70 cursor-pointer">
                      <Plus className="h-6 w-6 text-white" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1ca7edaae6d047fe8f9d4b11440157ba?format=webp&width=1200"
                        alt="Stress and energy expanded"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-display text-3xl font-bold leading-none mb-2">
                          Stress, Energy & Daily Performance
                        </p>
                        <p className="font-serif text-lg italic opacity-90 font-light mb-4">
                          Plan your days with confidence
                        </p>
                        <p className="text-base leading-relaxed max-w-lg opacity-95">
                          Optimize your energy levels and manage stress cycles. Know when to push and when to rest, so you can plan workouts, work projects, and social commitments aligned with your natural rhythms.
                        </p>
                      </div>
                      <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm p-2 text-white hover:bg-black/70 transition-colors">
                        <Plus className="h-6 w-6 rotate-45" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none space-y-2">
                  <p className="font-display text-2xl font-bold leading-tight hidden">
                    Stress, Energy & Daily Performance
                  </p>
                  <p className="font-serif text-lg italic opacity-90 font-light">
                    Plan your days with confidence
                  </p>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#1f2d3a] mb-3 group-hover:text-primary transition-colors leading-tight">
                Stress, Energy & Daily Performance
              </h3>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fdcae153309b3411183a24e7b381cd42c?format=webp&width=800"
                  alt="Hormone-adaptive guidance"
                  className="w-full h-full object-cover scale-[1.25] transition-transform duration-700 group-hover:scale-[1.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Understanding Change Icon Badge */}
                <div className="absolute bottom-24 left-6 z-10 flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl px-5 py-3">
                  <svg className="w-7 h-7 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">Understanding Change</span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70 cursor-pointer">
                      <Plus className="h-6 w-6 text-white" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fdcae153309b3411183a24e7b381cd42c?format=webp&width=1200"
                        alt="Hormone-adaptive guidance expanded"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-display text-3xl font-bold leading-none mb-2">
                          Hormone-Adaptive Guidance
                        </p>
                        <p className="font-serif text-lg italic opacity-90 font-light mb-4">
                          Make sense of shifting patterns through midlife change
                        </p>
                        <p className="text-base leading-relaxed max-w-lg opacity-95">
                          Understand the hormonal shifts driving your symptoms and changes. Clarra's adaptive guidance evolves with your body, recognizing patterns across your cycle and supporting you through every phase of midlife transformation.
                        </p>
                      </div>
                      <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm p-2 text-white hover:bg-black/70 transition-colors">
                        <Plus className="h-6 w-6 rotate-45" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none space-y-2">
                  <p className="font-display text-2xl font-bold leading-tight hidden">
                    Hormone-Adaptive Guidance
                  </p>
                  <p className="font-serif text-lg italic opacity-90 font-light">
                    Make sense of shifting patterns through midlife change
                  </p>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#1f2d3a] mb-3 group-hover:text-primary transition-colors leading-tight">
                Hormone-Adaptive Guidance
              </h3>
            </div>
          </div>
        </div>
      </section>



      {/* Health Tracking Reimagined Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                Health Tracking Reimagined
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-[#1f2d3a] mb-6 leading-tight">
                Hormones shift,
                <span className="block text-primary font-serif text-5xl sm:text-6xl italic font-light mt-2">your health story does too...</span>
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed">
                Hormones shift. Sleep changes. Energy fluctuates. Clarra translates those changes into clarity, not confusion — giving you a view of your health that finally makes sense.
              </p>
            </div>
            <div className="order-2 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[500px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F4e263f2dafc64dcc9d70e0898943b02d?format=webp&width=800"
                  alt="Woman in professional setting"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4 pointer-events-none">
                  <div className="bg-[#2c3e50]/90 backdrop-blur-sm rounded-xl p-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2">Sleep Score</p>
                    <p className="text-4xl font-bold">86</p>
                    <p className="text-xs mt-1">Optimal</p>
                    <p className="text-xs mt-2 opacity-70">Bring it on</p>
                  </div>
                  <div className="bg-[#2c3e50]/90 backdrop-blur-sm rounded-xl p-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2">Your body temperature for the past 7 days</p>
                    <svg className="w-full h-16" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <polyline points="0,30 20,20 40,25 60,15 80,18 100,22" fill="none" stroke="#4fb7b3" strokeWidth="2" />
                    </svg>
                    <p className="text-xs mt-1 opacity-70">+1.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 47 Million image (home only) */}
      <section className="py-0">
        <AutoPlayVideo
          src="https://cdn.builder.io/o/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F5584d878f6ce4248b784f76ddbbd5e8a?alt=media&token=0b0f73c6-e767-40a0-b24a-0365f13d1856&apiKey=553c8106b9f84f1a91a6549e0008f0fd"
          className="block w-full h-auto"
          ariaLabel="It's not in your head — home banner video"
          preload="auto"
        />
      </section>

      {/* Not In Your Head (home only) */}
      <NotInYourHead />

      {/* Mission Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            {/* Desktop / tablet version unchanged */}
            <h2 className="hidden sm:inline-block font-display relative text-6xl font-extrabold tracking-[0.01em] text-[#1f2d3a]">
              Clarra’s mission is to harness{" "}
              <span className="text-[#4fb7b3]">the power of AI</span> to{" "}
              <EmUnderline stroke="#2c3e50">
                <span className="whitespace-nowrap text-[#56d257]">
                  transform women’s health
                </span>
              </EmUnderline>
              —{" "}
              <EmUnderline stroke="#4fb7b3" showOnMobile>
                47 million women
              </EmUnderline>{" "}
              worldwide enter menopause each year without the <span>care</span>{" "}
              they need.
            </h2>
            {/* Mobile exact layout */}
            <h2 className="sm:hidden font-display text-[#1f2d3a] uppercase font-extrabold tracking-[0.01em] text-5xl leading-[1.02]">
              <span>Clarra’s mission is to harness </span>
              <span className="text-[#4fb7b3]">the power of AI</span>
              <span> to</span>
              <br />
              <EmUnderline stroke="#2c3e50" showOnMobile mobileOffsetEm={0.17}>
                <span className="text-[#56d257]">TRANSFORM WOMEN’S HEALTH</span>
              </EmUnderline>
              —{" "}
              <EmUnderline
                stroke="#4fb7b3"
                offsetScale={0.85}
                showOnMobile
                mobileOffsetEm={0.194}
              >
                47 MILLION WOMEN
              </EmUnderline>{" "}
              WORLDWIDE ENTER MENOPAUSE EACH YEAR WITHOUT <span>THE CARE</span>{" "}
              THEY NEED.
            </h2>
            <div className="mt-6 space-y-5 text-base sm:text-lg text-foreground/85 max-w-3xl mx-auto">
              <p>
                By combining biomarkers, wearable data, and lived symptoms,
                Clarra builds a whole view of health that goes beyond fragmented
                tracking. Our AI turns this data into actionable
                insights—detecting risks earlier, anticipating challenges, and
                guiding next steps.
              </p>
              <p>
                Designed to be accurate, accessible, and scalable, Clarra puts
                technology to work for women and providers, enabling faster
                action, better outcomes, and a new standard of care for midlife
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1f2d3a] mb-4">
              Trusted by women everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the community of women finding clarity and confidence with Clarra.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="Finally, a solution that actually listens. Clarra helped me understand my symptoms in a way no doctor ever has."
              author="Sarah M."
              role="Early Access Member"
            />
            <Testimonial
              quote="The insights from my wearable data combined with the hormone tracking gave me a complete picture of my health."
              author="Dr. Emily R."
              role="Clinical Partner"
            />
            <Testimonial
              quote="I feel more in control of my body than I have in years. The AI guidance is surprisingly empathetic and spot-on."
              author="Jessica K."
              role="Beta User"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#1f2d3a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
            Ready to take control of your midlife health?
          </h2>
          <p className="text-xl sm:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Get personalized insights, proactive care, and a partner that stays with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#4fb7b3] hover:bg-[#4fb7b3]/90 text-white px-10 py-7 text-xl rounded-full shadow-xl hover:scale-105 transition-transform">
                Get Started Today
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1f2d3a] px-10 py-7 text-xl rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
      <div className="text-xs font-medium text-muted-foreground">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground">
      {children}
    </span>
  );
}

function Dot() {
  return (
    <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
  );
}

function Avatar({ color = "bg-primary" }: { color?: string }) {
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${color}`}
    >
      AI
    </span>
  );
}

function IconStar() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-yellow-400 fill-current"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-border/50">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <IconStar key={i} />
        ))}
      </div>
      <p className="text-lg text-foreground/80 mb-6 leading-relaxed">"{quote}"</p>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
  iconBg = "bg-primary",
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  iconBg?: string;
}) {
  return (
    <div className="group rounded-2xl border border-primary/20 bg-gradient-to-br from-white to-primary/5 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:from-white hover:to-primary/10">
      {icon && (
        <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white ${iconBg} shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-[#1f2d3a] mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
        {n}
      </span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </li>
  );
}

function IconFlask() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <rect x="11" y="2" width="2" height="6" rx="1" />
      <path d="M7 10l3.5-2h3L17 10l3 7a2 2 0 0 1-1.8 3H5.8A2 2 0 0 1 4 17l3-7z" />
      <path d="M9 15h6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconWatch() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <rect x="9" y="2" width="6" height="3" rx="1" />
      <rect x="7" y="6" width="10" height="12" rx="3" />
      <rect x="9" y="19" width="6" height="3" rx="1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <path d="M3 20h18v2H3z" />
      <rect x="5" y="11" width="3" height="7" rx="1" />
      <rect x="10.5" y="8" width="3" height="10" rx="1" />
      <rect x="16" y="5" width="3" height="13" rx="1" />
    </svg>
  );
}
function IconWand() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2c-3.9 0-7 3-7 6.7 0 2 1 3.7 2.7 4.9-.2 1.1-.7 2.4-1.6 3.6-.4.5.2 1.2.8 1 1.9-.6 3.5-1.5 4.6-2.4.9.2 1.8.3 2.8.3 3.9 0 7-3 7-6.7S15.9 2 12 2z" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <path d="M2 6a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-4 3V6z" />
      <path d="M9 10h10a3 3 0 0 1 3 3v4l-3 2v-2h-7a3 3 0 0 1-3-3v-4z" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="8" y="10" width="8" height="7" rx="2" />
      <path d="M11 12h2v3h-2z" />
    </svg>
  );
}

function EmUnderline({
  children,
  offsetScale = 0.8,
  stroke = "hsl(25 97% 66%)",
  showOnMobile = false,
  mobileOffsetEm = 0.22,
}: {
  children: React.ReactNode;
  offsetScale?: number;
  stroke?: string;
  showOnMobile?: boolean;
  mobileOffsetEm?: number;
}) {
  return (
    <span
      className={`relative inline-block align-baseline ${showOnMobile ? "px-0 sm:px-0.5 underline sm:no-underline" : "px-0.5"}`}
      style={
        showOnMobile
          ? ({
              textDecorationColor: stroke,
              textDecorationThickness: "3px",
              textUnderlineOffset: `${mobileOffsetEm}em`,
            } as React.CSSProperties)
          : undefined
      }
    >
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        className={`hidden sm:block pointer-events-none absolute left-[-1%] right-[-1%] h-[0.55em] w-[102%]`}
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        style={{ bottom: `calc(-0.18em * ${offsetScale})` }}
      >
        <path
          d="M2 14 L 98 14"
          fill="none"
          stroke={stroke}
          strokeWidth="3.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function EmCircle({
  children,
  scale = 1,
  y = 0.08,
  x = 0,
  sx = 1,
  sy = 1,
}: {
  children: React.ReactNode;
  scale?: number;
  y?: number;
  x?: number; // horizontal shift in percent of width
  sx?: number; // extra horizontal scale
  sy?: number; // extra vertical scale
}) {
  return (
    <span className="relative inline-block px-1 align-baseline">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        className="hidden sm:block pointer-events-none absolute inset-[-0.35em] h-[calc(100%+0.7em)] w-[calc(100%+0.7em)] overflow-visible"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        style={{
          transform: `translate(${x}%, ${y}em) scale(${scale * sx}, ${scale * sy})`,
          transformOrigin: "center",
        }}
      >
        <ellipse
          cx="50"
          cy="30"
          rx="47"
          ry="26"
          fill="none"
          stroke="hsl(25 97% 66%)"
          strokeWidth="3.15"
        />
      </svg>
    </span>
  );
}
