import { site } from '@/content/site';
import { Field } from '../Field';
import { WhatsappCta } from '../WhatsappCta';
import { AgendamentoCard } from '../AgendamentoCard';
import { MonogramaGlifo } from '../MonogramaGlifo';

/**
 * Herói — quem é, o que resolve, e a ação. Primeira tela do celular.
 * Marca em Comfortaa (display). Monograma grande e muito claro atrás do
 * título (decorativo, aria-hidden, não compete com a leitura). CTA primário.
 */
export function Hero() {
  return (
    <header className="relative overflow-hidden px-5 pb-12 pt-16">
      {/* Monograma decorativo: grande, muito claro, atrás do título. */}
      <MonogramaGlifo className="pointer-events-none absolute -right-10 -top-6 h-64 w-64 text-ciano opacity-20" />

      <div className="relative mx-auto w-full max-w-content">
        {/* Marca — wordmark em Comfortaa */}
        <p className="font-display text-xl font-bold text-petroleo">
          {site.brand.name}
        </p>

        {/* Posicionamento — headline, com peso e respiro (não é legenda) */}
        <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-petroleo sm:text-4xl">
          <Field value={site.brand.positioning} />
        </h1>

        {/* Caminho principal: agendamento online */}
        <div className="mt-8">
          <AgendamentoCard />
        </div>

        {/* Alternativa de menor peso: WhatsApp como link */}
        <div className="mt-4">
          <WhatsappCta
            variant="link"
            label="Prefere falar antes? Chame no WhatsApp"
          />
        </div>

        {/* CRO em destaque (Código de Ética) — petróleo, mesmo tamanho */}
        <p className="mt-6 text-sm text-petroleo-muted">
          Responsável técnica:{' '}
          <span className="font-semibold text-petroleo">
            <Field value={site.responsible.name} />
          </span>{' '}
          ·{' '}
          <span className="font-semibold text-petroleo">
            <Field value={site.responsible.cro} />
          </span>
        </p>
      </div>
    </header>
  );
}
