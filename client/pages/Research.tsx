export default function Research() {
  const manifesto = `THE PROBLEM ISN’T MENOPAUSE. THE PROBLEM IS A SYSTEM THAT TREATS IT AS INVISIBLE. CLARRA CHANGES THE STORY — MAKING CARE SMARTER, FAIRER, AND BUILT AROUND YOU.

WE’RE PUTTING MENOPAUSE AT THE CENTER OF WOMEN’S HEALTH — WHERE IT ALWAYS BELONGED.`;
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">Research</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Evidence, equity, and impact</h1>
          <p className="mt-5 whitespace-pre-line text-balance text-lg text-muted-foreground">
            {manifesto}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6"><p className="text-sm text-muted-foreground">Clinical collaborations</p><p className="mt-1 text-lg font-semibold">Institutional partners</p></div>
          <div className="rounded-xl border border-border bg-card p-6"><p className="text-sm text-muted-foreground">Data privacy</p><p className="mt-1 text-lg font-semibold">Privacy‑first, secure</p></div>
          <div className="rounded-xl border border-border bg-card p-6"><p className="text-sm text-muted-foreground">Outcomes</p><p className="mt-1 text-lg font-semibold">Real‑world evidence</p></div>
        </div>
      </div>
    </section>
  );
}
