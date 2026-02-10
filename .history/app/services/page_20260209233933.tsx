import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
              Our Services
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Courier & Logistics Solutions
              <br /> You Can Rely On
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We provide end-to-end courier and logistics coordination by
              partnering with trusted service providers to ensure timely,
              secure, and cost-effective deliveries across India.
            </p>
          </div>

          {/* Right (smaller + no border issue) */}
          <div className="flex justify-center">
            <Image
              src="/images/services.png"
              alt="Courier services"
              width={340}
              height={240}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-28">

          {/* Service Block Helper */}
          {[
            {
              title: "Document Courier Services",
              desc:
                "Secure and time-sensitive delivery of important documents such as agreements, legal papers, invoices, and confidential records.",
              img: "/images/Document.png",
              reverse: false,
            },
            {
              title: "Parcel & Bulk Shipments",
              desc:
                "Optimized shipping solutions for single parcels or bulk consignments, focusing on speed and cost-efficiency.",
              img: "/images/parcel.png",
              reverse: true,
            },
            {
              title: "India Post Coordination",
              desc:
                "Economical and wide-coverage deliveries coordinated through India Post, ideal for remote and semi-urban locations.",
              img: "/images/India Post.png",
              reverse: false,
            },
            {
              title: "Local & Intercity Deliveries",
              desc:
                "Reliable same-city and intercity deliveries with a strong focus on last-mile efficiency.",
              img: "/images/Intercity.png",
              reverse: true,
            },
            {
              title: "Business & Corporate Logistics",
              desc:
                "Scalable logistics coordination for enterprises with transparent processes and dependable partners.",
              img: "/images/Parcel.png",
              reverse: false,
            },
            {
              title: "Multi-Courier Optimization",
              desc:
                "Intelligent courier selection based on destination, urgency, and cost for optimal delivery performance.",
              img: "/images/multi.png",
              reverse: true,
            },
          ].map((s, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                s.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={s.reverse ? "order-2 md:order-1" : ""}>
                <h2 className="text-3xl font-bold text-gray-900">
                  {s.title}
                </h2>
                <p className="mt-4 text-gray-600 max-w-xl">
                  {s.desc}
                </p>
              </div>

              <div
                className={`flex justify-center ${
                  s.reverse ? "order-1 md:order-2" : ""
                }`}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  width={300}
                  height={220}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Service Attributes
          </p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            What We Offer
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fast Delivery", icon: "🚚", desc: "Urgent timelines met efficiently." },
              { title: "PAN India Coverage", icon: "📍", desc: "Remote to metro reach." },
              { title: "Smart Courier Selection", icon: "📦", desc: "Optimized for cost & speed." },
              { title: "Secure Handling", icon: "🔒", desc: "Trusted partner network." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (FIXED – NO LONGER BLAND) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our Services?
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Cost-Effective",
                desc: "Competitive pricing through intelligent courier planning.",
                icon: "💰",
              },
              {
                title: "Reliable Coordination",
                desc: "Clear communication and dependable logistics execution.",
                icon: "🤝",
              },
              {
                title: "Trusted Network",
                desc: "Established courier partners across India.",
                icon: "🌐",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl border hover:shadow-md transition"
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
          Need a Reliable Courier Partner?
        </h2>
        <p className="mt-4 text-gray-600">
          Contact us today and let us handle your delivery needs.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
