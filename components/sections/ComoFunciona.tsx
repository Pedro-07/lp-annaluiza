import { Section } from '../Section';
import { WhatsappCta } from '../WhatsappCta';
import { AgendamentoCard } from '../AgendamentoCard';

/**
 * Como funciona a primeira consulta — 3 passos. Tira o medo do desconhecido
 * e do "quanto custa só pra perguntar". CTA logo depois de reduzir o atrito.
 * Passos são estrutura de processo (não dado da cliente); números em display.
 */
const steps = [
  { n: '1', title: 'Você manda mensagem', text: 'Pelo WhatsApp, sem formulário.' },
  { n: '2', title: 'A gente agenda', text: 'Escolhemos o melhor horário para você.' },
  { n: '3', title: 'Atendemos você', text: 'Avaliação e plano de cuidado, sem promessa vazia.' },
];

export function ComoFunciona() {
  return (
    <Section id="como-funciona" title="Como funciona a primeira consulta">
      <ol className="space-y-6">
        {steps.map((s) => (
          <li key={s.n} className="flex gap-4">
            <span className="font-display text-3xl font-bold text-petroleo">
              {s.n}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-petroleo">
                {s.title}
              </h3>
              <p className="text-sm text-petroleo-muted">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <AgendamentoCard />
      </div>
      <div className="mt-4">
        <WhatsappCta
          variant="link"
          label="Prefere falar antes? Chame no WhatsApp"
        />
      </div>
    </Section>
  );
}
