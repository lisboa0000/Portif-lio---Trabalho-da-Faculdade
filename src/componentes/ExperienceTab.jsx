import { useLanguage } from '../contextos/useLanguage';
import { experienceData } from '../dados/experienceData';
import SectionHeader from './SectionHeader';

export default function ExperienceTab() {
  const { t } = useLanguage();

  return (
    <div className="tab-pane active" id="experience">
      <SectionHeader label={t('CARREIRA', 'CAREER')} title={<>&lt;Experience/&gt;</>} />
      <div className="experience-grid">
        {experienceData.map(exp => (
          <div key={exp.id} className="bento-card exp-card">
            <div className="exp-header">
              <span className="company">{exp.company}</span>
              {exp.current && <span className="status-tag">{t('ATUAL', 'CURRENT')}</span>}
            </div>
            <h3>{t(exp.titlePt, exp.titleEn)}</h3>
            <p className="date">{t(exp.datePt, exp.dateEn)}</p>
            <p className="exp-desc">{t(exp.descPt, exp.descEn)}</p>
            <ul className="tags" aria-label={t('Tecnologias utilizadas', 'Technologies used')}>
              {exp.tags.map(tg => <li key={tg}>{tg}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
