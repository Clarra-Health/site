import { Link } from "react-router-dom";

const heroImg =
  "https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fa2a0a8b647f74cc78187125b6302a29b?format=webp&width=1600";

export default function Solutions() {
  return (
    <>
      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-display relative inline-block text-6xl sm:text-7xl font-extrabold uppercase tracking-tight text-[#1f2d3a]">NOT ANOTHER SYMPTOM TRACKER</h1>
            <p className="mt-4 mx-auto max-w-3xl text-xl sm:text-[1.4rem] leading-relaxed font-medium text-muted-foreground">
              Clarra is an <EmUnderline>AI-native</EmUnderline> health platform built for women in midlife. Instead of endless logs and health apps that track but don’t help, you simply chat with Clarra — <EmCircle><strong className="font-semibold">your midlife health partner.</strong></EmCircle> Behind the scenes, Clarra connects your symptoms, hormones, and wearable data to reveal patterns and deliver what matters most: <EmUnderline><strong className="font-semibold">personalized pathways</strong></EmUnderline>, <EmUnderline><strong className="font-semibold">predictive insights</strong></EmUnderline>, and <EmUnderline><strong className="font-semibold">clear next steps</strong></EmUnderline>.
            </p>
          </div>
        </div>
      </section>

      {/* Hormone tracking section (brand colors) */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 md:items-center">
            <div className="justify-self-center">
              <PhoneMockHormone />
            </div>
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1f2d3a]">
                Clarra turns your hormone story into care
              </h2>
              <p className="mt-3 text-base sm:text-lg text-foreground/85">
                Built for midlife, Clarra brings biomarkers, wearables, and lived symptoms together to reveal what’s driving your day-to-day. See trends, spot patterns, and get clear next steps—without the overwhelm.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Real‑time hormone trends (estrogen, progesterone, LH)",
                  "Cycle‑aware insights that anticipate what’s next",
                  "Sleep, mood, and symptoms in context—not in isolation",
                  "Personalized actions you can take today",
                  "Shareable summaries for your clinician",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#56d257] ring-2 ring-white/70 shadow" />
                    <span className="inline-flex items-center rounded-full bg-[#b9e3e2] px-4 py-2 text-sm font-medium text-[#1f2d3a]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1b4601547e454989b698e119d84f31ce?format=webp&width=2000"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1b4601547e454989b698e119d84f31ce?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1b4601547e454989b698e119d84f31ce?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1b4601547e454989b698e119d84f31ce?format=webp&width=2400 2400w"
          sizes="100vw"
          alt="Our Tech illustration"
          className="block w-full h-auto"
          loading="eager"
          decoding="async"
        />
      </section>


      <FeatureGrid
        title="Transforming Data into Care"
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

      <section className="py-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F9b876ea6526843a4836f5167f1c6dffa?format=webp&width=2000"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F9b876ea6526843a4836f5167f1c6dffa?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F9b876ea6526843a4836f5167f1c6dffa?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F9b876ea6526843a4836f5167f1c6dffa?format=webp&width=2400 2400w"
          sizes="100vw"
          alt="Chat with Clarra promo"
          className="block w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </section>

    </>
  );
}

function PhoneMockHormone() {
  return (
    <div className="relative w-[360px] sm:w-[440px] md:w-[560px] lg:w-[620px]">
      {/* metal frame */}
      <div className="relative rounded-[3.2rem] bg-gradient-to-br from-[#9aa3af] via-[#e5e7eb] to-[#8b95a5] p-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        {/* bezel */}
        <div className="relative rounded-[2.7rem] bg-black p-2">
          {/* side buttons */}
          <span className="absolute -left-1 top-28 h-10 w-1.5 rounded-md bg-[#9aa3af]" />
          <span className="absolute -left-1 top-44 h-10 w-1.5 rounded-md bg-[#9aa3af]" />
          <span className="absolute -right-1 top-36 h-16 w-1.5 rounded-md bg-[#9aa3af]" />

          {/* screen */}
          <div className="relative rounded-[2rem] bg-white overflow-hidden">
            {/* dynamic island */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2 h-7 w-40 rounded-2xl bg-black/90 sm:h-8 sm:w-44" />
            <div className="p-5 pt-12 sm:p-6 sm:pt-14">
              <div className="rounded-2xl bg-[#b9e3e2]/30 p-4 ring-1 ring-[#b9e3e2]">
                {/* simple hormone chart */}
                <svg viewBox="0 0 320 180" className="block w-full h-auto">
                  <rect x="0" y="0" width="320" height="180" fill="#fff" rx="10" />
                  <line x1="24" y1="150" x2="300" y2="150" stroke="#e5e7eb" strokeWidth="2" />
                  <line x1="24" y1="20" x2="24" y2="150" stroke="#e5e7eb" strokeWidth="2" />
                  <path d="M24 140 C 70 60, 120 60, 150 140 S 230 140, 300 60" fill="none" stroke="hsl(25 97% 66%)" strokeWidth="3" />
                  <path d="M24 150 C 110 150, 150 100, 210 70 S 250 110, 300 110" fill="none" stroke="#56d257" strokeWidth="3" />
                  <path d="M170 150 L 180 30 L 190 150" fill="none" stroke="#6c63ff" strokeWidth="3" />
                  <text x="34" y="36" fontSize="10" fill="#1f2d3a">Estrogen</text>
                  <text x="214" y="64" fontSize="10" fill="#1f2d3a">Progesterone</text>
                  <text x="192" y="28" fontSize="10" fill="#1f2d3a">LH</text>
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { k: "Sleep", v: "+12%", c: "#56d257" },
                  { k: "Mood", v: "Stable", c: "#1f2d3a" },
                  { k: "Energy", v: "↑", c: "hsl(25 97% 66%)" },
                  { k: "Stress", v: "↓", c: "#6c63ff" },
                ].map((x) => (
                  <div key={x.k} className="rounded-xl border border-border p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1f2d3a]">{x.k}</span>
                      <span style={{ color: x.c }} className="font-semibold">{x.v}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* home indicator */}
            <div className="pointer-events-none absolute bottom-3 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-full bg-black/70 opacity-70" />
          </div>
        </div>
      </div>
    </div>
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
