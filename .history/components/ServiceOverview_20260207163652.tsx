import ServiceCard from "./ServiceCard";

export default function ServiceOverview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          What We Do
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Document Courier"
            description="Fast and secure delivery of important documents using trusted courier partners."
          />
          <ServiceCard
            title="Parcel & Bulk Shipments"
            description="Affordable parcel and bulk delivery solutions for individuals and businesses."
          />
          <ServiceCard
            title="India Post Services"
            description="Reliable coordination with India Post for wide coverage and cost-effective delivery."
          />
        </div>
      </div>
    </section>
  );
}
