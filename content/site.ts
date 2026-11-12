// ============================================================================
// CONTEÚDO DA LANDING PAGE — fonte de verdade, versionada.
// Alterações passam pelo dev, não por CMS.
//
// Todo dado que depende da cliente entra como `pending('rótulo')`.
// Isso NÃO é um comentário: vira um marcador âmbar VISÍVEL na tela
// (componente PendingMark). O site não vai ao ar com lacuna invisível —
// se um campo continua `pending`, ele aparece gritando na página.
//
// Ao receber a resposta da cliente, troque `pending('...')` pelo valor real.
// ============================================================================

export type Pending = { readonly __pending: true; readonly label: string };

/** Valor que ou já está preenchido (T) ou ainda depende da cliente. */
export type Maybe<T> = T | Pending;

// Retorna Maybe<T> (não Pending puro) de propósito: assim o campo mantém o
// tipo "string | Pending" mesmo enquanto está pendente. Ao trocar por um valor
// real, o TypeScript já aceita sem precisar alargar o tipo à mão.
export const pending = <T = string>(label: string): Maybe<T> => ({
  __pending: true,
  label,
});

export const isPending = (v: unknown): v is Pending =>
  typeof v === 'object' && v !== null && '__pending' in v;

export interface Service {
  readonly title: string;
  readonly description: string;
}

export interface Address {
  readonly street: string;
  readonly neighborhood: string;
  readonly city: string;
  readonly state: string;
  readonly postalCode: string;
  readonly country: string;
}

export interface OpeningHours {
  readonly label: string; // exibição, ex. "Segunda a sexta"
  readonly days: readonly string[]; // schema.org, ex. "Monday"
  readonly opens: string; // "HH:MM"
  readonly closes: string; // "HH:MM"
}

export interface FaqItem {
  readonly question: string;
  // Pergunta é estrutura (interpretação da identidade); resposta é dado da
  // clínica e por isso pode ficar pending até a cliente responder.
  readonly answer: Maybe<string>;
}

