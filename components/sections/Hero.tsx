import { site } from '@/content/site';
import { Field } from '../Field';
import { WhatsappCta } from '../WhatsappCta';

/**
 * Herói — quem é, o que resolve, e a ação. Primeira tela do celular.
 * Marca em Comfortaa (display). CTA primário mais visível da página.
 * [scaffold: monograma "nn", pattern e layout final entram depois]
 */
export function Hero() {
  return (
    <header className="px-5 pb-12 pt-16">
      <div className="mx-auto w-full max-w-content">
        {/* Marca — Comfortaa */}
        <p className="font-display text-3xl font-bold text-petroleo">
          {site.brand.name}
        </p>

        {/* Posicionamento — pergunta 11 */}
        <div className="mt-4 text-lg text-petroleo-muted">
          <Field value={site.brand.positioning} />
        </div>

        <div className="mt-8">
          <WhatsappCta />
        </div>

        {/* Selo de confiança discreto — CRO da responsável */}
        <p className="mt-6 text-sm text-petroleo-muted">
          Responsável técnica: <Field value={site.responsible.name} />{' '}
          · <Field value={site.responsible.cro} />
        </p>
      </div>
    </header>
  );
}
