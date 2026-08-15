import { MonogramaGlifo } from './MonogramaGlifo';

/**
 * Faixa decorativa do pattern da marca: grade horizontal de quadrados de lado
 * igual, fundos alternando branco / ciano / petróleo, com o monograma herdando
 * a cor por currentColor.
 *
 * Combinações conforme docs/design/paleta-contraste.md:
 *   branco   → monograma petróleo ou ciano
 *   ciano    → monograma petróleo
 *   petróleo → monograma branco ou ciano
 *   NUNCA branco sobre ciano.
 *
 * Decorativa: aria-hidden no wrapper, sem texto por cima. Altura configurável;
 * o lado do quadrado acompanha a altura e a faixa corta o excesso na largura —
 * adapta à tela sem esticar.
 */
type Variant = { readonly bg: string; readonly ink: string };

// Ordem do design (ciclo de 6):
//   1 branco   → ciano       4 petróleo → ciano
//   2 petróleo → branco      5 branco   → petróleo
//   3 ciano    → petróleo    6 petróleo → branco
const VARIANTS: readonly Variant[] = [
  { bg: 'bg-white', ink: 'text-ciano' },
  { bg: 'bg-petroleo', ink: 'text-white' },
  { bg: 'bg-ciano', ink: 'text-petroleo' },
  { bg: 'bg-petroleo', ink: 'text-ciano' },
  { bg: 'bg-white', ink: 'text-petroleo' },
  { bg: 'bg-petroleo', ink: 'text-white' },
];

export function PatternFaixa({
  height = 48,
  className = '',
}: {
  height?: number;
  className?: string;
}) {
  // Quadrados suficientes para cobrir telas largas; o wrapper corta o excesso.
  const count = Math.ceil(3840 / height) + 2;
  const glyph = Math.round(height * 0.62);

  return (
    <div
      aria-hidden="true"
      className={`flex w-full overflow-hidden border-y border-petroleo/10 ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const v = VARIANTS[i % VARIANTS.length];
        return (
          <span
            key={i}
            className={`flex flex-none items-center justify-center ${v.bg} ${v.ink}`}
            style={{ width: height, height }}
          >
            <MonogramaGlifo style={{ width: glyph, height: glyph }} />
          </span>
        );
      })}
    </div>
  );
}
