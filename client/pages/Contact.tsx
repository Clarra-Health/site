export default function Contact() {
  return (
    <section className="py-32 bg-white">
      <div className="container max-w-2xl">
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#1f2d3a] mb-6">
          Get in touch
        </h1>
        <p className="text-lg text-foreground/70 mb-8">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <a href="mailto:hello@clarrahealth.com" className="text-primary hover:underline text-lg">
              hello@clarrahealth.com
            </a>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#1f2d3a] mb-4">Follow us</h2>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/clarrahealth/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:bg-accent/30 transition"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5A2.5 2.5 0 1 1 12 16a2.5 2.5 0 0 1 0-5.5zM18 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/clarra-health-663668384/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:bg-accent/30 transition"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v11h3V10ZM9 10H6v11h3v-5.5c0-3 4-3.2 4 0V21h3v-6.5c0-6-6.5-5.8-7-2.8V10Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
