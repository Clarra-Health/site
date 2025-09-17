import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/how-it-works", label: "How Clarra Works" },
  { to: "/waitlist", label: "Waitlist" },
  { to: "/how-we-protect-your-data", label: "Data Privacy" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1f066c9308e94551a866d68b560c5311?format=webp&width=160" alt="Clarra" className="h-20 w-auto md:h-24 bg-transparent" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.linkedin.com/in/clarra-health-663668384/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v11h3V10ZM9 10H6v11h3v-5.5c0-3 4-3.2 4 0V21h3v-6.5c0-6-6.5-5.8-7-2.8V10Z"/></svg>
          </a>
          <a href="https://www.instagram.com/chat_with_clarra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5A2.5 2.5 0 1 1 12 16a2.5 2.5 0 0 1 0-5.5zM18 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
          </a>
        </div>
        <button
          aria-label="Toggle navigation"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-3 space-y-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-primary hover:text-primary-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="https://www.linkedin.com/in/clarra-health-663668384/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border text-foreground">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v11h3V10ZM9 10H6v11h3v-5.5c0-3 4-3.2 4 0V21h3v-6.5c0-6-6.5-5.8-7-2.8V10Z"/></svg>
              </a>
              <a href="https://www.instagram.com/chat_with_clarra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border text-foreground">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5A2.5 2.5 0 1 1 12 16a2.5 2.5 0 0 1 0-5.5zM18 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
