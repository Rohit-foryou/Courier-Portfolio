import ServiceCard from "./ServiceCard";
import {
  FileText,
  Package,
  Building2,
  MapPin,
  Briefcase,
  Shuffle,
} from "lucide-react";

export default function ServiceOverview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Logistics Solutions Tailored for You
          </h2>
          <p className="mt-4 text-gray-600">
            We provide end-to-end courier and logistics coordination by
            partnering with trusted service providers to ensure speed, safety,
            and cost-efficiency across every shipment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          <ServiceCard
            title="Document Courier Services"
            description="Secure and time-sensitive delivery of important documents, agreements, and legal papers using reliable courier partners."
            icon={<FileText size={20} />}
          />

          <ServiceCard
            title="Parcel & Bulk Shipments"
            description="Affordable parcel and bulk shipping solutions for individuals and businesses, optimized for speed and cost."
            icon={<Package size={20} />}
          />

          <ServiceCard
            title="India Post Coordination"
            description="End-to-end support for India Post shipments, offering wide coverage, economical rates, and dependable service."
            icon={<Building2 size={20} />}
          />

          <ServiceCard
            title="Local & Intercity Deliveries"
            description="Efficient last-mile and intercity delivery solutions tailored to meet urgent and scheduled shipment needs."
            icon={<MapPin size={20} />}
          />

          <ServiceCard
            title="Business & Corporate Logistics"
            description="Custom logistics coordination for enterprises, ensuring reliable movement of documents and parcels at scale."
            icon={<Briefcase size={20} />}
          />

          <ServiceCard
            title="Multi-Courier Optimization"
            description="We choose the best courier partner for each shipment based on cost, speed, and destination requirements."
            icon={<Shuffle size={20} />}
          />
        </div>
      </div>
    </section>
  );
}
