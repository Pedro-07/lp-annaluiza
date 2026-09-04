import type { CSSProperties } from 'react';

/**
 * Monograma "nn" (olhos + curva do sorriso), INLINE para herdar a cor via
 * currentColor — o que um <img src="*.svg"> não permite. Espelha
 * public/marca/monograma.svg; mantenha os dois em sincronia.
 *
 * Reconstrução fiel (~1,5% em espessura de traço e profundidade do sorriso)
 * a partir do PNG da cliente. O vetor ORIGINAL substitui quando chegar.
 * A rotação de 10° é decisão de design (medida no original), não artefato.
 * Ver public/marca/README.md.
 */
export function MonogramaGlifo({
  className,
  style,
  rotation = 10,
}: {
  className?: string;
  style?: CSSProperties;
  /** Inclinação do glifo. 10° é o padrão do selo; use 0 no wordmark reto. */
  rotation?: number;
}) {
  return (
    <svg
      viewBox="0 0 204 190"
      fill="none"
      stroke="currentColor"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <g transform={`rotate(${rotation} 102 95)`}>
        <path d="M36,91 L36,60.5 A26.5,26.5 0 0 1 89,60.5 L89,91" />
        <path d="M116,91 L116,60.5 A26.5,26.5 0 0 1 169,60.5 L169,91" />
        <path d="M47,138 Q102,170 157,138" />
      </g>
    </svg>
  );
}
