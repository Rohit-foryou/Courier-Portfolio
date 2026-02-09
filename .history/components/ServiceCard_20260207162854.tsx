type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}
