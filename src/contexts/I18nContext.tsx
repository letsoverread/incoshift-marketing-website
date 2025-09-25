/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import contentData from "../content.json";

export type Language = "en" | "vi";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getNestedValue: (obj: Record<string, unknown>, path: string) => unknown;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("vi"); // Default to Vietnamese

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Helper function to get nested values from object using dot notation
  const getNestedValue = (
    obj: Record<string, unknown>,
    path: string
  ): unknown => {
    return path.split(".").reduce<unknown>((current: unknown, key: string) => {
      if (
        current !== null &&
        typeof current === "object" &&
        key in (current as Record<string, unknown>)
      ) {
        return (current as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);
  };

  // Translation function
  const t = (key: string): string => {
    const translation = getNestedValue(
      contentData[language] as Record<string, unknown>,
      key
    );
    return (typeof translation === "string" && translation) || key; // Return the key if translation not found
  };

  const value: I18nContextType = {
    language,
    setLanguage,
    t,
    getNestedValue,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

// Custom hook to use the i18n context
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
