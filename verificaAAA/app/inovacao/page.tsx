import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ResetButton } from "@/components/ui/reset-button"
import { ProgressWidget } from "@/components/ui/progress-widget"

export default function InovacaoPage() {
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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-400 flex items-center justify-center mb-6 mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            <Lightbulb className="w-10 h-10 text-white relative z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-60"></div>
          </div>

          <h1 className="page_title">
            Design
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Boas práticas para garantir acessibilidade no design
          </p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <ResetButton />

          <Card>
              <CardContent className="p-6">
                <p className="corpo-pagina">
                Existe uma lenda de que a acessibilidade torna um sítio web muito simples ou feio. 
                Não é verdade: um sítio web bem estruturado pode ser bonito e criativo. É possível,
                 inclusive, criar apresentações visuais diferentes para a mesma estrutura HTML de 
                 um sítio web com o uso de CSS e atender a diferentes necessidades.

                </p>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Aparência
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="design-item1" className="checklist-checkbox" />
                    <Label htmlFor="design-item1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Adicionar instrução que não dependa exclusivamente da cor. <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item2" className="checklist-checkbox" />
                    <Label htmlFor="design-item2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Adicionar informação (como gráficos e diagramas) que não dependa exclusivamente da cor. <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item3" className="checklist-checkbox" />
                    <Label htmlFor="design-item3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Tamanho do texto ajustável para permitir ampliação. <a href="#ref2" className="text-blue-600 hover:underline">[2]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item4" className="checklist-checkbox" />
                    <Label htmlFor="design-item4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Descrever os controles pelo nome, não apenas pela aparência ou localização. <a href="#ref3" className="text-blue-600 hover:underline">[3]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item5" className="checklist-checkbox" />
                    <Label htmlFor="design-item5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Garantir que dicas visuais significativas atinjam 3:1 em relação ao fundo. <a href="#ref4" className="text-blue-600 hover:underline">[4]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item6" className="checklist-checkbox" />
                    <Label htmlFor="design-item6" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Fazer com que as linhas de texto se ajustem ao viewport. <a href="#ref5" className="text-blue-600 hover:underline">[5]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item7" className="checklist-checkbox" />
                    <Label htmlFor="design-item7" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Oferece uma opção de alto contraste (dark-mode) de suas páginas web e aumento de fontes.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item8" className="checklist-checkbox" />
                    <Label htmlFor="design-item8" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Parágrafos com no máximo 80 caracteres por linha.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item9" className="checklist-checkbox" />
                    <Label htmlFor="design-item9" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evita o uso de textos longos em caixa alta ou condensados.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item10" className="checklist-checkbox" />
                    <Label htmlFor="design-item10" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evita o alinhamento justificado.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item11" className="checklist-checkbox" />
                    <Label htmlFor="design-item11" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Fontes são fluidas e de fácil entendimento.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item12" className="checklist-checkbox" />
                    <Label htmlFor="design-item12" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Toma o devido cuidado com display:none e visibility:hidden para os recursos de tecnologia assistiva.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item13" className="checklist-checkbox" />
                    <Label htmlFor="design-item13" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Preferir botões com texto e ícone. E botões apenas com ícones tem o nome acessível.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item14" className="checklist-checkbox" />
                    <Label htmlFor="design-item14" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Tipografia legível com fontes de fácil leitura.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item15" className="checklist-checkbox" />
                    <Label htmlFor="design-item15" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Tipografia legível com fontes de tamanho adequado.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item16" className="checklist-checkbox" />
                    <Label htmlFor="design-item16" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evita elementos visuais muito próximos, dificultando toque ou leitura.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item17" className="checklist-checkbox" />
                    <Label htmlFor="design-item17" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evita dependencia de instruções posicionais, como "clique no botão à direita".
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item18" className="checklist-checkbox" />
                    <Label htmlFor="design-item18" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evita textos animados, cintilantes ou movimentação constante.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Animação
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="design-item19" className="checklist-checkbox" />
                    <Label htmlFor="design-item19" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evitar conteúdo que pisque, ou mantenha-o abaixo dos limites. <a href="#ref6" className="text-blue-600 hover:underline">[6]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item20" className="checklist-checkbox" />
                    <Label htmlFor="design-item20" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Permitir que os usuários controlem as alterações de conteúdo que ocorrem em paralelo com outro conteúdo. <a href="#ref7" className="text-blue-600 hover:underline">[7]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item21" className="checklist-checkbox" />
                    <Label htmlFor="design-item21" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Toda a animação deve obedecer à prefers-reduced-motion consulta de mídia. <a href="#ref8" className="text-blue-600 hover:underline">[8]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item22" className="checklist-checkbox" />
                    <Label htmlFor="design-item22" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Toda animação possui descrição em áudio, para pessoas cegas.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item23" className="checklist-checkbox" />
                    <Label htmlFor="design-item23" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evitar loops infinitos em vídeos ou gifs animados.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item24" className="checklist-checkbox" />
                    <Label htmlFor="design-item24" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evitar transições rápidas ou abruptas, que podem causar desconforto sensorial.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Contraste de Cores
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="design-item25" className="checklist-checkbox" />
                    <Label htmlFor="design-item25" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar o contraste de todo texto tamanho normal. <a href="#ref9" className="text-blue-600 hover:underline">[9]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item26" className="checklist-checkbox" />
                    <Label htmlFor="design-item26" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar o contraste de todo texto tamanho grande. <a href="#ref9" className="text-blue-600 hover:underline">[9]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item27" className="checklist-checkbox" />
                    <Label htmlFor="design-item27" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar o contraste de todos os ícones. <a href="#ref4" className="text-blue-600 hover:underline">[4]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item28" className="checklist-checkbox" />
                    <Label htmlFor="design-item28" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar o contraste das bordas dos elementos de entrada (entrada de texto, botões de opção, caixas de seleção, etc.). <a href="#ref4" className="text-blue-600 hover:underline">[4]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item29" className="checklist-checkbox" />
                    <Label htmlFor="design-item29" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar texto que se sobrepõe a imagens ou vídeos. <a href="#ref9" className="text-blue-600 hover:underline">[9]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item30" className="checklist-checkbox" />
                    <Label htmlFor="design-item30" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar ::selection cores personalizadas. <a href="#ref9" className="text-blue-600 hover:underline">[9]</a>
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item31" className="checklist-checkbox" />
                    <Label htmlFor="design-item31" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar o contraste de todo o texto de acordo com o fundo.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item32" className="checklist-checkbox" />
                    <Label htmlFor="design-item32" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar o contraste de todo o texto sob uma imagem.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item33" className="checklist-checkbox" />
                    <Label htmlFor="design-item33" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar uso exclusivo de cores não dependendo apenas de cores para transmitir informações.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="design-item34" className="checklist-checkbox" />
                    <Label htmlFor="design-item34" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Verificar o contraste do layout em conjunto.
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
                      1. WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref2" className="reference-item">
                    <p className="text-base text-gray-700">
                      2. WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref3" className="reference-item">
                    <p className="text-base text-gray-700">
                      3. WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref4" className="reference-item">
                    <p className="text-base text-gray-700">
                      4. WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref5" className="reference-item">
                    <p className="text-base text-gray-700">
                      5. WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/reflow.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref6" className="reference-item">
                    <p className="text-base text-gray-700">
                      6. WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref7" className="reference-item">
                    <p className="text-base text-gray-700">
                      7. WCAG 2.2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref8" className="reference-item">
                    <p className="text-base text-gray-700">
                      8. WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div id="ref9" className="reference-item">
                    <p className="text-base text-gray-700">
                      9. WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA). Disponível em: <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html</a>. Acesso em: 9 Mai. 2024.
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
