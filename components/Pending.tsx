import type { Pending } from '@/content/site';

/**
 * Marcador VISÍVEL de conteúdo pendente da cliente.
 * Âmbar, tracejado — impossível confundir com o design final e impossível
 * ir ao ar sem alguém notar. Substitui o "TODO em comentário", que sumiria
 * no build e deixaria a página com lacuna invisível.
 */
export function PendingMark({ value }: { value: Pending }) {
  return (
    <span
      role="note"
      className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-amber-500 bg-amber-50 px-2 py-1 align-middle text-xs font-medium text-amber-800"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 flex-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      PENDENTE — {value.label}
    </span>
  );
}
