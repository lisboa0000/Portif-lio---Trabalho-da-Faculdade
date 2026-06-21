import { useEffect } from 'react';
import { useLanguage } from '../contextos/useLanguage';
import { useTheme } from '../contextos/useTheme';
import { useBootNavigate } from '../ganchos/useBootNavigate';
import BootTransition from '../componentes/BootTransition';
import TrueFocus from '../componentes/TrueFocus';
import '../estilo-hero.css';
import '../estilo-boot.css';

export default function Hero() {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isBooting, navigateWithBoot, onBootDone } = useBootNavigate();

  useEffect(() => {
    document.title = 'Heleno Lisboa';
    document.body.classList.add('hero-page');
    return () => {
      document.body.classList.remove('hero-page');
    };
  }, []);

  return (
    <>
      <div className="noise"></div>
      <div className="grid-bg"></div>

      <div className="top-controls">
        <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
          <span className="lang-flag">{lang === 'en' ? '🇺🇸' : '🇧🇷'}</span>
          <span className="lang-label">{lang === 'en' ? 'EN' : 'PT'}</span>
          <span className="lang-sep">|</span>
          <span className="lang-label-alt">{lang === 'en' ? 'PT' : 'EN'}</span>
        </button>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
        </button>
      </div>

      <section className="hero">
        <div className="intro-badge">
          <span className="badge-pill">
            <span className="badge-slash">//</span>
            <span>{t('OLÁ', 'HEY')}</span>
          </span>
          <span className="badge-text">{t('Eu sou', 'I am')}</span>
        </div>

        <h1 className="hero-name">
          <span className="syntax-lt">&lt;</span>Heleno Lisboa<span className="cursor">|</span>
          <span className="syntax-slash">/</span><span className="syntax-gt">&gt;</span>
        </h1>

        <TrueFocus
          key={lang}
          sentence={t('Analista e Desenvolvedor de Sistemas', 'Systems Analyst and Developer')}
        />

        <p className="hero-sub">
          {t(
            'Desenvolvimento de sistemas, scripts FiveM e soluções web de alto desempenho.',
            'Systems development, FiveM scripts and high-performance web solutions.'
          )}
        </p>

        <div className="hero-actions">
          <a
            href="/portfolio"
            className="btn-primary"
            onClick={e => {
              e.preventDefault();
              navigateWithBoot('/portfolio');
            }}
          >
            <span className="btn-icon">[</span>
            <span>{t('ver portfólio', 'view portfolio')}</span>
            <span className="btn-icon">]</span>
          </a>
        </div>

        <div className="location-tag">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>
            {t('Jeremoabo, BA — disponível para projetos', 'Jeremoabo, BA — available for projects')}
          </span>
        </div>
      </section>

      {isBooting && <BootTransition onDone={onBootDone} />}
    </>
  );
}
