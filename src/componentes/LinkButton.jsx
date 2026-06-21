export default function LinkButton({ href, label, icon }) {
  const enabled = !!href;
  const content = (
    <>
      {icon && <span className="project-link-icon" aria-hidden="true">{icon}</span>}
      <span>{label}</span>
    </>
  );

  if (!enabled) {
    return (
      <span
        className="project-link-btn project-link-btn--disabled"
        title={label}
        aria-disabled="true"
        role="button"
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link-btn"
      aria-label={label}
    >
      {content}
    </a>
  );
}
