import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Waitlist() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.name) {
      toast({ title: "Please fill required fields", description: "Name and email are required." });
      return;
    }
    setSubmitting(true);
    try {
      // Replace with your backend or Netlify Forms
      await new Promise((r) => setTimeout(r, 700));
      toast({ title: "You're on the list!", description: "We’ll email you when early access opens." });
      setForm({ name: "", email: "", notes: "" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-[#1f2d3a] text-6xl sm:text-7xl font-extrabold uppercase tracking-tight">Join the Waitlist</h1>
          <p className="mt-4 text-xl font-medium text-[hsl(210_29%_24%)]/90">
            Be first to try Clarra — compassionate, AI‑powered care for perimenopause, menopause, and midlife.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-[#b9e3e2]/40 p-6 sm:p-8">
          <form onSubmit={onSubmit} className="grid gap-6">
            <div>
              <label className="text-sm font-semibold text-[#1f2d3a]">Name <span className="text-destructive">(required)</span></label>
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                required
                className="mt-2 w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground caret-primary outline-none focus:ring-2 focus:ring-[hsl(25_97%_66%)]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#1f2d3a]">Email <span className="text-destructive">(required)</span></label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                required
                className="mt-2 w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground caret-primary outline-none focus:ring-2 focus:ring-[hsl(25_97%_66%)]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#1f2d3a]">Anything you'd like to share? <span className="text-muted-foreground">(optional)</span></label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                placeholder="Symptoms, goals, or questions…"
                rows={5}
                className="mt-2 w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground caret-primary outline-none focus:ring-2 focus:ring-[hsl(25_97%_66%)]"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[hsl(25_97%_66%)] px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-50"
              >
                {submitting ? "Joining…" : "Join the Waitlist"}
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-xs text-[#1f2d3a]/70">
            By joining, you agree to occasional emails. See our {" "}
            <Link to="/how-we-protect-your-data" className="underline">Data Privacy</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
