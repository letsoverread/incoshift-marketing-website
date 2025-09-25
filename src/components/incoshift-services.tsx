import house from "@/assets/house.jpg";
import building from "@/assets/building.jpg";
import studio from "@/assets/studio.jpg";
import { useI18n } from "@/contexts/I18nContext";
import contentData from "@/content.json";
import { ServiceCard } from "@/components/ui/service-card";

export function IncoShiftServices() {
  const { language } = useI18n();
  const section = contentData[language].servicesSection;
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Section header: Tag + Heading + Subheading */}
        <div className="max-w-4xl text-center sm:text-center mx-auto px-5 sm:px-6 flex flex-col justify-center items-center gap-3 md:gap-4">
          <div>
            <div className="inline-flex items-center rounded-full border border-neutral-900 px-4 py-2 sm:px-6 sm:py-3 font-medium text-neutral-900 text-sm sm:text-base bg-white">
              {section.badge}
            </div>
          </div>
          <div className="sm:mt-1">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {section.title}
            </h2>
            <p className="mt-2 text-neutral-500 text-base md:text-lg leading-relaxed">
              {section.subtitle}
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <ServiceCard
          title={section.cards[0].title}
          bullets={section.cards[0].bullets}
          cta={section.cards[0].cta}
          imageAlt={section.cards[0].imageAlt}
          imageSrc={house}
        />

        <ServiceCard
          title={section.cards[1].title}
          bullets={section.cards[1].bullets}
          cta={section.cards[1].cta}
          imageAlt={section.cards[1].imageAlt}
          imageSrc={building}
        />

        <ServiceCard
          title={section.cards[2].title}
          bullets={section.cards[2].bullets}
          cta={section.cards[2].cta}
          imageAlt={section.cards[2].imageAlt}
          imageSrc={studio}
        />
      </div>
    </section>
  );
}
