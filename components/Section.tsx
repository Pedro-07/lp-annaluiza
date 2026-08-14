import type { ReactNode } from 'react';

/** Casca de seção: espaçamento e coluna mobile-first consistentes. */
export function Section({
  id,
  title,
  children,
  className = '',
}: {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-14 ${className}`}>
      <div className="mx-auto w-full max-w-content">
        {title && (
          <h2 className="mb-6 font-display text-2xl font-bold text-petroleo">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
