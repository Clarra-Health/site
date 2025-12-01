import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-white to-[#f9fafb] text-foreground">
      <div className="container py-24 md:py-32">
        {/* CTA Section */}
        <div className="mb-20 rounded-2xl bg-gradient-to-r from-[#f0f9ff] to-[#ecfdf5] p-12 md:p-16 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl italic font-light text-[#1f2d3a] mb-6">
            Ready to get started?
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Take the first step towards better health insights and personalized care for your midlife journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-md"
            >
              Contact us
            </Link>
            <a
              href="mailto:hello@clarrahealth.com"
              className="text-primary hover:text-primary/80 font-medium text-base transition"
            >
              hello@clarrahealth.com
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2Fcb13d8bd4dd54d4c9b3a6b34a08291d1?format=webp&width=320"
                alt="Clarra"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              AI-native digital health for midlife care. Personalized support for perimenopause and menopause.
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

          {/* Product Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-foreground/60 hover:text-primary transition font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#features"
                  className="text-sm text-foreground/60 hover:text-primary transition font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-sm text-foreground/60 hover:text-primary transition font-medium"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-foreground/60 hover:text-primary transition font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@clarrahealth.com"
                  className="text-sm text-foreground/60 hover:text-primary transition font-medium"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-xs text-foreground/50 text-center">
            © {new Date().getFullYear()} Clarra Health, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
