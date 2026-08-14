import { site, formatAddress, formatHours } from '@/content/site';
import { Section } from '../Section';

/**
 * Localização + atendimento — responde "consigo chegar / é perto?".
 * Endereço vira link de rota no Google Maps (sem asset de imagem, sem JS de
 * mapa, sem peso). Região/mapa-imagem removidos: o endereço fixo já resolve.
 */
export function Localizacao() {
  const address = site.location.address;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    formatAddress(address),
  )}`;

  return (
    <Section id="localizacao" title="Onde e quando">
      <dl className="space-y-4 text-sm">
        <div>
          <dt className="font-semibold text-petroleo">Endereço</dt>
          <dd className="text-petroleo-muted">{formatAddress(address)}</dd>
          <dd className="mt-1">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-petroleo underline"
            >
              Ver rota no mapa
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-petroleo">Horários</dt>
          <dd className="text-petroleo-muted">{formatHours(site.location.hours)}</dd>
        </div>
        <div>
          <dt className="font-semibold text-petroleo">Urgência</dt>
          <dd className="text-petroleo-muted">{site.location.urgency}</dd>
        </div>
      </dl>
    </Section>
  );
}
