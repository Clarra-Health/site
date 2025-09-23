import { Link } from "react-router-dom";
import NotInYourHead from "@/components/layout/NotInYourHead";
import AutoPlayVideo from "../components/media/AutoPlayVideo";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate z-10 overflow-hidden bg-transparent pt-16 md:pt-20 pb-0">
        <div className="container">
          <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-12 items-start">
            <div className="sm:col-span-12 sm:col-start-1">
              <h1 className="font-display text-[#1f2d3a] text-[3.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.01em] sm:tracking-[0.015em] md:tracking-[0.02em] leading-[0.95]">
                AI-POWERED {""}
                <span className="relative inline-block px-2 align-baseline">
                  <span className="relative z-10 text-[#4fb7b3]">COMPASSIONATE</span>
                  <svg
                    aria-hidden
                    className="hidden"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                  >
                    <ellipse
                      cx="52"
                      cy="20"
                      rx="47"
                      ry="15"
                      fill="none"
                      stroke="hsl(25 97% 66%)"
                      strokeWidth="2.65"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                <span className="text-[#4fb7b3]">CARE</span> FOR PERIMENOPAUSE, MENOPAUSE & MIDLIFE.
              </h1>
              <p className="mt-3 sm:mt-4 text-[1.35rem] sm:text-xl font-medium text-[hsl(210_29%_24%)]/95 max-w-xl">
                Clarra connects the dots between symptoms, insights, and
                support—so midlife health finally makes sense.
              </p>
              <div className="mt-6 sm:mt-6 mb-6 relative z-20 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-[hsl(210_29%_24%)] shadow-sm ring-1 ring-black/5 transition hover:bg-white/90"
                >
                  Meet Clarra
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center rounded-md bg-white/95 px-8 py-4 text-lg font-semibold text-[hsl(210_29%_24%)] shadow-sm ring-1 ring-black/5 transition hover:bg-white"
                >
                  Our Tech
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero split: features left, image right */}
      <section className="py-8 pt-16 sm:pt-8">
        <div className="container">
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <div className="order-2 sm:order-1 sm:translate-x-[10%]">
              <h3 className="relative z-30 mb-8 text-3xl font-semibold text-foreground/90">
                Clarra Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 aspect-square shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white">
                    <IconCheck />
                  </span>
                  <p className="text-xl text-foreground/90">
                    Tracks four key hormones (LH, E3G, PdG, FSH) to give the
                    most complete view of midlife health.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 aspect-square shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white">
                    <IconCheck />
                  </span>
                  <p className="text-xl text-foreground/90">
                    Forecasts risks early to shift care from reactive to
                    preventative.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 aspect-square shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white">
                    <IconCheck />
                  </span>
                  <p className="text-xl text-foreground/90">
                    Delivers guidance through natural conversation — not
                    dashboards or data dumps.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 aspect-square shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white">
                    <IconCheck />
                  </span>
                  <p className="text-xl text-foreground/90">
                    Integrates with wearables to turn everyday data into
                    personalized insights.
                  </p>
                </li>
              </ul>
            </div>
            <div className="order-1 sm:order-2 flex justify-center w-full sm:justify-end sm:-translate-x-[30%] relative overflow-visible sm:mx-0 mx-[-2rem]">
              <div className="relative inline-block -translate-y-[10%] sm:translate-y-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F9006179a8c0745988cf8fa5fccfa0e0e?format=webp&width=800"
                  alt="Chat with Clarra phone mockup"
                  className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto drop-shadow-2xl scale-[1.5] sm:scale-[1.7] origin-center mx-auto"
                  loading="eager"
                  decoding="async"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fbf45102ca2434602812f7c04a6ec255a?format=webp&width=800"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[-10%] left-[60%] -translate-x-1/2 w-[120vw] max-w-none opacity-90 sm:hidden -z-10"
                  decoding="async"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%)",
                    maskImage:
                      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core capabilities - New section above Support at Every Stage */}
      <section className="relative py-12">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card/80 p-8 sm:p-10 shadow-sm">
            <div className="mx-auto text-center">
              <h2 className="font-display relative inline-block text-5xl sm:text-6xl font-extrabold tracking-[0.01em] sm:tracking-[0.015em] md:tracking-[0.02em] text-[#1f2d3a]">
                NEXT-GEN TECHNOLOGY for better midlife health
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Feature
                title="Full-spectrum hormone testing"
                description="Tracks four key hormones (LH, E3G, PdG, FSH) to capture the most comprehensive picture of midlife hormonal transitions available in consumer health."
              />
              <Feature
                title="Predictive, preventative outcomes"
                description="Uses advanced AI to forecast health trajectories and risks early, turning fragmented data into actionable guidance for prevention rather than reaction."
              />
              <Feature
                title="Conversational AI first"
                description="An LLM-powered chatbot serves as the primary interface, making complex health insights intuitive, empathetic, and accessible through natural conversation."
              />
              <Feature
                title="Seamless wearable integration"
                description="Incorporates continuous real-world data from mainstream wearables to enrich models and personalize recommendations across sleep, metabolic, and cardiovascular health."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 47 Million image (home only) */}
      <section className="py-0">
        <AutoPlayVideo
          src="https://cdn.builder.io/o/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F5584d878f6ce4248b784f76ddbbd5e8a?alt=media&token=0b0f73c6-e767-40a0-b24a-0365f13d1856&apiKey=553c8106b9f84f1a91a6549e0008f0fd"
          className="block w-full h-auto"
          ariaLabel="It's not in your head — home banner video"
          preload="auto"
        />
      </section>

      {/* Not In Your Head (home only) */}
      <NotInYourHead />

      {/* Mission Section */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            {/* Desktop / tablet version unchanged */}
            <h2 className="hidden sm:inline-block font-display relative text-6xl font-extrabold tracking-[0.01em] text-[#1f2d3a]">
              Clarra’s mission is to harness{" "}
              <span className="text-[#4fb7b3]">the power of AI</span> to{" "}
              <span className="whitespace-nowrap text-[hsl(25_97%_66%)]">
                  transform women’s health
                </span>
              —{" "}
              <EmUnderline stroke="#4fb7b3" showOnMobile>
                47 million women
              </EmUnderline>{" "}
              worldwide enter menopause each year without the{" "}
              <EmUnderline stroke="#4fb7b3" showOnMobile>
                care
              </EmUnderline>{" "}
              they need.
            </h2>
            {/* Mobile exact layout */}
            <h2 className="sm:hidden font-display text-[#1f2d3a] uppercase font-extrabold tracking-[0.01em] text-5xl leading-[1.02]">
              <span>Clarra’s mission is to harness </span>
              <span className="text-[#4fb7b3]">the power of AI</span>
              <span> to</span>
              <br />
              <span className="text-[hsl(25_97%_66%)]">TRANSFORM WOMEN’S HEALTH</span>
              —{" "}
              <EmUnderline stroke="#4fb7b3" offsetScale={0.85} showOnMobile>
                47 MILLION WOMEN
              </EmUnderline>{" "}
              WORLDWIDE ENTER MENOPAUSE EACH YEAR WITHOUT{" "}
              <EmUnderline stroke="#4fb7b3" offsetScale={0.8} showOnMobile>THE CARE</EmUnderline>{" "}THEY NEED.
            </h2>
            <div className="mt-6 space-y-5 text-base sm:text-lg text-foreground/85">
              <p>
                By combining biomarkers, wearable data, and lived symptoms,
                Clarra builds a whole view of health that goes beyond fragmented
                tracking. Our AI turns this data into actionable
                insights—detecting risks earlier, anticipating challenges, and
                guiding next steps.
              </p>
              <p>
                Designed to be accurate, accessible, and scalable, Clarra puts
                technology to work for women and providers, enabling faster
                action, better outcomes, and a new standard of care for midlife
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
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
  return (
    <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
  );
}

