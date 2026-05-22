/**
 * Wealth Academy — Trilha 2: Blindagem Patrimonial 2026 & Sucessão
 * Banco de Dados de Conteúdo e Injeção Dinâmica
 * Desenvolvido por: Jhony Bosio
 */

const blindagemAulas = [
  // ── MÓDULO 1: O CERCO DA REFORMA TRIBUTÁRIA (ITCMD & EXTERIOR) ──
  {
    id: "l-b-1-1",
    modulo: "Módulo 1 · O Cerco da Reforma",
    breadcrumb: "Módulo 1: O Cerco da Reforma › Aula 1.1",
    tag: "Módulo 1 · O Cerco da Reforma",
    titulo: "O Fim do <span>Valor Contábil nas Holdings</span>",
    meta: "📖 Leitura — 9 min · 🎯 Conceitual · 🔓 Livre acesso",
    content: `
      <p>Seja muito bem-vindo à <strong>Trilha 2: Blindagem Patrimonial 2026 & Sucessão</strong>. Nos próximos minutos, você entenderá a maior mudança conceitual trazida pela reforma tributária nacional (Lei Complementar 227/2026) que afeta diretamente todas as holdings familiares já constituídas ou em planejamento no Brasil.</p>
      <p>Trata-se do <strong>fim do custo contábil histórico</strong> como base de cálculo na transmissão de participações societárias.</p>
      
      <h2>A Prática Tradicional que Foi Sepultada</h2>
      <p>Até a sanção da nova lei, o planejamento sucessório via holding imobiliária ou patrimonial funcionava sob uma premissa muito simples: o patriarca integralizava seus imóveis na empresa pelo valor histórico de aquisição declarado no Imposto de Renda (DIRPF) — muitas vezes uma fração irrisória do valor de mercado real. Posteriormente, as cotas da holding eram doadas aos herdeiros (com reserva de usufruto) pagando o ITCMD estadual calculado sobre esse valor contábil artificialmente baixo.</p>
      <p>A <strong>Lei 227/2026/PLC 108/24</strong> determinou de forma expressa que o imposto estadual sobre heranças e doações (ITCMD) deve ser calculado obrigatoriamente sobre o <strong>valor real de mercado dos ativos</strong> sob a holding.</p>
      
      <div class="callout">
        <p>"Holdings imobiliárias antigas baseadas em valor contábil histórico agora enfrentam um risco de reavaliação fiscal massiva. O cerco fechou definitivamente."</p>
        <div class="callout-author">— Jhony Bosio</div>
      </div>
      
      <h2>O Impacto do Valuation Fiduciário</h2>
      <p>Para empresas patrimoniais e operacionais, a nova lei regulamenta que a base de cálculo será apurada por um <em>valuation</em> rigoroso que contemple:</p>
      <ul>
        <li>O valor real de mercado de todos os bens e direitos na carteira (incluindo imóveis reavaliados fisicamente).</li>
        <li>O fundo de comércio (goodwill) e a capacidade futura de geração de caixa da estrutura familiar.</li>
      </ul>
      <p>Qualquer valor contábil subfaturado que seja inferior a essa avaliação de mercado será imediatamente glosado pelas secretarias de fazenda estaduais. O custo operacional e tributário para inventariar ou doar participações societárias sofrerá, na prática, um aumento geométrico.</p>
      
      <div class="callout-green">
        <p><strong>Resultado Prático:</strong> Uma holding com imóveis históricos avaliados contabilmente em R$ 1 milhão, mas que valem R$ 8 milhões a valor de mercado real, pagava cerca de R$ 40 mil de ITCMD em São Paulo (4%). Sob as novas regras, o ITCMD incidirá sobre os R$ 8 milhões sob alíquota progressiva obrigatória de até 8%, elevando o imposto para até R$ 640 mil. Um aumento absurdo de 16x.</p>
      </div>
    `,
    navHtml: `
      <a href="../" class="lesson-nav-btn">← Voltar ao Site</a>
      <button class="lesson-nav-btn next-green" onclick="showLesson('l-b-1-2')">
        Próxima Aula: A Progressividade do ITCMD →
      </button>
    `
  },
  {
    id: "l-b-1-2",
    modulo: "Módulo 1 · O Cerco da Reforma",
    breadcrumb: "Módulo 1: O Cerco da Reforma › Aula 1.2",
    tag: "Módulo 1 · O Cerco da Reforma",
    titulo: "A Progressividade <span>Obrigatória do ITCMD</span>",
    meta: "📖 Leitura — 7 min · 💡 Regulatório · 🔓 Livre acesso",
    content: `
      <p>Na aula anterior, compreendemos como a base de cálculo foi inflada pelo valor de mercado. Agora, analisaremos a segunda grande maldade da Emenda Constitucional 132 e da regulamentação da Lei 227/2026: a <strong>progressividade obrigatória do ITCMD</strong>.</p>
      
      <h2>O Fim da Alíquota Única</h2>
      <p>Antes da reforma, cada Estado brasileiro tinha autonomia para decidir se cobrava o ITCMD sob uma alíquota fixa ou progressiva. O Estado de São Paulo, por exemplo, cobrava uma alíquota fixa e amigável de <strong>4%</strong>, independentemente de a doação ser de R$ 100 mil ou R$ 100 milhões. Isso transformava São Paulo em um porto seguro tributário sucessório.</p>
      <p>A nova redação constitucional tornou a <strong>alíquota progressiva obrigatória para todos os Estados</strong>. Isso significa que as faixas de imposto devem subir conforme o tamanho do patrimônio transmitido.</p>
      
      <div class="stat-cards">
        <div class="stat-mini">
          <div class="stat-mini-num"><span class="accent">8%</span></div>
          <div class="stat-mini-label">Teto nacional do ITCMD (faixa máxima aplicável)</div>
        </div>
        <div class="stat-mini">
          <div class="stat-mini-num"><span class="accent">100%</span></div>
          <div class="stat-mini-label">Aumento potencial da alíquota efetiva em Estados antes fixos</div>
        </div>
        <div class="stat-mini">
          <div class="stat-mini-num"><span class="accent">27</span></div>
          <div class="stat-mini-label">Unidades federativas obrigadas a reestruturar suas leis locais</div>
        </div>
      </div>
      
      <h2>Como Funciona a Progressividade na Prática</h2>
      <p>Os Estados passarão a aplicar tabelas progressivas por faixas de valores similares às do Imposto de Renda. Para patrimônios HNW (alta renda), a alíquota efetiva rapidamente alcançará o teto de <strong>8%</strong>. Onde antes se pagava 4% (como em SP), a carga tributária seca sobre a herança vai simplesmente dobrar.</p>
      
      <div class="callout-blue">
        <p><strong>Dica de Advisor:</strong> O teto nacional de 8% é estabelecido pelo Senado Federal e existem fortes pressões legislativas para elevar esse limite nos próximos anos para alinhar a tributação brasileira com os padrões da OCDE (onde as heranças são taxadas entre 20% e 40%).</p>
      </div>
    `,
    navHtml: `
      <button class="lesson-nav-btn" onclick="showLesson('l-b-1-1')">← Aula Anterior</button>
      <button class="lesson-nav-btn next-green" onclick="showLesson('l-b-1-3')">
        Próxima Aula: Doador e Bens no Exterior →
      </button>
    `
  },
  {
    id: "l-b-1-3",
    modulo: "Módulo 1 · O Cerco da Reforma",
    breadcrumb: "Módulo 1: O Cerco da Reforma › Aula 1.3",
    tag: "Módulo 1 · O Cerco da Reforma",
    titulo: "Doador e Bens no <span>Exterior</span>",
    meta: "📖 Leitura — 8 min · 🌍 Internacional · 🔓 Livre acesso",
    content: `
      <p>Para investidores com internacionalização patrimonial, o planejamento sucessório fora do Brasil sempre foi uma excelente rota de eficiência. No entanto, a Lei 227/2026 estruturou um cerco completo para liquidar as antigas brechas de transmissões ligadas ao exterior.</p>
      
      <h2>O Destravamento Histórico</h2>
      <p>Em 2021, o Supremo Tribunal Federal (STF) publicou o histórico <strong>Tema 825</strong>, decidindo que era inconstitucional a cobrança de ITCMD pelos Estados sobre doações e heranças originárias do exterior (ou de bens situados fora do país) sem a devida edição de uma <strong>Lei Complementar Federal</strong>.</p>
      <p>A Lei 227/2026 é, justamente, essa <strong>ponte jurídica complementar</strong> exigida pela Constituição. Com a sua sanção, a cobrança de ITCMD sobre bens e pessoas fora do Brasil foi oficialmente destravada e regulamentada.</p>
      
      <h3>As Novas Regras de Domicílio e Cobrabilidade:</h3>
      <ul>
        <li><strong>Doador residente no exterior:</strong> O ITCMD sobre a doação será devido integralmente ao Estado onde for domiciliado o beneficiário (donatário) no Brasil.</li>
        <li><strong>Falecido residente no exterior:</strong> O imposto de herança caberá ao Estado onde residir o herdeiro ou legatário no Brasil.</li>
        <li><strong>Bens imóveis no exterior:</strong> Se o falecido ou doador tiver domicílio no exterior, o imposto será recolhido pelo Estado brasileiro onde residir o herdeiro. Se o doador residia no Brasil, o imposto caberá ao seu próprio Estado de domicílio.</li>
      </ul>
      
      <div class="fiduciary-alert">
        <h4>⚠️ O Fim da Festa dos Inventários</h4>
        <p>A Emenda Constitucional 132/23 e a Lei 227/2026 sepultaram a antiga prática de "eleger" Estados com impostos mais baratos para inventariar bens móveis. A competência tributária agora segue rigorosamente o domicílio real do de cujus (falecido), eliminando planejamentos fiscais estaduais interestaduais oportunistas.</p>
      </div>
      
      <h2>Tributação de Trusts e Offshores</h2>
      <p>A lei regulamentou as regras de repasse sucessório de Trusts familiares:</p>
      <ul>
        <li>A reversão de patrimônio de forma gratuita do Trust para os beneficiários é classificada tecnicamente como **Doação**, gerando incidência imediata de ITCMD no falecimento do instituidor (settlor).</li>
        <li>A instituição ou transferência de ativos para a figura do Trustee não sofre incidência de ITCMD (por não haver transmissão de propriedade definitiva a beneficiário final).</li>
      </ul>
    `,
    navHtml: `
      <button class="lesson-nav-btn" onclick="showLesson('l-b-1-2')">← Aula Anterior</button>
      <button class="lesson-nav-btn next-green" onclick="showLesson('l-b-2-1')">
        Ir para o Módulo 2: O Novo IRPF-M →
      </button>
    `
  },

  // ── MÓDULO 2: O NOVO IRPF-M E ALTERNATIVAS FIDUCIÁRIAS ──
  {
    id: "l-b-2-1",
    modulo: "Módulo 2 · O Novo IRPF-M",
    breadcrumb: "Módulo 2: O Novo IRPF-M › Aula 2.1",
    tag: "Módulo 2 · O Novo IRPF-M",
    titulo: "O Novo <span>IRPF-M (Imposto Mínimo)</span>",
    meta: "📖 Leitura — 9 min · 📊 Matemático · 🔓 Desbloqueado",
    content: `
      <p>O <strong>IRPF-M (Imposto de Renda Mínimo)</strong> é uma das inovações fiscais mais severas da reforma para investidores e empresários de alta renda no Brasil. Ele instaura uma alíquota progressiva adicional focada no topo da pirâmide patrimonial.</p>
      
      <h2>Quem Será Impactado pelo IRPF-M?</h2>
      <p>O imposto mínimo aplica-se obrigatoriamente a qualquer pessoa física cuja soma dos rendimentos tributáveis, isentos, exclusivos e definitivos recebidos no ano civil supere o teto de <strong>R$ 600 mil</strong>. A alíquota é progressiva e varia de <strong>0% a 10%</strong>, alcançando o limite máximo de 10% para receitas anuais gerais superiores a R$ 1,2 milhão.</p>
      
      <div class="callout">
        <p>"A cada R$ 60.000 de renda acumulada adicional acima da linha de R$ 600.000 por ano, a alíquota do IRPF-M sofre um incremento de 1%."</p>
        <div class="callout-author">— Jhony Bosio</div>
      </div>
      
      <h2>A Base de Cálculo e a Taxação de Dividendos</h2>
      <p>Diferente do Imposto de Renda tradicional, a base de cálculo do IRPF-M engloba virtualmente tudo:</p>
      <ul>
        <li>Salários e Pró-labores;</li>
        <li>Aluguéis e rendimentos imobiliários gerais;</li>
        <li>Juros sobre Capital Próprio (JCP);</li>
        <li>Ganhos de capital na venda de operações e investimentos líquidos em bolsa de valores;</li>
        <li>E, de forma crítica, **todos os lucros e dividendos distribuídos a partir de 2026** cujas deliberações formais não tenham sido expressamente aprovadas e documentadas até **31/01/2026**.</li>
      </ul>
      
      <div class="callout-green">
        <p><strong>A Regra das Exclusões:</strong> Estão resguardados da base do IRPF-M apenas heranças em adiantamento de legítima, ganhos de capital na venda de imóveis físicos de uso próprio, indenizações judiciais por danos morais/materiais, rendimentos isentos de atividade rural e os rendimentos de títulos imobiliários e agrícolas isentos estruturados (CRI, CRA, LCI, LCA, Debêntures Incentivadas, FIIs e FIAGROs com mais de 100 cotistas).</p>
      </div>
      
      <p>O planejamento corporativo e pessoal de retiradas de lucros precisa ser integralmente redesenhado a partir de 2026 para mitigar atritos tributários de dois dígitos no bolso do empresário.</p>
    `,
    navHtml: `
      <button class="lesson-nav-btn" onclick="showLesson('l-b-1-3')">← Voltar ao Módulo 1</button>
      <button class="lesson-nav-btn next-green" onclick="showLesson('l-b-2-2')">
        Próxima Aula: O Refúgio de Seguros & Previdência →
      </button>
    `
  },
  {
    id: "l-b-2-2",
    modulo: "Módulo 2 · O Novo IRPF-M",
    breadcrumb: "Módulo 2: O Novo IRPF-M › Aula 2.2",
    tag: "Módulo 2 · O Novo IRPF-M",
    titulo: "O Refúgio de <span>Seguros & Previdência</span>",
    meta: "📖 Leitura — 8 min · 🛡️ Proteção · 🔓 Desbloqueado",
    content: `
      <p>Com as alíquotas do ITCMD escalando para 8% a valor de mercado e o IRPF-M confiscando dividendos, a estruturação da liquidez sucessória exige o uso cirúrgico e legítimo de ferramentas fiduciárias seguras e isentas.</p>
      
      <h2>A Blindagem Definitiva do Seguro e Previdência</h2>
      <p>A melhor notícia trazida pela Lei 227/2026 foi a consolidação e blindagem definitiva da <strong>não incidência de ITCMD sobre seguros de vida e planos de previdência privada (VGBL/PGBL)</strong>. O STF e o legislador federal pacificaram o entendimento de que tais ativos possuem natureza puramente previdenciária e fiduciária de proteção, não configurando herança civil comum.</p>
      
      <h3>Os Benefícios Sucessórios e de Liquidez:</h3>
      <ul>
        <li><strong>Liquidez Imediata:</strong> Os recursos de seguros e VGBL não entram no processo de inventário (seja judicial ou extrajudicial). São liquidados diretamente aos beneficiários indicados em até 30 dias na conta corrente.</li>
        <li><strong>Impenhorabilidade:</strong> Seguros de vida possuem proteção legal estrita contra credores, garantindo a subsistência familiar em momentos de atrito empresarial.</li>
        <li><strong>Eficiência Fiscal:</strong> Previdência privada sob o regime regressivo de Imposto de Renda tributa em apenas 10% após 10 anos de aporte, representando uma excelente alternativa às holdings tributadas em alíquotas ordinárias progressivas.</li>
      </ul>
      
      <div class="fiduciary-alert">
        <h4>⚠️ Atenção ao Abuso Fiduciário (Fraude)</h4>
        <p>Previdência e seguro <strong>não são instrumentos de "milagre tributário" ou evasão fiscal</strong>. A utilização abusiva desses mecanismos (como aportar todo o patrimônio líquido da família em previdência na iminência do falecimento do patriarca para lesar herdeiros necessários ou fraudar o fisco) é ativamente rastreada pela Receita Estadual e passível de glosa judicial.</p>
      </div>
      
      <p>A calibração do percentual de liquidez em previdência e seguro deve ser desenhada sob medida para cobrir exatamente as custas de ITCMD e advogados do restante dos bens imóveis e participações da família, evitando atritos familiares ou bloqueios judiciais de ativos físicos.</p>
    `,
    navHtml: `
      <button class="lesson-nav-btn" onclick="showLesson('l-b-2-1')">← Aula Anterior</button>
      <button class="lesson-nav-btn next-green" onclick="showLesson('l-b-2-3')">
        Próxima Aula: Rebalanceamento e Usufruto →
      </button>
    `
  },
  {
    id: "l-b-2-3",
    modulo: "Módulo 2 · O Novo IRPF-M",
    breadcrumb: "Módulo 2: O Novo IRPF-M › Aula 2.3",
    tag: "Módulo 2 · O Novo IRPF-M",
    titulo: "Rebalanceamento e <span>Usufruto</span>",
    meta: "📖 Leitura — 7 min · 🔑 Prático · 🔓 Desbloqueado",
    content: `
      <p>Na estruturação de holdings patrimoniais e planejamentos sucessórios em vida, dois conceitos frequentemente geravam disputas e bitributações estaduais severas: a <strong>doação com reserva de usufruto</strong> e o <strong>desconto de dívidas do falecido</strong> na base tributável.</p>
      
      <h2>A Consolidação da Isenção no Usufruto</h2>
      <p>Em diversos Estados brasileiros, a extinção ou consolidação do usufruto (que ocorre com o falecimento do doador originário) era tributada de forma abusiva como um novo fato gerador de ITCMD (gerando bitributação sobre o mesmo imóvel). A **Lei 227/2026** encerrou definitivamente essa arbitrariedade.</p>
      <p>Ficou expressamente legalizado em âmbito nacional que a **extinção ou consolidação de usufruto não configura fato gerador de imposto sobre heranças ou doações**, resguardando e preservando o planejamento fiduciário de doação de cotas realizado em vida.</p>
      
      <h2>Dedução de Dívidas do Falecido</h2>
      <p>Outro ponto altamente favorável ao contribuinte trazido pela nova legislação federal é a determinação de que as **dívidas comprovadas do falecido devem ser integralmente deduzidas da base de cálculo do ITCMD**.</p>
      <div class="callout-blue">
        <p>Se o falecido possuía um patrimônio de R$ 10 milhões, mas acumulava passivos e dívidas físicas comprovadas de R$ 3 milhões, a base de incidência do imposto de herança estadual será de R$ 7 milhões, e não sobre o montante bruto. Isso traz justiça fiscal e protege a liquidez dos herdeiros.</p>
      </div>
      
      <h2>A Pegadinha do Domicílio DIRPF</h2>
      <p>A Lei 227/2026 trouxe de volta a chamada "Eleição do Domicílio Fiscal". Caso um contribuinte possua mais de um domicílio residencial legítimo, presumir-se-á como seu domicílio fiscal para fins de ITCMD aquele informado formalmente em sua **Declaração de Ajuste Anual do Imposto de Renda (DIRPF)**. Isso abre uma fantástica avenida de curadoria fiduciária legal para fixar residência fiscal nos Estados com regras de ITCMD estruturalmente mais vantajosas.</p>
    `,
    navHtml: `
      <button class="lesson-nav-btn" onclick="showLesson('l-b-2-2')">← Aula Anterior</button>
      <button class="lesson-nav-btn next-green" onclick="showLesson('l-b-3-1')">
        Ir para o Módulo 3: Impacto Corporativo →
      </button>
    `
  },

  // ── MÓDULO 3: O IMPACTO EM EMPRESAS E PROFISSIONAIS ──
  {
    id: "l-b-3-1",
    modulo: "Módulo 3 · Impacto Corporativo",
    breadcrumb: "Módulo 3: Impacto Corporativo › Aula 3.1",
    tag: "Módulo 3 · Impacto Corporativo",
    titulo: "O Novo <span>Lucro Presumido</span>",
    meta: "📖 Leitura — 9 min · 📈 Tributário · 🔓 Desbloqueado",
    content: `
      <p>O impacto da reforma tributária não se restringiu à governança sucessória. O regime de tributação empresarial mais comum para escritórios, clínicas e pequenas holdings operacionais — o <strong>Lucro Presumido</strong> — sofreu uma severa punição ao crescimento.</p>
      
      <h2>O Acréscimo de 10% na Base de Presunção</h2>
      <p>A partir de 2026, qualquer empresa sob o regime de Lucro Presumido que registrar faturamento acumulado superior a <strong>R$ 5 milhões no ano civil</strong> sofrerá uma elevação obrigatória de <strong>10% nos percentuais de presunção</strong> sobre a parcela faturada excedente.</p>
      <p>Para prestadoras de serviços intelectuais (como médicos, clínicas, engenharia e advogados), a presunção padrão de lucro tributável de 32% salta para **35,2%** sobre a fatia que ultrapassar os R$ 5 milhões.</p>
      
      <table class="data-table">
        <thead>
          <tr>
            <th>Faturamento Anual</th>
            <th>Como Era (Até 2025)</th>
            <th class="highlight-col">Como Ficou (A partir de 2026)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Até R$ 5 milhões</strong></td>
            <td>32% de presunção uniforme</td>
            <td class="highlight-col">32% de presunção padrão</td>
          </tr>
          <tr>
            <td><strong>Excedente (ex: R$ 1 milhão acima)</strong></td>
            <td>32% de presunção</td>
            <td class="highlight-col">35,2% de presunção (10% de acréscimo na base)</td>
          </tr>
          <tr>
            <td><strong>Impacto nos impostos</strong></td>
            <td>IRPJ e CSLL calculados sobre 32%</td>
            <td class="highlight-col">Elevação automática na base de IRPJ, Adicional e CSLL</td>
          </tr>
        </tbody>
      </table>
      
      <h2>Lógica de Apuração Trimestral</h2>
      <p>A verificação da ultrapassagem do teto é cumulativa e monitorada trimestre a trimestre ao longo do ano. No exato trimestre em que a receita bruta acumulada do ano ultrapassa a linha de R$ 5 milhões, a alíquota majorada de presunção de 35,2% já incide sobre a parcela excedente e, de forma definitiva, **passa a incidir sobre toda e qualquer receita faturada nos trimestres seguintes até o encerramento do ano civil**.</p>
      
      <div class="callout-blue">
        <p><strong>A Rota da Sobrevivência Fiduciária:</strong> Frente a este rombo nas margens, as empresas de serviços qualificados precisam auditar três caminhos conceituais: a migração planejada para o regime de <strong>Lucro Real</strong> (caso as despesas reais operacionais sejam altas), a <strong>segregação de atividades societárias</strong> em estruturas complementares menores de R$ 5 milhões, ou o uso estratégico de deduções como **Juros sobre Capital Próprio (JCP)**.</p>
      </div>
    `,
    navHtml: `
      <button class="lesson-nav-btn" onclick="showLesson('l-b-2-3')">← Voltar ao Módulo 2</button>
      <button class="lesson-nav-btn next-green" onclick="showLesson('l-b-3-2')">
        Próxima Aula: Distribuição para Médicos →
      </button>
    `
  },
  {
    id: "l-b-3-2",
    modulo: "Módulo 3 · Impacto Corporativo",
    breadcrumb: "Módulo 3: Impacto Corporativo › Aula 3.2",
    tag: "Módulo 3 · Impacto Corporativo",
    titulo: "Distribuição Desproporcional <span>para Médicos</span>",
    meta: "📖 Leitura — 8 min · 🩺 Profissionais · 🔓 Desbloqueado",
    content: `
      <p>As sociedades profissionais e clínicas de medicina sempre usaram o mecanismo fiduciário da <strong>distribuição desproporcional de lucros</strong>. O objetivo é remunerar de forma justa os sócios que realizam maior volume de cirurgias ou plantões técnicos, independentemente da fatia de capital social de cada um, aproveitando a isenção de tributação sobre os dividendos.</p>
      <p>No entanto, a Receita Federal promoveu um cerco implacável sobre esse fluxo, reclassificando pagamentos desproporcionais desprovidos de robustez documental em pró-labore ordinário, aplicando retroativamente uma tributação de **27,5% de IRRF + 20% de INSS patronal**.</p>
      
      <h2>A Checklist de Segurança contra a Glosa Fiscal</h2>
      <p>Para atestar a validade legal da distribuição desproporcional e afastar qualquer risco de autuação fiscal retroativa, as sociedades médicas e intelectuais precisam comprovar a conformidade rigorosa e mensal de três pilares fundamentais:</p>
      
      <div class="key-points">
        <div class="key-point-card">
          <div class="kp-icon">✍️</div>
          <div class="kp-title">Cláusula Clara no Contrato Social</div>
          <div class="kp-text">O contrato social registrado na Junta Comercial deve conter expressamente a permissão de distribuição desproporcional baseada no esforço técnico individual.</div>
        </div>
        <div class="key-point-card">
          <div class="kp-icon">📊</div>
          <div class="kp-title">Demonstrações Mensais</div>
          <div class="kp-text">A contabilidade da empresa deve emitir balancetes contábeis mensais assinados que atestem que havia lucros reais acumulados disponíveis no momento exato do repasse.</div>
        </div>
        <div class="key-point-card">
          <div class="kp-icon">📜</div>
          <div class="kp-title">Atas de Deliberação Formal</div>
          <div class="kp-text">Os sócios devem redigir e assinar uma ata formal detalhando os critérios técnicos gerenciais utilizados para justificar a desproporcionalidade do rateio.</div>
        </div>
      </div>
      
      <div class="fiduciary-alert">
        <h4>⚠️ Risco de Glosa Operacional</h4>
        <p>A mera existência da cláusula no Contrato Social <strong>não é suficiente</strong>. Sem balancetes contábeis assinados rigorosamente em base mensal e atas formais justificando os repasses, o fisco tem plenos poderes para descaracterizar a distribuição de lucros. Clínicas médicas informais operam sob um verdadeiro barril de pólvora tributário em 2026.</p>
      </div>
    `,
    navHtml: `
      <button class="lesson-nav-btn" onclick="showLesson('l-b-3-1')">← Aula Anterior</button>
      <button class="lesson-nav-btn next-green" onclick="showLesson('l-b-3-3')">
        Próxima Aula: Checklist Sucessório 2026 →
      </button>
    `
  },
  {
    id: "l-b-3-3",
    modulo: "Módulo 3 · Impacto Corporativo",
    breadcrumb: "Módulo 3: Impacto Corporativo › Aula 3.3",
    tag: "Módulo 3 · Impacto Corporativo",
    titulo: "Checklist Sucessório <span>2026</span>",
    meta: "📖 Leitura — 9 min · 🔑 Estratégico · 🔓 Desbloqueado",
    content: `
      <p>Parabéns por concluir a trilha conceitual completa da **Wealth Academy**! Agora, munido desse robusto conhecimento fiduciário, você precisa compreender por que **2026 representa a janela de ouro definitiva da sua história patrimonial** para agir e se antecipar ao cerco fiscal.</p>
      
      <h2>O Princípio Constitucional da Anterioridade</h2>
      <p>Embora as "maldades" gerais do ITCMD e do valuation a valor de mercado tenham sido sancionadas em nível nacional, a Constituição Federal proíbe a majoração e cobrança imediata de impostos estaduais. As assembleias estaduais precisarão ajustar suas legislações locais ao longo de 2026.</p>
      <p>Isso aciona o princípio da anterioridade anual e nonagesimal: <strong>todos os aumentos e novas regras de base de cálculo estaduais só entrarão em vigor a partir de 1º de janeiro de 2027</strong>.</p>
      
      <div class="callout-green">
        <p><strong>A Oportunidade Única:</strong> Qualquer estrutura fiduciária de governança patrimonial, holding bem planejada, ou doação com reserva de usufruto formalizada e registrada na junta comercial **até 31 de dezembro de 2026** estará assegurada sob o regime tributário antigo e consideravelmente mais barato.</p>
      </div>
      
      <h2>Faça o Download do Seu Guia Oficial Premium</h2>
      <p>Para consolidar seu conhecimento e obter um roteiro passo a passo detalhando as maldades da Reforma, faça o download do e-book oficial:</p>
      
      <div class="download-grid">
        <div class="download-card">
          <div>
            <div class="download-card-meta">Ebook Oficial · Guia Digital</div>
            <div class="download-card-title">Ebook Premium: Blindagem Patrimonial 2026</div>
            <div class="download-card-desc">O manual conceitual definitivo detalhando holdings a valor de mercado, IRPF-M, o teto do Lucro Presumido e a glosa de médicos. Inclui botão de impressão perfeito.</div>
          </div>
          <a href="./materiais/ebook-blindagem-patrimonial-2026.html" target="_blank" class="download-card-btn">
            📖 Acessar Ebook de Blindagem (HTML)
          </a>
        </div>
      </div>
      
      <h2>Como Agir com Segurança Fiduciária?</h2>
      <p>O Planejamento Sucessório é estritamente customizado. Soluções mágicas de internet costumam gerar severas autuações da Receita Federal. O melhor caminho de ação é auditar milimetricamente sua estrutura familiar atual de forma privada e técnica.</p>
      
      <div class="ebook-cta-card">
        <div class="ebook-cta-title">Sessão Estratégica Individual (Raio-X de Carteira & Sucessão)</div>
        <p class="ebook-cta-desc">
          Garanta uma consultoria individual e 100% privativa de 1 hora via Zoom diretamente com o Private Advisor Jhony Bosio por R$ 497,00 para auditar seus custos, riscos contráteis de sociedades médicas, exposição ao Lucro Presumido e desenhar seu plano de blindagem tributária sucessória para 2026.
        </p>
        <a href="https://www.jhonybosio.com/mentoria" target="_blank" class="ebook-cta-btn" style="background: var(--accent); color: #0c0d12; font-weight: 800;">
          🏛️ Agendar Meu Raio-X Individual (R$ 497)
        </a>
      </div>
    `,
    navHtml: `
      <button class="lesson-nav-btn" onclick="showLesson('l-b-3-2')">← Aula Anterior</button>
      <a href="../" class="lesson-nav-btn next-green">Concluir Wealth Academy 🎓</a>
    `
  }
];

