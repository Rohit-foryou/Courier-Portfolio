import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gray-50 py-24">
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

            <p className="mt-6 text-lg text-gray-600">
              We provide end-to-end courier and logistics coordination by
              partnering with trusted service providers to ensure timely,
              secure, and cost-effective deliveries across India.
            </p>
           
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <Image
              src="/images/services.png"
              alt="Courier services"
              width={420}
              height={320}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      {/* CORE SERVICES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Document Courier Services
              </h2>
              <p className="mt-4 text-gray-600">
                Secure and time-sensitive delivery of important documents such as
                agreements, legal papers, invoices, and confidential records.
                We coordinate with reliable courier partners to ensure safe
                handling and on-time delivery.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/document-delivery.png"
                alt="Document delivery"
                width={360}
                height={260}
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/parcel-shipping.png"
                alt="Parcel and bulk shipments"
                width={360}
                height={260}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Parcel & Bulk Shipments
              </h2>
              <p className="mt-4 text-gray-600">
                Whether you are shipping a single parcel or bulk consignments,
                we offer optimized solutions focused on cost-efficiency and
                speed by selecting the best courier partner for each shipment.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                India Post Coordination
              </h2>
              <p className="mt-4 text-gray-600">
                For locations requiring extensive coverage or economical
                delivery, we coordinate shipments through India Post, ensuring
                wide reach, dependable service, and affordability.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/india-post.png"
                alt="India Post coordination"
                width={360}
                height={260}
              />
            </div>
          </div>

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
              {
                title: "Fast & Reliable Delivery",
                desc: "Optimized courier coordination to meet urgent timelines.",
                icon: "🚚",
              },
              {
                title: "PAN India Coverage",
                desc: "Wide delivery reach including remote and semi-urban areas.",
                icon: "📍",
              },
              {
                title: "Multi-Courier Selection",
                desc: "Best courier chosen based on cost, speed, and destination.",
                icon: "📦",
              },
              {
                title: "Secure Handling",
                desc: "Trusted partners ensure safety and accountability.",
                icon: "🔒",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4 text-orange-500">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900">
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
      {/* WHY CHOOSE US */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our Services?
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Cost-Effective Solutions
              </h3>
              <p className="mt-2 text-gray-600">
                Competitive pricing through smart courier selection.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Reliable Coordination
              </h3>
              <p className="mt-2 text-gray-600">
                Clear communication and dependable logistics planning.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Trusted Network
              </h3>
              <p className="mt-2 text-gray-600">
                Partnerships with established courier service providers.
              </p>
            </div>
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
