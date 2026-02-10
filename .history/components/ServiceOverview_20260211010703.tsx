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
            India Post–Focused Courier Solutions
          </h2>
          <p className="mt-4 text-gray-600">
            We specialize in India Post mailing and document delivery, supported
            by reliable private courier coordination when faster or alternative
            shipping options are required.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* PRIMARY SERVICE */}
          <ServiceCard
            title="India Post Mailing Services"
            description="Specialized handling of Speed Post, Registered Post, and Parcel services with PAN India reach, economical pricing, and dependable delivery."
            icon={<Building2 size={20} />}
          />

          <ServiceCard
            title="Document Courier Services"
            description="Secure and time-sensitive delivery of important documents such as legal papers, agreements, and official records — primarily via India Post."
            icon={<FileText size={20} />}
          />

          <ServiceCard
            title="Parcel & Bulk Shipments"
            description="Cost-effective parcel and bulk shipment coordination using India Post and select private courier partners based on destination and urgency."
            icon={<Package size={20} />}
          />

          <ServiceCard
            title="Local & Intercity Deliveries"
            description="Reliable last-mile and intercity delivery solutions, coordinated through India Post or private couriers when required."
            icon={<MapPin size={20} />}
          />

          <ServiceCard
            title="Business & Corporate Logistics"
            description="Ongoing courier coordination for businesses, including document circulation, invoicing, and regular dispatch requirements."
            icon={<Briefcase size={20} />}
          />

          <ServiceCard
            title="Multi-Courier Optimization"
            description="When India Post timelines don’t match urgency, we intelligently select trusted private courier partners for faster delivery."
            icon={<Shuffle size={20} />}
          />
        </div>
      </div>
    </section>
  );
}
