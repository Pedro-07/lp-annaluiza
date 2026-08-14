import { site } from '@/content/site';
import { Section } from '../Section';
import { Field } from '../Field';

/**
 * FAQ curto — perguntas montadas (agendamento, convênio, pagamento, urgência).
 * Cada dúvida não respondida é uma mensagem que não acontece. <details>
 * nativo, sem JS.
 */
export function Faq() {
  return (
    <Section id="faq" title="Perguntas frequentes">
      <div className="space-y-3">
        {site.faq.map((item) => (
          <details
            key={item.question}
            className="rounded-lg border border-petroleo/15 p-4"
          >
            <summary className="cursor-pointer font-semibold text-petroleo">
              {item.question}
            </summary>
            <div className="mt-2 text-sm text-petroleo-muted">
              <Field value={item.answer} />
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
