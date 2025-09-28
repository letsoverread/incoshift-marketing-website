import { useI18n } from "@/contexts/I18nContext";
import contentData from "@/content.json";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CONTACT_FORM_EN, CONTACT_FORM_VI } from "@/lib/utils";

function StepCard({
  step,
  index,
}: {
  step: {
    number: string;
    title: string;
    description: string;
    details: string[];
  };
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="w-full relative z-10"
      style={{ perspective: 1500 }}
    >
      <motion.div
        className="relative"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 10 }}
      >
        <div className="relative group cursor-pointer">
          {/* Card glow effect */}
          <motion.div
            className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
            animate={{
              boxShadow: [
                "0 0 10px 2px rgba(23,23,23,0.03)",
                "0 0 15px 5px rgba(23,23,23,0.05)",
                "0 0 10px 2px rgba(23,23,23,0.03)",
              ],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />

          {/* Traveling light beam effect */}
          <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
            {/* Top light beam */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] w-[50%] bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50"
              animate={{
                left: ["-50%", "100%"],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                left: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            />

            {/* Right light beam */}
            <motion.div
              className="absolute top-0 right-0 h-[50%] w-[2px] bg-gradient-to-b from-transparent via-neutral-400 to-transparent opacity-50"
              animate={{
                top: ["-50%", "100%"],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                top: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 0.8,
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: 0.8,
                },
              }}
            />

            {/* Bottom light beam */}
            <motion.div
              className="absolute bottom-0 right-0 h-[2px] w-[50%] bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50"
              animate={{
                right: ["-50%", "100%"],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                right: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 1.6,
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: 1.6,
                },
              }}
            />

            {/* Left light beam */}
            <motion.div
              className="absolute bottom-0 left-0 h-[50%] w-[2px] bg-gradient-to-b from-transparent via-neutral-400 to-transparent opacity-50"
              animate={{
                bottom: ["-50%", "100%"],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                bottom: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 2.4,
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: 2.4,
                },
              }}
            />
          </div>

          {/* Card border glow */}
          <div className="absolute -inset-[0.5px] rounded-2xl bg-gradient-to-r from-neutral-300/10 via-neutral-400/20 to-neutral-300/10 opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Glass card background */}
          <div className="relative bg-white lg:bg-neutral-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-neutral-200 overflow-hidden">
            {/* Header row */}
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: index * 0.2 + 0.1,
                }}
                className="w-12 h-12 rounded-full bg-neutral-900 text-white font-bold text-lg flex items-center justify-center"
              >
                {step.number}
              </motion.div>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.2 }}
              className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200"
            >
              {step.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
              className="mt-2 text-neutral-600 text-base md:text-lg leading-relaxed"
            >
              {step.description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.4 }}
              className="mt-5 space-y-3"
            >
              {step.details.map((detail: string, detailIndex: number) => (
                <li key={detailIndex} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-green-600 flex-shrink-0" />
                  <span className="text-neutral-600 text-sm md:text-base leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function IncoShiftHowItWorks() {
  const { language } = useI18n();
  const section = contentData[language].howItWorksSection;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Layout: Sticky intro left, timeline right */}
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Intro (sticky on desktop) */}
        <div className="lg:col-span-1 ">
          <div className="lg:sticky lg:top-24 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 sm:px-5 font-medium text-neutral-700 text-sm sm:text-base">
              {section.badge}
            </div>
            <div className="text-center lg:text-left mt-3 md:mt-4">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                {section.title}
              </h2>
              <p className="mt-2 sm:mt-4 text-neutral-500 text-base md:text-lg leading-relaxed">
                {section.subtitle}
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    window.open(
                      language === "vi" ? CONTACT_FORM_VI : CONTACT_FORM_EN,
                      "_blank"
                    );
                  }}
                  className="group inline-flex items-center justify-center rounded-full px-6 py-3 border border-neutral-900 text-base font-medium bg-neutral-900 transition-colors cursor-pointer text-neutral-100 hover:bg-neutral-800"
                >
                  <span>{section.cta}</span>
                  <ArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative pl-0 lg:pl-8">
            {/* Vertical rail */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 hidden lg:block" />

            <div className="space-y-6 md:space-y-14">
              {section.steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step card with 3D effects */}
                  <StepCard step={step} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
