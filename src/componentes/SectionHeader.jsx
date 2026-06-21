export default function SectionHeader({ label, title }) {
  return (
    <div className="section-header">
      {label && <span className="bento-label">{label}</span>}
      <h2>{title}</h2>
    </div>
  );
}
