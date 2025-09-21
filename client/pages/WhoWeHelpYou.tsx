export default function WhoWeHelpYou() {
  return (
    <section
      className="py-16"
      style={{
        backgroundImage:
          'url("https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fba2ae8fed1bd44878ce368c1204fc5e2?format=webp&width=800")',
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top center",
        backgroundSize: "800px auto",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#1f2d3a]">For Woman</h1>
          <p className="mt-4 text-lg text-muted-foreground">Guidance that adapts to your journey — from first signs of perimenopause to long‑term wellness.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            <li className="rounded-xl border border-border bg-card p-5"><p className="font-semibold">Personalized plans</p><p className="mt-2 text-sm text-muted-foreground">AI care plans that evolve with your symptoms, goals, and preferences.</p></li>
            <li className="rounded-xl border border-border bg-card p-5"><p className="font-semibold">Predictive insights</p><p className="mt-2 text-sm text-muted-foreground">See patterns before they spike — sleep, mood, hot flashes, and more.</p></li>
            <li className="rounded-xl border border-border bg-card p-5"><p className="font-semibold">Coaching & community</p><p className="mt-2 text-sm text-muted-foreground">On‑demand guidance and a safe space to connect with others.</p></li>
            <li className="rounded-xl border border-border bg-card p-5"><p className="font-semibold">Privacy first</p><p className="mt-2 text-sm text-muted-foreground">You control your data. Transparent, secure, and never sold.</p></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
