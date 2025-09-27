import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  bullets: string[];
  cta: string;
  imageAlt: string;
  imageSrc: string;
}

export function ServiceCard({
  title,
  bullets,
  cta,
  imageAlt,
  imageSrc,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100">
      {/* Always-visible on desktop; hidden on mobile/tablet */}
      <div className="absolute right-4 top-6 md:top-8 z-10 hidden lg:block">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch lg:h-[560px]">
        {/* Left content */}
        <div className="order-2 lg:order-1 p-6 md:p-10 flex flex-col justify-end">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {bullets.map((bullet: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    language === "vi" ? CONTACT_FORM_VI : CONTACT_FORM_EN,
                    "_blank"
                  );
                }}
                className="group/button inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100 cursor-pointer"
              >
                {cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        {/* Right image */}
        <div className=" h-56 sm:h-64 md:h-72 lg:h-auto relative lg:w-1/2 p-3 sm:p-4">
          <div className="h-full w-full relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
