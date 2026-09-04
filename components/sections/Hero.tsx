import { site } from '@/content/site';
import { Field } from '../Field';
import { WhatsappCta } from '../WhatsappCta';
import { MonogramaGlifo } from '../MonogramaGlifo';
import { LogoMarca } from '../LogoMarca';

/**
 * Herói — enxuto de propósito: uma decisão, não três. Logo → tagline + uma
 * linha de apoio concreta → UMA ação principal (botão ciano pill sobre o azul,
 * o único ponto ciano da dobra) → um secundário discreto no WhatsApp.
 *
 * Fundo petróleo, texto branco; botão ciano com texto petróleo (uso nobre do
 * ciano, ver docs/design/paleta-contraste.md) é onde o olho deve cair.
 * CRO/responsável saiu daqui: segue em destaque no Sobre e no rodapé (regra
 * "em destaque, não só no rodapé" cumprida).
 */
export function Hero() {
  const s = site.scheduling;
  const { city, state } = site.location.address;

  return (
    <header
      id="hero"
      className="relative overflow-hidden bg-petroleo px-5 pb-14 pt-16 text-white"
    >
      {/* Marca d'água: o traço grande do monograma, discreto, no canto. */}
      <MonogramaGlifo className="pointer-events-none absolute -right-10 -top-6 h-64 w-64 text-ciano opacity-[0.08]" />

      <div className="relative mx-auto w-full max-w-content">
        {/* Marca — logotipo, sem painel sobre o azul */}
        <LogoMarca bare />

        {/* Assinatura da marca + uma linha de apoio concreta (o que é/onde) */}
        <h1 className="mt-8 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
          <Field value={site.brand.positioning} />
        </h1>
        <p className="mt-3 text-sm text-white/65">
          Odontologia em {city} – {state} · atendimento particular, com hora
          marcada.
        </p>

        {/* Ação principal — botão ciano pill direto sobre o azul (sem card) */}
        <div className="mt-8">
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-ciano px-8 py-4 text-base font-semibold text-petroleo shadow-sm transition-colors hover:bg-ciano/90"
          >
            {s.ctaLabel}
          </a>
          {/* Disclaimer enxuto — detalhe do momento do clique, não de entrada */}
          <p className="mt-2 text-xs text-white/45">Agendamento via {s.platform}</p>
        </div>

        {/* Secundário discreto — WhatsApp. A barra fixa só aparece após o hero. */}
        <div className="mt-5">
          <WhatsappCta
            variant="link-inverse"
            label="Prefere falar antes? Chame no WhatsApp"
          />
        </div>
      </div>
    </header>
  );
}
