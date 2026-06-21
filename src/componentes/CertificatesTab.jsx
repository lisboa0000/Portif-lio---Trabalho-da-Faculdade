import { useMemo, useState } from 'react';
import { useLanguage } from '../contextos/useLanguage';
import { certificatesData, certificateCategories } from '../dados/certificatesData';
import Lightbox from './Lightbox';
import SectionHeader from './SectionHeader';

export default function CertificatesTab() {
  const { lang, t } = useLanguage();
  const [category, setCategory] = useState('');
  const [dateOrder, setDateOrder] = useState('newest');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    let list = category
      ? certificatesData.filter(c => c.categories.includes(category))
      : [...certificatesData];

    list.sort((a, b) => {
      const diff = b.date.getTime() - a.date.getTime();
      return dateOrder === 'newest' ? diff : -diff;
    });

    return list;
  }, [category, dateOrder]);

  const lightboxItems = useMemo(
    () =>
      filtered.map(c => ({
        image: c.image,
        title: lang === 'en' ? c.titleEn : c.title,
      })),
    [filtered, lang]
  );

  const formatDate = (date) => {
    const locale = lang === 'en' ? 'en-US' : 'pt-BR';
    return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const resetFilters = () => {
    setCategory('');
    setDateOrder('newest');
  };

  return (
    <div className="tab-pane active" id="certificados">
      <SectionHeader
        label={t('CREDENCIAIS', 'CREDENTIALS')}
        title={t('<Certificados/>', '<Certificates/>')}
      />

      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="category-filter" className="filter-label">{t('Categoria:', 'Category:')}</label>
          <select
            id="category-filter"
            className="filter-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">{t('Todas as categorias', 'All categories')}</option>
            {certificateCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="date-filter" className="filter-label">{t('Ordenar por data:', 'Sort by date:')}</label>
          <select
            id="date-filter"
            className="filter-select"
            value={dateOrder}
            onChange={e => setDateOrder(e.target.value)}
          >
            <option value="newest">{t('Mais recentes', 'Newest first')}</option>
            <option value="oldest">{t('Mais antigos', 'Oldest first')}</option>
          </select>
        </div>
        <button id="reset-filters" className="reset-btn" onClick={resetFilters}>
          {t('Limpar Filtros', 'Clear Filters')}
        </button>
      </div>

      <div className="results-info">
        <p id="results-count">
          <span>{t('Mostrando', 'Showing')}</span>{' '}
          <span id="visible-count">{filtered.length}</span>{' '}
          <span>{t('de', 'of')}</span>{' '}
          <span id="total-count">{certificatesData.length}</span>{' '}
          <span>{t('certificados', 'certificates')}</span>
        </p>
      </div>

      <div className="certificates-gallery" id="certificates-gallery">
        {filtered.map((cert, idx) => {
          const title = lang === 'en' ? cert.titleEn : cert.title;
          const desc = lang === 'en' ? cert.descriptionEn : cert.description;
          return (
            <div
              key={cert.id}
              className="certificate-item"
              data-cert-id={cert.id}
            >
              <div className="cert-header">
                <div className="cert-info">
                  <h3 className="cert-title">{title}</h3>
                  <p className="cert-date">{formatDate(cert.date)}</p>
                  <p className="cert-description">{desc}</p>
                </div>
                <img
                  src={cert.image}
                  alt={title}
                  className="cert-thumbnail"
                  onClick={() => setLightboxIndex(idx)}
                />
              </div>
              <div className="cert-tags">
                {cert.categories.map(cat => (
                  <span key={cat} className="cert-tag">{cat}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div id="no-results" className="no-results">
          <p>{t('Nenhum certificado encontrado com os filtros selecionados.', 'No certificates found with the selected filters.')}</p>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => (i - 1 + lightboxItems.length) % lightboxItems.length)}
          onNext={() => setLightboxIndex(i => (i + 1) % lightboxItems.length)}
        />
      )}
    </div>
  );
}
