import { WhatsappCta } from './WhatsappCta';

/**
 * CTA fixo no rodapé da viewport — só no mobile. É o mesmo botão persistente
 * (não conta como bloco novo): a pessoa nunca fica a mais de um toque do
 * WhatsApp. Some no desktop (md+), onde os CTAs inline já bastam.
 */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-petroleo/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto w-full max-w-content">
        <WhatsappCta full />
      </div>
    </div>
  );
}
