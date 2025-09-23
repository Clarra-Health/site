export default function NotInYourHead() {
  const items = [
    {
      k: "90% of women have symptoms",
      s: "",
      highlight: "90%",
    },
    {
      k: "Symptoms can last up to 10 years",
      s: "",
      highlight: "10 years",
    },
    {
      k: "There are more than 60 symptoms",
      s: "",
      highlight: "60",
    },
    {
      k: "It takes an average of 7 years to be diagnosed with a menopause-related condition",
      s: "",
      highlight: "7 years",
    },
  ];
  return (
    <section className="py-12">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="grid gap-8 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.k} className="text-[28px] leading-9">
                <div className="border-t border-border mb-3 mx-auto w-full" />
                <p className="text-foreground">
                  {renderWithHighlight(it.k, it.highlight)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function renderWithHighlight(text: string, highlight: string) {
  if (!highlight) return text;
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const mid = text.slice(idx, idx + highlight.length);
  const after = text.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="text-[hsl(25_97%_50%)] font-medium">{mid}</span>
      {after}
    </>
  );
}
