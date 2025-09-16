import { Link } from "react-router-dom";

import { Link, useLocation } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-transparent bg-primary text-primary-foreground">
      <div className="container py-10">
        {useLocation().pathname !== "/contact" && (
          <div className="mb-10 rounded-2xl border border-primary-foreground/20 bg-primary-foreground p-6 text-[#1f2d3a] shadow-sm">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-base sm:text-lg font-semibold">
                Investors, researchers, media, builders — let’s talk. We’re forming partnerships to bring Clarra to life. No question is too small.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-[#b9e3e2] px-5 py-3 text-sm font-semibold text-[hsl(210_29%_24%)] hover:bg-[#b9e3e2]/90">
                Contact us
              </Link>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F170b844262144b8e847aa3e84070e87a?format=webp&width=160" alt="Clarra" className="h-10 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/80">
              AI-native digital health for midlife care: personalized support for perimenopause and menopause by Clarra.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/how-it-works" className="hover:text-primary-foreground">How it works</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-primary-foreground">About</Link></li>
              <li><Link to="/careers" className="hover:text-primary-foreground">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/terms" className="hover:text-primary-foreground">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-foreground">Privacy</Link></li>
              <li><Link to="/how-we-protect-your-data" className="hover:text-primary-foreground">Data Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-primary/40 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-primary-foreground/80">© {new Date().getFullYear()} Carra Health, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/80">
            <Link to="/security" className="hover:text-primary-foreground">Security</Link>
            <Link to="/accessibility" className="hover:text-primary-foreground">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
