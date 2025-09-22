export default function WhoWeHelpYou() {
  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="grid items-center gap-8">
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
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[16/9] sm:aspect-[4/3]">
              <video
                src="https://cdn.builder.io/o/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fd97658e818dc447bb70585994229e5e9?alt=media&token=269a6a41-5c9f-45ee-bfdc-0f35b23823ca&apiKey=553c8106b9f84f1a91a6549e0008f0fd"
                className="h-full w-full object-cover"
                controls
                playsInline
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