// ── INJEÇÃO DINÂMICA NO DOM DA WEALTH ACADEMY ──
document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector("main.main-content");
  if (!mainContent) return;

  // Injetar as aulas no main content
  blindagemAulas.forEach(aula => {
    // Verificar se já existe
    if (document.getElementById(aula.id)) return;

    const lessonDiv = document.createElement("div");
    lessonDiv.className = "lesson-view";
    lessonDiv.id = aula.id;

    lessonDiv.innerHTML = `
      <div class="lesson-breadcrumb">
        <span>Wealth Academy</span>
        <span class="breadcrumb-sep">›</span>
        <span>${aula.modulo}</span>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-cur">${aula.titulo.replace(/<\/?[^>]+(>|$)/g, "")}</span>
      </div>

      <div class="lesson-header">
        <div class="lesson-module-tag">${aula.tag}</div>
        <h1 class="lesson-title">${aula.titulo}</h1>
        <div class="lesson-meta">
          <span class="lesson-meta-item">${aula.meta}</span>
        </div>
      </div>

      <div class="lesson-body">
        ${aula.content}
      </div>

      <div class="lesson-nav">
        ${aula.navHtml}
      </div>
    `;

    mainContent.appendChild(lessonDiv);
  });

  // Injetar telas de bloqueio da Trilha 2
  if (!document.getElementById("locked-t2-mod2")) {
    const lockM2Div = document.createElement("div");
    lockM2Div.className = "lesson-view";
    lockM2Div.id = "locked-t2-mod2";
    lockM2Div.innerHTML = `
      <div class="locked-section">
        <div class="locked-icon">🔒</div>
        <h2 class="locked-title">Módulo 2: Bloqueado</h2>
        <p class="locked-desc">O Mapeamento do Novo IRPF-M e as estruturas fiduciárias ideais para a Reforma Tributária estão disponíveis gratuitamente. Ative seu Acesso Completo pelo Hermes agora.</p>
        <a href="https://wa.me/5516981523120?text=Ol%C3%A1%20Hermes%2C%20estou%20na%20Wealth%20Academy%20e%20gostaria%20de%20liberar%20o%20Acesso%20Completo%20ao%20Curso%20de%20Blindagem%20Patrimonial%202026." target="_blank" class="locked-btn">
          🔓 Liberar Acesso Completo com Hermes
        </a>
        <p class="locked-note">Processo leva menos de 2 minutos via WhatsApp</p>
      </div>
    `;
    mainContent.appendChild(lockM2Div);
  }

  if (!document.getElementById("locked-t2-mod3")) {
    const lockM3Div = document.createElement("div");
    lockM3Div.className = "lesson-view";
    lockM3Div.id = "locked-t2-mod3";
    lockM3Div.innerHTML = `
      <div class="locked-section">
        <div class="locked-icon">🛠️</div>
        <h2 class="locked-title">Módulo 3: Impacto Corporativo</h2>
        <p class="locked-desc">Aprenda sobre o novo Lucro Presumido, regras de sociedades médicas e faça o download do E-book Premium de Blindagem Patrimonial. Ative seu Acesso Completo via Hermes.</p>
        <a href="https://wa.me/5516981523120?text=Ol%C3%A1%20Hermes%2C%20estou%20na%20Wealth%20Academy%20e%20gostaria%20de%20liberar%20o%20Acesso%20Completo%20ao%20Curso%20de%20Blindagem%20Patrimonial%202026." target="_blank" class="locked-btn">
          🔓 Liberar Acesso Completo com Hermes
        </a>
        <p class="locked-note">Você receberá o acesso liberado na hora no WhatsApp</p>
      </div>
    `;
    mainContent.appendChild(lockM3Div);
  }
});
