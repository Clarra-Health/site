export default function About() {
  const manifesto = `THE PROBLEM ISN’T MENOPAUSE. THE PROBLEM IS A SYSTEM THAT TREATS IT AS INVISIBLE. CLARRA CHANGES THE STORY — MAKING CARE SMARTER, FAIRER, AND BUILT AROUND YOU.

WE’RE PUTTING MENOPAUSE AT THE CENTER OF WOMEN’S HEALTH — WHERE IT ALWAYS BELONGED.`;
  return (
    <>
      <section className="pt-20 pb-0 mb-0">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">About</span>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F652d7e2f96da4d14b4ac56187a3eb8a2?format=webp&width=1600"
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
