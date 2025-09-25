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
      <section className="relative w-full h-screen">
        <BubbleBackground
          interactive
          className="flex items-center justify-center px-4"
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
                  window.open("https://tally.so/r/mY2yB0", "_blank");
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/60 bg-transparent px-6 py-3 text-base md:text-lg font-medium text-white transition-colors duration-200 hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer"
              >
                {t("home.hero.cta")}
                <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </BubbleBackground>
      </section>

      <section id="about">
        <IncoShiftAboutUs />
      </section>
      <section id="services">
        <IncoShiftServices />
      </section>
      <section id="how-it-works">
        <IncoShiftHowItWorks />
      </section>

      <section id="testimonials" className="py-8">
        <div className="max-w-4xl sm:text-center mx-auto px-5 sm:px-6 flex flex-col justify-center items-center gap-3 md:gap-4">
          <div>
            <div className="inline-flex items-center rounded-full border border-neutral-900 px-4 py-2 sm:px-6 sm:py-3 font-medium text-neutral-900 text-sm sm:text-base">
              {t("home.testimonials.badge")}
            </div>
          </div>
          <div className="sm:mt-1">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {t("home.testimonials.title")}
            </h2>
            <p className="mt-2 text-neutral-500 text-base md:text-lg leading-relaxed">
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

      <section id="contact" className="py-16  dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {t("footer.getInTouch.title")}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            {t("footer.getInTouch.description")}
          </p>
          <button
            onClick={() => {
              window.open("https://tally.so/r/mY2yB0", "_blank");
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-900 dark:border-white px-6 py-3 text-base font-medium text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          >
            {t("footer.getInTouch.cta")}
            <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
