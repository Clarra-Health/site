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
