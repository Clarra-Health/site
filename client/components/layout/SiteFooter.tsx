import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white text-foreground">
      <div className="container py-16 md:py-24">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center md:gap-12 pb-16 border-b border-border">
          <div>
            <h3 className="font-serif text-4xl sm:text-5xl italic font-light text-[#1f2d3a] mb-4">
              Let's talk.
            </h3>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-6">
              Investors, researchers, media, builders — we'd love to connect.
              We're forming partnerships to bring Clarra to life, and no
              question is too small.
            </p>
            <p className="text-base text-foreground/70">
              <a
                href="mailto:hello@clarrahealth.com"
                className="text-primary hover:underline font-medium"
              >
                hello@clarrahealth.com
              </a>
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-sm"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:grid-cols-1 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F1f066c9308e94551a866d68b560c5311?format=webp&width=280"
                alt="Clarra"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              AI-native digital health for midlife care: personalized support
              for perimenopause and menopause by Clarra.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Clarra Health, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
