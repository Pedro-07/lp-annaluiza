import { Hero } from '@/components/sections/Hero';
import { Servicos } from '@/components/sections/Servicos';
import { Sobre } from '@/components/sections/Sobre';
import { Localizacao } from '@/components/sections/Localizacao';
import { Faq } from '@/components/sections/Faq';
import { Rodape } from '@/components/sections/Rodape';
import { StickyCta } from '@/components/StickyCta';
import { JsonLd } from '@/components/JsonLd';

// Formato "guia": a tela principal (Hero) resolve a maioria das visitas com
// os botões. Abaixo, uma seção por dúvida — quem atende, o que trata, onde e
// quando, perguntas — sem CTA repetido no meio; a ação fica na barra fixa
// (mobile) e no rodapé. pb no main deixa respiro para a barra fixa.
export default function Page() {
  return (
    <>
      <JsonLd />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Sobre />
        <Servicos />
        <Localizacao />
        <Faq />
        <Rodape />
      </main>
      <StickyCta />
    </>
  );
}
