export default function NotInYourHead() {
  const items = [
    {
      k: "90% of women have symptoms",
      s: "",
      highlight: "90%",
    },
    {
      k: "Symptoms last up to 15 years, 8.5 on average",
      s: "",
      highlight: "last up to 15 years",
    },
    {
      k: "There are more than 34 symptoms",
      s: "",
      highlight: "34",
    },
    {
      k: "Symptoms start in your forties",
      s: "",
      highlight: "forties",
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
      <span className="text-[#7a0c24] font-medium">{mid}</span>
      {after}
    </>
  );
}
