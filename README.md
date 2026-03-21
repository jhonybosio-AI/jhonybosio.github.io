# jhonybosio.com

Site pessoal e funil de vendas do Jhony Bosio, assessor de investimentos e socio da Blue3 Investimentos (ecossistema XP).

O site funciona como hub central para captacao de leads, venda do produto Raio-X Educativo e distribuicao de conteudo educacional sobre investimentos.

---

## Stack tecnica

- **Framework:** Next.js 16 com App Router
- **Linguagem:** TypeScript
- **Estilizacao:** Tailwind CSS v4
- **Icones:** Lucide React
- **Fontes:** Manrope (titulos) + Inter (corpo) via next/font
- **Deploy:** Export estatico (`output: 'export'` no next.config.js)
- **Hospedagem:** Servidor proprio (Oracle Cloud) ou qualquer CDN estatica
- **Pagamento:** Stripe (checkout externo)
- **Captura de leads:** Formspree

---

## Estrutura de paginas

```
src/app/
  page.tsx           → Home (hub de links + produto principal)
  layout.tsx         → Layout raiz (fontes, metadata, head global)
  globals.css        → Design system completo (tokens de cor, animacoes)
  not-found.tsx      → Pagina 404 personalizada
  biografia/
    page.tsx         → Pagina institucional sobre o Jhony
  mentoria/
    page.tsx         → Landing page do Raio-X Educativo (R$ 497)
  notebook/
    page.tsx         → Conteudo gated: filosofia de investimentos completa
  obrigado/
    page.tsx         → Thank you page pos-compra no Stripe
```

---

## Descricao de cada pagina

### Home (`/`)

Hub central no formato link-in-bio. Estruturada com hierarquia de conversao:

1. **Perfil** com foto, nome e descricao profissional
2. **Prova social** com logos Blue3 e XP Investimentos
3. **Produto principal** (Raio-X Educativo por R$ 497) com card de destaque, beneficios e CTA direto para o Stripe
4. **Links secundarios** para Notebook de Educacao, Assessoria Completa (WhatsApp), Deia (assistente IA no Telegram) e Biografia
5. **Contato direto** com botoes de WhatsApp e agendamento de reuniao
6. **Footer** com disclaimer legal

### Biografia (`/biografia`)

Pagina institucional com layout de dois paineis:

- **Sidebar esquerdo (sticky):** foto, credenciais (CVM/ANBIMA, XP), cargo e CTA permanente para o Raio-X
- **Conteudo direito:** historia profissional, filosofia de transparencia, cards dos dois servicos (Mentoria Impulse para ate R$ 300k, Equilibrium Experience para acima de R$ 300k) e bloco final com CTA duplo (Stripe + WhatsApp)
- **CTA flutuante no mobile:** botao fixo no rodape da tela em dispositivos moveis
- **CTA intermediario:** botao no meio do conteudo para nao depender do scroll ate o final

### Mentoria (`/mentoria`)

Landing page dedicada ao produto Raio-X Educativo (R$ 497). Fluxo de conversao vertical:

1. **Hero** com headline, subtitulo e CTA primario
2. **Como Funciona** em 3 passos visuais (1h ao vivo, plano por escrito, 7 dias de suporte)
3. **Card de preco** com lista de beneficios, valor e CTA para checkout no Stripe
4. **Footer** com disclaimer regulatorio (CVM/ANBIMA)

O checkout redireciona para o Stripe. Apos o pagamento, o Stripe deve redirecionar para `/obrigado`.

### Notebook (`/notebook`)

Conteudo gated com a filosofia completa de investimentos do Jhony. Dividido em duas fases:

**Fase 1 - Captura de lead:**
- Formulario com 3 campos (nome, WhatsApp, faixa de patrimonio)
- Envio via Formspree (endpoint `xreyqjey`)
- Estado de loading no botao durante envio
- Fallback: se o Formspree falhar, libera o conteudo mesmo assim para nao perder o lead

**Fase 2 - Conteudo liberado:**
- Texto completo sobre filosofia de investimentos (~18 secoes)
- Separadores visuais com icones entre blocos tematicos
- Callouts em destaque para frases-chave
- Temas cobertos: transparencia na remuneracao, reserva de emergencia, asset allocation, renda fixa pos-fixada, inflacao (IMA-B5/IMA-B5+), renda variavel global, ouro e cripto, gestao passiva com ETFs, custos, eficiencia tributaria, previdencia (PGBL/VGBL/tabela regressiva), comportamento do investidor, formulas magicas
- CTA final direcionando para a pagina de mentoria

