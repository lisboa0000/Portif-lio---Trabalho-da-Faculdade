import { useLanguage } from '../contextos/useLanguage';
import SectionHeader from './SectionHeader';

const CONTACTS = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'helenolisboadev@gmail.com',
    href: 'mailto:helenolisboadev@gmail.com',
    external: false,
  },
  {
    id: 'discord',
    label: 'DISCORD',
    value: 'heleno_lisboa',
    href: 'https://discord.com/users/heleno_lisboa',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'in/helenolisboadev',
    href: 'https://www.linkedin.com/in/helenolisboadev/',
    external: true,
  },
];

export default function ContactTab() {
  const { t } = useLanguage();

  return (
    <div className="tab-pane active" id="contact">
      <SectionHeader label={t('FALE COMIGO', 'GET IN TOUCH')} title={<>&lt;Contact/&gt;</>} />
      <div className="contact-grid">
        {CONTACTS.map(contact => (
          <a
            key={contact.id}
            href={contact.href}
            className="bento-card contact-item"
            {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            aria-label={`${contact.label}: ${contact.value}`}
          >
            <span className="bento-label">{contact.label}</span>
            <p>{contact.value}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
