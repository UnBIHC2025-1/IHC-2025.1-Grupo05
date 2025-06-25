import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Dados centralizados dos checklists
export const checklists = [
  {
    categoria: "Desenvolvimento Web",
    itens: [
      "\n--- Imagens ---",
      { id: "dw-item1", text: "Adicionar alt para imagens, botões-imagem, gráficos e imagens de mapas com pontos de acesso." },
      { id: "dw-item2", text: "Adicionar alt='' para imagens decorativas que não tem significado." },
      { id: "dw-item3", text: "Incluir a descrição no alt para imagens que contêm texto." },
      { id: "dw-item4", text: "Garantir contraste adequado entre texto da imagem e plano de fundo." },
      { id: "dw-item5", text: "Evitar textos com fontes muito pequenas dentro da imagem." },
      "\n--- Vídeos ---",
      { id: "dw-item6", text: "Adicionar legendas para áudio em vídeos existentes." },
      { id: "dw-item7", text: "Evitar conteúdo com flashes (gatilhos para convulsões) ou manter abaixo dos limites." },
      { id: "dw-item8", text: "Adicionar botão de controle de legenda e audiodescrição." },
      "\n--- Controles ---",
      { id: "dw-item9", text: "Adicionar href para links." },
      { id: "dw-item10", text: "Adicionar underline nos links." },
      { id: "dw-item11", text: "Adicionar estados de foco em campos de entrada, botões, e elementos interativos." },
      { id: "dw-item12", text: "Adicionar type='button' nos botões." },
      { id: "dw-item13", text: "Adicionar skip-link (link para pular) para o conteúdo principal." },
      { id: "dw-item14", text: "Identifique e comunique links que abrem em uma nova guia ou janela." },
      { id: "dw-item15", text: "Garantir que todos os botões tenham nome acessível por leitores de tela." },
      "\n--- Formulário ---",
      { id: "dw-item16", text: "Adicionar label para os campos de entradas associadas ao elemento correspondente." },
      { id: "dw-item17", text: "Adicionar <fieldset> e <legend> para seção no formulário." },
      { id: "dw-item18", text: "Adicionar autocomplete para campos de entrada." },
      { id: "dw-item19", text: "Exibir errors (erros) de entrada acima do formulário, após envio." },
      { id: "dw-item20", text: "Adicionar aria-describedby para os campos de entrada." },
      { id: "dw-item21", text: "Exibir mensagens de erro e sucesso não só visualmente." },
      { id: "dw-item22", text: "Utilizar validação em tempo real acessível para indicar campos obrigatórios ou incorretos." },
      "\n--- Mídia ---",
      { id: "dw-item23", text: "Impedir autoplay para vídeos e áudios." },
      { id: "dw-item24", text: "Adicionar type para botões e entradas." },
      { id: "dw-item25", text: "Adicionar pausa para todas as mídias." },
      { id: "dw-item26", text: "Adicionar transcrição para áudios." },
      "\n--- Semântica ---",
      { id: "dw-item27", text: "Uso de elementos nativos HTML." },
      { id: "dw-item28", text: "Fluxo contínuo e lógico." },
      { id: "dw-item29", text: "Tem descrições que podem ser facilmente compreendidas." },
      { id: "dw-item30", text: "Tem a semântica correta." },
      { id: "dw-item31", text: "É objetivo nos rótulos." },
      "\n--- Texto ---",
      { id: "dw-item32", text: "Evitar o uso de textos dentro de imagens." },
      { id: "dw-item33", text: "Redimensiona os textos na página, aumentando o zoom em até 200%." },
      { id: "dw-item34", text: "Alturas das fontes não é fixa." },
      "\n--- Teclado ---",
      { id: "dw-item35", text: "Funcionalidades da página web estão disponíveis por teclado." },
      { id: "dw-item36", text: "Quando se tem o mouseover é permitido o uso de teclado." },
      { id: "dw-item37", text: "Foco visível remova elementos focalizáveis invisíveis." },
      { id: "dw-item38", text: "Adicione o .hover, .focus { } para tornar o foco visível." },
      { id: "dw-item39", text: "Permite/visa o uso de Atalhos de teclado como o TAB." },
      { id: "dw-item40", text: "Primeiro item interativo da página é um link para o conteúdo principal." },
      { id: "dw-item41", text: "Garantir ordem lógica de navegação por teclado." },
      "\n--- Título ---",
      { id: "dw-item42", text: "A hierarquia de conteúdo da página é definida por sua lógica não pelo tamanho do texto." },
      { id: "dw-item43", text: "Use elementos de título h1 h2 h3 para apresentar o conteúdo." },
      { id: "dw-item44", text: "Não pular níveis lógicos." },
      { id: "dw-item45", text: "Toda página contém um título h1 descrevendo a página." },
      "\n--- Tabela ---",
      { id: "dw-item46", text: "Use o table para elementos em formato de tabela." },
      { id: "dw-item47", text: "Insira cabeçalhos para explicar os dados, use th com scope correto." },
      { id: "dw-item48", text: "Use o caption elemento para fornecer um título para a tabela." },
      { id: "dw-item49", text: "Não usar tabelas para layout." },
      "\n--- Modais ---",
      { id: "dw-item50", text: "Deve ser fácil fechar." },
      { id: "dw-item51", text: "Permitir o uso da tecla escape ESC." },
      { id: "dw-item52", text: "A interação é uma tarefa simples." },
      { id: "dw-item53", text: "Evita modais em tela cheia." },
      { id: "dw-item54", text: "Não abrir um modal a partir de outro modal." },
      { id: "dw-item55", text: "Gerenciar foco corretamente dentro do modal." },
      "\n--- Dispositivo Móvel e tocável ---",
      { id: "dw-item56", text: "O site pode ser rotacionado para qualquer orientação." },
      { id: "dw-item57", text: "Impedir rolagem horizontal." },
      { id: "dw-item58", text: "Garantir que botões e links possam ser ativados facilmente." },
      { id: "dw-item59", text: "Garantir espaço suficiente entre elementos interativos." },
      { id: "dw-item60", text: "Garantir acessibilidade para gestos de toque." },
      "\n--- Ferramentas e extras ---",
      { id: "dw-item61", text: "Permitir pausar, parar ou ocultar conteúdo em movimento." },
      { id: "dw-item62", text: "Usar Breadcrumbs informando a localização atual nas páginas." },
      { id: "dw-item63", text: "Colocar página ou área de esclarecimento de dúvidas e dicas de acessibilidade." },
      { id: "dw-item64", text: "Áreas clicáveis com no mínimo 44px (pixels) de altura e 44px de largura." },
      { id: "dw-item65", text: "No caso de captcha garanta que seja simples de entender e tenha alternativas para pessoas com deficiência." },
      { id: "dw-item66", text: "Incluir um campo de busca." },
      { id: "dw-item67", text: "Indicar idioma principal da página com lang='' na tag <html>." }
    ]
  },
  {
    categoria: "Geração de Conteúdo",
    itens: [
      "\n--- Termos ---",
      { id: "term1", text: "Sempre utilize o termo 'pessoas com deficiência' (PCD) e depois complemente: visual, física, intelectual, múltipla, pessoa surda, pessoa cega, usuária de cadeira de rodas (cadeirante), tetraplégica, paraplégica, pessoa com nanismo, com baixa visão, pessoa autista, disléxica, neurodiversa ou neurodivergente." },
      { id: "term2", text: "Evite termos capacitistas (ex: 'portador', 'sofre de', 'deficiente', 'normal')." },
      { id: "term3", text: "Prefira termos neutros e respeitosos que não infantilizem ou romantizem a deficiência." },
      { id: "term4", text: "Sempre atualize a terminologia conforme as diretrizes oficiais (ex: ONU, ABNT, MEC, Movimento PcD)." },
      "\n--- Textos ---",
      { id: "text1", text: "Usar textos descomplicados e objetivos." },
      { id: "text2", text: "Usar de palavras conhecidas." },
      { id: "text3", text: "Evitar figuras de linguagem e frases com 'senso de urgência'." },
      { id: "text4", text: "Usar pontuação adequada." },
      { id: "text5", text: "Evitar frases extensas (ideal é ter de 15 a 20 palavras)." },
      { id: "text6", text: "Usar preferencialmente a ordem direta nas orações." },
      { id: "text7", text: "Evitar o uso de jargões técnicos ou explicar quando inevitáveis." },
      { id: "text8", text: "Dar preferência a voz ativa e evitar ambiguidade." },
      { id: "text9", text: "Criar títulos e subtítulos explicativos e hierarquizados." },
      "\n--- Descrição de Imagens ---",
      { id: "img1", text: "Identificar o tipo de imagem e personagem (foto, ilustração, mapa, gráfico... e 'o que/quem')." },
      { id: "img2", text: "Localizar (onde)." },
      { id: "img3", text: "Descrever a ação (o que faz, como faz)." },
      { id: "img4", text: "Referenciar." },
      { id: "img5", text: "Descrever expressões faciais ou tons emocionais relevantes." },
      "\n--- Descrição de Imagens Complexas ---",
      { id: "imgc1", text: "Posicionar gráfico, quadrinhos, quadros e outras imagens complexas em um local separado." },
      { id: "imgc2", text: "Descrição sucinta no texto alternativo." },
      { id: "imgc3", text: "Oferecer versão textual equivalente da informação visual." },
      "\n--- Ícones ---",
      { id: "icon1", text: "Adicionar iconografia." },
      { id: "icon2", text: "Adicionar ícone e texto." },
      { id: "icon3", text: "Adicionar texto alternativo para ícones clicáveis." },
      { id: "icon4", text: "Descrever no texto alternativo, quando necessário usá-lo, a ação da pessoa usuária e para onde será direcionada." },
      { id: "icon5", text: "Garantir que os ícones sejam reconhecíveis em escala reduzida." },
      "\n--- Mídias de Vídeo ---",
      { id: "video1", text: "Adicionar descritivo curto para vídeos." },
      { id: "video2", text: "Optar por legendas: Open Caption e Closed Caption para vídeos." },
      { id: "video3", text: "Incluir audiodescrição sincronizada ou alternativa." },
      { id: "video4", text: "Disponibilizar roteiro do vídeo em texto." },
      { id: "video5", text: "Incluir janela de Libras, quando possível." },
      "\n--- Autodescrição ---",
      { id: "auto1", text: "Adicionar autodescrição no roteiro dos vídeos." },
      { id: "auto2", text: "Apresentar a autodescrição no início, antes da fala principal." },
      { id: "auto3", text: "Garantir que a autodescrição seja coerente com o propósito do conteúdo." },
      "\n--- Podcasts ---",
      { id: "pod1", text: "Transcrever o conteúdo do episódio." },
      { id: "pod2", text: "Incluir além das partes faladas, como sons de fundos, efeitos sonoros, quem está falando etc." },
      { id: "pod3", text: "Inserir um avatar na página falada para a interpretação do texto transcrito para Libras." },
      { id: "pod4", text: "Considerar também formato de vídeo." },
      { id: "pod5", text: "Indicar, quando necessário, pausas, risos ou mudanças de entonação relevantes." },
      "\n--- Hashtags e Emojis ---",
      { id: "hash1", text: "Em hashtags, utilize a primeira letra de cada palavra em maiúsculas para que leitores possam identificar palavras corretamente." },
      { id: "hash2", text: "Não abusar de emojis, pois nem sempre sua descrição é suficiente para um bom entendimento." },
      { id: "hash3", text: "Evitar mensagens compostas apenas por emojis." },
      "\n--- Hiperlinks ---",
      { id: "link1", text: "Descrição de links e botões devem ser compreensíveis de maneira isolada." },
      { id: "link2", text: "Evite links compostos apenas por ícones ou palavras genéricas." }
    ]
  },
  {
    categoria: "Gestão de Projetos",
    itens: [
      "\n--- Personas ---",
      { id: "persona1", text: "Pessoas com Deficiência Visual (cegueira, baixa visão, daltonismo ou deficiência cromática)" },
      { id: "persona2", text: "Pessoas com Deficiência Física (fraqueza, tremores, movimentos involuntários, paralisia, limitações da sensação, dor que impede movimento, ausência de membros)" },
      { id: "persona3", text: "Pessoas com Deficiência Auditiva (surdez, baixa audição, surdocegueira)" },
      { id: "persona4", text: "Pessoas com Deficiência na Fala (dificuldade para falar, volume insuficiente, gagueira, mudez)" },
      { id: "persona5", text: "Pessoas Neurodiversas (dificuldades de diferentes graus para ver, escutar, falar, compreender e interagir socialmente)" },
      { id: "persona6", text: "Pessoas com Múltiplas Deficiências (combinação de duas ou mais deficiências anteriores)" },
      { id: "persona7", text: "Possíveis limitações decorrentes do envelhecimento (que podem ser de um ou mais grupos de deficiências)" },
      { id: "persona8", text: "Pessoas com analfabetismo (analfabetismo digital e funcional níveis 1, 2 e 3)" },
      { id: "persona9", text: "Pessoas com Baixa Conectividade ou Uso de Dados Limitado (usuários com acesso precário à internet, planos limitados ou instabilidade de conexão)" },
      { id: "persona10", text: "Usuários com Dispositivos Antigos ou de Baixo Desempenho (pessoas com smartphones ou computadores mais antigos, pouco armazenamento ou memória limitada)" },
      { id: "persona11", text: "Pessoas com Baixo Letramento Digital (usuários com pouca familiaridade com tecnologia, interfaces ou navegação digital)" },
      { id: "persona12", text: "Pessoas Idosas (mesmo sem deficiência diagnosticada (usuários com possíveis limitações leves de visão, audição, cognição ou motricidade fina)" },
      { id: "persona13", text: "Cuidadores ou Acompanhantes (usuários que acessam o sistema em nome de outras pessoas (idosos, PCDs, crianças))" },
      { id: "persona14", text: "Pessoas em Situações de Estresse ou Urgência (usuários que acessam o sistema em momentos críticos ou sob pressão)" },
      { id: "persona15", text: "Pessoas com Barreiras Linguísticas (pessoas não fluentes na língua do sistema)" },
      { id: "persona16", text: "Usuários de Diferentes Contextos Culturais (diferenças em símbolos)" },
      { id: "persona17", text: "Pessoas com Restrições Temporárias (usuários afetados por condições transitórias (ex: braço imobilizado, ambiente escuro, sem óculos))" },
      "\n--- Conscientização ---",
      { id: "cons1", text: "Quantidade de pessoas no mundo com algum tipo de deficiência." },
      { id: "cons2", text: "Quantidade de pessoas no Brasil com algum tipo de deficiência, segundo IBGE." },
      { id: "cons3", text: "Natureza da deficiência: congênita, hereditária, adquirida, temporária." },
      { id: "cons4", text: "Grupos mais comuns de tipos de deficiência." },
      { id: "cons5", text: "Quanto custa a acessibilidade?" },
      { id: "cons6", text: "Quanto tempo a mais o projeto precisará para implementar acessibilidade?" },
      { id: "cons7", text: "Quantas pessoas com deficiência vão usar meu aplicativo ou acessar meu sítio de Internet?" },
      { id: "cons8", text: "Pessoas cegas compram online?" },
      { id: "cons9", text: "Pessoas surdas assistem vídeos?" },
      { id: "cons10", text: "Pessoas tetraplégicas usam smartphone?" },
      { id: "cons11", text: "Legislação: A Convenção sobre os Direitos das Pessoas com Deficiência Comentada." },
      { id: "cons12", text: "Legislação: PORTARIA Nº 3, DE 7 DE MAIO DE 2007." },
      { id: "cons13", text: "Análise de mercado de software de acessibilidade digital." },
      { id: "cons14", text: "Requisitos não funcionais incluem critérios de acessibilidade." },
      { id: "cons15", text: "A acessibilidade beneficia outros grupos além das pessoas com deficiência." },
      { id: "cons16", text: "A acessibilidade digital é fator de inovação, reputação e vantagem competitiva." },
      "\n--- Planejamento ---",
      { id: "plan1", text: "Atividades bem delineadas, cronogramas e atribuições de responsabilidade relacionadas à acessibilidade?" },
      { id: "plan2", text: "Tarefas com critérios de sucesso que atendam pelo menos os níveis A e AA, segundo a documentação de acessibilidade (WCAG)?" },
      { id: "plan3", text: "Acessibilidade foi definida como requisito essencial desde a fase de concepção do projeto?" },
      { id: "plan4", text: "As partes interessadas foram informadas da importância da acessibilidade?" },
      { id: "plan5", text: "Há profissionais com conhecimento em acessibilidade na equipe ou consultores designados?" },
      { id: "plan6", text: "O orçamento contempla recursos para implementar e testar acessibilidade?" },
      { id: "plan7", text: "Capacitação Contínua: Oferta de treinamentos regulares sobre acessibilidade digital para a equipe?" },
      { id: "plan8", text: "Monitoramento e Avaliação: Implementação de processos para avaliar e monitorar a acessibilidade ao longo do projeto?" }
    ]
  },
  {
    categoria: "Design",
    itens: [
      "\n--- Aparência ---",
      { id: "design-item1", text: "Adicionar instrução que não dependa exclusivamente da cor." },
      { id: "design-item2", text: "Adicionar informação (como gráficos e diagramas) que não dependa exclusivamente da cor." },
      { id: "design-item3", text: "Tamanho do texto ajustável para permitir ampliação." },
      { id: "design-item4", text: "Descrever os controles pelo nome, não apenas pela aparência ou localização." },
      { id: "design-item5", text: "Garantir que dicas visuais significativas atinjam 3:1 em relação ao fundo." },
      { id: "design-item6", text: "Fazer com que as linhas de texto se ajustem ao viewport." },
      { id: "design-item7", text: "Oferece uma opção de alto contraste (dark-mode) de suas páginas web e aumento de fontes." },
      { id: "design-item8", text: "Parágrafos com no máximo 80 caracteres por linha." },
      { id: "design-item9", text: "Evita o uso de textos longos em caixa alta ou condensados." },
      { id: "design-item10", text: "Evita o alinhamento justificado." },
      { id: "design-item11", text: "Fontes são fluidas e de fácil entendimento." },
      { id: "design-item12", text: "Toma o devido cuidado com display:none e visibility:hidden para os recursos de tecnologia assistiva." },
      { id: "design-item13", text: "Preferir botões com texto e ícone. E botões apenas com ícones tem o nome acessível." },
      { id: "design-item14", text: "Tipografia legível com fontes de fácil leitura." },
      { id: "design-item15", text: "Tipografia legível com fontes de tamanho adequado." },
      { id: "design-item16", text: "Evita elementos visuais muito próximos, dificultando toque ou leitura." },
      { id: "design-item17", text: "Evita dependencia de instruções posicionais, como 'clique no botão à direita'." },
      { id: "design-item18", text: "Evita textos animados, cintilantes ou movimentação constante." },
      "\n--- Animação ---",
      { id: "design-item19", text: "Evitar conteúdo que pisque, ou mantenha-o abaixo dos limites." },
      { id: "design-item20", text: "Permitir que os usuários controlem as alterações de conteúdo que ocorrem em paralelo com outro conteúdo." },
      { id: "design-item21", text: "Toda a animação deve obedecer à prefers-reduced-motion consulta de mídia." },
      { id: "design-item22", text: "Toda animação possui descrição em áudio, para pessoas cegas." },
      { id: "design-item23", text: "Evitar loops infinitos em vídeos ou gifs animados." },
      { id: "design-item24", text: "Evitar transições rápidas ou abruptas, que podem causar desconforto sensorial." },
      "\n--- Contraste de Cores ---",
      { id: "design-item25", text: "Verificar o contraste de todo texto tamanho normal." },
      { id: "design-item26", text: "Verificar o contraste de todo texto tamanho grande." },
      { id: "design-item27", text: "Verificar o contraste de todos os ícones." },
      { id: "design-item28", text: "Verificar o contraste das bordas dos elementos de entrada (entrada de texto, botões de opção, caixas de seleção, etc.)." },
      { id: "design-item29", text: "Verificar texto que se sobrepõe a imagens ou vídeos." },
      { id: "design-item30", text: "Verificar ::selection cores personalizadas." },
      { id: "design-item31", text: "Verificar o contraste de todo o texto de acordo com o fundo." },
      { id: "design-item32", text: "Verificar o contraste de todo o texto sob uma imagem." },
      { id: "design-item33", text: "Verificar uso exclusivo de cores não dependendo apenas de cores para transmitir informações." },
      { id: "design-item34", text: "Verificar o contraste do layout em conjunto." }
    ]
  }
]

