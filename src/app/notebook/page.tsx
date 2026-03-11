"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Lock, 
  BookOpen, 
  Send,
  ArrowRight,
  ChevronDown
} from "lucide-react";

export default function NotebookPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [formData, setFormData] = useState({ nome: "", whatsapp: "", investimento: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.whatsapp && formData.investimento) {
      setUnlocked(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-blue3-primary)] text-white font-sans selection:bg-[var(--color-blue3-secondary)]">
      {/* Header */}
      <nav className="sticky top-0 z-50 w-full bg-[var(--color-blue3-primary)]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Início
          </Link>
          <div className="flex items-center gap-2">
             <BookOpen className="w-5 h-5 text-[var(--color-blue3-secondary)]" />
             <span className="font-bold tracking-tighter uppercase text-[10px] text-gray-300">Notebook do Jhony</span>
          </div>
        </div>
      </nav>

      {!unlocked ? (
        /* Tela de Captura (Gated) */
        <section className="max-w-xl mx-auto px-6 py-20 text-center animate-fade-in-up">
          <div className="w-16 h-16 bg-[var(--color-blue3-secondary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[var(--color-blue3-secondary)]/20 shadow-[0_0_50px_-12px_rgba(0,146,255,0.3)]">
            <Lock className="w-8 h-8 text-[var(--color-blue3-secondary)]" />
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-white">
            Filosofia de Investimentos
          </h1>
          <p className="text-gray-400 mb-10 text-sm leading-relaxed max-w-sm mx-auto">
            Deixe seus dados para acessar o texto completo sobre minha forma de pensar patrimônio e sucessão.
          </p>

          <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-3xl border border-white/10 text-left space-y-6 shadow-2xl backdrop-blur-sm">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 pl-1">Nome Completo</label>
              <input 
                required
                type="text" 
                placeholder="Seu nome completo"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-blue3-secondary)] transition-colors text-white text-sm"
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 pl-1">Seu Melhor Whatsapp</label>
              <input 
                required
                type="tel" 
                placeholder="(00) 00000-0000"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-blue3-secondary)] transition-colors text-white text-sm"
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              />
            </div>

            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 pl-1">Patrimônio Atual Investido</label>
              <select 
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-blue3-secondary)] transition-colors text-white appearance-none text-sm cursor-pointer"
                onChange={(e) => setFormData({...formData, investimento: e.target.value})}
              >
                <option value="">Selecione a faixa</option>
                <option value="0-50k">Até R$ 50.000</option>
                <option value="50k-300k">R$ 50k a R$ 300k</option>
                <option value="300k-1m">R$ 300k a R$ 1 Milhão</option>
                <option value="1m+">Acima de R$ 1 Milhão</option>
              </select>
              <ChevronDown className="absolute right-4 top-[38px] w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <button type="submit" className="w-full bg-[var(--color-blue3-secondary)] hover:bg-[var(--color-blue3-accent)] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
              Liberar Leitura Completa <Send className="w-3 h-3" />
            </button>
          </form>
        </section>
      ) : (
        /* CONTEÚDO 100% INTEGRAL */
        <div className="max-w-3xl mx-auto px-6 py-20 animate-fade-in">
          <header className="mb-16">
             <h1 className="text-4xl md:text-5xl font-black leading-tight text-white mb-6">
                Minha filosofia de investimentos
             </h1>
             <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full border border-[var(--color-blue3-secondary)]/30 overflow-hidden">
                   <img src="/profile.png" alt="Jhony Bosio" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                   <span className="text-white font-bold text-sm tracking-tight">Jhony Bosio</span>
                   <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Assessor de Investimentos</span>
                </div>
             </div>
          </header>

          <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed font-normal">
            <p>
              Este material é uma prévia da forma como eu penso investimentos, planejamento financeiro e construção de patrimônio. Ele não foi escrito para impressionar com promessas, termos difíceis ou previsões mirabolantes. Foi escrito para ajudar o investidor a entender o que realmente importa quando o assunto é organizar o dinheiro com clareza, eficiência e tranquilidade.
            </p>

            <p>
              Ao longo dos anos, eu fui consolidando uma visão muito objetiva sobre o que funciona de verdade. Na prática, o patrimônio cresce melhor quando existe alinhamento entre três pilares: transparência na remuneração, estratégia de alocação bem definida e escolha de veículos eficientes para investir. Quando esses três pontos estão organizados, o investidor tende a pagar menos, entender melhor o que está fazendo e tomar decisões com muito menos ruído.
            </p>

            <p>
              Também aprendi que boa parte dos erros no mercado não nasce da falta de inteligência. Nasce da falta de método. Muita gente entra nos investimentos sem reserva de emergência, sem objetivo claro, sem noção do próprio prazo e, pior ainda, influenciada por interesses comerciais de terceiros ou por promessas irreais de retorno rápido. O resultado costuma ser uma carteira confusa, cara e desalinhada com a vida real.
            </p>

            <p>
              A proposta deste texto é justamente o oposto disso. Quero mostrar uma filosofia de investimento baseada em alocação de ativos, gestão passiva, controle de custos, eficiência tributária, proteção patrimonial e disciplina comportamental. É a lógica que eu considero mais sólida para quem quer construir patrimônio de forma séria, especialmente para quem valoriza simplicidade, previsibilidade e uma relação mais madura com o dinheiro.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Transparência, remuneração e alinhamento de interesses</h2>

            <p>
              Minha experiência em assessoria demonstra que uma das discussões mais importantes do mercado financeiro nos últimos anos envolve a forma como profissionais e instituições são remunerados. Isso importa porque o modelo de remuneração influencia diretamente as recomendações que chegam ao investidor.
            </p>

            <p>
              No modelo tradicional comissionado, o profissional recebe pela distribuição de produtos. Na prática, isso pode criar conflito de interesse, porque produtos que pagam mais comissão nem sempre são os melhores para o cliente. Esse desalinhamento não significa que todo profissional comissionado trabalhe mal, mas significa que o incentivo econômico do sistema nem sempre aponta na mesma direção do interesse do investidor.
            </p>

            <p>
              É por isso que eu vejo muito valor no modelo fee-based ou fee fixo. Nesse formato, a lógica é mais transparente. O cliente sabe quanto paga e a recomendação tende a ficar menos contaminada pela necessidade de empurrar produtos com maior rebate. O centro da conversa deixa de ser comissão e passa a ser estratégia.
            </p>

            <p>
              A transparência regulatória também evoluiu. A exigência de maior clareza sobre comissões ajuda o investidor a enxergar algo que por muitos anos ficou escondido. E isso é positivo. Quanto mais o cliente entende como o sistema funciona, maiores são as chances de tomar decisões conscientes e separar orientação técnica de interesse comercial.
            </p>

            <p>
              Na minha visão, o melhor relacionamento entre assessor e investidor é aquele em que o cliente compreende a estrutura de custos, entende por que está investindo em cada coisa e percebe que existe coerência entre recomendação, prazo, risco e objetivo. Sem isso, a carteira vira uma coleção de produtos. Com isso, ela vira um plano.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">O passo zero: reserva de emergência antes de qualquer sofisticação</h2>

            <p>
              Minha experiência demonstra que antes de falar em rentabilidade, ETFs, previdência ou diversificação global, existe um ponto que vem antes de tudo: a reserva de emergência.
            </p>

            <p>
              Eu trato a reserva de emergência como o escudo da vida financeira. Ela não existe para enriquecer ninguém. Existe para evitar decisões ruins em momentos difíceis. Demissão, problema de saúde, queda de faturamento, despesa inesperada, manutenção urgente, crise familiar. É para isso que ela serve.
            </p>

            <p>
              O tamanho ideal varia conforme a realidade de cada pessoa. Em geral, faz sentido trabalhar com algo entre 3 e 12 meses do custo de vida. Quem tem renda previsível e muita estabilidade pode operar com uma reserva menor. Quem é empresário, autônomo ou vive com renda variável precisa de uma gordura maior.
            </p>

            <p>
              O lugar desse dinheiro também precisa obedecer a uma lógica muito clara. Reserva de emergência não combina com emoção. Ela deve ficar em ativos de altíssima liquidez, baixa volatilidade e grande previsibilidade. Tesouro Selic, fundos DI simples com taxa baixa ou zero, e CDBs com liquidez diária de instituições sólidas costumam cumprir bem esse papel.
            </p>

            <p>
              O erro clássico é querer buscar retorno onde a função deveria ser proteção. Colocar reserva de emergência em ações, fundos imobiliários, crédito privado ou títulos longos marcados a mercado é uma troca ruim. O problema não é o produto em si. O problema é usar o produto errado para o objetivo errado. Dinheiro de emergência precisa estar disponível quando você precisar, sem depender de sorte, sem oscilar violentamente e sem obrigar venda no prejuízo.
            </p>

            <p>
              Quando esse colchão financeiro está pronto, o investidor ganha tranquilidade para pensar na etapa seguinte com mais maturidade.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Asset Allocation: o que realmente move os resultados</h2>

            <p>
              Minha experiência demonstra que depois da reserva de emergência, entra o tema que eu considero central na construção de patrimônio: Asset Allocation.
            </p>

            <p>
              Asset Allocation é a definição estratégica de como o patrimônio será distribuído entre diferentes classes de ativos. É a escolha dos percentuais de renda fixa pós-fixada, renda fixa atrelada à inflação, renda variável global, ativos reais, proteção cambial e outras classes, sempre respeitando perfil de risco, prazo e objetivos de vida.
            </p>

            <p>
              Como assessor, aprendi que na prática, o Asset Allocation é muito mais importante do que tentar descobrir qual ação vai disparar ou qual gestor vai performar melhor no próximo semestre. A maior parte do resultado de uma carteira vem da estrutura de alocação, não da tentativa de acertar movimentos específicos do mercado.
            </p>

            <p>
              Por isso eu gosto de comparar a alocação de ativos com uma bússola. Quando o plano está bem desenhado, o investidor deixa de reagir ao barulho do mercado e passa a seguir um método. Se uma classe cai e fica abaixo do peso ideal, os novos aportes são direcionados para ela. Se outra sobe demais e ganha peso excessivo, a carteira é ajustada. Isso reduz decisões impulsivas e transforma volatilidade em ferramenta, não em inimiga.
            </p>

            <p>
              O maior erro de muitos investidores é gastar energia demais em temas com impacto pequeno e ignorar o que realmente importa. Ficar obcecado por previsão de juros, por notícia do dia ou por dica de ativo costuma ser muito menos relevante do que definir uma boa alocação e ter consistência nos aportes.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Renda fixa pós-fixada: a base de liquidez da carteira</h2>

            <p>
              Dentro da lógica de Asset Allocation, a renda fixa pós-fixada cumpre um papel muito específico. Ela é a base de estabilidade, liquidez e previsibilidade da carteira.
            </p>

            <p>
              Essa classe acompanha as taxas básicas da economia, como Selic e CDI, e deve receber os recursos de curto prazo. É onde eu enxergo espaço para reserva de emergência, reserva de oportunidade e valores que podem ser necessários em até cerca de 3 anos.
            </p>

            <p>
              Muita gente tenta buscar mais rentabilidade com esse dinheiro de curto prazo e acaba indo para títulos prefixados ou IPCA+ longos. O problema é que esses papéis sofrem marcação a mercado. Se houver necessidade de resgate antes do vencimento, o investidor pode receber menos do que aplicou. Para dinheiro de curto prazo, isso é um risco desnecessário.
            </p>

            <p>
              Por isso, quando o objetivo é segurança de caixa, a renda fixa pós-fixada tende a ser mais adequada. Entre os veículos mais úteis, eu destaco fundos simples de renda fixa com taxa muito baixa, Tesouro Selic, CDBs de grandes bancos com liquidez diária e, em alguns casos, ETFs de renda fixa pós-fixada.
            </p>

            <p>
              Existe ainda uma nuance importante de eficiência. Em prazos muito curtos, alguns ETFs de renda fixa podem ser interessantes por não sofrerem IOF como ocorre em aplicações tradicionais resgatadas antes de 30 dias. Esse detalhe mostra como o veículo escolhido também interfere no resultado líquido.
            </p>

            <p>
              A função da renda fixa pós-fixada não é ser o grande motor de enriquecimento. Ela é a fundação que permite que o investidor atravesse períodos difíceis sem desmontar o restante da estratégia.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Inflação e proteção do poder de compra: IMA-B5 e IMA-B5+</h2>

            <p>
              Se a renda fixa pós-fixada cuida do curto prazo, a renda fixa atrelada à inflação entra para proteger o poder de compra no médio e longo prazo.
            </p>

            <p>
              Essa classe busca entregar ganho real. Em outras palavras, ela tenta fazer o patrimônio crescer acima da inflação ao longo do tempo. E aqui é essencial separar duas naturezas diferentes de risco.
            </p>

            <p>
              O IMA-B5 reúne títulos atrelados ao IPCA com vencimentos mais curtos. Em geral, tem menor volatilidade e se encaixa melhor para horizontes entre 2 e 5 anos. É uma exposição que costuma equilibrar proteção inflacionária com uma experiência mais estável para o investidor.
            </p>

            <p>
              Já o IMA-B5+ concentra títulos mais longos. E, por serem mais longos, sofrem muito mais marcação a mercado. Isso significa que podem oscilar bastante, inclusive com quedas relevantes no meio do caminho. Em compensação, carregam um potencial maior de retorno no longo prazo.
            </p>

            <p>
              Na prática, eu gosto de encaixar o IMA-B5 em objetivos de médio prazo e o IMA-B5+ em objetivos realmente longos, como aposentadoria e construção patrimonial de décadas. Misturar prazo curto com título longo costuma ser uma receita ruim, porque o investidor acaba se assustando com a volatilidade e vende no pior momento.
            </p>

            <p>
              Os ETFs facilitaram muito o acesso a essas exposições, porque permitem investir na classe sem a necessidade de ficar escolhendo títulos individualmente ou reinvestindo vencimentos manualmente. Isso simplifica a execução e melhora a aderência ao plano de alocação.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Renda variável global: crescimento com diversificação real</h2>

            <p>
              Minha experiência demonstra que uma carteira concentrada apenas no Brasil carrega um risco grande demais. O país representa uma fração pequena da economia global, e concentrar todo o patrimônio aqui significa aceitar risco político, fiscal, regulatório e cambial de forma excessiva.
            </p>

            <p>
              É por isso que eu considero a renda variável global uma peça fundamental do Asset Allocation. Ela funciona como motor de crescimento de longo prazo, ao mesmo tempo em que amplia a diversificação geográfica e cambial da carteira.
            </p>

            <p>
              Ao investir globalmente por meio de ETFs amplos, o investidor deixa de apostar em poucas empresas ou em poucos países e passa a participar do crescimento de milhares de negócios ao redor do mundo. Em vez de tentar descobrir a próxima grande vencedora, compra-se um conjunto enorme de empresas de diferentes setores, tamanhos e geografias.
            </p>

            <p>
              Essa abordagem reduz o risco específico e simplifica a vida. Quando uma empresa perde relevância, seu peso cai no índice. Quando outra cresce, ganha espaço. O próprio índice faz esse trabalho de atualização de forma automática.
            </p>

            <p>
              Mas é importante dizer com clareza: renda variável global continua sendo renda variável. Vai oscilar. Vai cair em alguns momentos. Exige horizonte longo e estômago emocional. Não é dinheiro para usar daqui a um ou dois anos. É capital que precisa de tempo para maturar.
            </p>

            <p>
              Quando bem posicionada dentro da alocação, essa classe ajuda o patrimônio a crescer com mais solidez e menos dependência do chamado risco Brasil.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Ativos reais e proteção: ouro e cripto com peso controlado</h2>

            <p>
              Algumas classes entram na carteira não para liderar retorno, mas para cumprir funções táticas de proteção, descorrelação e assimetria. É o caso do ouro e, em menor escala, dos criptoativos.
            </p>

            <p>
              O ouro, na minha leitura, funciona como reserva de valor e instrumento de proteção em cenários de estresse. Ele não precisa ser o ativo de maior retorno da carteira para justificar sua presença. Sua utilidade está muito ligada à baixa correlação com outras classes e ao papel histórico de preservação em momentos de crise.
            </p>

            <p>
              Já os criptoativos exigem muito mais cuidado. Eu vejo espaço apenas marginal e com peso controlado, justamente porque a volatilidade é muito alta. A lógica aqui não é transformar a carteira em uma aposta. É reconhecer que existe um potencial assimétrico e que uma exposição pequena pode fazer sentido dentro de um conjunto bem diversificado.
            </p>

            <p>
              Em ambos os casos, o mais importante é não perder a proporção. Proteção não pode virar especulação descontrolada. Quando essas classes sobem demais e passam a ocupar um espaço maior do que deveriam, o rebalanceamento devolve a carteira ao seu desenho original.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Gestão passiva com ETFs: simplicidade, custo baixo e eficiência</h2>

            <p>
              Boa parte da minha filosofia prática de investimentos passa pela gestão passiva com ETFs.
            </p>

            <p>
              O motivo é simples. Em vez de tentar prever movimentos de mercado, escolher ações específicas ou selecionar gestores que talvez batam o mercado, a gestão passiva aceita acompanhar índices amplos com baixo custo e alta eficiência operacional.
            </p>

            <p>
              Isso resolve vários problemas de uma vez.
            </p>

            <p>
              Primeiro, reduz drasticamente o custo de administração. Como o ETF apenas replica um índice, não há a mesma necessidade de uma estrutura cara de análise e rotação de carteira. Essa economia fica com o investidor.
            </p>

            <p>
              Segundo, simplifica a vida. Em vez de montar uma carteira lotada de produtos, o investidor pode acessar diferentes classes com poucos instrumentos. Isso economiza tempo, reduz risco de erro e facilita o acompanhamento.
            </p>

            <p>
              Terceiro, melhora a diversificação. Um único ETF pode dar acesso a centenas ou milhares de ativos. Isso é especialmente valioso em renda variável global, renda fixa indexada e até algumas exposições temáticas.
            </p>

            <p>
              Quarto, diminui a influência dos vieses comportamentais. Quando o método é comprar o mercado e manter a disciplina do plano, o investidor evita boa parte da tentação de fazer market timing ou stock picking motivado por emoção.
            </p>

            <p>
              Eu gosto de dizer que a gestão passiva tende a ser menos empolgante, mas muito mais funcional. E isso, no longo prazo, costuma ser uma vantagem.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Custos importam mais do que parece</h2>

            <p>
              Muita gente subestima o peso dos custos porque olha apenas o impacto de um ano. O problema é que patrimônio é construído ao longo de décadas. E, em períodos longos, taxas aparentemente pequenas destroem muito valor.
            </p>

            <p>
              A diferença entre pagar uma taxa alta em um fundo ativo e uma taxa baixa em um ETF pode significar uma perda brutal de patrimônio no final de 20 ou 30 anos. Isso acontece porque o custo não tira só dinheiro. Ele tira dinheiro que deixaria de render juros compostos ao longo do tempo.
            </p>

            <p>
              Esse é um dos motivos pelos quais produtos baratos e transparentes costumam ser tão poderosos. O ganho pode parecer discreto no começo, mas se acumula de forma muito relevante no longo prazo.
            </p>

            <p>
              Também existe um ponto desconfortável para a indústria. Produtos baratos normalmente geram menos comissão. Por isso, muitas vezes, eles não recebem o destaque que merecem. Essa é mais uma razão para o investidor entender como o mercado funciona e desconfiar de recomendações que parecem muito sofisticadas, mas vêm carregadas de custos invisíveis.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Eficiência tributária: uma vantagem silenciosa</h2>

            <p>
              Minha filosofia demonstra que outro pilar importante é prestar atenção ao resultado líquido e não apenas ao bruto. E isso nos leva ao tema da eficiência tributária.
            </p>

            <p>
              Em muitos casos, o veículo de investimento faz enorme diferença. ETFs de renda fixa, por exemplo, podem apresentar vantagens relevantes por não sofrerem come-cotas e, em determinadas estruturas, permitirem diferimento tributário maior do que fundos tradicionais.
            </p>

            <p>
              Esse detalhe é muito valioso porque o imposto postergado continua investido e rende juros compostos por mais tempo. No longo prazo, esse efeito é poderoso.
            </p>

            <p>
              Além disso, ETFs também resolvem um problema operacional comum na renda fixa tradicional: o vencimento. Quando o investidor compra um título individual, o vencimento gera resgate, tributação e necessidade de reinvestimento. Já no ETF, a carteira interna é reciclada sem criar esse mesmo atrito para o cotista.
            </p>

            <p>
              Claro que o investidor precisa estar atento à tributação aplicável em cada caso e, no Brasil, especialmente nos ETFs de renda variável, muitas vezes vale a pena usar uma plataforma de apoio contábil para apuração correta de preço médio, lucro e DARF. Mesmo assim, o ganho de eficiência estrutural costuma compensar bastante.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Previdência privada: quando o veículo importa tanto quanto o ativo</h2>

            <p>
              Muita gente ainda olha para previdência privada com preconceito, porque durante anos o mercado ofereceu produtos ruins, caros e ineficientes. Mas isso mudou bastante. Hoje, quando bem escolhida, a previdência pode ser um dos veículos mais poderosos para longo prazo e sucessão patrimonial.
            </p>

            <p>
              Na minha visão, a previdência não deve ser analisada apenas pelo fundo que está dentro dela, mas pela estrutura jurídica e tributária que a envolve.
            </p>

            <p>
              Ela traz vantagens importantes, como ausência de come-cotas, possibilidade de portabilidade sem resgate, manutenção do relógio da tabela regressiva e, em muitos casos, enorme eficiência sucessória. Isso transforma a previdência em um veículo estratégico, não apenas em mais um produto de prateleira.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">PGBL: benefício fiscal para quem sabe usar</h2>

            <p>
              O PGBL é especialmente interessante para quem faz declaração completa de Imposto de Renda e contribui para o INSS ou regime próprio.
            </p>

            <p>
              A lógica é direta. O investidor pode deduzir até 12% da renda bruta tributável anual ao aportar esse valor em PGBL. Isso gera um benefício fiscal imediato, porque reduz a base sobre a qual o imposto será calculado no ano.
            </p>

            <p>
              Na prática, é uma forma de diferir imposto. Em vez de entregar mais dinheiro ao governo agora, o investidor mantém esse capital trabalhando ao seu favor. Se o plano estiver enquadrado na tabela regressiva e o horizonte for longo, a alíquota futura pode cair para 10%, o que torna a estratégia ainda mais interessante.
            </p>

            <p>
              Mas é fundamental usar essa ferramenta do jeito certo. Aportes acima do limite dedutível perdem boa parte da lógica. E o prazo precisa ser compatível com a tabela escolhida. PGBL não é ferramenta para dinheiro com horizonte curto.
            </p>

            <p>
              Quando bem planejado, ele pode funcionar como uma combinação rara de economia tributária hoje e eficiência patrimonial amanhã.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">VGBL: sucessão rápida e planejamento patrimonial</h2>

            <p>
              Se o PGBL se destaca pelo benefício fiscal de entrada, o VGBL ganha protagonismo quando o assunto é sucessão patrimonial.
            </p>

            <p>
              O grande diferencial é que os recursos podem ser direcionados aos beneficiários de forma muito mais rápida do que ativos que passam por inventário. Isso pode fazer enorme diferença na prática. Família enlutada precisa de liquidez, e não de burocracia.
            </p>

            <p>
              Em muitos casos, o VGBL permite que os beneficiários recebam os recursos em prazo muito menor, o que ajuda a cobrir despesas imediatas e reduz a necessidade de vender patrimônio de forma apressada.
            </p>

            <p>
              Mas essa vantagem exige cuidado operacional. Beneficiários precisam estar corretamente indicados. Se esse campo for negligenciado ou mal preenchido, parte da eficiência sucessória se perde. Planejamento patrimonial não é só escolher o produto certo. É executar corretamente.
            </p>

            <p>
              Também vale observar eventuais mudanças regulatórias e tributárias sobre aportes elevados, porque esse ambiente pode evoluir ao longo do tempo. Ainda assim, do ponto de vista estratégico, o VGBL segue sendo uma ferramenta muito relevante para quem pensa patrimônio em perspectiva familiar e geracional.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Tabela regressiva: o poder do longo prazo</h2>

            <p>
              A tabela regressiva é um dos maiores incentivos ao investimento de longo prazo dentro da previdência privada. Quanto mais tempo o dinheiro permanece investido, menor tende a ser a alíquota de Imposto de Renda, chegando a 10% após 10 anos.
            </p>

            <p>
              Esse detalhe é extremamente relevante quando comparado a outras estruturas de investimento em que a alíquota mínima fica acima disso e, em muitos casos, ainda existe come-cotas.
            </p>

            <p>
              Outro ponto que eu valorizo bastante é a portabilidade. O investidor pode trocar de fundo ou de instituição sem precisar resgatar e sem zerar a contagem da tabela regressiva. Isso permite atualizar estratégia, reduzir custos e melhorar qualidade sem destruir a eficiência tributária acumulada no tempo.
            </p>

            <p>
              No longo prazo, isso é uma vantagem real. O patrimônio cresce com menos fricção.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Rebalanceamento: disciplina prática sem tentar prever o futuro</h2>

            <p>
              Rebalancear uma carteira é um gesto simples que traduz maturidade. Significa devolver cada classe ao peso adequado conforme a estratégia definida.
            </p>

            <p>
              Na prática, rebalancear força o investidor a fazer algo que emocionalmente é difícil. Comprar mais do que caiu e moderar o que subiu demais. Em outras palavras, ajuda a comprar na baixa e evitar o entusiasmo excessivo nas altas.
            </p>

            <p>
              Nos ETFs, existe ainda um componente adicional de rebalanceamento interno. Os índices se atualizam. Empresas perdem peso, outras ganham, algumas saem, novas entram. Isso funciona como um mecanismo de autolimpeza que reduz o risco específico e simplifica o acompanhamento.
            </p>

            <p>
              O investidor deixa de depender da própria habilidade para decidir o que sair e o que entrar na carteira o tempo todo. A regra do índice faz boa parte desse trabalho de maneira impessoal.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Comportamento: onde muitos perdem mais do que na escolha do ativo</h2>

            <p>
              Se eu tivesse que resumir uma grande lição do mercado, diria que o maior inimigo do investidor raramente é o ativo em si. Quase sempre é o comportamento.
            </p>

            <p>
              Aversão à perda, excesso de confiança, ancoragem, viés do sobrevivente, ilusão de controle. Esses vieses aparecem o tempo inteiro e atrapalham decisões.
            </p>

            <p>
              A aversão à perda faz o investidor segurar ativos ruins por tempo demais e vender bons ativos no pânico. A ancoragem prende a mente ao preço de compra, como se aquele número tivesse algum poder mágico sobre o valor futuro. O viés do sobrevivente faz parecer que stock picking ou day trade funcionam melhor do que realmente funcionam, porque só vemos os poucos vencedores e não a multidão silenciosa dos derrotados.
            </p>

            <p>
              A ilusão de controle talvez seja uma das mais perigosas. Ela leva a pessoa a acreditar que, com método suficiente, conseguirá prever o mercado de forma consistente. Na prática, grande parte do que parece genialidade em ciclos curtos é mistura de sorte com narrativa bem contada.
            </p>

            <p>
              É por isso que eu vejo tanto valor em sistemas de investimento que reduzem espaço para impulsos. Gestão passiva, alocação estrutural, aportes regulares e rebalanceamento não são apenas técnicas. São formas de proteger o investidor dele mesmo.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Cuidado com fórmulas mágicas, day trade e promessas de dinheiro rápido</h2>

            <p>
              Sempre que alguém promete enriquecimento rápido, retorno garantido ou metodologia infalível, eu acendo um alerta.
            </p>

            <p>
              O mercado financeiro é terreno fértil para narrativas sedutoras, principalmente quando elas exploram medo, ganância e urgência. Cursos de day trade, fórmulas mágicas e promessas de multiplicação rápida normalmente vendem muito mais emoção do que método.
            </p>

            <p>
              Existe toda uma engenharia psicológica por trás disso. Prova social seletiva, ancoragem de preço, gatilhos de escassez, histórias de exceção vendidas como regra. O investidor vê os poucos casos de sucesso expostos nas redes, ignora os muitos casos de fracasso e passa a acreditar que está diante de uma oportunidade rara.
            </p>

            <p>
              Na minha visão, esse tipo de abordagem afasta o investidor da construção patrimonial séria. Patrimônio relevante normalmente nasce de renda, disciplina, tempo, custo baixo, alocação coerente e comportamento equilibrado. Quase nunca nasce de atalhos.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Foco no que está sob controle</h2>

            <p>
              Uma das ideias mais libertadoras nos investimentos é aceitar o que não está sob o nosso controle.
            </p>

            <p>
              Ninguém controla a próxima crise, o próximo ciclo de juros, a próxima manchete política ou a próxima ação que vai surpreender o mercado. Tentar controlar isso consome energia demais para um retorno muito pequeno.
            </p>

            <p>
              Em compensação, algumas variáveis estão totalmente ao nosso alcance. O valor dos aportes. O nível de custo da carteira. O grau de diversificação. O tempo de permanência investido. A aderência ao plano. A forma como reagimos à volatilidade.
            </p>

            <p>
              Quando o investidor para de tentar prever tudo e passa a organizar o que pode de fato controlar, a experiência muda. O mercado deixa de ser um jogo de adivinhação e passa a ser uma ferramenta de construção patrimonial.
            </p>

            <p>
              Essa mudança de mentalidade é poderosa porque tira o investidor da ansiedade estéril e coloca foco no que realmente acumula riqueza ao longo dos anos.
            </p>

            <h2 className="text-white font-black text-3xl mt-20 mb-10 text-[var(--color-blue3-secondary)] tracking-tight">O meu ponto central</h2>

            <p>
              Se eu tivesse que condensar toda a minha filosofia em poucas linhas, eu diria o seguinte.
            </p>

            <p className="font-bold text-white mb-2">Primeiro, organize a base. Tenha reserva de emergência, clareza sobre objetivos e entendimento real do seu prazo.</p>

            <p className="font-bold text-white mb-2">Segundo, monte uma alocação de ativos coerente com a sua vida, e não com a manchete do dia.</p>

            <p className="font-bold text-white mb-2">Terceiro, prefira estruturas transparentes, custos baixos e veículos eficientes.</p>

            <p className="font-bold text-white mb-2">Quarto, use a previdência privada de forma estratégica quando ela fizer sentido tributário e sucessório.</p>

            <p className="font-bold text-white mb-2">Quinto, invista globalmente e reduza a dependência de um único país.</p>

            <p className="font-bold text-white mb-2">Sexto, pare de procurar genialidade onde a disciplina já resolve.</p>

            <p className="mt-10">
              E, por fim, lembre-se sempre disto: patrimônio não cresce melhor quando você complica. Cresce melhor quando você entende a função de cada parte da carteira, respeita o tempo, controla custos e mantém consistência.
            </p>

            <p className="mt-6">
              Essa é a filosofia que orienta minha forma de olhar investimentos. É também a base do trabalho que eu desenvolvo com clientes que desejam construir patrimônio com mais estratégia, clareza e alinhamento de interesses.
            </p>
          </article>

          <div className="mt-20 p-10 bg-gradient-to-br from-[var(--color-blue3-secondary)] to-blue-700 rounded-3xl text-center shadow-2xl">
             <h3 className="text-2xl font-black mb-4">Pronto para aplicar esta estratégia?</h3>
             <p className="mb-8 text-white/90">Vamos transformar esse manifesto em um plano real para o seu futuro.</p>
             <Link href="/mentoria" className="inline-flex items-center gap-2 bg-white text-[var(--color-blue3-primary)] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all shadow-xl">
                Agendar Diagnóstico Individual <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      )}

      {/* Footer Legal */}
      <footer className="py-20 border-t border-white/5 opacity-40 bg-black/20 text-[9px] text-center px-6 leading-loose uppercase tracking-[0.2em] text-gray-400">
         <div className="max-w-2xl mx-auto">
            Este conteúdo é meramente educativo e não constitui recomendação de investimento. Jhony Bosio é Assessor de Investimentos credenciado. A rentabilidade passada não garante resultados futuros.
         </div>
      </footer>
    </main>
  );
}
