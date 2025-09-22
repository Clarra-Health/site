export default function WhoWeHelpYou() {
  return (
    <>
      <section className="py-16 sm:py-24 relative -translate-y-[12%]">
        <div className="container">
          <div className="grid items-center gap-8">
            <div className="w-full max-w-4xl text-center md:text-right md:justify-self-end">
              <h1 className="font-display text-[4.3125rem] sm:text-[5.175rem] font-extrabold uppercase tracking-[0.01em] text-[#1f2d3a]">
                For Woman
              </h1>
              <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-3xl md:ml-auto">
                Guidance that adapts to your journey — from first signs of
                perimenopause to long‑term wellness.
              </p>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                <li className="rounded-xl border border-border bg-card p-6 sm:p-8 text-center min-h-36">
                  <p className="font-semibold text-lg sm:text-xl">
                    Personalized plans
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">
                    AI care plans that evolve with your symptoms, goals, and
                    preferences.
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-card p-6 sm:p-8 text-center min-h-36">
                  <p className="font-semibold text-lg sm:text-xl">
                    Predictive insights
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">
                    See patterns before they spike — sleep, mood, hot flashes,
                    and more.
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-card p-6 sm:p-8 text-center min-h-36">
                  <p className="font-semibold text-lg sm:text-xl">
                    Coaching & community
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">
                    On‑demand guidance and a safe space to connect with others.
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-card p-6 sm:p-8 text-center min-h-36">
                  <p className="font-semibold text-lg sm:text-xl">
                    Privacy first
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">
                    You control your data. Transparent, secure, and never sold.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 relative -translate-y-[12%]">
        <div className="relative w-full">
          <video
            src="https://cdn.builder.io/o/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fcfa9c104cf244bcab4dd81c1bd445b14?alt=media&token=4c0b1729-7f01-4e1d-ac2d-473232f5403e&apiKey=553c8106b9f84f1a91a6549e0008f0fd"
            className="block w-full h-[16.8rem] sm:h-[21.6rem] md:h-96 lg:h-[28.8rem] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
    </>
  );
}
