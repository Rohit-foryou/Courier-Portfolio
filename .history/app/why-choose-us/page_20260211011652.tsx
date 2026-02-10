export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "India Post Specialists",
      desc: "We specialize in India Post mailing services including Speed Post, Registered Post, and PAN India document delivery.",
      icon: "📮",
    },
    {
      title: "PAN India Reach",
      desc: "India Post enables us to coordinate deliveries to every PIN code across India, including remote and rural locations.",
      icon: "📍",
    },
    {
      title: "Cost-Effective Mailing",
      desc: "Our India Post–first approach ensures economical pricing without compromising on reliability or coverage.",
      icon: "💰",
    },
    {
      title: "Trusted Courier Network",
      desc: "When faster delivery is required, we coordinate with select private courier partners we trust.",
      icon: "🤝",
    },
    {
      title: "Business-Focused Coordination",
      desc: "We understand business logistics — recurring dispatches, legal documents, invoices, and bulk mailing requirements.",
      icon: "🏢",
    },
    {
      title: "Reliable Personal Support",
      desc: "Clear communication, personal assistance, and quick issue resolution throughout the shipment lifecycle.",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Header */}
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
          Why Choose Kamlesh Mailing
        </p>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          Experts in India Post Mailing & Courier Coordination
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We simplify India Post mailing and courier coordination by combining
          deep postal expertise, trusted partners, and dependable service —
          so you can ship with complete confidence.
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
