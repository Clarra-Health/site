import AutoPlayVideo from "../components/media/AutoPlayVideo";

export default function WhoWeHelpCliniciansResearchers() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-[0.01em] text-[#1f2d3a]">
              For Clinicians / Researchers
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A living dataset and tools that surface the right patterns at the
              right time — for better care and stronger evidence.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Longitudinal symptom data</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Real‑world signals tied to outcomes, collected continuously.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Decision support</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contextual insights to inform treatment options and follow‑up.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Research collaboration</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Privacy‑preserving cohorts and IRB‑ready workflows.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">Standards & security</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Interoperability by design with rigorous data governance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-0">
        <AutoPlayVideo
          src="https://cdn.builder.io/o/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fabde6872f9fa4d5e91067f1bdaf091e6?alt=media&token=2e74a67f-20ab-45b5-a223-fb2c7db9a55a&apiKey=553c8106b9f84f1a91a6549e0008f0fd"
          className="block w-full h-auto"
          ariaLabel="Clinicians and Researchers overview video"
          preload="auto"
        />
      </section>
    </>
  );
}
