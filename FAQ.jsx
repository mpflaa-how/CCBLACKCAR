export default function FAQ() {
  const items = [
    {
      q: "How far in advance should I book?",
      a: "As early as possible, especially weekends and wine tours."
    },
    {
      q: "What areas do you cover?",
      a: "Monterey, Carmel, Salinas, Carmel Valley, and airport trips."
    },
    {
      q: "Can you handle luggage?",
      a: "Yes — just mention it when booking."
    },
    {
      q: "Do you do custom trips?",
      a: "Yes, just ask."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">FAQ</h2>

      {items.map((f) => (
        <div key={f.q} className="mb-6">
          <h3 className="font-semibold text-lg">{f.q}</h3>
          <p className="text-gray-600">{f.a}</p>
        </div>
      ))}
    </section>
  );
}
