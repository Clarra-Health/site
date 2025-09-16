export default function DataPrivacy() {
  return (
    <>
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-transparent" />
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F5863347009694d46ab6ddbdebaeaf4c2?format=webp&width=200" alt="Clarra" className="mx-auto h-14 w-auto" />
            <h1 className="font-display mt-3 text-5xl sm:text-6xl font-extrabold tracking-tight text-[#1f2d3a]">
              How We Protect Your Data
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#1f2d3a]">
              Your trust is non‑negotiable. Here’s how we keep your information safe and in your control.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6">
            <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1f2d3a]">Your Data, Your Control</h2>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                At Clarra, we believe your health journey belongs to you. Every symptom, every signal, every insight you share is your data — and you remain in control of it. We will never sell your personal information, and we will always give you transparency about how it’s used.
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-[#4fb7b3] p-6 sm:p-8 text-white shadow-sm">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Privacy and Protection</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/90">
                We treat privacy not as an afterthought but as a foundation. Our platform is built with privacy, security, and human rights at the center — because protecting women’s health means protecting women’s data. Your trust is non-negotiable.
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1f2d3a]">Our Ethos</h2>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                Clarra exists to change the way the world approaches midlife health. That means holding ourselves to a higher standard: human rights and women’s rights are core to our mission. Every design choice, every partnership, every line of code is guided by that commitment.
              </p>
            </article>

          </div>

          <section className="mt-12 overflow-hidden rounded-3xl border border-border bg-accent p-8 text-accent-foreground shadow-sm">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold">Data for Good</h2>
            <p className="mt-4 max-w-4xl text-lg sm:text-xl font-semibold">
              Individually, your data is yours. Together, anonymized and aggregated, our data is power — a resource that can transform menopause research, close the gender health gap, and improve outcomes for millions of women worldwide. By joining Clarra, you are part of a collective movement to make midlife health visible, valued, and finally understood.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
