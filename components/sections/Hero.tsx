import type { ReactNode } from 'react';
import { site } from '@/content/site';
import { Field } from '../Field';
import { LogoMarca } from '../LogoMarca';
import { MonogramaGlifo } from '../MonogramaGlifo';

/**
 * Tela principal — formato "guia de links", pensado para o celular.
 *
 *  ┌ foto (55% da tela) ──┐  foto da profissional/clínica + H1 por cima
 *  ├ painel branco ───────┤  outra cor: botões grandes (agendar, WhatsApp,
 *  │                      │  como chegar). Instagram fica de fora: quase
 *  │                      │  todo mundo chega aqui vindo de lá.
 *  └ ⌄ mais informações ──┘  fecha a tela; o resto vem ao rolar/tocar
 *
 * Sem foto (site.hero.photo = null) o topo usa o fundo petróleo com o
 * monograma — a página continua bonita até a foto autorizada chegar.
 *
 * Cores dentro de docs/design/paleta-contraste.md: texto branco sobre
 * petróleo/foto escurecida; ícone petróleo sobre círculo ciano (6.8:1);
 * botão principal petróleo com texto branco.
 */
export function Hero() {
  const photo = site.hero.photo;
  const { neighborhood, city } = site.location.address;
  const whatsHref = `https://wa.me/${site.contact.whatsapp.e164}?text=${encodeURIComponent(
    site.contact.whatsappMessage,
  )}`;
  const mapsHref = site.location.directionsUrl;

  return (
    // A tela principal ocupa exatamente uma tela (100svh): ~55% foto, o resto
    // botões, e "Mais informações" fechando o rodapé da tela. O resto do site
    // só aparece ao rolar ou tocar em "Mais informações".
    <header id="hero" className="flex min-h-[100svh] flex-col bg-white">
      {/* ── Topo: foto + H1 — 55% da tela. Medido no navegador do Instagram
             (iPhone, ~650px visíveis): com 55% os três botões e "Mais
             informações" cabem com folga. Só telas realmente baixas (≤600px,
             ex. iPhone SE dentro do Instagram) caem para 45%. ── */}
      <div className="relative h-[55svh] min-h-[14rem] flex-none overflow-hidden bg-petroleo [@media(max-height:600px)]:h-[45svh]">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: photo.position ?? 'center 30%' }}
            fetchPriority="high"
          />
        ) : (
          <MonogramaGlifo className="pointer-events-none absolute -right-12 -top-8 h-72 w-72 text-ciano opacity-[0.1]" />
        )}

        {/* Escurece a base da foto para o H1 branco ler bem em qualquer imagem */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-petroleo via-petroleo/40 to-transparent"
        />

        <div className="relative mx-auto flex h-full w-full max-w-content flex-col justify-between px-5 pb-10 pt-6">
          <div className="self-start">
            <LogoMarca bare className="origin-top-left scale-[0.7]" />
          </div>

          <div>
            <h1 className="font-display text-[1.75rem] font-bold leading-tight text-white sm:text-4xl">
              <Field value={site.brand.positioning} />
            </h1>
            <p className="mt-2 text-sm text-white/80">
              {site.responsible.name} · {site.responsible.cro} · {city}
            </p>
          </div>
        </div>
      </div>

      {/* ── Painel de botões (outra cor, sobe por cima da foto) ─────── */}
      <div className="relative -mt-6 flex flex-1 flex-col rounded-t-[1.75rem] bg-white px-5 pt-6">
        <nav aria-label="Atalhos" className="mx-auto flex w-full max-w-content flex-1 flex-col">
          <ul className="space-y-3">
            <li>
              <HubLink
                href={site.scheduling.url}
                primary
                icon={<IconCalendar />}
                title={site.scheduling.ctaLabel}
                note="Escolha dia e horário em poucos toques"
              />
            </li>
            <li>
              <HubLink
                href={whatsHref}
                icon={<IconWhatsapp />}
                title="Falar no WhatsApp"
                note={site.contact.whatsapp.display}
              />
            </li>
            <li>
              <HubLink
                href={mapsHref}
                icon={<IconPin />}
                title="Como chegar"
                note={`${neighborhood}, ${city}`}
              />
            </li>
          </ul>

          {/* Convite para rolar — preso ao fim da tela (mt-auto) */}
          <a
            href="#sobre"
            className="mt-auto flex flex-col items-center gap-1 pb-4 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-petroleo-muted hover:text-petroleo"
          >
            Mais informações
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 animate-bounce motion-reduce:animate-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}

/** Botão do guia: ícone · título + linha de apoio · seta. Área de toque ≥ 56px. */
function HubLink({
  href,
  icon,
  title,
  note,
  primary = false,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  note: string;
  primary?: boolean;
}) {
  const tone = primary
    ? 'bg-petroleo text-white hover:bg-petroleo-hover'
    : 'border border-petroleo/15 bg-white text-petroleo hover:border-petroleo/40';
  const noteTone = primary ? 'text-white/75' : 'text-petroleo-muted';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex min-h-[3.5rem] items-center gap-3 rounded-2xl px-3 py-2.5 shadow-sm transition-colors ${tone}`}
    >
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ciano text-petroleo">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold leading-tight">{title}</span>
        <span className={`block truncate text-xs ${noteTone}`}>{note}</span>
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 flex-none opacity-60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 6 6 6-6 6" />
      </svg>
    </a>
  );
}

const iconProps = {
  'aria-hidden': true,
  viewBox: '0 0 24 24',
  className: 'h-5 w-5',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

function IconCalendar() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg {...iconProps}>
      <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg {...iconProps}>
      <path d="M3 21l1.65-4.95A8.5 8.5 0 1 1 8 19.6L3 21Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2L9 9.5Z" />
    </svg>
  );
}
