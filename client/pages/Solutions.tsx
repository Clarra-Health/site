import { Link } from "react-router-dom";

const heroImg =
  "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fa2a0a8b647f74cc78187125b6302a29b?format=webp&width=1600";

export default function Solutions() {
  return (
    <>
      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-display relative inline-block text-6xl sm:text-7xl font-extrabold uppercase tracking-tight text-[#1f2d3a]">Transforming Data into Care</h1>
            <p className="mt-4 mx-auto max-w-3xl text-xl sm:text-[1.4rem] leading-relaxed font-medium text-muted-foreground">
              Clarra is an <EmUnderline>AI-native</EmUnderline> health platform built for women in midlife. Instead of endless logs and health apps that track but don’t help, you simply chat with Clarra — <EmCircle><strong className="font-semibold">your midlife health partner.</strong></EmCircle> Behind the scenes, Clarra connects your symptoms, hormones, and wearable data to reveal patterns and deliver what matters most: <EmUnderline><strong className="font-semibold">personalized pathways</strong></EmUnderline>, <EmUnderline><strong className="font-semibold">predictive insights</strong></EmUnderline>, and <EmUnderline><strong className="font-semibold">clear next steps</strong></EmUnderline>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F399faf7c5e414605af86de871dbb12af?format=webp&width=2000"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F399faf7c5e414605af86de871dbb12af?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F399faf7c5e414605af86de871dbb12af?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F399faf7c5e414605af86de871dbb12af?format=webp&width=2400 2400w"
          sizes="100vw"
          alt="Transforming data into care"
          className="block w-full h-auto"
          loading="eager"
          decoding="async"
        />
      </section>

      {/* Clarra's Commitment */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-5xl sm:text-6xl uppercase tracking-tight text-[#1f2d3a]">Clarra's Commitment</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">Bold principles that guide every product decision.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-[#4fb7b3] to-[#7cc9a2] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">AI‑Native Insights</h3>
              <p className="mt-2 text-sm opacity-95">predictive, personalized, evidence‑based.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[hsl(25_97%_66%)] to-[#ffb07a] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Empathy &amp; Inclusion</h3>
              <p className="mt-2 text-sm opacity-95">designed for diverse experiences.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#1f2d3a] to-[#2c3e50] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Scientific Rigor</h3>
              <p className="mt-2 text-sm opacity-95">built with researchers and clinicians.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#7cc9a2] to-[#4fb7b3] p-6 text-[#1f2d3a] shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Clarity &amp; Action</h3>
              <p className="mt-2 text-sm opacity-90">from tracking to clear next steps.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#2c3e50] to-[#1f2d3a] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Data Transparency</h3>
              <p className="mt-2 text-sm opacity-95">privacy‑first, user‑owned.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#ffb07a] to-[hsl(25_97%_66%)] p-6 text-white shadow-md ring-2 ring-white/30">
              <h3 className="text-xl font-extrabold">Community</h3>
              <p className="mt-2 text-sm opacity-95">support that makes menopause visible.</p>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="The Clarra Solution"
        features={[
          "AI‑powered 24/7 chat for real‑time, empathetic support",
          "Predictive algorithm to forecast symptom patterns",
          "Hormone flow tracking with intuitive visualizations",
          "Comprehensive symptom tracking across hot flashes, mood, sleep, libido, joints and more",
          "Personalized insights that move care from reactive to proactive",
          "Community spaces for connection and support",
          "Evidence‑based wellness guidance",
          "Expert access and care pathways",
        ]}
      />

      {/* Plans */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-5xl sm:text-6xl uppercase tracking-tight text-[#1f2d3a]">Choose your plan</h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground">Free to start. Super‑powered with Premium.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Free Plan */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">Free Plan</h3>
                <span className="text-sm text-muted-foreground">$0</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Smart symptom tracking with conversational daily check-ins</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Personalized insights into triggers and trends over time</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Basic AI guidance for managing common symptoms</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Secure data storage with full user control</li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="relative rounded-2xl border border-transparent bg-gradient-to-br from-[hsl(25_97%_66%)] to-[#4fb7b3] p-6 text-white shadow-md ring-4 ring-white/30">
              <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Most popular</span>
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-extrabold">Premium Plan</h3>
                <span className="text-lg font-semibold">$9.99/month</span>
              </div>
              <p className="mt-2 text-sm opacity-90">Everything in the Free Plan, plus:</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-white" />AI-powered care plans tailored to your goals and health patterns</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-white" />Deeper predictive insights using hormones + wearable integrations</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-white" />Coaching &amp; chat with expert-reviewed support</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-white" />Clinical-grade reporting you can share with your provider</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-white" />Priority features and early access to new tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

function EmUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-0.5">
      <span className="relative z-10">{children}</span>
      <svg aria-hidden className="pointer-events-none absolute left-[-1%] right-[-1%] bottom-[-0.18em] h-[0.55em] w-[102%]" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M2 14 L 98 14" fill="none" stroke="hsl(25 97% 66%)" strokeWidth="3.15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function EmCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>
      <svg aria-hidden className="pointer-events-none absolute inset-[-0.35em] h-[calc(100%+0.7em)] w-[calc(100%+0.7em)]" viewBox="0 0 100 60" preserveAspectRatio="none">
        <ellipse cx="50" cy="30" rx="47" ry="26" fill="none" stroke="hsl(25 97% 66%)" strokeWidth="3.15" />
      </svg>
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-4 text-muted-foreground">{children}</p>
      </div>
    </section>
  );
}

function StatsGrid({ title, items }: { title: string; items: { k: string; v: string; s?: string }[] }) {
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.k} className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm text-muted-foreground">{it.k}</div>
              <div className="mt-1 text-2xl font-semibold">{it.v}</div>
              {it.s && <div className="mt-1 text-sm text-muted-foreground">{it.s}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid({ title, features }: { title: string; features: string[] }) {
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-foreground">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatsList({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 inline-block h-2 w-2 rounded-full bg-foreground" />
              <span className="text-sm text-muted-foreground">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    { year: "Year 1", text: "Launch chatbot, tracking, predictive insights, community. Premium tier live." },
    { year: "Years 2–3", text: "Hormone flow tracking, telehealth, wellness modules, research pilots." },
    { year: "Years 3��5", text: "Fertility expansion, wearables, EU/Asia rollout." },
    { year: "Year 5+", text: "Post‑menopausal wellness, insurer and employer integrations, global scale." },
  ];
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="text-xl font-semibold">Product Roadmap</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.year} className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm text-muted-foreground">{it.year}</div>
              <div className="mt-1 text-sm">{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
