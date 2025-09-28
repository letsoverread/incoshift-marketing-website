import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import logo from "@/assets/logo.png";
import { CONTACT_FORM_EN, CONTACT_FORM_VI } from "@/lib/utils";

export default function Footer() {
  const { t, language } = useI18n();
  return (
    <footer className="w-full border-neutral-200 dark:border-white/10 bg-background">
      {/* Contact Section */}
      <div id="contact" className="dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center py-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 md:mb-6">
            {t("footer.getInTouch.title")}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4 md:mb-6">
            {t("footer.getInTouch.description")}
          </p>
          <button
            onClick={() => {
              window.open(
                language === "vi" ? CONTACT_FORM_VI : CONTACT_FORM_EN,
                "_blank"
              );
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-900 dark:border-white px-6 py-3 text-base font-medium text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          >
            {t("footer.getInTouch.cta")}
            <ArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="text-left">
            <img
              src={logo}
              alt={t("footer.companyName")}
              className="h-12 w-auto mb-3"
            />
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("footer.companyName")}
            </h3>
            <p className="mt-1 text-neutral-500 dark:text-neutral-400 ">
              {t("footer.description")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-white/20 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-900 hover:text-neutral-100 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-white/20 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-900 hover:text-neutral-100 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-white/20 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-900 hover:text-neutral-100 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 tracking-wide uppercase">
              {t("footer.services.title")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.services.webDesign")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.services.uiUx")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.services.ecommerce")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.services.maintenance")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 tracking-wide uppercase">
              {t("footer.company.title")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.company.portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.company.careers")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.company.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 tracking-wide uppercase">
              {t("footer.resources.title")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.resources.blog")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.resources.faqs")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.resources.pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.resources.support")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 tracking-wide uppercase">
              {t("footer.legal.title")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.legal.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.legal.terms")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.legal.contact")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {t("footer.legal.support")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              © {new Date().getFullYear()} {t("footer.companyName")}.{" "}
              {t("footer.copyright")}
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <span>{t("footer.bottom.developedBy")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
