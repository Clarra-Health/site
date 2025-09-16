import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast({ title: "Please fill required fields", description: "First name, email and message are required." });
      return;
    }
    setSubmitting(true);
    try {
      // In production, wire this up to your backend or Netlify Forms
      await new Promise((r) => setTimeout(r, 600));
      toast({ title: "Message sent", description: "We’ll get back to you soon." });
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <h1 className="font-display text-6xl sm:text-7xl font-extrabold uppercase tracking-tight text-[#1f2d3a]">Contact us.</h1>
              <img src="https://cdn.builder.io/api/v1/image/assets%2F553c8106b9f84f1a91a6549e0008f0fd%2F7cd6f27029df4136ab5083285580c15b" alt="Clarra logo" className="h-12 w-auto" />
            </div>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
              Investor, innovator, media, influencer — or simply excited to join Clarra? Reach out. We’re here for every conversation, big or small.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-secondary p-6 sm:p-8">
            <form onSubmit={onSubmit} className="grid gap-6">
              <div>
                <label className="text-sm font-medium">Name <span className="text-destructive">(required)</span></label>
                <div className="mt-2 grid gap-4 sm:grid-cols-2">
                  <input
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    placeholder="First Name"
                    required
                    className="w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground caret-primary outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    placeholder="Last Name"
                    className="w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground caret-primary outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Email <span className="text-destructive">(required)</span></label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground caret-primary outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message <span className="text-destructive">(required)</span></label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="How can we help?"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground caret-primary outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
                >
                  {submitting ? "Sending…" : "Send"}
                </button>
              </div>
            </form>
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/clarra-health-663668384/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v11h3V10ZM9 10H6v11h3v-5.5c0-3 4-3.2 4 0V21h3v-6.5c0-6-6.5-5.8-7-2.8V10Z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/chat_with_clarra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-destructive text-destructive-foreground shadow-sm transition hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5A2.5 2.5 0 1 1 12 16a2.5 2.5 0 0 1 0-5.5zM18 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
            </a>
          </div>

          <div className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-xs text-muted-foreground">
              Looking for something else? Start with our <Link to="/how-it-works" className="underline">How it works</Link> page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
