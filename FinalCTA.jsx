export default function FinalCTA() {
  return (
    <section className="py-24 text-center bg-black text-white">
      <h2 className="text-4xl font-bold mb-4">Need a Reliable Ride?</h2>
      <p className="text-lg mb-8">
        Call or text now to check availability and book your ride.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="tel:YOURNUMBER"
          className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold"
        >
          📞 Call Now
        </a>
        <a
          href="sms:YOURNUMBER"
          className="bg-accent hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
        >
          💬 Text Now
        </a>
      </div>
    </section>
  );
}
