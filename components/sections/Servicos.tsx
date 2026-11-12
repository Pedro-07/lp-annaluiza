import { site } from '@/content/site';
import { Section } from '../Section';

/**
 * Serviços — lista enxuta para a pessoa se reconhecer num tratamento.
 * Não é catálogo: cada item traz o problema na linguagem do paciente.
 * Sem CTA próprio: a ação fica na barra fixa e no rodapé.
 */
export function Servicos() {
  return (
    <Section id="servicos" title="O que a Anna Luiza cuida">
      <ul className="space-y-2">
        {site.services.map((s) => (
          <li
            key={s.title}
            className="rounded-lg border border-petroleo/15 px-3 py-2"
          >
            <h3 className="font-display text-sm font-bold text-petroleo">
              {s.title}
            </h3>
            <p className="mt-0.5 text-xs text-petroleo-muted">{s.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
