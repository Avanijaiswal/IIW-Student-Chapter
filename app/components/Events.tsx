export default function Events() {
  return (
    <section id="events" className="py-24 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Events</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-gdgBlue">
            Web Dev Bootcamp
          </h3>
          <p className="mt-4 text-gray-600">
            Learn full-stack development from scratch.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-gdgRed">
            Cloud Study Jam
          </h3>
          <p className="mt-4 text-gray-600">
            Explore Google Cloud hands-on.
          </p>
        </div>
      </div>
    </section>
  );
}
