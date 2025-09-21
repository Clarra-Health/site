import { Link } from "react-router-dom";

export default function WhoWeHelp() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-display relative inline-block text-6xl sm:text-7xl font-extrabold uppercase tracking-[0.01em] text-[#1f2d3a]">Who We Help</h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
              Clarra supports people navigating midlife health, the clinicians and researchers who care for them, and the organizations investing in better outcomes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AudienceCard title="For Woman" to="/who-we-help/you" description="Personalized guidance, insights, and support through perimenopause, menopause, and beyond." />
            <AudienceCard title="For Clinicians/ Researchers" to="/who-we-help/clinicians-researchers" description="Tools and data to enhance care, advance research, and close evidence gaps for women’s health." />
            <AudienceCard title="For Payers" to="/who-we-help/payers" description="Smarter benefits and outcomes with prevention-first pathways and real-time insights." />
          </div>
        </div>
      </section>

      <section className="py-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F801b98658f5f4d9bade0bed8608f0e85?format=webp&width=2400"
          alt="Close-up of a smiling woman with bright background"
          className="block w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
        />
      </section>
    </>
  );
}

function AudienceCard({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <Link to={to} className="group block rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition hover:shadow-md focus:outline-none">
      <div className="flex items-start gap-4">
        <span className="mt-1 inline-block h-6 w-6 rounded-full bg-[#56d257] ring-2 ring-white/70 shadow" />
        <div>
          <p className="font-semibold text-xl">{title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          <span className="mt-3 inline-flex text-sm font-medium text-primary group-hover:underline">Learn more →</span>
        </div>
      </div>
    </Link>
  );
}
