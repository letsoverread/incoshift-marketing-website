import { ArrowRight } from "lucide-react";
import aboutUs from "@/assets/about-us.jpg";
import { useI18n } from "@/contexts/I18nContext";
import contentData from "@/content.json";
import { CONTACT_FORM_EN, CONTACT_FORM_VI } from "@/lib/utils";

export function IncoShiftAboutUs() {
  const { language } = useI18n();
  const section = contentData[language].aboutSection;
  return (
    <div>
      <div className="max-w-4xl sm:text-center mx-auto px-5 sm:px-6 flex flex-col justify-center items-center gap-3 md:gap-4">
        <div className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 sm:px-5 font-medium text-neutral-700 text-sm sm:text-base">
          {section.badge}
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
            {section.title}
          </h2>
          <p className="mt-2 sm:mt-4 text-neutral-500 text-base md:text-lg leading-relaxed">
            {section.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 overflow-hidden rounded-3xl bg-white">
          <div className="relative h-56 sm:h-72 md:h-80 lg:h-[700px] lg:order-2">
            <img
              src={aboutUs}
              alt={section.imageAlt}
              className="h-full w-full object-cover rounded-2xl lg:rounded-3xl"
            />
          </div>

          <div className="lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-700">
              {section.webPackage.title}
            </h3>
            <ul className="mt-4 space-y-2 text-neutral-500">
              {section.webPackage.features.map(
                (feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-green-600" />
                    <span>{feature}</span>
                  </li>
                )
              )}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {section.webPackage.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-neutral-200  px-3 py-1 text-xs font-medium text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="my-8 sm:my-10  h-px w-full bg-neutral-200" />

            <h3 className="text-xl md:text-2xl font-bold text-neutral-700">
              {section.marketing.title}
            </h3>
            <ul className="mt-4 space-y-2 text-neutral-500">
              {section.marketing.features.map(
                (feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-green-600" />
                    <span>{feature}</span>
                  </li>
                )
              )}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {section.marketing.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-neutral-200  px-3 py-1 text-xs font-medium text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 sm:mt-14 text-center sm:text-left">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    language === "vi" ? CONTACT_FORM_VI : CONTACT_FORM_EN,
                    "_blank"
                  );
                }}
                className="group inline-flex items-center justify-center rounded-full px-6 py-3 border border-neutral-900 text-base font-medium bg-neutral-900 transition-colors cursor-pointer text-neutral-100"
              >
                <span>{section.cta}</span>
                <ArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
