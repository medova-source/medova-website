import mayoClinicLogo from "@/assets/q2.jpeg";
import clevelandClinicLogo from "@/assets/q1.png";
import johnsHopkinsLogo from "@/assets/marriot.png";
import massGeneralLogo from "@/assets/images.jpeg";

const partners = [
  { name: "Med Next", logo: mayoClinicLogo },
  { name: "Med Unity", logo: clevelandClinicLogo },
  { name: "Marriott", logo: johnsHopkinsLogo },
  { name: "Hilton", logo: massGeneralLogo },
];

export function PartnerLogos() {
  return (
    <section className="relative py-10 bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white opacity-60" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Header Section - Reduced Margins */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          {/* <span className="inline-block py-0.5 px-2.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">
            Our Network
          </span> */}
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight">
            Trusted by the{" "}
            <span className="font-serif italic font-medium">
              finest organizations
            </span>
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center"
            >
              {/* Circular Logo Container */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-1 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg hover:border-gray-200">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title / Name */}
              <h3 className="mt-4 text-sm font-medium text-gray-900 tracking-wide group-hover:text-primary transition-colors duration-300">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
