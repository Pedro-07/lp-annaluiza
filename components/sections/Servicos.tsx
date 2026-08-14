import { site } from '@/content/site';
import { Section } from '../Section';
import { WhatsappCta } from '../WhatsappCta';

/**
 * Serviços — lista enxuta para a pessoa se reconhecer num tratamento.
 * Não é catálogo: cada item traz o problema na linguagem do paciente.
 * CTA ao fim, quando ela acabou de achar o próprio motivo.
 */
export function Servicos() {
  return (
    <Section id="servicos" title="O que a Anna Luiza cuida">
      <ul className="space-y-4">
        {site.services.map((s) => (
          <li key={s.title} className="rounded-lg border border-petroleo/15 p-4">
            <h3 className="font-display text-lg font-bold text-petroleo">
              {s.title}
            </h3>
            <p className="mt-1 text-sm text-petroleo-muted">{s.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <WhatsappCta label="Tirar minha dúvida no WhatsApp" />
      </div>
    </Section>
  );
}
