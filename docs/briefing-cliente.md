# Briefing da cliente — perguntas para o site

Conteúdo que a landing page precisa da Anna Luiza. Cada resposta preenche um
campo marcado como `pending()` em `content/site.ts` — enquanto pendente, o
campo aparece como selo âmbar na tela.

**Ordem de envio:** mandar só o **Bloco 1** primeiro (responde de cabeça).
16 perguntas de uma vez trava a resposta. Blocos 2 e 3 saem depois que o
primeiro voltar.

---

## Bloco 1 — dá pra responder de cabeça

1. Qual o número de WhatsApp oficial que vai receber os agendamentos? (com DDD)
2. Qual o @ do seu Instagram? (e outra rede, se quiser no site)
3. Quais dias e horários você atende?
4. Você atende urgência ou encaixe? Como a pessoa deve avisar?
5. Quais tratamentos você QUER divulgar no site? E tem algum que você faz mas
   prefere NÃO atrair?
6. Tem um tratamento ou tipo de paciente "carro-chefe" — o que você mais quer
   atrair?
7. Quais as formas de pagamento? (Pix, cartão, parcelamento...)
8. Em uma frase: como você descreveria o seu atendimento?
9. Em uma ou duas frases: qual foi o motivo REAL de você ter escolhido a
   odontologia? (o verdadeiro, não o bonito de dizer)
10. Em uma ou duas frases: como você quer que o paciente se sinta ao sair da
    sua consulta — e uma coisa concreta que você faz pra isso acontecer?

## Bloco 2 — melhor conferir num documento (pra eu não errar)

11. Seu nome profissional completo e o número do CRO (com a UF), exatamente
    como está no registro.
12. Endereço completo do consultório, com CEP. (Se não for um consultório
    fixo, me explica como funciona: home care, região atendida, etc.)
13. Você trabalha com convênio? Quais, exatamente? Ou é só particular?
14. Existe algum texto de responsável técnico / aviso legal que você já usa e
    precisa aparecer no site?

## Bloco 3 — precisa enviar o arquivo

15. Os arquivos da sua marca: o monograma "nn", o pattern (a gradinha) e a
    logo — de preferência em vetor (.svg, .ai, .pdf ou .eps). Se tiver a
    fonte Comfortaa em arquivo, manda junto.
16. Uma foto profissional sua, em boa qualidade, que você AUTORIZA usar no site.

---

_Aviso enviado junto ao Bloco 3: por norma do Conselho, foto de "antes e
depois" e promessa de resultado não entram no site — ela não precisa mandar
nada disso._

## Mapa pergunta → campo em `content/site.ts`

| # | Campo |
|---|-------|
| 1 | `contact.whatsapp` |
| 2 | `contact.instagram` |
| 3 | `location.hours` |
| 4 | `location.urgency` |
| 5 | `services` |
| 6 | (orienta destaque de `services` / `brand.positioning`) |
| 7 | `payment` · FAQ pagamento |
| 8 | `brand.positioning` · `seo.description` |
| 9 | `about.whyDentistry` |
| 10 | `about.patientFeeling` |
| 11 | `responsible.name` · `responsible.cro` |
| 12 | `location.address` · `location.region` |
| 13 | `insurance` · FAQ convênio |
| 14 | rodapé / `responsible` (aviso legal) |
| 15 | `brand.monogram` (pattern) |
| 16 | `about.photo` |
