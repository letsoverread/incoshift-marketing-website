import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="w-full border-neutral-200 dark:border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("footer.companyName")}
            </h3>
            <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
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