function Avatar({ color = "bg-primary" }: { color?: string }) {
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${color}`}
    >
      AI
    </span>
  );
}

function Feature({
  icon,
  title,
  description,
  iconBg = "bg-primary",
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  iconBg?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/90 p-6 shadow-xl shadow-black/20 transition hover:shadow-2xl hover:shadow-black/30">
      {icon ? (
        <div className="flex items-center gap-4">
          <span
            className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white ${iconBg} ring-2 ring-white/80 shadow-md`}
          >
            {icon}
          </span>
          <p className="font-semibold">{title}</p>
        </div>
      ) : (
        <p className="font-semibold text-lg">{title}</p>
      )}
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

function IconFlask() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <rect x="11" y="2" width="2" height="6" rx="1" />
      <path d="M7 10l3.5-2h3L17 10l3 7a2 2 0 0 1-1.8 3H5.8A2 2 0 0 1 4 17l3-7z" />
      <path d="M9 15h6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconWatch() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <rect x="9" y="2" width="6" height="3" rx="1" />
      <rect x="7" y="6" width="10" height="12" rx="3" />
      <rect x="9" y="19" width="6" height="3" rx="1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <path d="M3 20h18v2H3z" />
      <rect x="5" y="11" width="3" height="7" rx="1" />
      <rect x="10.5" y="8" width="3" height="10" rx="1" />
      <rect x="16" y="5" width="3" height="13" rx="1" />
    </svg>
  );
}
function IconWand() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2c-3.9 0-7 3-7 6.7 0 2 1 3.7 2.7 4.9-.2 1.1-.7 2.4-1.6 3.6-.4.5.2 1.2.8 1 1.9-.6 3.5-1.5 4.6-2.4.9.2 1.8.3 2.8.3 3.9 0 7-3 7-6.7S15.9 2 12 2z" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <path d="M2 6a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-4 3V6z" />
      <path d="M9 10h10a3 3 0 0 1 3 3v4l-3 2v-2h-7a3 3 0 0 1-3-3v-4z" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="8" y="10" width="8" height="7" rx="2" />
      <path d="M11 12h2v3h-2z" />
    </svg>
  );
}

