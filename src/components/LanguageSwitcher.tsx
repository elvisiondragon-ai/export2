import { useLocale } from "@/contexts/LocaleContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLocale();

  const languages = [
    { code: "en", label: "English (SGD)" },
    { code: "id", label: "Bahasa Indo (IDR)" },
    { code: "ms", label: "Bahasa Melayu (MYR)" },
  ] as const;

  return (
    <div className="fixed top-4 right-4 z-[60]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-4 py-2 text-sm font-bold text-primary backdrop-blur-md transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <Globe className="h-4 w-4" />
            <span>{languages.find(l => l.code === lang)?.label || "English"}</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border-primary/20">
          {languages.map((l) => (
            <DropdownMenuItem
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`cursor-pointer ${lang === l.code ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}
            >
              {l.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
