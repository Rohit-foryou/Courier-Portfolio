import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="group flex gap-4 p-6 bg-white hover:bg-gray-50 transition rounded-lg">
      
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          🚚
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
          {title}
        </h3>

        <p className="mt-2 text-gray-600">
          {description}
        </p>

        <Link
          href="/services"
          className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-orange-500 hover:gap-2 transition-all"
        >
          Learn more <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
