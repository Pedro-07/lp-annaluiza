import { site, isPending } from '@/content/site';
import { PendingMark } from '../Pending';
import { MonogramaPattern } from '../MonogramaPattern';

/**
 * Faixa dos pilares — Atendimento · Satisfação · Expressão.
 * Topo: pattern do monograma (grade de quadrados branco/ciano/petróleo).
 * Abaixo: os três pilares no uso nobre do ciano — fundo ciano cheio com
 * texto PETRÓLEO por cima (6.8:1, passa AA). Ver paleta-contraste.md.
 *
 * As frases dos pilares (`pillar.note`) são interpretação da identidade, não
 * dado da clínica — seguem pending até aprovação do texto proposto.
 */
export function Pilares() {
  return (
    <section id="pilares">
      <MonogramaPattern />

      <div className="bg-ciano px-5 py-14">
        <div className="mx-auto grid w-full max-w-content gap-8 sm:grid-cols-3">
          {site.pillars.map((pillar) => (
            <div key={pillar.name}>
              <h3 className="font-display text-xl font-bold text-petroleo">
                {pillar.name}
              </h3>
              <div className="mt-2 text-sm text-petroleo">
                {isPending(pillar.note) ? (
                  <PendingMark value={pillar.note} />
                ) : (
                  pillar.note
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Monograma "nn" em vetor entra nos quadrados do pattern — item 15. */}
        {isPending(site.brand.monogram) && (
          <div className="mx-auto mt-8 w-full max-w-content">
            <PendingMark value={site.brand.monogram} />
          </div>
        )}
      </div>
    </section>
  );
}
