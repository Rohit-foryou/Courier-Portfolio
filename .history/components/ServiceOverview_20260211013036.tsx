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
            India Post–Focused Mailing Services
          </h2>

          <p className="mt-4 text-gray-600">
            As an authorized Post Office Franchise, we specialize in India Post
            mailing services, while coordinating private couriers only when
            faster delivery timelines are required.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* PRIMARY SERVICE */}
          <ServiceCard
            title="India Post Mailing Services"
            description="Professional handling of Speed Post, Registered Post, Parcel, and Bulk Mail services with PAN India reach, economical pricing, and official processing."
            icon={<Building2 size={20} />}
          />

          <ServiceCard
            title="Document Dispatch (Legal & Official)"
            description="Secure dispatch of legal documents, agreements, notices, and official records — primarily routed through India Post for authenticity and tracking."
            icon={<FileText size={20} />}
          />

          <ServiceCard
            title="Parcel & Bulk Mail Handling"
            description="Efficient handling of parcels and bulk mail for businesses and institutions, reducing queues and paperwork at post offices."
            icon={<Package size={20} />}
          />

          <ServiceCard
            title="Local & Intercity Deliveries"
            description="Coordination of local and intercity deliveries via India Post and trusted courier partners when timelines demand flexibility."
            icon={<MapPin size={20} />}
          />

          <ServiceCard
            title="Business & Institutional Mailing"
            description="Dedicated support for law firms, banks, and businesses with recurring mailing, invoicing, and documentation needs."
            icon={<Briefcase size={20} />}
          />

          <ServiceCard
            title="Alternate Courier Coordination"
            description="When India Post timelines are not suitable, we assist with reliable private courier coordination for faster delivery."
            icon={<Shuffle size={20} />}
          />
        </div>
      </div>
    </section>
  );
}
