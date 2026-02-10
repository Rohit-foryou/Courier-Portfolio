import CTASection from "../../components/CTASection";

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Courier & Logistics Services
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide reliable courier and logistics coordination by partnering
            with trusted service providers, ensuring timely, secure, and
            cost-effective deliveries across locations.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* Service 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Document Courier Services
            </h2>
            <p className="mt-4 text-gray-600">
              We specialize in the secure and time-sensitive delivery of
              important documents such as agreements, legal papers, invoices,
              and confidential records. Based on urgency and destination, we
              coordinate with the most reliable courier partner to ensure safe
              handling and on-time delivery.
            </p>
          </div>

          {/* Service 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Parcel & Bulk Shipments
            </h2>
            <p className="mt-4 text-gray-600">
              Whether you are shipping a single parcel or bulk consignments, we
              offer optimized delivery solutions focused on cost-efficiency and
              speed. Our multi-courier approach allows us to select the best
              option based on size, weight, and delivery timeline.
            </p>
          </div>

          {/* Service 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              India Post Coordination
            </h2>
            <p className="mt-4 text-gray-600">
              For locations requiring extensive coverage or economical delivery,
              we coordinate shipments through India Post. This ensures wide
              reach, dependable service, and affordability, especially for
              remote and semi-urban areas.
            </p>
          </div>

          {/* Service 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Local & Intercity Deliveries
            </h2>
            <p className="mt-4 text-gray-600">
              We manage local and intercity deliveries with a focus on last-mile
              efficiency. From same-city deliveries to intercity logistics, we
              ensure smooth coordination and reliable timelines.
            </p>
          </div>

          {/* Service 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Corporate & Business Logistics
            </h2>
            <p className="mt-4 text-gray-600">
              Businesses rely on us for consistent and scalable logistics
              coordination. We help enterprises manage regular courier needs
              with dependable partners, clear communication, and transparent
              processes.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Why Choose Our Services
          </h2>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <li>✔ Multiple courier partner options</li>
            <li>✔ Cost-effective delivery solutions</li>
            <li>✔ Reliable coordination & follow-up</li>
            <li>✔ Coverage across local & remote locations</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
