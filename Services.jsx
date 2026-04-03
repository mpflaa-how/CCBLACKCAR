export default function Services() {
  const items = [
    {
      title: "Airport Transportation",
      text: "SFO, San Jose, and Monterey Airport rides with reliable scheduling and zero stress."
    },
    {
      title: "Carmel Valley Wine Tours",
      text: "Relax and enjoy the day — no driving, no rushing, just a smooth ride between wineries."
    },
    {
      title: "Hourly Chauffeur Service",
      text: "Stay on your schedule. I’m available as long as you need."
    },
    {
      title: "Weddings & Events",
      text: "Dependable transportation so your day runs smoothly from start to finish."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((s) => (
          <div
            key={s.title}
            className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
