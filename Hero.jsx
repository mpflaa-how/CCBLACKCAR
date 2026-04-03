export default function Hero() {
  return (
    <section
      className="bg-cover bg-center text-white text-center py-32 px-6"
      style={{ backgroundImage: "url('/images/monterey-hero.jpg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Reliable Private Chauffeur in Monterey County
      </h1>

      <p className="text-xl max-w-2xl mx-auto mb-8">
        Airport rides, wine tours, and local travel — handled by a driver who
        knows the area and shows up on time.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="tel:YOURNUMBER"
          className="bg-black/80 hover:bg-black px-6 py-3 rounded-lg text-lg"
        >
          📞 Call Now
        </a>
        <a
          href="sms:YOURNUMBER"
          className="bg-accent hover:bg-blue-700 px-6 py-3 rounded-lg text-lg"
        >
          💬 Text for Availability
        </a>
      </div>
    </section>
  );
}
