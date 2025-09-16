import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contact us</h1>
            <p className="mt-3 text-muted-foreground">We’d love to hear from you. Reach out through the channels below.</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            <a
              href="https://www.linkedin.com/in/clarra-health-663668384/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md border border-border bg-card px-6 py-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/chat_with_clarra/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md border border-border bg-card px-6 py-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Instagram
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-xl text-center">
            <p className="text-sm text-muted-foreground">
              Prefer email? Join the waitlist and we’ll reach out: <Link to="/waitlist" className="font-medium text-foreground underline">Join the wait list</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
