import { useState } from 'react';
import { useLanguage } from '../contextos/useLanguage';
import { projectsData } from '../dados/projectsData';
import { presentationsData } from '../dados/presentationsData';
import SectionHeader from './SectionHeader';
import LinkButton from './LinkButton';
import SlideViewer from './SlideViewer';

function ProjectCover({ image, title }) {
  if (image) {
    return (
      <div className="project-cover">
        <img src={image} alt={title} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="project-cover project-cover--placeholder" role="img" aria-label={title}>
      <span aria-hidden="true">{'</>'}</span>
    </div>
  );
}

function ProjectCard({ project, onOpenPpt }) {
  const { lang, t } = useLanguage();
  const title = project.title || (lang === 'en' ? project.titleEn : project.titlePt);
  const date = lang === 'en' ? project.dateEn : project.datePt;
  const desc = lang === 'en' ? project.descEn : project.descPt;
  const tag = lang === 'en' ? project.tagEn : project.tagPt;
  const hasSlides = !!project.pptKey && presentationsData[project.pptKey]?.length > 0;

  return (
    <article className={`bento-card project-card${project.featured ? ' featured' : ''}`}>
      <ProjectCover image={project.coverImage} title={title} />

      {tag && <span className="featured-tag">{tag}</span>}

      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p className="project-desc">{desc}</p>

      <ul className="tags" aria-label={t('Tecnologias utilizadas', 'Technologies used')}>
        {project.tags.map(tg => <li key={tg}>{tg}</li>)}
      </ul>

      <div className="project-links">
        <LinkButton href={project.demoUrl} label={t('Demonstração', 'Demo')} icon="🔗" />
        <LinkButton href={project.repoUrl} label="GitHub" icon="💻" />
        <LinkButton href={project.videoUrl} label={t('Vídeo', 'Video')} icon="▶" />
        {hasSlides ? (
          <button
            type="button"
            className="project-link-btn"
            onClick={() => onOpenPpt(project.pptKey, title)}
          >
            <span className="project-link-icon" aria-hidden="true">📄</span>
            <span>PPT</span>
          </button>
        ) : (
          <LinkButton href={project.pptUrl} label="PPT" icon="📄" />
        )}
      </div>
    </article>
  );
}

export default function ProjectsTab() {
  const { t } = useLanguage();
  const [activePpt, setActivePpt] = useState(null); // { key, title }

  const handleOpenPpt = (key, title) => setActivePpt({ key, title });
  const handleClosePpt = () => setActivePpt(null);

  return (
    <div className="tab-pane active" id="projects">
      <SectionHeader label="PORTFOLIO" title={<>&lt;Projects/&gt;</>} />
      <p className="projects-intro">
        {t(
          'Cada projeto reúne imagem de capa, tecnologias utilizadas, link da demonstração e o repositório no GitHub.',
          'Each project gathers a cover image, technologies used, a demo link and the GitHub repository.'
        )}
      </p>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} onOpenPpt={handleOpenPpt} />
        ))}
      </div>

      {activePpt && (
        <SlideViewer
          slides={presentationsData[activePpt.key]}
          title={activePpt.title}
          onClose={handleClosePpt}
        />
      )}
    </div>
  );
}

