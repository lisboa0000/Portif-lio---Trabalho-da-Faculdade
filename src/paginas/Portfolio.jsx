import { useEffect, useState } from 'react';
import { useLanguage } from '../contextos/useLanguage';
import { useBootNavigate } from '../ganchos/useBootNavigate';
import BootTransition from '../componentes/BootTransition';
import ProfileHeader from '../componentes/ProfileHeader';
import AboutTab from '../componentes/AboutTab';
import ExperienceTab from '../componentes/ExperienceTab';
import ProjectsTab from '../componentes/ProjectsTab';
import VideosTab from '../componentes/VideosTab';
import CertificatesTab from '../componentes/CertificatesTab';
import ContactTab from '../componentes/ContactTab';
import '../estilo-portfolio.css';
import '../estilo-boot.css';

const TABS = [
  { key: 'about', pt: '[about]', en: '[about]' },
  { key: 'experience', pt: '[experience]', en: '[experience]' },
  { key: 'projects', pt: '[projects]', en: '[projects]' },
  { key: 'videos', pt: '[videos]', en: '[videos]' },
  { key: 'certificados', pt: '[certificados]', en: '[certificates]' },
  { key: 'contact', pt: '[contact]', en: '[contact]' },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const { isBooting, navigateWithBoot, onBootDone } = useBootNavigate();
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    document.body.classList.add('portfolio-page');
    return () => {
      document.body.classList.remove('portfolio-page');
    };
  }, []);

  useEffect(() => {
    document.title = 'Heleno Lisboa — Portfólio';
  }, []);

  return (
    <>
      <a
        href="/"
        className="back-to-hero back-hero-link"
        onClick={e => {
          e.preventDefault();
          navigateWithBoot('/');
        }}
      >
        ← <span>{t('início', 'home')}</span>
      </a>

      <div className="container">
        <ProfileHeader />

        <nav className="nav-menu">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`nav-item${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {t(tab.pt, tab.en)}
            </button>
          ))}
        </nav>

        <div id="tab-content">
          {activeTab === 'about' && <AboutTab />}
          {activeTab === 'experience' && <ExperienceTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'videos' && <VideosTab />}
          {activeTab === 'certificados' && <CertificatesTab />}
          {activeTab === 'contact' && <ContactTab />}
        </div>

        <footer className="main-footer">
          <p>{t('© 2026 heleno_lisboa — todos os direitos reservados', '© 2026 heleno_lisboa — all rights reserved')}</p>
          <div className="social-links">
            <a href="https://github.com/lisboa0000" target="_blank" rel="noopener noreferrer">GH</a>
            <a href="https://www.linkedin.com/in/helenolisboadev/" target="_blank" rel="noopener noreferrer">IN</a>
            <a href="https://www.instagram.com/dev_lisboa/" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://www.tiktok.com/@heleno.lisboadev" target="_blank" rel="noopener noreferrer">TK</a>
            <a href="https://discord.gg/vPdFfEFUUF" target="_blank" rel="noopener noreferrer">DC</a>
          </div>
        </footer>
      </div>

      {isBooting && <BootTransition onDone={onBootDone} />}
    </>
  );
}
