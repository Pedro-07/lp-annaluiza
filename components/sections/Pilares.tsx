import { site } from '@/content/site';

/**
 * Faixa dos pilares — Atendimento · Satisfação · Expressão.
 * Fundo branco com texto petróleo — transição limpa a partir do hero petróleo.
 *
 * O PatternFaixa (grade de smiles) saiu daqui: em alto contraste logo abaixo do
 * hero, competia com o CTA. Pode voltar como divisória fina entre seções mais
 * abaixo, se desejado.
 */
export function Pilares() {
  return (
    <section id="pilares">
      <div className="bg-white px-5 py-14">
        <div className="mx-auto grid w-full max-w-content gap-8 sm:grid-cols-3">
          {site.pillars.map((pillar) => (
            <div key={pillar.name}>
              <h3 className="font-display text-xl font-bold text-petroleo">
                {pillar.name}
              </h3>
              <p className="mt-2 text-sm text-petroleo">{pillar.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
