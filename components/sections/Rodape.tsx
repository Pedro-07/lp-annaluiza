import { site, formatAddress } from '@/content/site';
import { Field } from '../Field';
import { WhatsappCta } from '../WhatsappCta';

/**
 * Rodapé / fechamento — CTA final + identificação legal.
 * Fundo petróleo, texto branco (13.9:1). CRO e responsável técnico também
 * aqui (além da seção Sobre). Sem antes/depois, sem promessa de resultado.
 */
export function Rodape() {
  return (
    <footer className="bg-petroleo px-5 py-14 text-white">
      <div className="mx-auto w-full max-w-content">
        <p className="font-display text-2xl font-bold">Vamos marcar sua consulta?</p>

        <div className="mt-6">
          <WhatsappCta full variant="inverse" />
        </div>

        <div className="mt-10 space-y-2 text-sm text-white/80">
          <p>
            <span className="text-white/60">WhatsApp: </span>
            <a className="underline" href={`https://wa.me/${site.contact.whatsapp.e164}`}>
              {site.contact.whatsapp.display}
            </a>
          </p>
          <p>
            <span className="text-white/60">Instagram: </span>
            <a
              className="underline"
              href={`https://instagram.com/${site.contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.contact.instagram}
            </a>
          </p>
          <p>
            <span className="text-white/60">E-mail: </span>
            <a className="underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
          </p>
          <p>
            <span className="text-white/60">Endereço: </span>
            {formatAddress(site.location.address)}
          </p>
        </div>

        {/* Identificação legal — exigência do Código de Ética */}
        <div className="mt-8 border-t border-white/20 pt-6 text-xs text-white/70">
          <p>
            Responsável técnica: <Field value={site.responsible.name} /> ·{' '}
            <Field value={site.responsible.cro} />
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {site.brand.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
