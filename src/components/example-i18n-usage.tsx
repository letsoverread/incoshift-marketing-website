import React from "react";
import { useI18n } from "@/contexts/I18nContext";

// Example component showing how to use the i18n hook
export const ExampleI18nUsage: React.FC = () => {
  const { t, language, setLanguage } = useI18n();

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Example i18n Usage</h3>

      <div className="space-y-2">
        <p>
          <strong>Current Language:</strong> {language}
        </p>

        <p>
          <strong>About Title:</strong> {t("about.title")}
        </p>
        <p>
          <strong>About Subtitle:</strong> {t("about.subtitle")}
        </p>

        <p>
          <strong>Services Title:</strong> {t("services.title")}
        </p>
        <p>
          <strong>Services Subtitle:</strong> {t("services.subtitle")}
        </p>

        <div className="mt-4">
          <button
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Switch to {language === "en" ? "Vietnamese" : "English"}
          </button>
        </div>
      </div>
    </div>
  );
};