// Função para exportar todos os checklists em um arquivo .txt
export function exportAllChecklists() {
  let txt = ""
  checklists.forEach(({ categoria, itens }) => {
    txt += `Categoria: ${categoria}\n`;
    itens.forEach((item, idx) => {
      txt += `- ${item}\n`;
    });
    txt += "\n";
  });

  const blob = new Blob([txt], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "checklists-verificaAAA.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportAllChecklistsPDF() {
  const doc = new jsPDF();
  const categoryColors = [
    [41, 128, 185],   // Desenvolvimento Web - azul
    [39, 174, 96],    // Geração de Conteúdo - verde
    [241, 196, 15],   // Gestão de Projetos - amarelo
    [142, 68, 173],   // Design - roxo
  ];

  let y = 20;
  doc.setFontSize(22);
  doc.setTextColor(30, 30, 30);
  doc.text("Checklists VerificaAAA", 105, y, { align: "center" });
  y += 10;
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text("Checklist prático para promover acessibilidade digital", 105, y, { align: "center" });
  y += 10;

  checklists.forEach((cat, idx) => {
    y += 10;
    // Categoria: cor e negrito
    const color = categoryColors[idx % categoryColors.length] as [number, number, number];
    doc.setFontSize(18);
    doc.setTextColor(...color);
    doc.setFont("helvetica", "bold");
    doc.text(cat.categoria, 15, y);
    y += 10;
    let currentSubtopic = "";
    let firstSubtopic = true;
    let lastWasChecklist = false;
    cat.itens.forEach((item, idx) => {
      if (typeof item === "string" && /^\n--- (.*) ---$/.test(item)) {
        if (!firstSubtopic && lastWasChecklist) y += 7;
        firstSubtopic = false;
        currentSubtopic = (item as string).replace(/^\n--- (.*) ---$/, "$1");
        doc.setFontSize(13);
        doc.setTextColor(...color);
        doc.setFont("helvetica", "bold");
        doc.text(currentSubtopic, 20, y);
        lastWasChecklist = false;
      } else if (typeof item === "object" && item.id && item.text) {
        let checked = false;
        try {
          checked = localStorage.getItem(`checkbox-${item.id}`) === "true";
        } catch {}
        const status = checked ? "[x]" : "[ ]";
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40);
        doc.setFont("helvetica", checked ? "bold" : "normal");
        y += 7;
        // Quebra o texto longo em múltiplas linhas
        const maxWidth = 170; // largura máxima para o texto
        const lines = doc.splitTextToSize(`${status} ${item.text}`, maxWidth);
        doc.text(lines, 28, y);
        y += 3.5 * (lines.length - 1); // avança para a última linha do bloco
        y += 3.5; // espaçamento padrão entre checklists
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
        lastWasChecklist = true;
        // Se o próximo item é subtópico ou é o último, pule uma linha extra
        const nextItem = cat.itens[idx + 1];
        if (
          typeof nextItem === "string" && /^\n--- (.*) ---$/.test(nextItem)
          || idx === cat.itens.length - 1
        ) {
          y += 8;
        }
      }
    });
  });

  doc.save("checklists-verificaAAA.pdf");
}

