import { site } from '@/content/site';

/**
 * CTA de WhatsApp — a única ação da página. Número confirmado, CTA ativo.
 * Destaque por FORMA e PESO: raio generoso, área de toque confortável,
 * semibold. Ciano nunca entra. Ver docs/design/paleta-contraste.md.
 *
 * variant 'solid'   — petróleo com texto branco (padrão, sobre fundo claro)
 * variant 'inverse' — branco com texto petróleo (sobre fundo petróleo, 13.9:1)
 * variant 'link'    — link de menor peso (alternativa ao agendamento online)
 */
export function WhatsappCta({
  label = 'Marcar consulta no WhatsApp',
  full = false,
  variant = 'solid',
}: {
  label?: string;
  full?: boolean;
  variant?: 'solid' | 'inverse' | 'link';
}) {
  const href = `https://wa.me/${site.contact.whatsapp.e164}?text=${encodeURIComponent(
    site.contact.whatsappMessage,
  )}`;

  if (variant === 'link') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-petroleo underline underline-offset-4 hover:text-petroleo-hover"
      >
        {label}
      </a>
    );
  }

  const tone =
    variant === 'inverse'
      ? 'bg-white text-petroleo hover:bg-white/90'
      : 'bg-petroleo text-white hover:bg-petroleo-hover';

  const base = [
    'inline-flex items-center justify-center gap-2',
    'rounded-cta px-8 py-4 min-h-[3.25rem]',
    'text-base font-semibold',
    'shadow-sm transition-colors',
    tone,
    full ? 'w-full' : '',
  ].join(' ');

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {label}
    </a>
  );
}
