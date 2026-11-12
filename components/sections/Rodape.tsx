import { site } from '@/content/site';
import { Field } from '../Field';

/**
 * Rodapé enxuto — fechamento com a ação principal, contatos numa linha e a
 * identificação legal (Código de Ética: responsável técnica + CRO).
 * Endereço não se repete aqui: está em "Onde e quando", logo acima.
 * Fundo petróleo, texto branco (13.9:1).
 */
export function Rodape() {
  const links = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/${site.contact.whatsapp.e164}?text=${encodeURIComponent(
        site.contact.whatsappMessage,
      )}`,
    },
    {
      label: 'Instagram',
      href: `https://www.instagram.com/${site.contact.instagram.replace('@', '')}/`,
    },
    { label: 'E-mail', href: `mailto:${site.contact.email}` },
  ];

  return (
    <footer className="bg-petroleo px-5 py-14 text-white">
      <div className="mx-auto w-full max-w-content">
        <p className="font-display text-2xl font-bold">Vamos marcar sua consulta?</p>

        <a
          href={site.scheduling.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-cta bg-white px-8 py-4 text-base font-semibold text-petroleo shadow-sm transition-colors hover:bg-white/90"
        >
          {site.scheduling.ctaLabel}
        </a>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-white/85 underline underline-offset-4 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Identificação legal — exigência do Código de Ética */}
        <div className="mt-8 border-t border-white/20 pt-6 text-xs text-white/70">
          <p>
            Responsável técnica: <Field value={site.responsible.name} /> ·{' '}
            <Field value={site.responsible.cro} />
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {site.brand.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
