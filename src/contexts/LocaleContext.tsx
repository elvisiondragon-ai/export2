import React, { createContext, useContext, useState } from "react";

type Language = "en" | "id" | "ms";
type Currency = "SGD" | "IDR" | "MYR";

interface LocaleContextType {
  lang: Language;
  currency: Currency;
  setLang: (l: Language) => void;
  t: (en: string, id: string, ms?: string) => string;
  formatPrice: (sgd: number) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Exchange rates (approximate based on 20 SGD)
// 20 SGD -> 240,000 IDR
// 20 SGD -> 68 MYR
const SGD_TO_IDR = 12000; // 20 * 12000 = 240000
const SGD_TO_MYR = 3.4;   // 20 * 3.4 = 68

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("en");
  const [currency, setCurrency] = useState<Currency>("SGD");

  const setLang = (l: Language) => {
    setLangState(l);
    if (l === "id") setCurrency("IDR");
    else if (l === "ms") setCurrency("MYR");
    else setCurrency("SGD");
  };

  const t = (en: string, id: string, ms?: string) => {
    if (lang === "id") return id;
    if (lang === "ms") return ms || id; // Fallback to id if ms not provided
    return en;
  };

  const formatPrice = (sgd: number) => {
    if (currency === "SGD") return `SGD ${sgd.toLocaleString("en-SG")}`;
    if (currency === "IDR") {
      const idr = sgd * SGD_TO_IDR;
      return `Rp ${idr.toLocaleString("id-ID")}`;
    }
    if (currency === "MYR") {
      const myr = sgd * SGD_TO_MYR;
      return `MYR ${myr.toLocaleString("en-MY")}`;
    }
    return `SGD ${sgd.toLocaleString("en-SG")}`;
  };

  return (
    <LocaleContext.Provider value={{ lang, currency, setLang, t, formatPrice }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
};
