import { useLanguage } from '../contextos/useLanguage';
import { videosData } from '../dados/videosData';
import SectionHeader from './SectionHeader';

function YoutubePlayer({ youtubeId, title }) {
  const { t } = useLanguage();

  if (!youtubeId) {
    return (
      <div className="video-player video-player--placeholder" role="img" aria-label={title}>
        <span aria-hidden="true">▶</span>
        <p>{t('Vídeo em breve', 'Video coming soon')}</p>
      </div>
    );
  }

  return (
    <div className="video-player">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function VideoCard({ video }) {
  const { lang } = useLanguage();
  const title = lang === 'en' ? video.titleEn : video.titlePt;
  const desc = lang === 'en' ? video.descEn : video.descPt;

  const formattedDate = new Date(`${video.publishedAt}T00:00:00`).toLocaleDateString(
    lang === 'en' ? 'en-US' : 'pt-BR',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <article className="bento-card video-card">
      <YoutubePlayer youtubeId={video.youtubeId} title={title} />
      <h3>{title}</h3>
      <p className="date">
        <time dateTime={video.publishedAt}>{formattedDate}</time>
      </p>
      <p className="project-desc">{desc}</p>
    </article>
  );
}

export default function VideosTab() {
  const { t } = useLanguage();

  return (
    <div className="tab-pane active" id="videos">
      <SectionHeader label={t('APRESENTAÇÕES', 'PRESENTATIONS')} title={<>&lt;Videos/&gt;</>} />
      <p className="projects-intro">
        {t(
          'Vídeos de apresentação dos projetos, com título, descrição, player incorporado do YouTube e data de publicação.',
          'Project presentation videos, with title, description, embedded YouTube player and publish date.'
        )}
      </p>
      <div className="projects-grid videos-grid">
        {videosData.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
