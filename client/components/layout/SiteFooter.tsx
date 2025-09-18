import { Link, useLocation } from "react-router-dom";

export default function SiteFooter() {
  const { pathname } = useLocation();
  return (
    <footer className="border-t border-transparent bg-primary text-primary-foreground">
      <div className="container py-12">
        {pathname !== "/contact" && (
          <div className="mb-10 rounded-xl border border-white/10 bg-[#eaf7f6] p-8 text-[#1f2d3a] shadow-sm">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#1f2d3a]">Get in touch.</h3>
                <p className="mt-3 text-sm sm:text-base text-[#1f2d3a]/90">
                  Investors, researchers, media, builders — let’s talk. We’re forming partnerships to bring Clarra to life. No question is too small.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-[#1f2d3a] px-12 py-6 text-2xl font-semibold text-white shadow-sm transition hover:bg-[#1f2d3a]/90">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:items-start">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1f066c9308e94551a866d68b560c5311?format=webp&width=280" alt="Clarra" className="h-[4.375rem] w-auto bg-transparent" />
            </div>
            <p className="mt-4 max-w-sm text-base text-primary-foreground/80">
              AI-native digital health for midlife care: personalized support for perimenopause and menopause by Clarra.
            </p>
          </div>
          <div className="md:justify-self-end md:mt-2">
            <p className="text-lg font-semibold uppercase tracking-wide">Product</p>
            <ul className="mt-4 space-y-2 text-base text-primary-foreground/80">
              <li><Link to="/how-it-works" className="hover:text-primary-foreground">Our Tech</Link></li>
              <li><Link to="/who-we-help" className="hover:text-primary-foreground">Who We Help</Link></li>
              <li><Link to="/waitlist" className="hover:text-primary-foreground">Waitlist</Link></li>
            </ul>
          </div>
          <div className="md:justify-self-end md:mt-2">
            <p className="text-lg font-semibold uppercase tracking-wide">Company</p>
            <ul className="mt-4 space-y-2 text-base text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-primary-foreground">Meet Clarra</Link></li>
              <li><Link to="/how-we-protect-your-data" className="hover:text-primary-foreground">Data Privacy</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary/40 pt-6 md:flex-row md:items-center">
          <p className="text-sm text-primary-foreground/80">© {new Date().getFullYear()} Carra Health, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm text-primary-foreground/80">
            <Link to="/how-we-protect-your-data" className="hover:text-primary-foreground">Data Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