export function exportChecklistsPDF({ projectName, description, selectedCategories, projectUrl, includeAnalysis }: {
  projectName?: string;
  description?: string;
  projectUrl?: string;
  selectedCategories: string[];
  includeAnalysis?: boolean;
}) {
  const doc = new jsPDF();
  const categoryColors = [
    [41, 128, 185],   // Desenvolvimento Web - azul
    [39, 174, 96],    // Geração de Conteúdo - verde
    [241, 196, 15],   // Gestão de Projetos - amarelo
    [142, 68, 173],   // Design - roxo
  ];

  let y = 22;
  // Título grande, estilizado
  doc.setFontSize(26);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 30, 30);
  const titleMain = "Checklists Verifica ";
  const titleAAA = "AAA";
  doc.text(titleMain, 15, y, { align: "left" });
  const titleMainWidth = doc.getTextWidth(titleMain);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(120, 120, 120);
  doc.text(titleAAA, 15 + titleMainWidth, y, { align: "left" });
  y += 6;
  // Linha horizontal discreta
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.7);
  doc.line(15, y, 195, y);
  y += 8;

  // Cabeçalho do projeto em bloco destacado
  const headerStartY = y;
  doc.setFontSize(12);
  doc.setTextColor(30, 30, 30);
  const headerLabelX = 20;
  const headerValueX = 20 + doc.getTextWidth("Descrição: ") + 2;
  const headerMaxWidth = 170 - (headerValueX - headerLabelX);
  let headerTextY = headerStartY + 11;
  // Calcular linhas para cada campo
  const headerFields: {label: string, value: string, lines: string[]}[] = [];
  if (projectName) {
    const lines = doc.splitTextToSize(projectName, headerMaxWidth);
    headerFields.push({ label: "Projeto:", value: projectName, lines });
  }
  if (description) {
    const lines = doc.splitTextToSize(description, headerMaxWidth);
    headerFields.push({ label: "Descrição:", value: description, lines });
  }
  if (projectUrl) {
    const lines = doc.splitTextToSize(projectUrl, headerMaxWidth);
    headerFields.push({ label: "URL do projeto:", value: projectUrl, lines });
  }
  const now = new Date();
  const dataStr = now.toLocaleDateString();
  const dataLines = doc.splitTextToSize(dataStr, headerMaxWidth);
  headerFields.push({ label: "Data:", value: dataStr, lines: dataLines });

  // Calcular altura total do cabeçalho
  let headerTotalLines = 0;
  headerFields.forEach(f => { headerTotalLines += f.lines.length; });
  const headerHeight = headerFields.length * 2 + headerTotalLines * 6 + 7;
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(15, headerStartY, 180, headerHeight, 3, 3, 'F');

  // Desenhar campos
  let headerLineY = headerTextY;
  headerFields.forEach(f => {
    doc.setFont("helvetica", "bold");
    doc.text(f.label, headerLabelX, headerLineY);
    doc.setFont("helvetica", "normal");
    f.lines.forEach((line: string, i: number) => {
      const y = headerLineY + (i === 0 ? 0 : i * 6);
      doc.text(line, headerValueX, y);
    });
    headerLineY += f.lines.length * 6 + 2;
  });
  y = headerStartY + headerHeight + 8;

  // Separador visual
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.5);
  doc.line(15, y, 195, y);
  y += 6;

  // Conteúdo dos checklists
  checklists.filter(cat => selectedCategories.includes(cat.categoria)).forEach((cat, idx) => {
    // Categoria
    y += 10;
    // Remover cor, usar preto
    doc.setFontSize(16);
    doc.setTextColor(30, 30, 30);
    doc.setFont("helvetica", "bold");
    doc.text(cat.categoria, 15, y);
    y += 7;
    let currentSubtopic = "";
    let firstSubtopic = true;
    let lastWasChecklist = false;
    cat.itens.forEach((item, idx) => {
      if (typeof item === "string" && /^\n--- (.*) ---$/.test(item)) {
        if (!firstSubtopic && lastWasChecklist) y += 5;
        firstSubtopic = false;
        currentSubtopic = (item as string).replace(/^\n--- (.*) ---$/, "$1");
        doc.setFontSize(12);
        doc.setTextColor(30, 30, 30);
        doc.setFont("helvetica", "bold");
        doc.text(currentSubtopic, 22, y);
        lastWasChecklist = false;
      } else if (typeof item === "object" && item.id && item.text) {
        let checked = false;
        try {
          checked = localStorage.getItem(`checkbox-${item.id}`) === "true";
        } catch {}
        const status = checked ? "[x]" : "[ ]";
        doc.setFontSize(11);
        // Cor verde para marcados, cinza escuro para não marcados
        if (checked) {
          doc.setTextColor(39, 174, 96);
        } else {
          doc.setTextColor(40, 40, 40);
        }
        doc.setFont("helvetica", checked ? "bold" : "normal");
        y += 6;
        const maxWidth = 160;
        const lines = doc.splitTextToSize(`${status} ${item.text}`, maxWidth);
        doc.text(lines, 28, y);
        y += 4.5 * (lines.length - 1);
        y += 2;
        if (y > 265) {
          // Rodapé institucional em todas as páginas
          const footerTextRodape =
            "Este arquivo foi criado na plataforma VerificaAAA (https://unbihc2025-1.github.io/IHC-2025.1-Grupo05/), um projeto da Universidade de Brasília (UnB) desenvolvido por alunos de Engenharia de Software na disciplina de Interação Humano-Computador, com o intuito de aumentar a acessibilidade em projetos digitais.";
          doc.setFontSize(9);
          doc.setTextColor(120, 120, 120);
          const footerLinesRodape = doc.splitTextToSize(footerTextRodape, 170);
          doc.text(footerLinesRodape, 105, 285, { align: "center" });
          doc.setTextColor(30, 30, 30);
          // Rodapé com número da página
          const pageNum = doc.getNumberOfPages();
          doc.setFontSize(9);
          doc.setTextColor(180, 180, 180);
          doc.text(`Página ${pageNum}`, 195, 290, { align: "right" });
          doc.addPage();
          y = 22;
        }
        lastWasChecklist = true;
        const nextItem = cat.itens[idx + 1];
        if (
          typeof nextItem === "string" && /^\n--- (.*) ---$/.test(nextItem)
          || idx === cat.itens.length - 1
        ) {
          y += 6;
        }
      }
    });
    // Separador entre categorias
    y += 4;
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.3);
    doc.line(15, y, 195, y);
    y += 2;
  });

  // Rodapé institucional e número da página em todas as páginas
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    // Rodapé institucional
    const footerTextRodape =
      "Este arquivo foi criado na plataforma VerificaAAA (https://unbihc2025-1.github.io/IHC-2025.1-Grupo05/), um projeto da Universidade de Brasília (UnB) desenvolvido por alunos de Engenharia de Software na disciplina de Interação Humano-Computador, com o intuito de aumentar a acessibilidade em projetos digitais.";
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    const footerLinesRodape = doc.splitTextToSize(footerTextRodape, 170);
    doc.text(footerLinesRodape, 105, 285, { align: "center" });
    // Número da página
    doc.setTextColor(180, 180, 180);
    doc.text(`Página ${i} de ${totalPages}`, 195, 290, { align: "right" });
    doc.setTextColor(30, 30, 30);
  }

  // Se incluir análise de dados, adicionar ao final do PDF
  if (includeAnalysis) {
    y += 20;
    doc.addPage();
    y = 22;
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 30, 30);
    doc.text("Análise de Dados", 15, y);
    y += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 30, 30);

    // 1. Resumo geral
    let total = 0, checked = 0;
    const allItems: { id: string, text: string, categoria: string, subtopico: string }[] = [];
    checklists.forEach(cat => {
      let currentSubtopic = "";
      cat.itens.forEach(item => {
        if (typeof item === "string" && /^\n--- (.*) ---$/.test(item)) {
          currentSubtopic = (item as string).replace(/^\n--- (.*) ---$/, "$1");
        } else if (typeof item === "object" && item.id && item.text) {
          total++;
          let isChecked = false;
          try {
            isChecked = localStorage.getItem(`checkbox-${item.id}`) === "true";
          } catch {}
          if (isChecked) checked++;
          allItems.push({ id: item.id, text: item.text, categoria: cat.categoria, subtopico: currentSubtopic });
        }
      });
    });
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(`Total de checklists marcados: ${checked} de ${total} (${((checked/total)*100).toFixed(1)}%)`, 15, y);
    y += 10;
    // Gráfico de pizza (marcado/não marcado)
    const cx = 40, cy = y + 25, r = 20;
    const angleChecked = (checked/total) * 2 * Math.PI;
    // Fundo (não marcado)
    doc.setDrawColor(200,200,200); doc.setFillColor(220,220,220);
    doc.circle(cx, cy, r, 'F');
    // Marcado
    doc.setDrawColor(41,128,185); doc.setFillColor(41,128,185);
    doc.moveTo(cx, cy);
    doc.lineTo(cx + r, cy);
    // Desenhar arco manualmente
    const steps = 50;
    for (let i = 0; i <= steps; i++) {
      const theta = (i/steps) * angleChecked;
      const x = cx + r * Math.cos(theta);
      const yArc = cy + r * Math.sin(theta);
      doc.lineTo(x, yArc);
    }
    doc.lineTo(cx, cy);
    doc.fill();
    doc.setFontSize(10);
    doc.setTextColor(41,128,185);
    doc.text('Marcado', cx + r + 10, cy - 5);
    doc.setTextColor(120,120,120);
    doc.text('Não marcado', cx + r + 10, cy + 7);
    doc.setTextColor(30,30,30);
    y = cy + r + 10;

    // 2. Por área
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text('Checklists marcados por área', 15, y);
    y += 6;
    const areaData: { area: string, total: number, checked: number }[] = [];
    checklists.forEach(cat => {
      let areaTotal = 0, areaChecked = 0;
      cat.itens.forEach(item => {
        if (typeof item === "object" && item.id && item.text) {
          areaTotal++;
          let isChecked = false;
          try {
            isChecked = localStorage.getItem(`checkbox-${item.id}`) === "true";
          } catch {}
          if (isChecked) areaChecked++;
        }
      });
      areaData.push({ area: cat.categoria, total: areaTotal, checked: areaChecked });
    });
    // Tabela por área
    autoTable(doc, {
      startY: y,
      head: [["Área", "Marcados", "Total", "%"]],
      body: areaData.map(a => [a.area, a.checked, a.total, ((a.checked/a.total)*100).toFixed(1)+"%"]),
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 2 },
      headStyles: { fillColor: [41,128,185] },
      margin: { left: 15, right: 15 },
      didParseCell: (data) => {
        if (data.section === 'body' && data.column.index === 1 && Number(data.cell.raw) > 0) {
          data.cell.styles.textColor = [39, 174, 96];
        }
      },
    });
    y = (doc as any).lastAutoTable.finalY + 8;
    // Gráfico de barras por área
    const barX = 30, barY = y, barW = 100, barH = 7;
    areaData.forEach((a, i) => {
      const percent = a.checked/a.total;
      doc.setFillColor(41,128,185);
      doc.rect(barX, barY + i*15, barW*percent, barH, 'F');
      doc.setDrawColor(200,200,200);
      doc.rect(barX, barY + i*15, barW, barH);
      doc.setFontSize(10);
      doc.setTextColor(30,30,30);
      doc.text(a.area, barX + barW + 5, barY + i*15 + barH - 1);
      doc.text(((percent*100).toFixed(1)+"%"), barX - 20, barY + i*15 + barH - 1);
    });
    y = barY + areaData.length*15 + 10;

    // 3. Por sub-tópico
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text('Checklists marcados por sub-tópico', 15, y);
    y += 6;
    // Para cada área, uma tabela de sub-tópicos
    checklists.forEach(cat => {
      const subData: { sub: string, total: number, checked: number }[] = [];
      let currentSub = "";
      cat.itens.forEach(item => {
        if (typeof item === "string" && /^\n--- (.*) ---$/.test(item)) {
          currentSub = (item as string).replace(/^\n--- (.*) ---$/, "$1");
        } else if (typeof item === "object" && item.id && item.text) {
          let found = subData.find(s => s.sub === currentSub);
          if (!found) {
            found = { sub: currentSub, total: 0, checked: 0 };
            subData.push(found);
          }
          found.total++;
          let isChecked = false;
          try {
            isChecked = localStorage.getItem(`checkbox-${item.id}`) === "true";
          } catch {}
          if (isChecked) found.checked++;
        }
      });
      if (subData.length > 0) {
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(cat.categoria, 15, y);
        y += 5;
        autoTable(doc, {
          startY: y,
          head: [["Sub-tópico", "Marcados", "Total", "%"]],
          body: subData.map(s => [s.sub, s.checked, s.total, ((s.checked/s.total)*100).toFixed(1)+"%"]),
          theme: 'grid',
          styles: { fontSize: 9, cellPadding: 1.5 },
          headStyles: { fillColor: [41,128,185] },
          margin: { left: 15, right: 15 },
          columnStyles: { 0: { cellWidth: 40 } },
          didParseCell: (data) => {
            if (data.section === 'body' && data.column.index === 1 && Number(data.cell.raw) > 0) {
              data.cell.styles.textColor = [39, 174, 96];
            }
          },
        });
        y = (doc as any).lastAutoTable.finalY + 8;
      }
    });
  }

  doc.save("checklists-verificaAAA.pdf");
}

export function exportChecklistsTXT({ projectName, description, selectedCategories }: {
  projectName?: string;
  description?: string;
  selectedCategories: string[];
}) {
  let txt = "Checklists VerificaAAA\n\n";
  const now = new Date();
  const dataStr = now.toLocaleDateString();
  if (projectName) txt += `PROJETO: ${projectName}\n`;
  if (description) txt += `DESCRIÇÃO: ${description}\n`;
  txt += `DATA: ${dataStr}\n`;
  txt += "\n";
  checklists.filter(({ categoria }) => selectedCategories.includes(categoria)).forEach(({ categoria, itens }) => {
    txt += `Categoria: ${categoria}\n`;
    itens.forEach((item, idx) => {
      txt += `- ${typeof item === "object" ? item.text : item}\n`;
    });
    txt += "\n";
  });
  const blob = new Blob([txt], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "checklists-verificaAAA.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
} 