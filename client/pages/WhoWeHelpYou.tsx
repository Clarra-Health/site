export default function WhoWeHelpYou() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-2xl">
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold uppercase tracking-[0.01em] text-[#1f2d3a]">
              For Woman
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Guidance that adapts to your journey — from first signs of
              perimenopause to long‑term wellness.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Personalized plans</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  AI care plans that evolve with your symptoms, goals, and
                  preferences.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Predictive insights</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  See patterns before they spike — sleep, mood, hot flashes, and
                  more.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Coaching & community</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  On‑demand guidance and a safe space to connect with others.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Privacy first</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  You control your data. Transparent, secure, and never sold.
                </p>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[16/9] sm:aspect-[4/3]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F7f486909aa044d588d0bcbd1e8c5df7a?format=webp&width=800"
                alt="Smiling person in a home setting"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
