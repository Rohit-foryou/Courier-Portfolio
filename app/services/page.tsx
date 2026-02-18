import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
  {
    title: "India Post Mailing Services",
    img: "/images/india-post.png",
    desc: "Specialized handling of Speed Post, Registered Post, and Parcel services with PAN India reach.",
  },
  {
    title: "Document Courier Services",
    img: "/images/document.png",
    desc: "Secure and time-sensitive delivery of legal, financial, and confidential documents.",
  },
  {
    title: "Parcel & Bulk Shipments",
    img: "/images/parcel.png",
    desc: "Cost-effective parcel and bulk shipment coordination using India Post and trusted partners.",
  },
  {
    title: "Local & Intercity Deliveries",
    img: "/images/intercity.png",
    desc: "Reliable same-city and intercity deliveries with predictable timelines.",
  },
  {
    title: "Business & Corporate Logistics",
    img: "/images/business.png",
    desc: "Scalable courier coordination for enterprises and operational mailing needs.",
  },
  {
    title: "Multi-Courier Optimization",
    img: "/images/multi.png",
    desc: "Private couriers intelligently selected when faster delivery is required.",
  },
];


  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
              Our Services
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              India Post Mailing
              <br /> & Courier Solutions You Can Rely On
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We specialize in India Post mailing services including Speed Post,
              Registered Post, and PAN India document delivery — supported by
              trusted private courier partners when faster service is required.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/services.png"
              alt="India Post and courier services"
              width={320}
              height={220}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {services.map((s, i) => {
            const imageLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                {/* IMAGE */}
                <div
                  className={`flex justify-center ${
                    imageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={260}
                    height={190}
                    className="
                      object-contain
                      transition-all duration-300 ease-out
                      hover:scale-[1.04] hover:-translate-y-1
                    "
                  />
                </div>

                {/* TEXT */}
                <div
                  className={`transition-transform duration-300 hover:translate-x-1 ${
                    imageLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-gray-900">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-gray-600 max-w-xl leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Service Attributes
          </p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            What We Offer
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "PAN India Reach", icon: "📮", desc: "Delivery to every PIN code across India." },
              { title: "Cost-Effective Mailing", icon: "💰", desc: "Economical India Post–based solutions." },
              { title: "Smart Courier Selection", icon: "📦", desc: "Best option chosen per shipment." },
              { title: "Secure Handling", icon: "🔒", desc: "Trusted partners and safe processes." },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white p-8 rounded-xl shadow-sm
                  hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Kamlesh Mailing?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by individuals and businesses for India Post mailing and
            reliable courier coordination across India.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "India Post Specialists",
                desc: "Deep expertise in Speed Post, Registered Post, and PAN India mailing.",
                icon: "📮",
              },
              {
                title: "Reliable Coordination",
                desc: "Clear communication and dependable logistics execution.",
                icon: "🤝",
              },
              {
                title: "Flexible Courier Support",
                desc: "Private couriers used only when speed is critical.",
                icon: "🌐",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-gray-50 p-8 rounded-xl border
                  hover:shadow-md hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Need Help with India Post Mailing?
        </h2>
        <p className="mt-4 text-gray-600">
          Get expert assistance for Speed Post, Registered Post,
          documents, and business dispatch requirements.
        </p>
        <Link
          href="/contact"
          className="
            inline-block mt-6 bg-orange-500 text-white
            px-8 py-3 rounded-md font-semibold
            hover:bg-orange-600 hover:scale-[1.03]
            transition-all
          "
        >
          Enquire for India Post
        </Link>
      </section>
    </>
  );
}
