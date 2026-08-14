import { site } from '@/content/site';

/**
 * CTA de WhatsApp — a única ação da página. Número confirmado, CTA ativo.
 *
 * Botão e títulos são ambos petróleo, então o destaque vem de FORMA e PESO,
 * nunca de cor: preenchimento sólido, raio generoso, área de toque
 * confortável, peso semibold. Ciano NÃO entra aqui (texto branco sobre ciano
 * dá 2.0:1). Ver docs/design/paleta-contraste.md.
 */
export function WhatsappCta({
  label = 'Marcar consulta no WhatsApp',
  full = false,
}: {
  label?: string;
  full?: boolean;
}) {
  const base = [
    'inline-flex items-center justify-center gap-2',
    'rounded-cta bg-petroleo px-8 py-4 min-h-[3.25rem]',
    'text-base font-semibold text-white',
    'shadow-sm transition-colors hover:bg-petroleo-hover',
    full ? 'w-full' : '',
  ].join(' ');

  const href = `https://wa.me/${site.contact.whatsapp.e164}?text=${encodeURIComponent(
    site.contact.whatsappMessage,
  )}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {label}
    </a>
  );
}
