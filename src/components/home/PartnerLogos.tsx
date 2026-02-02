import mayoClinicLogo from "@/assets/q2.jpeg";
import clevelandClinicLogo from "@/assets/q1.png";
import johnsHopkinsLogo from "@/assets/fda.png";
import cipla from "@/assets/cipla.jpg";
import who from "@/assets/who.png";
import ema from "@/assets/ema.png";
import sun from "@/assets/sun.jpeg";
import reddy from "@/assets/reddy.jpeg";
import bd from "@/assets/bd.png";
import mm from "@/assets/3m.png";
import ch from "@/assets/ch.jpg";
import sph from "@/assets/sph.jpg";
import bb from "@/assets/bb.png";

const partners = [
  { name: "Med Next", logo: mayoClinicLogo },
  { name: "Med Unity", logo: clevelandClinicLogo },
  { name: "FDA", logo: johnsHopkinsLogo },
  { name: "Cipla", logo: cipla },
  { name: "WHO", logo: who },
  { name: "EMA", logo: ema },
  { name: "Dr. Reddy", logo: reddy },
  { name: "Becton Dickinson", logo: bd },
  { name: "3M Health Care", logo: mm },
  { name: "Cardinal Health", logo: ch },
  { name: "B Braun", logo: bb },
  { name: "Sun Pharma", logo: sph },
];

export function PartnerLogos() {

  return (
    <section className="relative py-10 bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white opacity-60" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight">
            Trusted by the{" "}
            <span className="font-serif italic font-medium">
              finest organizations
            </span>
          </h2>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Fade masks on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling wrapper */}
          <div className="overflow-hidden">
            <div className="flex w-max gap-8 md:gap-12 animate-scroll hover:pause-animation">
              {partners.map((partner, index) => (

                <div
                  key={`${partner.name}-${index}`}
                  className="group flex flex-col items-center flex-shrink-0"
                >
                  {/* Circular Logo Container */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-1 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg hover:border-gray-200">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Title / Name */}
                  <h3 className="mt-4 text-sm font-medium text-gray-900 tracking-wide group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for animation */}
      <style>{`
       @keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.pause-animation:hover {
  animation-play-state: paused;
}

      `}</style>
    </section>
  );
}
