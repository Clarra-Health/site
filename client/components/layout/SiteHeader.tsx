import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/60 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" aria-label="Home" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fcb13d8bd4dd54d4c9b3a6b34a08291d1?format=webp&width=320"
              alt="Clarra"
              className="h-14 w-auto bg-transparent"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
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
          <a
            href="https://www.instagram.com/clarrahealth/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent/30 px-3"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5A2.5 2.5 0 1 1 12 16a2.5 2.5 0 0 1 0-5.5zM18 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/clarra-health-663668384/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent/30 px-3"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v11h3V10ZM9 10H6v11h3v-5.5c0-3 4-3.2 4 0V21h3v-6.5c0-6-6.5-5.8-7-2.8V10Z" />
            </svg>
          </a>

          <Link to="/contact" className="inline-block">
            <button className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow">Get started</button>
          </Link>
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
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-[1.1rem] transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`
                  }
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="https://www.instagram.com/clarrahealth/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border text-foreground">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5A2.5 2.5 0 1 1 12 16a2.5 2.5 0 0 1 0-5.5zM18 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/clarra-health-663668384/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border text-foreground">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v11h3V10ZM9 10H6v11h3v-5.5c0-3 4-3.2 4 0V21h3v-6.5c0-6-6.5-5.8-7-2.8V10Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
