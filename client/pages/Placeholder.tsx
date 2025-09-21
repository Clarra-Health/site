import { useLocation } from "react-router-dom";

function titleFromPath(path: string) {
  const clean = path.replace(/^\/+|\/+$/g, "");
  if (!clean) return "Home";
  return clean
    .split("/")
    .slice(-1)[0]
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export default function Placeholder() {
  const { pathname } = useLocation();
  const title = titleFromPath(pathname);

  return (
    <section className="relative py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">Placeholder</span>
          <h1 className="mt-4 text-3xl font-semibold tracking-[0.01em] sm:text-4xl">{title}</h1>
          <p className="mt-4 text-muted-foreground">
            This page is ready to be filled. Tell me what you want here and I will design and build it to match your brand and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
