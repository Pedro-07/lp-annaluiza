import { site } from '@/content/site';

/**
 * Card de agendamento online — o caminho PRINCIPAL. Resolve sozinho, funciona
 * fora do horário comercial e não depende de alguém responder.
 *
 * Fundo ciano com texto petróleo (uso nobre do ciano, ver paleta-contraste).
 * O botão sólido petróleo é a ação dominante da página; o WhatsApp fica como
 * link de menor peso ao lado. Link externo abre em nova aba com noopener.
 */
export function AgendamentoCard() {
  const s = site.scheduling;
  return (
    <div className="rounded-2xl bg-ciano p-6 shadow-sm">
      <a
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-cta bg-petroleo px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-petroleo-hover"
      >
        {s.ctaLabel}
      </a>

      {/* Linha discreta de LGPD — plataforma externa. */}
      <p className="mt-3 text-xs text-petroleo">
        O agendamento acontece no {s.platform}, uma plataforma externa — seus
        dados são tratados por ela.
      </p>
    </div>
  );
}
