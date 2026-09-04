'use client';

import { useEffect, useState } from 'react';
import { WhatsappCta } from './WhatsappCta';

/**
 * CTA fixo no rodapé da viewport — só no mobile, e só DEPOIS que o usuário
 * rola além do hero. No hero, o secundário discreto do WhatsApp já basta; a
 * barra entra quando o hero sai de vista, para não competir com o CTA principal
 * na primeira dobra. Some no desktop (md+), onde os CTAs inline bastam.
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

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-petroleo/10 bg-white/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto w-full max-w-content">
        <WhatsappCta full />
      </div>
    </div>
  );
}
