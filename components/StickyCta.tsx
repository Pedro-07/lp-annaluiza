'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';

/**
 * Barra fixa no rodapé da viewport — só no mobile, e só DEPOIS que o guia de
 * botões do topo sai de vista. Repete as duas ações principais lado a lado:
 * Agendar online (principal, petróleo) | WhatsApp (contorno). Some no desktop.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const whatsHref = `https://wa.me/${site.contact.whatsapp.e164}?text=${encodeURIComponent(
    site.contact.whatsappMessage,
  )}`;
  const btn =
    'inline-flex min-h-[3rem] flex-1 items-center justify-center rounded-cta px-4 text-sm font-semibold transition-colors';

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-petroleo/10 bg-white/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex w-full max-w-content gap-2">
        <a
          href={site.scheduling.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className={`${btn} bg-petroleo text-white hover:bg-petroleo-hover`}
        >
          {site.scheduling.ctaLabel}
        </a>
        <a
          href={whatsHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className={`${btn} border border-petroleo text-petroleo hover:bg-petroleo/5`}
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
