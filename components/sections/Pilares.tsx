import { site } from '@/content/site';
import { PatternFaixa } from '../PatternFaixa';

/**
 * Faixa dos pilares — Atendimento · Satisfação · Expressão.
 * Topo: pattern do monograma (PatternFaixa). Abaixo: os três pilares no uso
 * nobre do ciano — fundo ciano cheio com texto PETRÓLEO por cima (6.8:1, passa
 * AA). Ver docs/design/paleta-contraste.md.
 */
export function Pilares() {
  return (
    <section id="pilares">
      <PatternFaixa />

      <div className="bg-ciano px-5 py-14">
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
