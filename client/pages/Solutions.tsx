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


      <FeatureGrid
        title="How Clarra Works for You"
        subtitle="More than tracking, more than tips — Clarra delivers personalized care pathways, real insights, and community that actually understands."
        features={[
          {
            title: "Always‑on, human‑like support",
            description:
              "A 24/7 AI companion that listens, responds, and supports you with empathy — anytime you need it.",
          },
          {
            title: "Your hormone story, made visible",
            description:
              "Beautiful, intuitive tracking that turns confusing data into clear patterns you can actually use.",
          },
          {
            title: "Insights that stay one step ahead",
            description:
              "Smart predictions that anticipate what’s coming — so you can prepare, not just react.",
          },
          {
            title: "The full picture of your health",
            description:
              "Track hot flashes, sleep, mood, energy, libido, joints and more — because menopause is more than one symptom.",
          },
          {
            title: "Guidance you can actually trust",
            description:
              "Wellness advice grounded in science, not fads — so you know what works and why.",
          },
          {
            title: "Care that evolves with you",
            description:
              "From personalized nudges to proactive strategies, Clarra adapts as your body and needs change.",
          },
          {
            title: "A space that feels like home",
            description:
              "Connect with others navigating the same journey, share stories, and find strength together.",
          },
          {
            title: "Direct pathways to real experts",
            description:
              "When you’re ready for professional care, Clarra connects you to the right specialists without the guesswork.",
          },
        ]}
      />


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

function FeatureGrid({ title, subtitle, features }: { title: string; subtitle?: string; features: { title: string; description: string }[] }) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display relative inline-block text-6xl sm:text-7xl font-extrabold uppercase tracking-tight text-[#1f2d3a]">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((item, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-block h-6 w-6 rounded-full bg-[#56d257] ring-2 ring-white/70 shadow" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
