import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-12 md:pt-14 pb-[1.7rem] sm:pb-[2.55rem]" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F790f0b632d2648d2813199a7e89aae3b?format=webp&width=2000')", backgroundSize: "200%", backgroundPosition: "center 150%", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <div className="mx-auto max-w-6xl grid min-h-[60vh] sm:min-h-[calc(100vh-4rem)] grid-cols-1 sm:grid-cols-12 items-start">
            <div className="sm:col-span-12 sm:col-start-1" >
              <h1 className="font-display text-[#1f2d3a] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-[0.95]">
                AI-POWERED {""}
                <span className="relative inline-block px-1 align-baseline">
                  <span className="relative z-10">COMPASSIONATE</span>
                  <svg aria-hidden className="pointer-events-none absolute left-[-6%] right-[-6%] top-[-18%] bottom-[-18%] h-[136%] w-[112%]" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <ellipse cx="50" cy="20" rx="46" ry="16" fill="none" stroke="hsl(25 97% 66%)" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                CARE FOR PERIMENOPAUSE, MENOPAUSE & MIDLIFE.
              </h1>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-[hsl(210_29%_24%)]/95 max-w-xl">
                Clarra connects the dots between symptoms, insights, and support—so midlife health finally makes sense.
              </p>
              <div className="mt-6 sm:mt-7 mb-[1.3rem] sm:mb-[1.7rem] flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/waitlist"
                  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-[hsl(210_29%_24%)] shadow-sm ring-1 ring-black/5 transition hover:bg-white/90"
                >
                  Join The Waitlist
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center rounded-md bg-white/95 px-8 py-4 text-lg font-semibold text-[hsl(210_29%_24%)] shadow-sm ring-1 ring-black/5 transition hover:bg-white"
                >
                  How Clarra Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* App Showcase (full-bleed) */}
      <section className="py-0">
        <Link to="/solutions" className="block focus:outline-none focus:ring-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F0dc6d560fb034c85a72823a4075350fa?format=webp&width=2000"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F0dc6d560fb034c85a72823a4075350fa?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F0dc6d560fb034c85a72823a4075350fa?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F0dc6d560fb034c85a72823a4075350fa?format=webp&width=2400 2400w"
            sizes="100vw"
            alt="Chat with Clarra promo with benefits around device: Hormone Health Insights, Tailored Plans, Data-Driven Care, Wearables Sync, Smart Tracking, Community Support"
            className="block w-full h-auto"
            loading="eager"
            decoding="async"
          />
        </Link>
      </section>


      {/* Features */}
      <section className="relative py-12">
        <div className="container">
          <div className="rounded-3xl border border-border bg-secondary/60 p-8 sm:p-10 shadow-sm">
            <div className="mx-auto text-center">
              <h2 className="font-display relative inline-block text-6xl sm:text-7xl font-extrabold uppercase tracking-tight text-[#1f2d3a]">Support at Every Stage</h2>
              <p className="mt-3 text-base sm:text-lg text-foreground/80">From your first signs of perimenopause to postmenopausal bone health, Clarra adapts to your needs with continuous, personalized support —</p>
              <p className="text-base sm:text-lg text-foreground/90">every stage, every step.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Feature icon={<IconSpark />} title="Symptom tracking" description="Simple, conversational check-ins turn daily experiences into meaningful insights. Clarra makes it effortless to spot triggers, trends, and patterns — no endless logging required" iconBg="bg-[#56d257]" />
              <Feature icon={<IconWand />} title="AI care plans" description="Powered by AI and grounded in evidence, Clarra builds care pathways tailored to your goals. From sleep routines to bone health, your plan adapts as your needs evolve." iconBg="bg-[#56d257]" />
              <Feature icon={<IconChat />} title="Coaching & chat" description="Compassionate, always-on support — blending AI intelligence with human oversight. Clarra’s chat keeps you connected, guided, and never left alone on the journey." iconBg="bg-[#56d257]" />
              <Feature icon={<IconShield />} title="Clinical-grade" description="Privacy-first and secure by design. Clarra follows best practices in health data protection, ensuring your information is safe, transparent, and always under your control." iconBg="bg-[#56d257]" />
            </div>
            <div className="mt-10 flex items-center justify-center">
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-md bg-[hsl(25_97%_66%)] px-12 py-6 text-2xl font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Learn More
              </Link>
            </div>
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

function Feature({ icon, title, description, iconBg = "bg-primary" }: { icon: React.ReactNode; title: string; description: string; iconBg?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-4">
        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-white ${iconBg} ring-2 ring-white/70 shadow`}>
          {icon}
        </span>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="mt-3 text-sm text-foreground/80">{description}</p>
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
    </svg>
  );
}
function IconWand() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 21 9-9" />
      <path d="M12.2 6.1 11 4l1.2-2.1L14.3 3l-2.1 1.1Z" />
      <path d="m18.4 10.9-1.1-2.1 1.1-2.1 2.1 1.1-2.1 1Z" />
      <path d="m5.6 10.9-2.1-1.1L4.6 7.7l1.1 2.1-1.1 1.1Z" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}
