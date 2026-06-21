import { useLanguage } from '../contextos/useLanguage';
import { useTheme } from '../contextos/useTheme';
import avatarImg from '../assets/imagens/foto-perfil.png';
import logoUnit from '../assets/imagens/logo-unit.png';

export default function ProfileHeader() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bento-grid">
      <div className="profile-card bento-card">
        <div className="profile-header">
          <div className="avatar-container">
            <img src={avatarImg} alt="Heleno Lisboa" className="avatar" />
            <div className="status-indicator">
              <span className="dot"></span>
              <span className="status-text">ONLINE</span>
            </div>
          </div>
          <div className="profile-info">
            <button id="theme-toggle" className="theme-btn" title="Alternar Tema" onClick={toggleTheme}>
              {theme === 'light' ? (
                <svg className="moon-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg className="sun-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
                </svg>
              )}
            </button>
            <span className="role-tag">/ Systems Analyst and Developer</span>
            <h1 className="name">&lt;Heleno Lisboa<span className="cursor">|</span>/&gt;</h1>
            <p className="description">
              {t('Analista e Desenvolvedor de Sistemas.', 'Systems Analyst and Developer.')}<br />
              {t(
                'Eu crio sites para o seu produto, scripts para FiveM e sistemas web de alto desempenho.',
                'I build websites for your product, FiveM scripts and high-performance web systems.'
              )}
            </p>
            <div className="location">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Jeremoabo, BA
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-cards">
        <div className="bento-card community-card">
          <span className="bento-label">LISBOADEV STORE</span>
          <h3>{t('Servidor de Scripts para FIVEM', 'FiveM Scripts Server')}</h3>
        </div>
        <div className="bento-card work-card">
          <span className="bento-label">{t('Universidade Tiradentes', 'Tiradentes University')}</span>
          <p>{t('Cursando Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)', 'Currently studying Systems Analysis and Development (ADS)')}</p>
          <br />
          <img src={logoUnit} alt="Unit" className="company-logo" />
        </div>
        <div className="bento-card work-card alura-card">
          <span className="bento-label">{t('Conecte-se', 'Connect')}</span>
          <p>{t('Me encontre também em:', 'Find me also on:')}</p>
          <div className="profile-social-links">
            <a
              href="https://github.com/lisboa0000"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-social-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 19 19" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/helenolisboadev/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/dev_lisboa/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
