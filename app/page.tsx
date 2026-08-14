import { Hero } from '@/components/sections/Hero';
import { Pilares } from '@/components/sections/Pilares';
import { Servicos } from '@/components/sections/Servicos';
import { Sobre } from '@/components/sections/Sobre';
import { ComoFunciona } from '@/components/sections/ComoFunciona';
import { Localizacao } from '@/components/sections/Localizacao';
import { Faq } from '@/components/sections/Faq';
import { Rodape } from '@/components/sections/Rodape';
import { StickyCta } from '@/components/StickyCta';
import { JsonLd } from '@/components/JsonLd';

// Ordem definida no plano aprovado. Cada seção empurra a decisão de marcar
// consulta. pb no main deixa respiro para o CTA fixo do mobile.
export default function Page() {
  return (
    <>
      <JsonLd />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Pilares />
        <Servicos />
        <Sobre />
        <ComoFunciona />
        <Localizacao />
        <Faq />
        <Rodape />
      </main>
      <StickyCta />
    </>
  );
}
