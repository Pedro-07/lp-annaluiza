import type { CSSProperties } from 'react';
import { MonogramaGlifo } from './MonogramaGlifo';

/**
 * Logotipo AnnaLuiza — recriação fiel da marca oficial (logo.png):
 * fundo petróleo, wordmark em Comfortaa branco e, no lugar do "nn", o próprio
 * MONOGRAMA em ciano (os olhos + o sorriso da carinha). "Odontologia" em branco,
 * espaçado. O monograma é o glifo vetorial já vetorizado em MonogramaGlifo.tsx,
 * aqui reto (rotation=0) porque o wordmark é horizontal — o 10° é do selo.
 *
 * Ciano sobre petróleo é o uso correto do acento (contraste alto); a regra de
 * "ciano nunca como texto" vale sobre BRANCO — ver docs/design/paleta-contraste.md.
 */
export function LogoMarca({
  className,
  style,
  bare = false,
}: {
  className?: string;
  style?: CSSProperties;
  /** Sem o painel petróleo — para usar sobre um fundo já petróleo. */
  bare?: boolean;
}) {
  return (
    <span
      className={
        (bare
          ? 'inline-flex flex-col '
          : 'inline-flex flex-col rounded-2xl bg-petroleo px-6 py-5 ') +
        (className ?? '')
      }
      style={style}
      role="img"
      aria-label="Anna Luiza Odontologia"
    >
      {/* Wordmark: A + [monograma ciano no lugar do "nn"] + aLuiza */}
      <span className="font-display text-4xl font-bold leading-none text-white sm:text-5xl">
        A
        {/* Slot do "nn": reserva a largura das duas arcadas; o glifo (olhos +
            sorriso) é posicionado por cima, olhos na altura do x, sorriso abaixo. */}
        <span
          className="relative inline-block align-baseline"
          style={{ width: '1.54em', height: '1em' }}
          aria-hidden="true"
        >
          <MonogramaGlifo
            rotation={0}
            className="absolute left-1/2 top-[0.1em] h-[1.78em] w-[1.9em] -translate-x-1/2 text-ciano"
          />
        </span>
        {/* "a" fecha "Anna" (bold); "Luiza" é mais leve, como na marca */}
        a<span className="font-normal">Luiza</span>
      </span>

      {/* Odontologia — alinhado à direita e com largura ~ "Luiza", então
          começa sob o "L", como na marca oficial. */}
      <span className="mt-1 self-end font-display text-[0.7rem] font-normal uppercase tracking-[0.09em] text-white">
        Odontologia
      </span>
    </span>
  );
}
