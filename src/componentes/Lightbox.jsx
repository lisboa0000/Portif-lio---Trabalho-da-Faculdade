import { useEffect, useCallback } from 'react';

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const active = items[index];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!active) return null;

  return (
    <div
      id="lightbox"
      className="lightbox active"
      onClick={e => {
        if (e.target.id === 'lightbox') onClose();
      }}
    >
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose}>&times;</button>
        <img id="lightbox-img" src={active.image} alt={active.title} className="lightbox-img" />
        <button className="lightbox-nav lightbox-prev" onClick={onPrev}>&#10094;</button>
        <button className="lightbox-nav lightbox-next" onClick={onNext}>&#10095;</button>
        <div className="lightbox-caption">{active.title}</div>
      </div>
    </div>
  );
}
