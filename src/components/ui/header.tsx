import { useRef, useState } from "react";
import type { RefObject } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useI18n } from "@/contexts/I18nContext";

export default function Header() {
  const { language, setLanguage, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShown, setMobileShown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef as unknown as RefObject<HTMLElement>, () =>
    setOpen(false)
  );

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,92%)]">
        <div className="backdrop-blur-xl bg-black/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full px-4 sm:px-6 md:px-7 lg:px-8 py-3 flex items-center justify-between gap-2 md:gap-4">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-2 select-none">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="hidden sm:block font-semibold tracking-tight text-white">
              IncoShift
            </span>
          </a>

          {/* Middle: Nav */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-6 text-white/90">
            <a
              href="#about"
              className="hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              {t("navigation.about")}
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              {t("navigation.services")}
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              {t("navigation.how")}
            </a>
            <a
              href="#testimonials"
              className="hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              {t("navigation.blog")}
            </a>
          </nav>

          {/* Right: Mobile burger (visible on small screens) */}
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden ml-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white/90 hover:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/30"
            onClick={() => {
              setMobileShown(true);
              requestAnimationFrame(() => setMobileOpen(true));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Right: Language dropdown (hidden on mobile when burger is visible) */}
          <div
            className="relative ml-auto md:ml-0 hidden md:block flex-shrink-0"
            ref={dropdownRef}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/90 hover:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-6 overflow-hidden rounded-[3px] shadow-inner">
                  {language === "vi" ? (
                    <img
                      src="https://flagcdn.com/w40/vn.png"
                      alt="Vietnamese flag"
                      className="h-4 w-6 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="English flag"
                      className="h-4 w-6 object-cover"
                      loading="lazy"
                    />
                  )}
                </span>
                <span className="text-sm font-medium">
                  {language === "vi" ? "Vietnamese" : "English"}
                </span>
              </span>
              <svg
                className="h-4 w-4 text-white/70 transition-transform group-aria-expanded:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" />
              </svg>
            </button>

            {open && (
              <div
                role="menu"
                aria-label="Language"
                className="absolute right-0 mt-2 w-44 rounded-2xl border border-neutral-200 bg-white p-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <button
                  role="menuitemradio"
                  aria-checked={language === "vi"}
                  onClick={() => {
                    setLanguage("vi");
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-3 rounded-xl px-3 py-2 text-left text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none"
                >
                  <img
                    src="https://flagcdn.com/w40/vn.png"
                    alt="Vietnamese flag"
                    className="h-4 w-6 object-cover rounded-[3px]"
                    loading="lazy"
                  />
                  <span className="flex-1">Vietnamese</span>
                  {language === "vi" && (
                    <span aria-hidden className="text-neutral-900">
                      ✓
                    </span>
                  )}
                </button>

                <button
                  role="menuitemradio"
                  aria-checked={language === "en"}
                  onClick={() => {
                    setLanguage("en");
                    setOpen(false);
                  }}
                  className="w-full mt-1 flex items-center gap-3 rounded-xl px-3 py-2 text-left text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none"
                >
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="English flag"
                    className="h-4 w-6 object-cover rounded-[3px]"
                    loading="lazy"
                  />
                  <span className="flex-1">English</span>
                  {language === "en" && (
                    <span aria-hidden className="text-neutral-900">
                      ✓
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu - outside header to avoid transform clipping */}
      {mobileShown && (
        <div
          className={`fixed inset-0 z-[60] bg-white text-neutral-900 transition-all duration-300 ease-out ${
            mobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`}
          onTransitionEnd={() => {
            if (!mobileOpen) {
              setMobileShown(false);
            }
          }}
        >
          <div className="absolute top-4 right-4">
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="h-full w-full flex flex-col items-center justify-center gap-6 px-6">
            <a
              href="#about"
              className="text-2xl font-semibold hover:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              {t("navigation.about")}
            </a>
            <a
              href="#services"
              className="text-2xl font-semibold hover:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              {t("navigation.services")}
            </a>
            <a
              href="#how-it-works"
              className="text-2xl font-semibold hover:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              {t("navigation.how")}
            </a>
            <a
              href="#testimonials"
              className="text-2xl font-semibold hover:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              {t("navigation.blog")}
            </a>

            {/* Language switcher on mobile */}
            <div className="mt-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                <button
                  className={`text-sm font-medium ${
                    language === "vi" ? "text-neutral-900" : "text-neutral-500"
                  }`}
                  onClick={() => setLanguage("vi")}
                >
                  Vietnamese
                </button>
                <span className="text-neutral-300">/</span>
                <button
                  className={`text-sm font-medium ${
                    language === "en" ? "text-neutral-900" : "text-neutral-500"
                  }`}
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
