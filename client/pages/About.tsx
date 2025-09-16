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
              <span aria-hidden className="absolute left-0 right-0 -bottom-[0.1em] h-[0.08em] bg-[#1f2d3a]"></span>
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
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F7c845c6292c349ad98a4409c64fd78a3?format=webp&width=1600"
          alt="We're putting menopause at the centre of women's health — where it always belonged."
          className="block h-auto w-full"
        />
        <div className="container py-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="pointer-events-none cursor-default inline-flex items-center rounded-full bg-[hsl(25_97%_66%)] px-4 py-2 text-sm font-semibold text-white">Our Vision</span>
            <span className="pointer-events-none cursor-default inline-flex items-center rounded-full bg-[#1f2d3a] px-4 py-2 text-sm font-semibold text-white">Our Mission</span>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="mx-auto max-w-4xl text-left text-sm text-muted-foreground">
            <p>Clarra is an AI‑native digital health company focused on perimenopause and menopause. We partner with clinicians, researchers, and employers to deliver equitable, science‑informed care.</p>
          </div>
        </div>
      </section>
    </>
  );
}
