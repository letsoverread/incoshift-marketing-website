import { BubbleBackground } from "@/components/ui/shadcn-io/bubble-background";
import { AnimatedTestimonials } from "@/components/ui/shadcn-io/animated-testimonials";
import { ArrowRight } from "lucide-react";
import { IncoShiftServices } from "@/components/incoshift-services";
import { IncoShiftAboutUs } from "@/components/incoshift-about-us";
import { IncoShiftHowItWorks } from "@/components/incoshift-how-it-works";
import { useI18n } from "@/contexts/I18nContext";
import contentData from "@/content.json";

export default function HomePage() {
  const { t, language } = useI18n();

  return (
    <div className="w-full h-full">
      <BubbleBackground
        interactive
        className="flex items-center justify-center px-4 relative w-full h-screen mb-12 sm:mb-16 md:mb-18 lg:mb-20"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 mx-auto h-[50vh] sm:h-[60vh] md:h-[700px] w-full max-w-7xl bg-black/20 rounded flex flex-col justify-center items-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-center">
            {t("home.hero.title")}
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto text-center">
            {t("home.hero.subtitle")}
          </p>
          <div className="mt-8 md:mt-10  flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group inline-flex items-center gap-2 rounded-full border border-white/60 bg-transparent px-6 py-3 text-base md:text-lg font-medium text-white transition-colors duration-200 hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer"
            >
              {t("home.hero.cta")}
              <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </BubbleBackground>

      <section id="about">
        <IncoShiftAboutUs />
      </section>
      <section id="services">
        <IncoShiftServices />
      </section>
      <section id="how-it-works">
        <IncoShiftHowItWorks />
      </section>

      <section id="testimonials">
        <div className="max-w-4xl sm:text-center mx-auto px-5 sm:px-6 flex flex-col justify-center items-center gap-3 md:gap-4">
          <div>
            <div className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 sm:px-5 font-medium text-neutral-700 text-sm sm:text-base">
              {t("home.testimonials.badge")}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
              {t("home.testimonials.title")}
            </h2>
            <p className="mt-2 sm:mt-4 text-neutral-500 text-base md:text-lg leading-relaxed">
              {t("home.testimonials.subtitle")}
            </p>
          </div>
        </div>
        <div>
          <AnimatedTestimonials
            testimonials={contentData[language].home.testimonialsData}
            autoplay
            className="pb-0 sm:pb-20"
          />
        </div>
      </section>
    </div>
  );
}
