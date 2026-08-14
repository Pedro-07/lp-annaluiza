import { isPending, type Maybe } from '@/content/site';
import { PendingMark } from './Pending';

/**
 * Renderiza um texto vindo do conteúdo. Se ainda for `pending`, mostra o
 * marcador âmbar no lugar. Um único caminho para todo dado da cliente.
 */
export function Field({
  value,
  className,
}: {
  value: Maybe<string>;
  className?: string;
}) {
  if (isPending(value)) return <PendingMark value={value} />;
  return <span className={className}>{value}</span>;
}
