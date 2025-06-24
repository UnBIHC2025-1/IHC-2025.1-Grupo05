import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Dados centralizados dos checklists
export const checklists = [
  {
    categoria: "Desenvolvimento Web",
    itens: [
      "\n--- Imagens ---",
      { id: "item1", text: "Adicionar alt para imagens, botões-imagem, gráficos e imagens de mapas com pontos de acesso." },
      { id: "item2", text: "Adicionar alt='' para imagens decorativas que não tem significado." },
      { id: "item3", text: "Incluir a descrição no alt para imagens que contêm texto." },
      { id: "item4", text: "Garantir contraste adequado entre texto da imagem e plano de fundo." },
      { id: "item5", text: "Evitar textos com fontes muito pequenas dentro da imagem." },
      "\n--- Vídeos ---",
      { id: "item6", text: "Adicionar legendas para áudio em vídeos existentes." },
      { id: "item7", text: "Evitar conteúdo com flashes (gatilhos para convulsões) ou manter abaixo dos limites." },
      { id: "item8", text: "Adicionar botão de controle de legenda e audiodescrição." },
      "\n--- Controles ---",
      { id: "item9", text: "Adicionar href para links." },
      { id: "item10", text: "Adicionar underline nos links." },
      { id: "item11", text: "Adicionar estados de foco em campos de entrada, botões, e elementos interativos." },
      { id: "item12", text: "Adicionar type='button' nos botões." },
      { id: "item13", text: "Adicionar skip-link (link para pular) para o conteúdo principal." },
      { id: "item14", text: "Identifique e comunique links que abrem em uma nova guia ou janela." },
      { id: "item15", text: "Garantir que todos os botões tenham nome acessível por leitores de tela." },
      "\n--- Formulário ---",
      { id: "item16", text: "Adicionar label para os campos de entradas associadas ao elemento correspondente." },
      { id: "item17", text: "Adicionar <fieldset> e <legend> para seção no formulário." },
      { id: "item18", text: "Adicionar autocomplete para campos de entrada." },
      { id: "item19", text: "Exibir errors (erros) de entrada acima do formulário, após envio." },
      { id: "item20", text: "Adicionar aria-describedby para os campos de entrada." },
      { id: "item21", text: "Exibir mensagens de erro e sucesso não só visualmente." },
      { id: "item22", text: "Utilizar validação em tempo real acessível para indicar campos obrigatórios ou incorretos." },
      "\n--- Mídia ---",
      { id: "item23", text: "Impedir autoplay para vídeos e áudios." },
      { id: "item24", text: "Adicionar type para botões e entradas." },
      { id: "item25", text: "Adicionar pausa para todas as mídias." },
      { id: "item26", text: "Adicionar transcrição para áudios." },
      "\n--- Semântica ---",
      { id: "item27", text: "Uso de elementos nativos HTML." },
      { id: "item28", text: "Fluxo contínuo e lógico." },
      { id: "item29", text: "Tem descrições que podem ser facilmente compreendidas." },
      { id: "item30", text: "Tem a semântica correta." },
      { id: "item31", text: "É objetivo nos rótulos." },
      "\n--- Texto ---",
      { id: "item32", text: "Evitar o uso de textos dentro de imagens." },
      { id: "item33", text: "Redimensiona os textos na página, aumentando o zoom em até 200%." },
      { id: "item34", text: "Alturas das fontes não é fixa." },
      "\n--- Teclado ---",
      { id: "item35", text: "Funcionalidades da página web estão disponíveis por teclado." },
      { id: "item36", text: "Quando se tem o mouseover é permitido o uso de teclado." },
      { id: "item37", text: "Foco visível remova elementos focalizáveis invisíveis." },
      { id: "item38", text: "Adicione o .hover, .focus { } para tornar o foco visível." },
      { id: "item39", text: "Permite/visa o uso de Atalhos de teclado como o TAB." },
      { id: "item40", text: "Primeiro item interativo da página é um link para o conteúdo principal." },
      { id: "item41", text: "Garantir ordem lógica de navegação por teclado." },
      "\n--- Título ---",
      { id: "item42", text: "A hierarquia de conteúdo da página é definida por sua lógica não pelo tamanho do texto." },
      { id: "item43", text: "Use elementos de título h1 h2 h3 para apresentar o conteúdo." },
      { id: "item44", text: "Não pular níveis lógicos." },
      { id: "item45", text: "Toda página contém um título h1 descrevendo a página." },
      "\n--- Tabela ---",
      { id: "item46", text: "Use o table para elementos em formato de tabela." },
      { id: "item47", text: "Insira cabeçalhos para explicar os dados, use th com scope correto." },
      { id: "item48", text: "Use o caption elemento para fornecer um título para a tabela." },
      { id: "item49", text: "Não usar tabelas para layout." },
      "\n--- Modais ---",
      { id: "item50", text: "Deve ser fácil fechar." },
      { id: "item51", text: "Permitir o uso da tecla escape ESC." },
      { id: "item52", text: "A interação é uma tarefa simples." },
      { id: "item53", text: "Evita modais em tela cheia." },
      { id: "item54", text: "Não abrir um modal a partir de outro modal." },
      { id: "item55", text: "Gerenciar foco corretamente dentro do modal." },
      "\n--- Dispositivo Móvel e tocável ---",
      { id: "item56", text: "O site pode ser rotacionado para qualquer orientação." },
      { id: "item57", text: "Impedir rolagem horizontal." },
      { id: "item58", text: "Garantir que botões e links possam ser ativados facilmente." },
      { id: "item59", text: "Garantir espaço suficiente entre elementos interativos." },
      { id: "item60", text: "Garantir acessibilidade para gestos de toque." },
      "\n--- Ferramentas e extras ---",
      { id: "item61", text: "Permitir pausar, parar ou ocultar conteúdo em movimento." },
      { id: "item62", text: "Usar Breadcrumbs informando a localização atual nas páginas." },
      { id: "item63", text: "Colocar página ou área de esclarecimento de dúvidas e dicas de acessibilidade." },
      { id: "item64", text: "Áreas clicáveis com no mínimo 44px (pixels) de altura e 44px de largura." },
      { id: "item65", text: "No caso de captcha garanta que seja simples de entender e tenha alternativas para pessoas com deficiência." },
      { id: "item66", text: "Incluir um campo de busca." },
      { id: "item67", text: "Indicar idioma principal da página com lang='' na tag <html>." }
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
      { id: "item1", text: "Adicionar instrução que não dependa exclusivamente da cor." },
      { id: "item2", text: "Adicionar informação (como gráficos e diagramas) que não dependa exclusivamente da cor." },
      { id: "item3", text: "Tamanho do texto ajustável para permitir ampliação." },
      { id: "item4", text: "Descrever os controles pelo nome, não apenas pela aparência ou localização." },
      { id: "item5", text: "Garantir que dicas visuais significativas atinjam 3:1 em relação ao fundo." },
      { id: "item6", text: "Fazer com que as linhas de texto se ajustem ao viewport." },
      { id: "item7", text: "Oferece uma opção de alto contraste (dark-mode) de suas páginas web e aumento de fontes." },
      { id: "item8", text: "Parágrafos com no máximo 80 caracteres por linha." },
      { id: "item9", text: "Evita o uso de textos longos em caixa alta ou condensados." },
      { id: "item10", text: "Evita o alinhamento justificado." },
      { id: "item11", text: "Fontes são fluidas e de fácil entendimento." },
      { id: "item12", text: "Toma o devido cuidado com display:none e visibility:hidden para os recursos de tecnologia assistiva." },
      { id: "item13", text: "Preferir botões com texto e ícone. E botões apenas com ícones tem o nome acessível." },
      { id: "item14", text: "Tipografia legível com fontes de fácil leitura." },
      { id: "item15", text: "Tipografia legível com fontes de tamanho adequado." },
      { id: "item16", text: "Evita elementos visuais muito próximos, dificultando toque ou leitura." },
      { id: "item17", text: "Evita dependencia de instruções posicionais, como 'clique no botão à direita'." },
      { id: "item18", text: "Evita textos animados, cintilantes ou movimentação constante." },
      "\n--- Animação ---",
      { id: "item19", text: "Evitar conteúdo que pisque, ou mantenha-o abaixo dos limites." },
      { id: "item20", text: "Permitir que os usuários controlem as alterações de conteúdo que ocorrem em paralelo com outro conteúdo." },
      { id: "item21", text: "Toda a animação deve obedecer à prefers-reduced-motion consulta de mídia." },
      { id: "item22", text: "Toda animação possui descrição em áudio, para pessoas cegas." },
      { id: "item23", text: "Evitar loops infinitos em vídeos ou gifs animados." },
      { id: "item24", text: "Evitar transições rápidas ou abruptas, que podem causar desconforto sensorial." },
      "\n--- Contraste de Cores ---",
      { id: "item25", text: "Verificar o contraste de todo texto tamanho normal." },
      { id: "item26", text: "Verificar o contraste de todo texto tamanho grande." },
      { id: "item27", text: "Verificar o contraste de todos os ícones." },
      { id: "item28", text: "Verificar o contraste das bordas dos elementos de entrada (entrada de texto, botões de opção, caixas de seleção, etc.)." },
      { id: "item29", text: "Verificar texto que se sobrepõe a imagens ou vídeos." },
      { id: "item30", text: "Verificar ::selection cores personalizadas." },
      { id: "item31", text: "Verificar o contraste de todo o texto de acordo com o fundo." },
      { id: "item32", text: "Verificar o contraste de todo o texto sob uma imagem." },
      { id: "item33", text: "Verificar uso exclusivo de cores não dependendo apenas de cores para transmitir informações." },
      { id: "item34", text: "Verificar o contraste do layout em conjunto." }
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