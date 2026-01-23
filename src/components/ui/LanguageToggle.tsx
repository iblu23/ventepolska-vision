import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const languages = ['en', 'de', 'pl'];
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    const newLang = languages[nextIndex];
    i18n.changeLanguage(newLang);
  };

  const getFlag = (lang: string) => {
    switch(lang) {
      case 'en':
        return '🇬🇧';
      case 'de':
        return '🇩🇪';
      case 'pl':
        return '🇵🇱';
      default:
        return '🇬🇧';
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <span className="text-base">{getFlag(i18n.language)}</span>
      {i18n.language === 'en' ? 'EN' : i18n.language === 'de' ? 'DE' : 'PL'}
    </Button>
  );
};
