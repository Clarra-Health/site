import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-transparent bg-primary text-primary-foreground">
      <div className="container py-10">
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