export const site = {
  // URL canônica de produção. UMA constante alimenta canonical, Open Graph,
  // sitemap, robots e JSON-LD. Canônico definido COM www — trocar aqui se mudar.
  url: 'https://www.annaluizaodontologia.com.br',

  brand: {
    name: 'Anna Luiza Odontologia',
    // Q8 — posicionamento dela: "Trabalho com muita dedicação em cada
    // sorriso." Editado para tagline curta, sem fato/adjetivo novo.
    positioning: 'Dedicação em cada sorriso.',
  },

  // Foto do topo da tela principal (~40% da tela no celular). Enquanto for
  // null, o topo usa o fundo petróleo com o monograma. Para ativar: salve a
  // foto em public/ (ex. public/foto-hero.jpg, ~1200px de largura) e troque
  // por { src: '/foto-hero.jpg', alt: '...', position: 'center 30%' }.
  // `position` ajusta o enquadramento (o rosto deve ficar no terço de cima).
  hero: {
    photo: null as null | { src: string; alt: string; position?: string },
  },

  // Número confirmado — CTAs ativos. `e164` alimenta o link do wa.me.
  // A conferência do número dígito a dígito segue na checklist pré-publicação.
  contact: {
    whatsapp: {
      display: '(98) 97001-2369',
      e164: '5598970012369',
    },
    whatsappMessage: 'Olá! Vim pelo site e gostaria de marcar uma consulta.',
    instagram: '@annaluiza.odontologia',
    email: 'annaluizaodontologia@gmail.com',
  },

  // Agendamento online — caminho PRINCIPAL. Plataforma externa (dados
  // tratados por ela; ver linha de LGPD no card). Abre em nova aba.
  scheduling: {
    platform: 'Simples Dental',
    url: 'https://app.simplesdental.com/simples/agendamento/annaluizaodontologia',
    // Troca para "Solicitar horário" se a plataforma só solicitar e não
    // confirmar o horário na hora (a confirmar com a cliente).
    ctaLabel: 'Agendar online',
  },

  // Exigência do Código de Ética: em destaque, não só no rodapé.
  // Aparece também junto ao nome na seção Sobre.
  // NOTA: especialidades NÃO entram até verificação no CRO (pendência aberta).
  responsible: {
    // Nome completo ainda pendente (bloqueia publicação) — exibe interino.
    name: 'Anna Luiza',
    // UF confirmada: MA. Registro estadual, formato CRO-XX 0000.
    cro: 'CRO-MA 6882',
  },

  location: {
    // Endereço confirmado. Fonte única do texto visível E do JSON-LD.
    address: {
      street: 'Av. Moçambique, 16',
      neighborhood: 'Anjo da Guarda',
      city: 'São Luís',
      state: 'MA',
      postalCode: '65085-900',
      country: 'BR',
    } satisfies Address,
    hours: [
      {
        label: 'Segunda a sexta',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      { label: 'Sábado', days: ['Saturday'], opens: '08:00', closes: '12:00' },
    ] satisfies readonly OpeningHours[],
    urgency: 'Agendamento pelo WhatsApp; presencial quando há vaga.',
    // Perfil da Empresa no Google — maior fator de SEO local. Entra em sameAs +
    // hasMap; as coordenadas habilitam o bloco geo do JSON-LD.
    // URL canônica via Place ID (estável). Place ID: ChIJP6vnCQCJ9gcR2jp_233CnUc.
    googleMapsUrl:
      'https://www.google.com/maps/place/?q=place_id:ChIJP6vnCQCJ9gcR2jp_233CnUc',
    geo: { latitude: -2.5635838, longitude: -44.3323919 },
  },

  // 6 serviços. Cada descrição é o PROBLEMA na linguagem do paciente (quem
  // vem do Instagram procura o próprio problema na tela). Redação: "realiza"/
  // "atende", nunca "especialista em". Sem promessa de resultado.
  services: [
    {
      title: 'Tratamento de canal (endodontia)',
      description: 'Aquela dor que lateja e não passa nem com remédio.',
    },
    {
      title: 'Aparelho ortodôntico',
      description: 'Dentes tortos ou encavalados que fazem você esconder o sorriso.',
    },
    {
      title: 'Extração e cirurgias',
      description: 'Siso incomodando ou dente que já não dá para salvar.',
    },
    {
      title: 'Odontologia estética',
      description: 'Manchas, dente amarelado ou aquele detalhe que te incomoda na foto.',
    },
    {
      title: 'Próteses',
      description: 'Falta de dentes atrapalhando para mastigar e para sorrir.',
    },
    {
      title: 'Implantes',
      description: 'Repor um dente perdido com algo fixo, que fica no lugar.',
    },
  ] satisfies readonly Service[],

  insurance: 'Atendimento particular.',
  payment: 'Pix, cartão de crédito e boleto.',

  about: {
    photo: pending('Foto profissional autorizada para web (item 16)'),
    // Editado das respostas dela (posicionamento + motivo). Máx. duas linhas:
    // texto genérico curto passa, genérico longo denuncia. Sem fato nem
    // adjetivo novo — só a redação dela, mais natural.
    bio: 'Trabalho com dedicação no sorriso de cada paciente. Gosto de cuidar das pessoas e de ver a satisfação a cada resultado.',
  },

  // FAQ — objeções de agendamento, convênio, pagamento e urgência.
  // "Primeira consulta" voltou para cá quando a seção "Como funciona" saiu.
  faq: [
    {
      question: 'Como faço para agendar?',
      answer:
        'Pelo botão "Agendar online", escolhendo dia e horário, ou pelo WhatsApp. Também dá para marcar presencialmente quando há vaga.',
    },
    {
      question: 'Como é a primeira consulta?',
      answer:
        'É uma avaliação: a gente conversa, examina e monta com você um plano de cuidado, sem promessa vazia.',
    },
    {
      question: 'Vocês atendem por convênio?',
      answer:
        'O atendimento é particular, com atenção dedicada a cada paciente.',
    },
    {
      question: 'Quais as formas de pagamento?',
      answer: 'Você pode pagar com Pix, cartão de crédito ou boleto.',
    },
    {
      question: 'E se eu estiver com dor ou for uma urgência?',
      answer:
        'Chame pelo WhatsApp para agendar. Também atendo presencialmente quando há vaga.',
    },
  ] satisfies readonly FaqItem[],

  seo: {
    // Deriva do posicionamento dela + método de agendamento. Sem invenção.
    description:
      'Odontologia com dedicação em cada sorriso. Agende sua consulta online ou pelo WhatsApp.',
  },

  // Pilares da marca — dados do briefing, não dependem da cliente.
  pillars: [
    { name: 'Atendimento', note: 'Ouvimos você antes de qualquer procedimento.' },
    { name: 'Satisfação', note: 'Cuidado que continua depois que você sai.' },
    { name: 'Expressão', note: 'Seu sorriso, do seu jeito.' },
  ],
} as const;

export type Site = typeof site;

/** Linha única de endereço para exibição. */
export const formatAddress = (a: Address): string =>
  `${a.street} - ${a.neighborhood}, ${a.city} - ${a.state}, ${a.postalCode}`;

const fmtHour = (t: string): string => {
  const [h, m] = t.split(':');
  return m === '00' ? `${Number(h)}h` : `${Number(h)}h${m}`;
};

/** Horários para exibição, ex. "Segunda a sexta, 8h às 18h · Sábado, 8h às 12h". */
export const formatHours = (list: readonly OpeningHours[]): string =>
  list
    .map((h) => `${h.label}, ${fmtHour(h.opens)} às ${fmtHour(h.closes)}`)
    .join(' · ');
