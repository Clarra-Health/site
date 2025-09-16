import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden pt-16 md:pt-20">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F46ad3497ede8448b920eb8a1bee9353e?format=webp&width=2000"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F46ad3497ede8448b920eb8a1bee9353e?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F46ad3497ede8448b920eb8a1bee9353e?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F46ad3497ede8448b920eb8a1bee9353e?format=webp&width=2400 2400w"
          sizes="100vw"
          alt="Clarra hero"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </section>

      {/* Hero CTAs below image */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist"
              className="inline-flex items-center justify-center rounded-md bg-[#b9e3e2] px-12 py-6 text-2xl font-semibold text-[hsl(210_29%_24%)] shadow-sm transition hover:bg-[#b9e3e2]/90"
            >
              Join the waitlist
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-md bg-[#b9e3e2] px-12 py-6 text-2xl font-semibold text-[hsl(210_29%_24%)] shadow-sm transition hover:bg-[#b9e3e2]/90"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* App Showcase (full-bleed) */}
      <section className="py-0">
        <Link to="/solutions" className="block focus:outline-none focus:ring-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F65d7ea1502b74f718219d09502a2bd0c?format=webp&width=1600"
            alt="Chat with Clarra - Available on iOS and Android. Features: Hormone Health Insights, Tailored Health Plans, Data-Driven Care, Smart Symptom Tracking, Syncs with Wearables, Community Support"
            className="block w-full h-auto"
          />
        </Link>
      </section>

      {/* Additional showcase image */}
      <section className="py-8">
        <div className="container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F30793d7b4b82439592a209e796adbc36?format=webp&width=1600"
            alt="Transforming data into care"
            className="w-full h-auto rounded-3xl border border-border shadow-sm"
          />
        </div>
      </section>

      {/* Features */}
      <section className="relative pt-10 pb-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for every stage</h2>
            <p className="mt-3 text-muted-foreground">From first symptoms to long-term care, Clarra adapts to your needs with continuous, personalized support.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Feature icon={<IconSpark />} title="Symptom tracking" description="Effortless daily check-ins help you connect triggers and trends." />
            <Feature icon={<IconWand />} title="AI care plans" description="Evidence-based recommendations tailored to your goals." />
            <Feature icon={<IconChat />} title="Coaching & chat" description="Compassionate, always-on support with human oversight." />
            <Feature icon={<IconShield />} title="Clinical-grade" description="Privacy-first, secure, and aligned with best practices." />
          </div>
        </div>
      </section>



    </>
  );
}

function Card({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
      <div className="text-xs font-medium text-muted-foreground">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground">
      {children}
    </span>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />;
}

function Avatar({ color = "bg-primary" }: { color?: string }) {
  return (
    <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${color}`}>
      AI
    </span>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-foreground">
          {icon}
        </span>
        <p className="font-medium">{title}</p>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
        {n}
      </span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </li>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
    </svg>
  );
}
function IconWand() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m3 21 9-9" />
      <path d="M12.2 6.1 11 4l1.2-2.1L14.3 3l-2.1 1.1Z" />
      <path d="m18.4 10.9-1.1-2.1 1.1-2.1 2.1 1.1-2.1 1Z" />
      <path d="m5.6 10.9-2.1-1.1L4.6 7.7l1.1 2.1-1.1 1.1Z" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}
