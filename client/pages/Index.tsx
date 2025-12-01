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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl pt-9">
            <h2 className="font-display text-6xl sm:text-7xl font-bold text-[#1f2d3a] mb-3 text-center leading-tight">
              Meet Clarra
            </h2>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto text-center mb-0">
              Your AI health companion that listens, learns, and guides you toward your best midlife.
            </p>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center lg:justify-start relative h-full items-center">
                <div className="relative inline-block translate-y-[25%]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F223e62b63b4545cfbb4a6baad23f675e?format=webp&width=800"
                    alt="Clarra app showcasing sleep tracking and AI assistant"
                    className="w-full max-w-4xl scale-[2.5] origin-center -translate-x-[5%]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    ✓
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 text-white shadow-lg">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#1f2d3a] mb-1">Clinical Insights</h3>
                      <p className="text-sm text-foreground/70">Lab-grade hormone tracking delivered daily, deciphered in plain language.</p>
                    </div>
                  </div>
                </div>

                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    ✓
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shrink-0 text-white shadow-lg">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14l4-4V4c0-1.1-.9-2-2-2zm-2 12h-4v4h-2v-4H8v-2h4V8h2v4h4v2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#1f2d3a] mb-1">AI Conversations</h3>
                      <p className="text-sm text-foreground/70">Ask anything. Get personalized answers 24/7 from an AI that truly understands midlife.</p>
                    </div>
                  </div>
                </div>

                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    ✓
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 text-white shadow-lg">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#1f2d3a] mb-1">Wearable Integration</h3>
                      <p className="text-sm text-foreground/70">Connect your smartwatch for continuous insights. Clarra synthesizes all your data into one clear view.</p>
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

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-[#1f2d3a] mb-6 leading-tight">
              Unlock more good days with Clarra
            </h2>
            <p className="text-xl text-foreground/70">
              Spot changes by building data evidence over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Heart Health Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-[28.8rem]">
                  <div className="relative overflow-hidden flex-[2]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fd8f861e3b08e4df7aa27b88c2a9d8561?format=webp&width=800"
                      alt="Heart Health"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 scale-[2.28]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* ECG Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 z-20">
                      <svg className="w-full h-10" viewBox="0 0 200 40" preserveAspectRatio="none">
                        <polyline points="0,20 20,20 30,5 40,35 50,20 70,20 80,10 90,30 100,20 130,20 150,20" fill="none" stroke="#4fb7b3" strokeWidth="2" />
                      </svg>
                      <p className="text-white text-xs font-medium mt-1">Heart Rate: 72 bpm</p>
                    </div>
                  </div>

                  <div className="relative z-10 bg-primary p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-primary-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Heart Health
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-white/30 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                      </button>
                    </div>
                    <p className="font-serif text-primary-foreground text-lg italic font-light leading-tight">Stay connected to your heart health</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fd8f861e3b08e4df7aa27b88c2a9d8561?format=webp&width=1000"
                    alt="Heart Health"
                    className="w-full h-96 object-cover blur-sm opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-primary-foreground mb-3">Heart Health</h2>
                        <p className="text-lg text-primary-foreground/90">Monitor and optimize your cardiovascular wellness</p>
                      </div>
                      <DialogClose className="text-primary-foreground hover:opacity-80 flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                      </DialogClose>
                    </div>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-primary-foreground/75 text-base mb-2">Current HR</p>
                          <p className="text-4xl font-bold text-primary-foreground">72 bpm</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-primary-foreground/75 text-base mb-2">Trend</p>
                          <p className="text-4xl font-bold text-primary-foreground">↓ 5%</p>
                        </div>
                      </div>
                      <p className="text-primary-foreground/90 text-base leading-relaxed">Track heart rate patterns, detect irregularities, and receive personalized recommendations to maintain optimal cardiovascular health throughout your day.</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Cycle Insights Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-[28.8rem]">
                  <div className="relative overflow-hidden flex-[2]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F190a557ffbdb44f8a3e663d5d571eb36?format=webp&width=800"
                      alt="Cycle Insights"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Cycle Tracker Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 z-20">
                      <div className="flex gap-1 flex-wrap justify-center">
                        {[1,2,3,4,5,6,7].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{
                            backgroundColor: i <= 2 ? '#4fb7b3' : i <= 4 ? '#7cc9a2' : '#fc9a53'
                          }}>
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-secondary p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-secondary-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Cycle Insights
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-secondary-foreground hover:bg-white/30 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                      </button>
                    </div>
                    <p className="font-serif text-secondary-foreground text-lg italic font-light leading-tight">Understand your unique cycle</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F190a557ffbdb44f8a3e663d5d571eb36?format=webp&width=1000"
                    alt="Cycle Insights"
                    className="w-full h-96 object-cover blur-sm opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-secondary-foreground mb-3">Cycle Insights</h2>
                        <p className="text-lg text-secondary-foreground/90">Understand your unique menstrual and hormonal patterns</p>
                      </div>
                      <DialogClose className="text-secondary-foreground hover:opacity-80 flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                      </DialogClose>
                    </div>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-secondary-foreground/75 text-base mb-2">Cycle Phase</p>
                          <p className="text-4xl font-bold text-secondary-foreground">Luteal</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-secondary-foreground/75 text-base mb-2">Days Left</p>
                          <p className="text-4xl font-bold text-secondary-foreground">5 days</p>
                        </div>
                      </div>
                      <p className="text-secondary-foreground/90 text-base leading-relaxed">Track cycle phases, hormonal fluctuations, and mood patterns. Receive personalized insights on energy, nutrition, and wellness recommendations tailored to your cycle.</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Stress Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-[28.8rem]">
                  <div className="relative overflow-hidden flex-[2]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F4cc404f3fb3249c4a7bd17e00ebc5f27?format=webp&width=800"
                      alt="Stress Management"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Stress Metrics Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 z-20">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <p className="text-white text-xl font-bold">68%</p>
                          <p className="text-white text-xs">Energy</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white text-xl font-bold">85%</p>
                          <p className="text-white text-xs">Focus</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white text-xl font-bold">42%</p>
                          <p className="text-white text-xs">Stress</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-accent p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-accent-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Stress
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-accent-foreground hover:bg-white/30 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                      </button>
                    </div>
                    <p className="font-serif text-accent-foreground text-lg italic font-light leading-tight">Quantify how your body is feeling</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F4cc404f3fb3249c4a7bd17e00ebc5f27?format=webp&width=1000"
                    alt="Stress Management"
                    className="w-full h-96 object-cover blur-sm opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/80 to-accent/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-accent-foreground mb-3">Stress Management</h2>
                        <p className="text-lg text-accent-foreground/90">Monitor stress levels and optimize your wellbeing</p>
                      </div>
                      <DialogClose className="text-accent-foreground hover:opacity-80 flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                      </DialogClose>
                    </div>
                    <div className="space-y-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-accent-foreground/75 text-base mb-2">Energy</p>
                          <p className="text-4xl font-bold text-accent-foreground">68%</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-accent-foreground/75 text-base mb-2">Focus</p>
                          <p className="text-4xl font-bold text-accent-foreground">85%</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-accent-foreground/75 text-base mb-2">Stress</p>
                          <p className="text-4xl font-bold text-accent-foreground">42%</p>
                        </div>
                      </div>
                      <p className="text-accent-foreground/90 text-base leading-relaxed">Track your energy, focus, and stress levels throughout the day. Get actionable insights and personalized recommendations to reduce stress and improve your overall wellbeing.</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Personal Insights Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-[28.8rem]">
                  <div className="relative overflow-hidden flex-[2]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F079c308ae6b842d3930759bba6ba2867?format=webp&width=800"
                      alt="Personalized Insights"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Data Visualization Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 z-20">
                      <div className="flex gap-2 justify-between items-end">
                        {[{label: 'Energy', value: 85}, {label: 'Sleep', value: 72}, {label: 'Stress', value: 42}, {label: 'Mood', value: 68}, {label: 'Activity', value: 91}].map((item, i) => (
                          <div key={i} className="flex flex-col items-center flex-1 gap-1">
                            <div className="w-2 rounded-t transition-all" style={{ height: `${item.value/2}px`, backgroundColor: ['#4fb7b3', '#7cc9a2', '#fc9a53', '#b9e3e2', '#4fb7b3'][i] }}></div>
                            <p className="text-white text-xs font-semibold">{item.value}%</p>
                            <p className="text-white text-[0.65rem] opacity-75">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-destructive p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-destructive-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Personal Insights
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-destructive-foreground hover:bg-white/30 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                      </button>
                    </div>
                    <p className="font-serif text-destructive-foreground text-lg italic font-light leading-tight">Get personalized insights tailored for you</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F079c308ae6b842d3930759bba6ba2867?format=webp&width=1000"
                    alt="Personalized Insights"
                    className="w-full h-96 object-cover blur-sm opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-destructive via-destructive/80 to-destructive/60" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-destructive-foreground mb-3">Personal Insights</h2>
                        <p className="text-lg text-destructive-foreground/90">AI-powered recommendations tailored to your health</p>
                      </div>
                      <DialogClose className="text-destructive-foreground hover:opacity-80 flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                      </DialogClose>
                    </div>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-destructive-foreground/75 text-base mb-2">Insights This Week</p>
                          <p className="text-4xl font-bold text-destructive-foreground">7</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                          <p className="text-destructive-foreground/75 text-base mb-2">Actions Taken</p>
                          <p className="text-4xl font-bold text-destructive-foreground">5</p>
                        </div>
                      </div>
                      <p className="text-destructive-foreground/90 text-base leading-relaxed">Receive AI-powered recommendations based on your unique health data. Get personalized advice on nutrition, exercise, sleep, and wellness strategies designed specifically for your needs.</p>
                    </div>
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
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Ff20cc42fde714790a312a776c03efbaf?format=webp&width=800"
                  alt="Sleep and mood"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Sleep Icon Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-3 bg-black/60 backdrop-blur rounded-xl px-5 py-3">
                  <svg className="w-7 h-7 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">7.2h Last night</span>
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
                        src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Ff20cc42fde714790a312a776c03efbaf?format=webp&width=1200"
                        alt="Sleep and mood expanded"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-display text-3xl font-bold leading-none mb-2">
                          Sleep & Mood
                        </p>
                        <p className="font-serif text-lg italic opacity-90 font-light mb-4">
                          Restoring your natural rhythm
                        </p>
                        <p className="text-base leading-relaxed max-w-lg opacity-95">
                          Discover how hormonal changes impact your rest and wake cycles. Our advanced tracking helps identify patterns you might miss, giving you the clarity needed to reclaim restful nights.
                        </p>
                      </div>
                      <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm p-2 text-white hover:bg-black/70 transition-colors">
                        <Plus className="h-6 w-6 rotate-45" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <p className="font-display text-3xl font-bold leading-none mb-2">
                    Sleep & Mood
                  </p>
                  <p className="font-serif text-lg italic opacity-90 font-light">
                    Restoring your natural rhythm
                  </p>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#1f2d3a] mb-3 group-hover:text-primary transition-colors leading-tight">
                Understanding Your Sleep Patterns
              </h3>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F7e067e93c3de475ba747062aadfe0c6f?format=webp&width=800"
                  alt="Healthy lifestyle"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Nutrition Icon Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-3 bg-black/60 backdrop-blur rounded-xl px-5 py-3">
                  <div className="flex gap-2">
                    <svg className="w-7 h-7 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                    <svg className="w-7 h-7 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2h-2v6h2V2zm0 12h-2v6h2v-6zM6.22 5.63L4.81 4.22C3.71 5.32 3 6.93 3 8.72h6V7c0-1.35-.45-2.6-1.22-3.63zm10.56 0C17.45 5.4 18 6.65 18 8v1.72h6c0-1.79-.71-3.4-1.81-4.53l-1.41 1.41zM3 18.72h6V17H3c0 1.79.71 3.4 1.81 4.53l1.41-1.41L6.22 18.63zM17.78 18.63l-1.41 1.41C18.71 22.12 19.5 23.5 21 24h2V17h-6v1.72c1.35 0 2.6.45 3.78 1.22zM13 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-6-2h2V10H7v2zm12 0h2v-2h-2v2z" />
                    </svg>
                  </div>
                  <span className="text-white text-base font-semibold whitespace-nowrap">Calories & Energy</span>
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
                        src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F7e067e93c3de475ba747062aadfe0c6f?format=webp&width=1200"
                        alt="Nutrition expanded"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-display text-3xl font-bold leading-none mb-2">
                          Nutrition
                        </p>
                        <p className="font-serif text-lg italic opacity-90 font-light mb-4">
                          Fueling your body's new needs
                        </p>
                        <p className="text-base leading-relaxed max-w-lg opacity-95">
                          Fuel your body with what it actually needs during midlife. We provide tailored nutritional advice that adapts to your metabolic shifts, supporting energy levels and overall well-being.
                        </p>
                      </div>
                      <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm p-2 text-white hover:bg-black/70 transition-colors">
                        <Plus className="h-6 w-6 rotate-45" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <p className="font-display text-3xl font-bold leading-none mb-2">
                    Nutrition
                  </p>
                  <p className="font-serif text-lg italic opacity-90 font-light">
                    Fueling your body's new needs
                  </p>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#1f2d3a] mb-3 group-hover:text-primary transition-colors leading-tight">
                Personalized Nutrition Guidance
              </h3>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F4fa85bca2bdf42f6a8835703155227c0?format=webp&width=800"
                  alt="Woman smiling"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Emotional Health Icon Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-3 bg-black/60 backdrop-blur rounded-xl px-5 py-3">
                  <div className="flex gap-2">
                    <svg className="w-7 h-7 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zm-5.04-6.71l-2.75 3.54-2.96-3.83c-.38-.49-1.12-.49-1.5 0l-2.41 3.1V6h12v7.07l-2.38-3.07c-.38-.49-1.12-.49-1.5 0z" />
                    </svg>
                    <svg className="w-7 h-7 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <span className="text-white text-base font-semibold whitespace-nowrap">Understanding</span>
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
                        src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F4fa85bca2bdf42f6a8835703155227c0?format=webp&width=1200"
                        alt="Emotional Health expanded"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-display text-3xl font-bold leading-none mb-2">
                          Emotional Health
                        </p>
                        <p className="font-serif text-lg italic opacity-90 font-light mb-4">
                          Finding balance in the shift
                        </p>
                        <p className="text-base leading-relaxed max-w-lg opacity-95">
                          Navigate mood fluctuations with confidence. Our tools and community support help you maintain emotional equilibrium, ensuring you feel heard, understood, and empowered every day.
                        </p>
                      </div>
                      <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm p-2 text-white hover:bg-black/70 transition-colors">
                        <Plus className="h-6 w-6 rotate-45" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <p className="font-display text-3xl font-bold leading-none mb-2">
                    Emotional Health
                  </p>
                  <p className="font-serif text-lg italic opacity-90 font-light">
                    Finding balance in the shift
                  </p>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#1f2d3a] mb-3 group-hover:text-primary transition-colors leading-tight">
                Emotional Balance & Support
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
