import { useLanguage } from '../contextos/useLanguage';
import { spawnParticles } from '../utilitarios/particles';
import badgePythonBackend from '../assets/imagens/badge-python-backend.png';

const SKILLS = ['Python', 'Lua', 'JavaScript', 'GenAI', 'SQL', 'MySQL', 'HeidiSQL', 'Docker', 'FastAPI'];

export default function AboutTab() {
  const { t } = useLanguage();

  return (
    <div className="tab-pane active" id="about">
      <main className="content-grid">
        <section className="bento-card skills-section">
          <span className="bento-label">SKILLS</span>
          <div className="skills-tags">
            {SKILLS.map(skill => (
              <span key={skill} onMouseEnter={e => spawnParticles(e.currentTarget)}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="bento-card certs-section">
          <span className="bento-label">{t('Brazão', 'Badge')}</span>
          <div className="certs-container">
            <img src={badgePythonBackend} alt="Python Backend Badge" />
          </div>
        </section>

        <section className="bento-card education-section">
          <span className="bento-label">{t('FORMAÇÕES', 'EDUCATION')}</span>
          <h3>{t('Tecnólogo em Análise e Desenvolvimento de Sistemas', 'Systems Analysis and Development Technologist')}</h3>
          <p className="university">{t('Instituto Universidade Tiradentes', 'Tiradentes University Institute')}</p>
          <p className="date">Jun 2025 – Dez 2027</p>
          <br />
          <h3>{t('Curso Programador Web', 'Web Developer Course')}</h3>
          <p className="university">{t('Instituto Federal do Rio Grande do Sul', 'Federal Institute of Rio Grande do Sul')}</p>
          <p className="date">Jun 2024 – Jul 2024</p>
        </section>

        <section className="bento-card status-section">
          <span className="bento-label">STATUS</span>
          <ul className="status-list">
            <li><span className="dot"></span> <span>{t('Disponível para conversas', 'Available for conversations')}</span></li>
            <li><span className="dot orange"></span> <span>{t('Serviços Freelancer', 'Freelance Services')}</span></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
