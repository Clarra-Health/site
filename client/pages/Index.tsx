import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import ProductCarouselSection from "@/components/ProductCarouselSection";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-white to-[#F0FAF9] pt-[120px] pb-20 md:pt-[150px] md:pb-24 min-h-[620px] overflow-visible">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-visible">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F018a3eff115049a584b3bf45c4b857a3?format=webp&width=3000"
            className="w-full h-full object-cover brightness-96 saturate-[1.15] contrast-[1.12] shadow-[0px_0px_40px_rgba(0,0,0,0.06)]"
            style={{ objectPosition: "center 40px" }}
            alt="Hero background"
          />
          {/* Light Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/45 to-white/5" />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-15 pointer-events-none" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-[54px] sm:text-[67px] md:text-[81px] font-extrabold text-foreground-dark leading-snug mb-6 drop-shadow-sm">
                <span className="font-serif italic font-light block mb-2">
                  Make sense of
                </span>
                perimenopause
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 font-medium leading-relaxed mb-8 max-w-[520px] drop-shadow-sm">
                Clarra interprets your symptoms, hormones, sleep, mood, and cycles — giving you a clear picture of what’s changing and what to do next.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold rounded-lg"
                  >
                    Join the waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#f7fbfa] to-white overflow-hidden">
        <div className="container max-w-[1280px] px-6 md:px-8 mx-auto">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
            <div className="text-left relative z-10">
              <h2 className="font-serif text-4xl md:text-[50px] italic font-normal text-foreground-dark leading-[1.2] tracking-tight mb-5 max-w-[660px]">
                See the patterns behind your symptoms.
              </h2>
              <p className="text-lg md:text-[20px] text-[#425466] font-normal leading-[1.5] mb-10 max-w-[600px]">
                Clarra weaves together your symptoms, hormones, sleep, and mood into one coherent picture — so you can finally see the patterns behind what you're experiencing.
              </p>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Ffd5ad7ebdaed4699adc9a9bc4bae7a68?format=webp&width=2000"
                alt="Clarra insights"
                className="w-full max-w-[460px] object-contain -translate-x-[50%] scale-[1.4] mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sleep & Wellness Features Section */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[#f0f9ff] to-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Ffa53940440d748e09e2d266b51cfc958?format=webp&width=800"
                  alt="Sleep and mood"
                  className="w-full h-full object-cover scale-[1.25] transition-transform duration-700 group-hover:scale-[1.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Sleep Icon Badge */}
                <div className="absolute bottom-24 left-6 z-10 flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl px-5 py-3">
                  <svg
                    className="w-7 h-7 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">
                    Sleep Quality
                  </span>
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
                        src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Ffa53940440d748e09e2d266b51cfc958?format=webp&width=1200"
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
                          Understand how your sleep patterns connect to your
                          emotional well-being. Track restful nights and
                          recognize the profound impact quality sleep has on
                          mood stability throughout your cycle.
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
              <h3 className="font-display text-3xl font-bold text-foreground-dark mb-4 group-hover:text-primary transition-colors leading-tight">
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
                  <svg
                    className="w-7 h-7 text-white flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">
                    Mental Clarity
                  </span>
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
                          Navigate brain fog, mood shifts, and emotional
                          fluctuations with data-driven insights. Recognize how
                          your cycle influences focus, memory, and emotional
                          resilience.
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
              <h3 className="font-display text-3xl font-bold text-foreground-dark mb-4 group-hover:text-primary transition-colors leading-tight">
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
                  <svg
                    className="w-7 h-7 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">
                    Daily Energy
                  </span>
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
                          Optimize your energy levels and manage stress cycles.
                          Know when to push and when to rest, so you can plan
                          workouts, work projects, and social commitments
                          aligned with your natural rhythms.
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
              <h3 className="font-display text-3xl font-bold text-foreground-dark mb-4 group-hover:text-primary transition-colors leading-tight">
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
                  <svg
                    className="w-7 h-7 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <span className="text-white text-base font-semibold whitespace-nowrap">
                    Understanding Change
                  </span>
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
                          Understand the hormonal shifts driving your symptoms
                          and changes. Clarra's adaptive guidance evolves with
                          your body, recognizing patterns across your cycle and
                          supporting you through every phase of midlife
                          transformation.
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
              <h3 className="font-display text-3xl font-bold text-foreground-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                Hormone-Adaptive Guidance
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Carousel */}
      <ProductCarouselSection />

      {/* Midlife Health Quote Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#f0f9ff] via-[#f5fafe] to-[#ecfdf5]">
        <div className="container">
          <div className="max-w-4xl mr-auto text-left">
            <p className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground-dark leading-snug mb-6 drop-shadow-sm">
              Longevity isn't just more years — it's more good years.{" "}
              <span className="font-serif italic font-medium text-primary">
                Clarra helps you create them.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex justify-center lg:justify-start items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fc9f5883300134c1790f17441286b029a?format=webp&width=2000"
                alt="Clarra app mockup"
                className="w-full h-auto scale-[2.5]"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Insights That Matter
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-foreground-dark leading-tight mb-4">
                Clinical precision,
                <span className="block font-serif italic font-light text-foreground-dark mt-2">
                  designed for simplicity
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-xl">
                Experience conversational health insights at your fingertips.
                Clarra's interface makes complex health data feel simple and
                actionable, designed specifically for how women think about
                their health and bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Column Feature Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="text-base font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              How Clarra Works
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-foreground-dark leading-tight max-w-3xl mx-auto">
              Four pillars of
              <span className="block text-primary">personalized care.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Card 1 */}
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
                          <p className="text-white text-xs bg-white/10 rounded-lg px-2 py-1 inline-block max-w-[145px] truncate">
                            How's your sleep...
                          </p>
                        </div>
                        <div className="flex gap-2 justify-end items-end">
                          <p className="text-white text-xs bg-primary/40 rounded-lg px-2 py-1 inline-block max-w-[130px] truncate">
                            Better this week...
                          </p>
                          <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0"></div>
                        </div>
                        <div className="flex gap-2 items-end">
                          <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0"></div>
                          <p className="text-white text-xs bg-white/10 rounded-lg px-2 py-1 inline-block">
                            ...
                          </p>
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
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </button>
                    </div>
                    <p className="font-serif text-primary-foreground text-lg italic font-light leading-tight">
                      Log your experience by talking
                    </p>
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
                        <h2 className="text-5xl font-bold text-primary-foreground mb-4">
                          Log your experience by talking
                        </h2>
                        <p className="text-lg text-primary-foreground/90">
                          Clarra turns natural conversation into structured data
                        </p>
                      </div>
                      <DialogClose className="text-primary-foreground hover:opacity-80 flex-shrink-0">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                        </svg>
                      </DialogClose>
                    </div>
                    <p className="text-primary-foreground/90 text-base leading-relaxed">
                      Talk naturally about how you're feeling. Clarra listens,
                      understands context, and captures your symptoms as
                      structured health data automatically.
                    </p>
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
                        <svg
                          className="w-full h-10"
                          viewBox="0 0 200 50"
                          preserveAspectRatio="none"
                        >
                          {/* Sleep line - smooth wave pattern */}
                          <polyline
                            points="0,25 10,20 20,15 30,12 40,18 50,25 60,32 70,36 80,33 90,28 100,25 110,20 120,15 130,12 140,18 150,25 160,32 170,36 180,33 190,28 200,25"
                            fill="none"
                            stroke="#4fb7b3"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Brain fog line - inverse wave pattern */}
                          <polyline
                            points="0,25 10,30 20,35 30,38 40,32 50,25 60,18 70,14 80,17 90,22 100,25 110,30 120,35 130,38 140,32 150,25 160,18 170,14 180,17 190,22 200,25"
                            fill="none"
                            stroke="#fc9a53"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Intersection points */}
                          <circle cx="50" cy="25" r="5.5" fill="#56d257" />
                          <circle cx="150" cy="25" r="5.5" fill="#56d257" />
                        </svg>
                        <div className="flex justify-between items-center text-white px-1">
                          <div className="flex items-center gap-1">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "#4fb7b3" }}
                            ></div>
                            <p className="text-[0.65rem] font-medium">Sleep</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "#fc9a53" }}
                            ></div>
                            <p className="text-[0.65rem] font-medium">
                              Brain Fog
                            </p>
                          </div>
                        </div>
                        <p className="text-white text-[0.6rem] opacity-70 text-center">
                          73% Correlation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-secondary p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-secondary-foreground text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Pattern Recognition
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-secondary-foreground hover:bg-white/30 transition">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </button>
                    </div>
                    <p className="font-serif text-secondary-foreground text-lg italic font-light leading-tight">
                      See patterns across sleep, stress, mood, cognition
                    </p>
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
                        <h2 className="text-5xl font-bold text-secondary-foreground mb-4">
                          See patterns across sleep, stress, mood, cognition
                        </h2>
                        <p className="text-lg text-secondary-foreground/90">
                          Clarra connects your signals automatically
                        </p>
                      </div>
                      <DialogClose className="text-secondary-foreground hover:opacity-80 flex-shrink-0">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                        </svg>
                      </DialogClose>
                    </div>
                    <p className="text-secondary-foreground/90 text-base leading-relaxed">
                      Our AI analyzes correlations across all your health
                      dimensions. Discover how sleep impacts mood, how stress
                      affects cognition, and uncover connections you never
                      noticed before.
                    </p>
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
                          <p className="text-white text-xs leading-relaxed">
                            Your energy dips correlate with lower sleep quality.
                            Consider a consistent bedtime.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-[#fc9a53] p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-white text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        AI Insights
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </button>
                    </div>
                    <p className="font-serif text-white text-lg italic font-light leading-tight">
                      Insights that actually explain what's happening
                    </p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fc9a53] via-[#fc9a53]/90 to-[#fca469]" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-accent-foreground mb-4">
                          Insights that actually explain what's happening
                        </h2>
                        <p className="text-lg text-accent-foreground/90">
                          Clear, clinically meaningful interpretation—no generic
                          tips
                        </p>
                      </div>
                      <DialogClose className="text-accent-foreground hover:opacity-80 flex-shrink-0">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                        </svg>
                      </DialogClose>
                    </div>
                    <p className="text-accent-foreground/90 text-base leading-relaxed">
                      Receive insights grounded in clinical evidence. Every
                      recommendation explains the "why"—connecting your data to
                      meaningful health outcomes based on peer-reviewed research
                      and your personal patterns.
                    </p>
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
                          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                            ✓
                          </div>
                          <p className="text-white text-xs">
                            Today: Try magnesium before bed
                          </p>
                        </div>
                        <div className="flex gap-2 items-start">
                          <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                            2
                          </div>
                          <p className="text-white text-xs">
                            Tomorrow: 20-min morning walk
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-emerald-100 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-emerald-900 text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Daily Guidance
                      </span>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-emerald-900 hover:bg-white/30 transition">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </button>
                    </div>
                    <p className="font-serif text-emerald-900 text-lg italic font-light leading-tight">
                      Know what to do next
                    </p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-400" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-5xl font-bold text-white mb-4">
                          Know what to do next
                        </h2>
                        <p className="text-lg text-white/90">
                          Actionable steps based on your real-world patterns
                        </p>
                      </div>
                      <DialogClose className="text-white hover:opacity-80 flex-shrink-0">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                        </svg>
                      </DialogClose>
                    </div>
                    <p className="text-white/90 text-base leading-relaxed">
                      Get prioritized, specific recommendations for today and
                      beyond. Clarra translates insights into concrete steps you
                      can take right now—tailored to your schedule, preferences,
                      and health goals.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-16 md:py-24 bg-foreground-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/50 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-lg font-semibold text-primary uppercase tracking-widest mb-6">
                A Founder's Note
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-8">
                Women's health
                <span className="block text-[#fc9a53] font-serif italic font-light">
                  deserves better.
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Midlife can feel like a black box. Women are told their symptoms
                are "just stress" or "part of aging," when the reality is far
                more nuanced. Our bodies are changing in profound ways, and we
                deserve clarity, not dismissal.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Clarra was built to change that. By combining biomarker testing,
                wearable data, and conversational AI, we're creating a partner
                that actually understands the complexity of midlife health. Not
                a symptom checker. Not a generic wellness app. A real partner in
                your health journey.
              </p>
              <p className="text-base text-white/60 italic">
                — Meghan White, Founder & CEO
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-2xl blur-2xl"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F400c9b0b1cbe465881954d3479803557?format=webp&width=800"
                  alt="Meghan White, Founder & CEO"
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
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
      <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
        "{quote}"
      </p>
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
        <div
          className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white ${iconBg} shadow-lg mb-4 group-hover:scale-110 transition-transform`}
        >
          {icon}
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-foreground-dark mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-foreground/70 leading-relaxed">
        {description}
      </p>
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
