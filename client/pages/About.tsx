export default function About() {
  const manifesto = `THE PROBLEM ISN’T MENOPAUSE. THE PROBLEM IS A SYSTEM THAT TREATS IT AS INVISIBLE. CLARRA CHANGES THE STORY — MAKING CARE SMARTER, FAIRER, AND BUILT AROUND YOU.

WE’RE PUTTING MENOPAUSE AT THE CENTER OF WOMEN’S HEALTH — WHERE IT ALWAYS BELONGED.`;
  return (
    <>
      <section className="pt-4 pb-0 mb-0">
        <div className="container mb-4">
          <h2 className="font-display text-center leading-tight text-[#1f2d3a] text-3xl sm:text-5xl md:text-6xl font-extrabold">
            The problem isn’t <span className="border-b-4 border-[#1f2d3a] pb-1">menopause</span>. The problem is a system that treats it as
            <span className="relative inline-block px-2 align-baseline">
              <span aria-hidden className="pointer-events-none absolute inset-[-6px] rounded-full border-4 border-[hsl(25_97%_66%)]"></span>
              <span className="relative">invisible</span>
            </span>
            .
          </h2>
          <p className="font-display mt-3 text-center leading-tight text-[#1f2d3a] text-2xl sm:text-3xl">
            Clarra <span className="border-b-4 border-[#1f2d3a] pb-1">changes the story</span> — built around
            <span className="relative inline-block px-2 align-baseline">
              <span aria-hidden className="pointer-events-none absolute inset-[-6px] rounded-full border-4 border-[hsl(25_97%_66%)]"></span>
              <span className="relative">you</span>
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
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F4f198657d8744680a420e73f8ccfa43e?format=webp&width=1600"
          alt="The problem isn’t menopause... Clarra changes the story"
          className="block h-auto w-full"
        />
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
