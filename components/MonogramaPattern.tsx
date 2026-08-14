// Faixa decorativa do pattern da marca: grade de quadrados alternando
// branco / ciano / petróleo — o ritmo de cor definido na identidade.
// O monograma "nn" (vetor da cliente, item 15) entra dentro dos quadrados
// depois; por isso a seção Pilares mostra o marcador âmbar correspondente.
// Puramente decorativa: aria-hidden, fora da árvore acessível.
const CYCLE = ['bg-white', 'bg-ciano', 'bg-petroleo'] as const;

export function MonogramaPattern() {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="flex h-8 w-full overflow-hidden border-y border-petroleo/10"
    >
      {Array.from({ length: 48 }).map((_, i) => (
        <span key={i} className={`h-8 w-8 flex-none ${CYCLE[i % 3]}`} />
      ))}
    </div>
  );
}