function EmUnderline({
  children,
  offsetScale = 0.8,
  stroke = "hsl(25 97% 66%)",
  showOnMobile = false,
}: {
  children: React.ReactNode;
  offsetScale?: number;
  stroke?: string;
  showOnMobile?: boolean;
}) {
  return (
    <span className="relative inline-block px-0.5 align-baseline">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        className={`${showOnMobile ? "" : "hidden sm:block "}pointer-events-none absolute left-[-1%] right-[-1%] h-[0.55em] w-[102%]`}
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        style={{ bottom: `calc(-0.18em * ${offsetScale})` }}
      >
        <path
          d="M2 14 L 98 14"
          fill="none"
          stroke={stroke}
          strokeWidth="3.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function EmCircle({
  children,
  scale = 1,
  y = 0.08,
  x = 0,
  sx = 1,
  sy = 1,
}: {
  children: React.ReactNode;
  scale?: number;
  y?: number;
  x?: number; // horizontal shift in percent of width
  sx?: number; // extra horizontal scale
  sy?: number; // extra vertical scale
}) {
  return (
    <span className="relative inline-block px-1 align-baseline">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        className="hidden sm:block pointer-events-none absolute inset-[-0.35em] h-[calc(100%+0.7em)] w-[calc(100%+0.7em)] overflow-visible"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        style={{
          transform: `translate(${x}%, ${y}em) scale(${scale * sx}, ${scale * sy})`,
          transformOrigin: "center",
        }}
      >
        <ellipse
          cx="50"
          cy="30"
          rx="47"
          ry="26"
          fill="none"
          stroke="hsl(25 97% 66%)"
          strokeWidth="3.15"
        />
      </svg>
    </span>
  );
}
