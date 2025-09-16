import { Link } from "react-router-dom";

const heroImg =
  "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F42ea6fe0eb1348a6a2594646dea8abb0?format=webp&width=1600";

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Clarra Solutions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              An AI-native platform redefining midlife health with proactive, personalized, data-driven care.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/how-it-works" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                How it works
              </Link>
              <Link to="/waitlist" className="inline-flex items-center rounded-md bg-[hsl(25_97%_66%)] px-5 py-3 text-sm font-semibold text-white">
                Join the waitlist
              </Link>
            </div>
          </div>
          <Link to="/solutions" className="block">
            <img src={heroImg} alt="Chat with Clarra on mobile with key benefits" className="h-auto w-full rounded-xl shadow-lg" />
          </Link>
        </div>
      </section>

      {/* Vision & Mission */}
      <Section title="Vision">
        Transforming menopause from a silent struggle into a supported, data‑informed journey—providing women with the tools they need to feel seen, heard, and in control.
      </Section>
      <Section title="Mission">
        To set a new global standard in women’s midlife health—one that’s proactive, personalized, and powered by data.
      </Section>

      {/* Introduction */}
      <Section title="Introduction: A Once‑in‑a‑Generation Opportunity">
        Menopause affects nearly every system in the body and yet remains misunderstood and underfunded. Over 1B women are in perimenopause or menopause today. The menopause market is valued at $17.8B and projected to reach $25.5B by 2030, while less than 5% of women’s health innovation funding has gone to this life stage. Clarra exists to close this gap.
      </Section>

      {/* Economics */}
      <StatsGrid
        title="Digital Health Economics"
        items={[
          { k: "TAM", v: "$120B/yr", s: "1B women × $120/yr subscription" },
          { k: "SAM", v: "$72B/yr", s: "60% use health apps; 40% pay for premium" },
          { k: "SOM", v: "$720M+ ARR", s: "1% capture; 5–10% = multi‑billion" },
        ]}
      />

      {/* Problem */}
      <Section title="The Problem">
        Women face 100+ symptoms across cognition, sleep, mood, and energy—often for 6–11 years—with long‑term risk increases across brain, bone, cardiovascular, and autoimmune health. The result: delayed recognition, fragmented advice, lost workplace participation, and diminished wellbeing.
      </Section>

      {/* Solution */}
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

      {/* Market */}
      <StatsList
        title="Market Opportunity"
        bullets={[
          "$17.8B menopause market today; $25.5B by 2030 (5.5% CAGR)",
          "$15.6B women’s health app market by 2033 (16.46% CAGR)",
          "44M U.S. women aged 35–55 are in perimenopause",
          "60%+ use health apps; 40%+ pay for premium",
          "<5% of women’s health funding targets menopause",
        ]}
      />

      {/* Monetization */}
      <Section title="Monetization Strategy">
        Freemium‑to‑Premium (advanced AI and hormone tracking via subscription), Enterprise partnerships (corporate wellness, insurers, anonymized data licensing), and Add‑ons (telehealth, wellness modules, supplements).
      </Section>
      <StatsList
        title="Revenue Potential"
        bullets={[
          "$9.99–$12.99/mo aligns with premium health app benchmarks",
          "North America: 1% = $15–$19.5M ARR; 5% = $75–$97.5M; 10% = $150–$195M",
          "Global: 1% = $300–$390M ARR; 5% = $1.5–$1.95B; 10% = $3–$3.9B",
        ]}
      />

      {/* Why Now */}
      <StatsList
        title="Why Now"
        bullets={[
          "Generational scale: 1.3M U.S. women enter menopause yearly; >1B globally",
          "Digital readiness: 60%+ use health apps; 40% pay for premium",
          "Recognition: employers and governments adding menopause support",
          "Investment: femtech funding >$2B in 2023; menopause remains a white space",
        ]}
      />

      {/* Enterprise */}
      <Section title="Enterprise and Partnerships">
        Clarra operates as a secure, anonymized data and engagement platform—advancing research, improving workplace support, and enabling healthcare partnerships via data licensing, wellness programs, and co‑branded initiatives.
      </Section>

      {/* Roadmap */}
      <Timeline />

      {/* Impact */}
      <StatsList
        title="Impact Goals"
        bullets={[
          "Advance research with leading institutions (e.g., Mayo Clinic)",
          "Center women’s lived experiences in policy and care",
          "Improve outcomes via earlier insights and better pathways",
          "Catalyze workplace and policy change",
          "Redefine digital health equity via access partnerships",
        ]}
      />

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary to-emerald-500 p-10 text-primary-foreground">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Ready to bring Clarra to your organization?</h2>
                <p className="mt-1 opacity-90">Let’s talk partnerships, pilots, and benefits integration.</p>
              </div>
              <div className="flex justify-start md:justify-end gap-3">
                <Link to="/contact" className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-primary">Contact us</Link>
                <Link to="/waitlist" className="inline-flex items-center rounded-md bg-black/20 px-6 py-3 text-sm font-medium text-primary-foreground">Join the waitlist</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
    { year: "Years 3–5", text: "Fertility expansion, wearables, EU/Asia rollout." },
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
