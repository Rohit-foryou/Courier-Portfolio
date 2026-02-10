import Image from "next/image";

export default function PartnersPage() {
  const partners = [
    { name: "India Post (Primary Partner)", logo: "/images/img8.png" },
    { name: "Private Courier Partners", logo: "/images/img9.png" },
    { name: "Regional Logistics Providers", logo: "/images/img10.png" },
    { name: "Last-Mile Delivery Networks", logo: "/images/img11.png" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Our Partners
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Built on India Post. Supported by Trusted Couriers.
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our delivery operations are primarily driven by India Post mailing
            services, supported by a reliable network of private and regional
            courier partners when faster or specialized delivery is required.
          </p>
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="
                  flex flex-col items-center justify-center
                  p-6 rounded-xl border bg-gray-50
                  hover:shadow-md hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
                <p className="mt-3 text-sm text-gray-600 text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-medium text-gray-800 max-w-3xl mx-auto">
            We specialize in India Post mailing for PAN India reach and
            cost-effective document delivery, while coordinating private courier
            networks only when delivery timelines demand faster execution.
          </p>
        </div>
      </section>
    </>
  );
}
