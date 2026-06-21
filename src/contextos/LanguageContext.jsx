import { useState, useCallback } from 'react';
import { LanguageContext } from './language-context-value';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'pt');

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('lang', next);
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en';
      return next;
    });
  }, []);

  const t = useCallback((pt, en) => (lang === 'en' ? en : pt), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
