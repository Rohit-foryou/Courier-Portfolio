export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Trusted Courier Network",
      desc: "We work with reliable courier partners including India Post to ensure safe and dependable deliveries.",
      icon: "🤝",
    },
    {
      title: "Cost-Effective Solutions",
      desc: "We intelligently select courier services based on cost, speed, and destination — saving you money.",
      icon: "💰",
    },
    {
      title: "PAN India Reach",
      desc: "From metro cities to remote locations, we coordinate deliveries across India without complexity.",
      icon: "📍",
    },
    {
      title: "Transparent Coordination",
      desc: "Clear communication, no hidden processes, and real-time coordination throughout the shipment lifecycle.",
      icon: "🔍",
    },
    {
      title: "Business-Friendly Approach",
      desc: "We understand business logistics — documents, invoices, bulk parcels, and recurring shipments.",
      icon: "🏢",
    },
    {
      title: "Reliable Support",
      desc: "Personal assistance and quick resolution whenever you need help with your shipment.",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          More Than Just a Courier Middleman
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We simplify courier and logistics coordination by combining trusted
          partners, smart selection, and dependable service — so you can ship
          with confidence.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="
                bg-white p-8 rounded-xl border
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
                text-left
              "
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
