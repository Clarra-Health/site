export default function About() {
  const manifesto = `THE PROBLEM ISN’T MENOPAUSE. THE PROBLEM IS A SYSTEM THAT TREATS IT AS INVISIBLE. CLARRA CHANGES THE STORY — MAKING CARE SMARTER, FAIRER, AND BUILT AROUND YOU.

WE’RE PUTTING MENOPAUSE AT THE CENTER OF WOMEN’S HEALTH — WHERE IT ALWAYS BELONGED.`;
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">About</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Built by and for midlife</h1>
            <p className="mt-5 whitespace-pre-line text-balance text-lg text-muted-foreground">
              {manifesto}
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto image block directly under hero */}
      <section className="py-6">
        <div className="container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F4f198657d8744680a420e73f8ccfa43e?format=webp&width=1600"
            alt="The problem isn’t menopause... Clarra changes the story"
            className="block h-auto w-full"
          />
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