### Obrigado (`/obrigado`)

Pagina exibida apos a conclusao do pagamento no Stripe. Conteudo:

1. **Confirmacao visual** com icone de sucesso
2. **3 proximos passos** claros (agendar sessao, preparar extratos, receber plano)
3. **CTA principal** para agendar a sessao no calendario do Outlook
4. **CTA secundario** para WhatsApp com mensagem pre-preenchida
5. **Link bonus** para o Notebook de Educacao (manter engajamento enquanto espera a sessao)

### 404 (`not-found.tsx`)

Pagina de erro personalizada com 3 saidas uteis:
- Link para a home
- Link para o notebook
- Link para WhatsApp

---

## Design system

O site usa dois conjuntos de tokens de cor definidos no `globals.css`:

### Blue3 Brand (paginas internas)
```
--color-blue3-primary:   #08112e  (fundo escuro)
--color-blue3-secondary: #1c4ed8  (azul principal / CTAs)
--color-blue3-accent:    #2563eb  (azul hover)
```

### Material Design Tokens (home)
Conjunto completo de tokens seguindo nomenclatura Material Design 3 (surface, primary, secondary, error, etc.), todos mapeados para a paleta escura da Blue3.

### Fontes
- **Manrope:** titulos e elementos de destaque (`font-manrope`)
- **Inter:** corpo de texto e UI (`font-inter`)
- **Geist / Geist Mono:** variaveis carregadas mas usadas pontualmente

### Componentes CSS reutilizaveis
- `.neon-glow` - radial gradient decorativo
- `.glass-card` - card com glassmorphism (blur + transparencia)
- `.animate-fade-in-up` - entrada com fade + slide vertical
- `.animate-fade-in` - entrada com fade simples

---

## Funil de conversao

```
Trafego (redes sociais, lives, WhatsApp)
    ↓
Home (jhonybosio.com)
    ↓
    ├── Raio-X Educativo (R$ 497) → Stripe → /obrigado → Agendar sessao
    ├── Notebook (captura lead) → Formspree → Conteudo liberado → CTA mentoria
    ├── Assessoria Completa → WhatsApp (patrimonio 500k+)
    ├── Deia (IA) → Telegram
    └── Biografia → Credibilidade → CTA Raio-X
```

O produto principal e o Raio-X Educativo. Todas as outras paginas funcionam como caminhos de aquecimento que convergem para ele ou para o contato direto via WhatsApp.

---

## Servicos externos

| Servico | Uso | Configuracao |
|---------|-----|-------------|
| **Stripe** | Checkout do Raio-X (R$ 497) | Redirecionar pos-pagamento para `/obrigado` |
| **Formspree** | Captura de leads do Notebook | Endpoint `xreyqjey` ja configurado |
| **Google Fonts** | Material Symbols Outlined (icones na home) | Link no `<head>` do layout |
| **Outlook Bookings** | Agendamento de reuniao | Link direto para calendario do Jhony |

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Como fazer build para producao

```bash
npm run build
```

Os arquivos estaticos serao gerados na pasta `out/` (configurado em `next.config.js` com `output: 'export'`). Basta copiar o conteudo de `out/` para o servidor.

---

## Arquivos importantes

| Arquivo | Funcao |
|---------|--------|
| `next.config.js` | Configuracao do Next.js (export estatico, imagens unoptimized) |
| `src/app/globals.css` | Design system completo (cores, fontes, animacoes) |
| `src/app/layout.tsx` | Layout raiz (carrega fontes, metadata SEO, Material Symbols) |
| `public/profile.png` | Foto do Jhony (usada na home, biografia e notebook) |
| `postcss.config.mjs` | Configuracao do PostCSS com plugin Tailwind v4 |
| `tsconfig.json` | TypeScript com path alias `@/*` → `./src/*` |

---

## Pendencias e melhorias futuras

- [ ] Adicionar Meta Pixel e Google Analytics/GTM no `layout.tsx`
- [ ] Configurar redirect pos-pagamento no Stripe para `/obrigado`
- [ ] Deletar `next.config.ts` (arquivo duplicado, manter apenas `.js`)
- [ ] Adicionar imagem OG (Open Graph) para compartilhamento em redes sociais
- [ ] Avaliar migrar link da Deia de Telegram para WhatsApp (perfil do publico-alvo)
- [ ] Criar sitemap.xml para SEO
