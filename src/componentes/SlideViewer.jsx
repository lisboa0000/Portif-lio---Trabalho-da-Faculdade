import { useEffect, useCallback, useState } from 'react';

export default function SlideViewer({ slides, title, onClose }) {
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex(i => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex(i => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    },
    [onClose, goPrev, goNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!slides || slides.length === 0) return null;

  return (
    <div
      id="slide-viewer"
      className="lightbox slideshow active"
      onClick={e => {
        if (e.target.id === 'slide-viewer') onClose();
      }}
    >
      <div className="lightbox-content slideshow-content">
        <button className="lightbox-close" onClick={onClose} aria-label="Fechar">&times;</button>

        <img
          src={slides[index]}
          alt={`${title} — slide ${index + 1}`}
          className="lightbox-img slideshow-img"
        />

        {slides.length > 1 && (
          <>
            <button className="lightbox-nav lightbox-prev" onClick={goPrev} aria-label="Slide anterior">
              &#10094;
            </button>
            <button className="lightbox-nav lightbox-next" onClick={goNext} aria-label="Próximo slide">
              &#10095;
            </button>
          </>
        )}

        <div className="lightbox-caption slideshow-caption">
          {title} — {index + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
