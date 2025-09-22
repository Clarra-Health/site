export default function WhoWeHelpPayers() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold uppercase tracking-[0.01em] text-[#1f2d3a]">
              For Payers
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Prevention‑first pathways that improve outcomes, reduce costs, and
              support women throughout midlife.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Targeted benefits</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Programs tuned to sleep, metabolic health, bone health, and
                  more.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Measurable impact</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Clear metrics on engagement, risk reduction, and satisfaction.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Seamless integration</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Deploy with existing care navigation and partner networks.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Privacy & compliance</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Secure by design with transparent data practices.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Full-bleed image above footer */}
      <section className="py-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F694edcbb034d461c98488fbb15190326?format=webp&width=2000"
          alt="Clarra community member"
          className="block w-screen max-w-none h-auto"
          loading="lazy"
          decoding="async"
        />
      </section>
    </>
  );
}
