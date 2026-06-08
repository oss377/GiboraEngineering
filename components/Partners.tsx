// components/Partners.tsx
"use client";

const partners = [
  { name: "Ethio telecom", logo: "https://via.placeholder.com/150x80?text=Ethio+Telecom" },
  { name: "Safaricom", logo: "https://via.placeholder.com/150x80?text=Safaricom" },
  { name: "Huawei", logo: "https://via.placeholder.com/150x80?text=Huawei" },
  { name: "Nokia", logo: "https://via.placeholder.com/150x80?text=Nokia" },
  { name: "Sino Hydro", logo: "https://via.placeholder.com/150x80?text=Sino+Hydro" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Strategic Ecosystem Partners</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mt-3" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, idx) => (
            <div key={idx} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img src={partner.logo} alt={partner.name} className="h-12 w-auto dark:brightness-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}