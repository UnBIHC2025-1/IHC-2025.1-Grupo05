import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ResetButton } from "@/components/ui/reset-button"
import { ProgressWidget } from "@/components/ui/progress-widget"

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ProgressWidget />
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button
            variant="outline"
            className="back-button"
            aria-label="Voltar para a página inicial"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center mb-6 mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            <Users className="w-10 h-10 text-white relative z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-60"></div>
          </div>

          <h1 className="page_title">
            Desenvolvimento Web
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Boas práticas para garantir acessibilidade no desenvolvimento web
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            <ResetButton />

            <Card>
              <CardContent className="p-6">
                <p className="corpo-pagina">
                  "Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como 
                  implementar acessibilidade, verificá-la e usar as ferramentas disponíveis no 
                  mercado para testes e padronizações. Também é importante que a equipe saiba 
                  como as pessoas com deficiência usam os sítios web e aplicativos". Nesse caso, 
                  foram incluídas técnicas relacionadas ao desenvolvimento e também formas de 
                  verificar.
                </p>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Imagens
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item1" className="checklist-checkbox" />
                    <Label htmlFor="dw-item1" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar <code className="code-inline">alt</code> para imagens, botões-imagem, gráficos e imagens de mapas com pontos de acesso. <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item2" className="checklist-checkbox" />
                    <Label htmlFor="dw-item2" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar <code className="code-inline">alt=""</code> para imagens decorativas que não tem significado. <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item3" className="checklist-checkbox" />
                    <Label htmlFor="dw-item3" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Incluir a descrição no <code className="code-inline">alt</code> para imagens que contém texto. <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item4" className="checklist-checkbox" />
                    <Label htmlFor="dw-item4" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Garantir contraste adequado entre texto da imagem e plano de fundo.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item5" className="checklist-checkbox" />
                    <Label htmlFor="dw-item5" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Evitar textos com fontes muito pequenas dentro da imagem.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Vídeos
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item6" className="checklist-checkbox" />
                    <Label htmlFor="dw-item6" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar legendas para áudio em vídeos existentes. <a href="#ref2" className="text-blue-600 hover:underline">[2]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item7" className="checklist-checkbox" />
                    <Label htmlFor="dw-item7" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Evitar conteúdo com flashes (gatilhos para convulsões) ou manter abaixo dos limites. <a href="#ref3" className="text-blue-600 hover:underline">[3]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item8" className="checklist-checkbox" />
                    <Label htmlFor="dw-item8" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar botão de controle de legenda e audiodescrição.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Controles
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item9" className="checklist-checkbox" />
                    <Label htmlFor="dw-item9" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar href para links. <a href="#ref4" className="text-blue-600 hover:underline">[4]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item10" className="checklist-checkbox" />
                    <Label htmlFor="dw-item10" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar underline nos links. <a href="#ref5" className="text-blue-600 hover:underline">[5]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item11" className="checklist-checkbox" />
                    <Label htmlFor="dw-item11" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar estados de foco em campos de entrada, botões, e elementos interativos. <a href="#ref6" className="text-blue-600 hover:underline">[6]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item12" className="checklist-checkbox" />
                    <Label htmlFor="dw-item12" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar type="button" nos botões. <a href="#ref4" className="text-blue-600 hover:underline">[4]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item13" className="checklist-checkbox" />
                    <Label htmlFor="dw-item13" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar skip-link (link para pular) para o conteúdo principal. <a href="#ref7" className="text-blue-600 hover:underline">[7]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item14" className="checklist-checkbox" />
                    <Label htmlFor="dw-item14" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Identifique e comunique links que abrem em uma nova guia ou janela. <a href="#ref8" className="text-blue-600 hover:underline">[8]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item15" className="checklist-checkbox" />
                    <Label htmlFor="dw-item15" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Garantir que todos os botões tenham nome acessível por leitores de tela.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Formulário
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item16" className="checklist-checkbox" />
                    <Label htmlFor="dw-item16" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar label para os campos de entradas associadas ao elemento correspondente. <a href="#ref9" className="text-blue-600 hover:underline">[9]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item17" className="checklist-checkbox" />
                    <Label htmlFor="dw-item17" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar <code className="code-inline">&lt;fildset&gt;</code> e <code className="code-inline">&lt;legend&gt;</code> para seção no formulário. <a href="#ref4" className="text-blue-600 hover:underline">[4]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item18" className="checklist-checkbox" />
                    <Label htmlFor="dw-item18" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar autocomplete para campos de entrada. <a href="#ref10" className="text-blue-600 hover:underline">[10]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item19" className="checklist-checkbox" />
                    <Label htmlFor="dw-item19" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Exibir errors (erros) de entrada acima do formulário, após envio. <a href="#ref11" className="text-blue-600 hover:underline">[11]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item20" className="checklist-checkbox" />
                    <Label htmlFor="dw-item20" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar aria-describedby para os campos de entrada. <a href="#ref11" className="text-blue-600 hover:underline">[11]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item21" className="checklist-checkbox" />
                    <Label htmlFor="dw-item21" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Exibir mensagens de erro e sucesso não só visualmente. <a href="#ref5" className="text-blue-600 hover:underline">[5]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item22" className="checklist-checkbox" />
                    <Label htmlFor="dw-item22" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Utilizar validação em tempo real acessível para indicar campos obrigatórios ou incorretos.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Mídia
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item23" className="checklist-checkbox" />
                    <Label htmlFor="dw-item23" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Impedir autoplay para vídeos e audios. <a href="#ref12" className="text-blue-600 hover:underline">[12]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item24" className="checklist-checkbox" />
                    <Label htmlFor="dw-item24" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar type para botões e entradas. <a href="#ref4" className="text-blue-600 hover:underline">[4]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item25" className="checklist-checkbox" />
                    <Label htmlFor="dw-item25" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar pausa para todas as mídias. <a href="#ref13" className="text-blue-600 hover:underline">[13]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item26" className="checklist-checkbox" />
                    <Label htmlFor="dw-item26" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicionar transcrição para audios. <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Semântica
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item27" className="checklist-checkbox" />
                    <Label htmlFor="dw-item27" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Uso de elementos nativos HTML.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item28" className="checklist-checkbox" />
                    <Label htmlFor="dw-item28" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Fluxo continuo e Lógico.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item29" className="checklist-checkbox" />
                    <Label htmlFor="dw-item29" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Tem descrições que podem ser facilmente compreendidas.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item30" className="checklist-checkbox" />
                    <Label htmlFor="dw-item30" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Tem a semântica correta.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item31" className="checklist-checkbox" />
                    <Label htmlFor="dw-item31" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      É objetivo nos rótulos.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Texto
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item32" className="checklist-checkbox" />
                    <Label htmlFor="dw-item32" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Evitar o uso de textos dentro de imagens.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item33" className="checklist-checkbox" />
                    <Label htmlFor="dw-item33" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Redimensiona os textos na página, aumentando o zoom em até 200%.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item34" className="checklist-checkbox" />
                    <Label htmlFor="dw-item34" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Alturas das fontes não é fixa.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Teclado
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item35" className="checklist-checkbox" />
                    <Label htmlFor="dw-item35" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Funcionalidades da página web estão disponíveis por teclado.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item36" className="checklist-checkbox" />
                    <Label htmlFor="dw-item36" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Quando se tem o mouseover é permitido o uso de teclado.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item37" className="checklist-checkbox" />
                    <Label htmlFor="dw-item37" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Foco visível remova elementos focalizáveis invisíveis.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item38" className="checklist-checkbox" />
                    <Label htmlFor="dw-item38" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Adicione o .hover, .focus { } para tornar o foco visível.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item39" className="checklist-checkbox" />
                    <Label htmlFor="dw-item39" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Permite/visa o uso de Atalhos de teclado como o TAB.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item40" className="checklist-checkbox" />
                    <Label htmlFor="dw-item40" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Primeiro item interativo da página é um link para o conteúdo principal.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item41" className="checklist-checkbox" />
                    <Label htmlFor="dw-item41" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Garantir ordem lógica de navegação por teclado.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Título
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item42" className="checklist-checkbox" />
                    <Label htmlFor="dw-item42" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      A hierarquia de conteúdo da página é definida por sua lógica não pelo tamanaho do texto. <a href="#ref17" className="text-blue-600 hover:underline">[17]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item43" className="checklist-checkbox" />
                    <Label htmlFor="dw-item43" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Use elementos de título h1 h2 h3 para apresentar o conteúdo. <a href="#ref17" className="text-blue-600 hover:underline">[17]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item44" className="checklist-checkbox" />
                    <Label htmlFor="dw-item44" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Não pular níveis lógicos.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item45" className="checklist-checkbox" />
                    <Label htmlFor="dw-item45" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Toda página contem um título h1 descrevendo a página. <a href="#ref17" className="text-blue-600 hover:underline">[17]</a><a href="#ref19" className="text-blue-600 hover:underline">[19]</a>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Tabela
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item46" className="checklist-checkbox" />
                    <Label htmlFor="dw-item46" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Use o table para elementos em formato de tabela. <a href="#ref4" className="text-blue-600 hover:underline">[4]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item47" className="checklist-checkbox" />
                    <Label htmlFor="dw-item47" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Insira cabeçalhos para explicar os dados, use th com scope correto. <a href="#ref15" className="text-blue-600 hover:underline">[15]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item48" className="checklist-checkbox" />
                    <Label htmlFor="dw-item48" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Use o captione lemento para fornecer um título para a tabela. <a href="#ref17" className="text-blue-600 hover:underline">[17]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item49" className="checklist-checkbox" />
                    <Label htmlFor="dw-item49" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Não usar tabelas para layout.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Modais
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item50" className="checklist-checkbox" />
                    <Label htmlFor="dw-item50" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Deve ser fácil fechar. <a href="#ref19" className="text-blue-600 hover:underline">[19]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item51" className="checklist-checkbox" />
                    <Label htmlFor="dw-item51" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Permiti o uso da tecla escape ESC. <a href="#ref19" className="text-blue-600 hover:underline">[19]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item52" className="checklist-checkbox" />
                    <Label htmlFor="dw-item52" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      A interação é uma tarefa simples. <a href="#ref19" className="text-blue-600 hover:underline">[19]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item53" className="checklist-checkbox" />
                    <Label htmlFor="dw-item53" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Evita modais em tela cheia. <a href="#ref19" className="text-blue-600 hover:underline">[19]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item54" className="checklist-checkbox" />
                    <Label htmlFor="dw-item54" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Não abrir um modal a partir de outro modal. <a href="#ref19" className="text-blue-600 hover:underline">[19]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item55" className="checklist-checkbox" />
                    <Label htmlFor="dw-item55" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Gerenciar foco corretamente dentro do modal.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Dispositivo Móvel e tocável
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item56" className="checklist-checkbox" />
                    <Label htmlFor="dw-item56" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      O site pode ser rotacionado para qualquer orientação. <a href="#ref14" className="text-blue-600 hover:underline">[14]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item57" className="checklist-checkbox" />
                    <Label htmlFor="dw-item57" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Impedir rolgem horizontal. <a href="#ref15" className="text-blue-600 hover:underline">[15]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item58" className="checklist-checkbox" />
                    <Label htmlFor="dw-item58" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Garantir que botões e links possam ser ativados facilmente. <a href="#ref16" className="text-blue-600 hover:underline">[16]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item59" className="checklist-checkbox" />
                    <Label htmlFor="dw-item59" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Garantir espaço suficiente entre elementos interativos. <a href="#ref7" className="text-blue-600 hover:underline">[7]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item60" className="checklist-checkbox" />
                    <Label htmlFor="dw-item60" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Garantir acessibilidade para gestos de toque.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Ferramentas e extras
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="dw-item61" className="checklist-checkbox" />
                    <Label htmlFor="dw-item61" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Permiti pausar, parar ou ocultar conteúdo em movimento.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item62" className="checklist-checkbox" />
                    <Label htmlFor="dw-item62" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Usar Breadcrumbs informando a localização atual nas páginas.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item63" className="checklist-checkbox" />
                    <Label htmlFor="dw-item63" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Colocar página ou área de esclarecimento de dúvidas e dicas de acessibilidade.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item64" className="checklist-checkbox" />
                    <Label htmlFor="dw-item64" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Áreas clicáveis com no mínimo 44px (pixels) de altura e 44px de largura.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item65" className="checklist-checkbox" />
                    <Label htmlFor="dw-item65" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      No caso de captcha garanta que seja simples de entender e tenha alternativas para pessoas com deficiência.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item66" className="checklist-checkbox" />
                    <Label htmlFor="dw-item66" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Incluir um campo de busca.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="dw-item67" className="checklist-checkbox" />
                    <Label htmlFor="dw-item67" style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'rgb(55 65 81)' }}>
                      Indicar idioma principal da página com <code className="code-inline">lang=""</code> na tag <code className="code-inline">&lt;html&gt;</code>.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Referências Bibliográficas
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div id="ref1" className="reference-item">
                    <p className="text-base text-gray-700">
                      1. WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref2" className="reference-item">
                    <p className="text-base text-gray-700">
                      2. WCAG 2.2 Understanding Docs. SC 1.2.2 Captions (Prerecorded) (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref3" className="reference-item">
                    <p className="text-base text-gray-700">
                      3. WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref4" className="reference-item">
                    <p className="text-base text-gray-700">
                      4. WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref5" className="reference-item">
                    <p className="text-base text-gray-700">
                      5. WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref6" className="reference-item">
                    <p className="text-base text-gray-700">
                      6. WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref7" className="reference-item">
                    <p className="text-base text-gray-700">
                      7. WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref8" className="reference-item">
                    <p className="text-base text-gray-700">
                      8. WCAG 2.2 Understanding Docs. G201 Giving users advanced warning when opening a new window. Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G201" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Techniques/general/G201</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref9" className="reference-item">
                    <p className="text-base text-gray-700">
                      9. WCAG 2.2 Understanding Docs. SC 3.2.2 On Input (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/on-input.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref10" className="reference-item">
                    <p className="text-base text-gray-700">
                      10. WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref11" className="reference-item">
                    <p className="text-base text-gray-700">
                      11. WCAG 2.2 Understanding Docs. SC 3.3.1 Error Identification (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref12" className="reference-item">
                    <p className="text-base text-gray-700">
                      12. WCAG 2.2 Understanding Docs. SC 1.4.2 Audio Control (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref13" className="reference-item">
                    <p className="text-base text-gray-700">
                      13. WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref14" className="reference-item">
                    <p className="text-base text-gray-700">
                      14. WCAG 2.2 Understanding Docs. SC 1.3.4 Orientation (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/orientation.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/orientation.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref15" className="reference-item">
                    <p className="text-base text-gray-700">
                      15. WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref16" className="reference-item">
                    <p className="text-base text-gray-700">
                      16. WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/reflow.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref17" className="reference-item">
                    <p className="text-base text-gray-700">
                      17. WCAG 2.2 Understanding Docs. SC 2.4.6 Headings and Labels (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref18" className="reference-item">
                    <p className="text-base text-gray-700">
                      18. WCAG 2.2 Understanding Docs. SC 2.5.5 Target Size (Enhanced) (Level AAA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref19" className="reference-item">
                    <p className="text-base text-gray-700">
                      19. GUIA DE BOAS PRÁTICAS PARA ACESSIBILIDADE DIGITAL. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Bibliografia
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="reference-item">
                    <p className="text-base text-gray-700">
                      ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: <a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf</a>. Acesso em: 03 Jun. 2025.
                    </p>
                  </div>

                  <div className="reference-item">
                    <p className="text-base text-gray-700">
                      DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
