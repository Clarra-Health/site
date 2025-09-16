export default function About() {
  const manifesto = `THE PROBLEM ISN’T MENOPAUSE. THE PROBLEM IS A SYSTEM THAT TREATS IT AS INVISIBLE. CLARRA CHANGES THE STORY — MAKING CARE SMARTER, FAIRER, AND BUILT AROUND YOU.

WE’RE PUTTING MENOPAUSE AT THE CENTER OF WOMEN’S HEALTH — WHERE IT ALWAYS BELONGED.`;
  return (
    <>
      <section className="pt-4 pb-0 mb-0">
        <div className="container mb-4">
          <h2 className="font-display text-center leading-tight text-[#1f2d3a] text-3xl sm:text-5xl md:text-6xl font-extrabold">
            The problem isn’t
            <span className="relative inline-block align-baseline ml-2">
              <span className="relative z-10">menopause</span>
              <span aria-hidden className="absolute left-0 right-0 -bottom-[0.05em] h-[0.06em] bg-[hsl(25_97%_66%)]"></span>
            </span>
            . The problem is a system that treats it as
            <span className="relative inline-block px-1 align-baseline">
              <svg aria-hidden className="pointer-events-none absolute -inset-[0.15em] -z-10" viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M5,25 C20,5 80,5 95,25 C80,45 20,45 5,25 Z" fill="none" stroke="hsl(25 97% 66%)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="relative z-10">invisible</span>
            </span>
            .
          </h2>
          <p className="font-display mt-3 text-center leading-tight text-[#1f2d3a] text-2xl sm:text-3xl">
            Clarra
            <span className="relative inline-block align-baseline ml-2">
              <span className="relative z-10">changes the story</span>
              <span aria-hidden className="absolute left-0 right-0 -bottom-[0.1em] h-[0.08em] bg-[#1f2d3a]"></span>
            </span>
            — built around
            <span className="relative inline-block px-1 align-baseline">
              <svg aria-hidden className="pointer-events-none absolute -inset-[0.15em] -z-10" viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M5,25 C20,5 80,5 95,25 C80,45 20,45 5,25 Z" fill="none" stroke="hsl(25 97% 66%)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="relative z-10">you</span>
            </span>
            .
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fd80dabc7beee4b75877c75f1debb5bbc"
          alt="Built for Midlife"
          className="block h-auto w-full"
        />
      </section>

      {/* Manifesto image full-bleed under hero */}
      <section className="py-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F2b4fcb1387af4f70a01d92ca9963e303?format=webp&width=1600"
          alt="We're putting menopause at the centre of women's health — where it always belonged."
          className="block h-auto w-full"
        />
      </section>

      {/* Clarra's Commitment bubbles */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-5xl sm:text-6xl uppercase tracking-tight text-[#1f2d3a]">Clarra's Commitment</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">Bold principles that guide every product decision.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-[#4fb7b3] to-[#7cc9a2] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">AI‑Native Insights</h3>
              <p className="mt-2 text-sm opacity-95">predictive, personalized, evidence‑based.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[hsl(25_97%_66%)] to-[#ffb07a] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Empathy &amp; Inclusion</h3>
              <p className="mt-2 text-sm opacity-95">designed for diverse experiences.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#1f2d3a] to-[#2c3e50] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Scientific Rigor</h3>
              <p className="mt-2 text-sm opacity-95">built with researchers and clinicians.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#7cc9a2] to-[#4fb7b3] p-6 text-[#1f2d3a] shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Clarity &amp; Action</h3>
              <p className="mt-2 text-sm opacity-90">from tracking to clear next steps.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#2c3e50] to-[#1f2d3a] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Data Transparency</h3>
              <p className="mt-2 text-sm opacity-95">privacy‑first, user‑owned.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#ffb07a] to-[hsl(25_97%_66%)] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Community</h3>
              <p className="mt-2 text-sm opacity-95">support that makes menopause visible.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
