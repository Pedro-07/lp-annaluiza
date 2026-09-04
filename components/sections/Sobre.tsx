import { site } from '@/content/site';
import { Section } from '../Section';
import { Field } from '../Field';

/**
 * Sobre a Anna Luiza — CURTA de propósito. Nome, CRO em destaque (exigência
 * do Código de Ética, não só rodapé), foto e no máximo duas linhas.
 * Texto genérico curto passa; genérico longo denuncia — por isso não vira
 * parágrafo. Sem promessa de resultado, sem antes/depois, sem especialidade
 * (essa espera verificação no CRO).
 */
export function Sobre() {
  return (
    <Section id="sobre" title="Quem vai te atender">
      {/*
        Foto profissional — item 16, ainda PENDENTE (site.about.photo).
        O selo âmbar na tela foi removido a pedido; quando a foto autorizada
        chegar, renderizar aqui (ex.: <Image .../>) usando site.about.photo.
      */}

      {/* Nome + CRO no mesmo peso visual — destaque exigido */}
      <div className="rounded-lg border border-petroleo/15 p-4">
        <p className="font-display text-xl font-bold text-petroleo">
          <Field value={site.responsible.name} />
        </p>
        <p className="mt-1 font-display text-base font-bold text-petroleo">
          <Field value={site.responsible.cro} />
        </p>
      </div>

      {/* Bio curta, editada das palavras dela — no máximo duas linhas */}
      <p className="mt-6 text-petroleo-muted">
        <Field value={site.about.bio} />
      </p>
    </Section>
  );
}
