import { useLocale } from "@/contexts/LocaleContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, currency, toggleLang } = useLocale();

  return (
    <div className="fixed top-4 right-4 z-[60]">
      <button
        onClick={toggleLang}
        className="flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-4 py-2 text-sm font-bold text-primary backdrop-blur-md transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
      >
        <Globe className="h-4 w-4" />
        <span>{lang.toUpperCase()}</span>
        <span className="text-muted-foreground/50">|</span>
        <span>{currency}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
