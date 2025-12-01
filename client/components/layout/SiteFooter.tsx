import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-white to-[#f9fafb] text-foreground">
      <div className="container py-24 md:py-32">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fcb13d8bd4dd54d4c9b3a6b34a08291d1?format=webp&width=320"
              alt="Clarra"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm text-foreground/60 leading-relaxed">
            AI-native digital health for midlife care. Personalized support for
            perimenopause and menopause.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.instagram.com/clarrahealth/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground hover:bg-accent/30 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5A2.5 2.5 0 1 1 12 16a2.5 2.5 0 0 1 0-5.5zM18 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/clarra-health-663668384/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground hover:bg-accent/30 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v11h3V10ZM9 10H6v11h3v-5.5c0-3 4-3.2 4 0V21h3v-6.5c0-6-6.5-5.8-7-2.8V10Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <p className="text-xs text-foreground/50 text-center">
            © {new Date().getFullYear()} Clarra Health, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
