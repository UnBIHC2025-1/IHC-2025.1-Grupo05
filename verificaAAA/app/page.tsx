"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Target, BarChart3, Lightbulb, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { exportAllChecklistsPDF } from "@/lib/checklists-data"
import { useState } from "react"
import ExportChecklistModal from "@/components/ui/ExportChecklistModal"
import { exportChecklistsPDF, exportChecklistsTXT } from "@/lib/checklists-data"

const sections = [
  {
    id: "projeto",
    title: "O projeto",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-400",
    href: "/projeto",
  },
  {
    id: "equipe",
    title: "Desenvolvimento Web",
    icon: Users,
    color: "from-purple-500 to-pink-400",
    href: "/equipe",
  },
  {
    id: "objetivos",
    title: "Geração de Conteúdo",
    icon: Target,
    color: "from-green-500 to-emerald-400",
    href: "/objetivos",
  },
  {
    id: "metodologia",
    title: "Gestão de Projetos",
    icon: BarChart3,
    color: "from-orange-500 to-red-400",
    href: "/metodologia",
  },
  {
    id: "inovacao",
    title: "Design",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-400",
    href: "/inovacao",
  },
  {
    id: "resultados",
    title: "Ferramentas de Acessibilidade",
    icon: Award,
    color: "from-indigo-500 to-purple-400",
    href: "/resultados",
  },
]

export default function HomePage() {
  const [exportModalOpen, setExportModalOpen] = useState(false)

  const handleExport = ({ projectName, description, selectedCategories }: { projectName: string; description: string; selectedCategories: string[] }) => {
    exportChecklistsPDF({ projectName, description, selectedCategories })
    // Se quiser permitir exportação TXT, descomente a linha abaixo:
    // exportChecklistsTXT({ projectName, description, selectedCategories })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 relative md:py-32 md:pb-0">
        {/* Background creative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-gray-300"></div>
              ))}
            </div>
          </div>

          {/* Floating design elements */}
          <div className="absolute top-20 left-1/4 w-16 h-16 border-2 border-blue-300/40 rotate-45 animate-pulse"></div>
          <div className="absolute top-32 right-1/3 w-24 h-24 rounded-full bg-purple-300/30 animate-bounce delay-300"></div>
          <div className="absolute top-40 left-1/3 w-32 h-4 bg-green-300/40 animate-pulse delay-700"></div>
          <div className="absolute bottom-40 right-1/4 w-12 h-32 bg-orange-300/30 animate-bounce delay-1000"></div>

          {/* Golden ratio spiral suggestion */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-yellow-200/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 border border-yellow-200/30 rounded-full"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          {/* Creative title with design elements */}
          <div className="relative inline-block mb-8">
            {/* Typography decoration */}
            <div className="absolute -top-6 left-0 text-xs font-mono text-gray-400 tracking-widest">ACESSIBILIDADE</div>
            <div className="absolute -top-6 right-0 w-16 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>

            <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent relative tracking-tight leading-none">
              Verifica
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light italic">
                AAA
              </span>
            </h1>

            {/* Botão de exportação de checklists */}
            <button
              onClick={() => setExportModalOpen(true)}
              className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Exportar todos os checklists em PDF"
            >
              Exportar Checklists (PDF)
            </button>

            <ExportChecklistModal
              open={exportModalOpen}
              onClose={() => setExportModalOpen(false)}
              onExport={handleExport}
            />

            {/* Design rule indicators */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-transparent"></div>
              <div className="w-1 h-4 bg-gradient-to-b from-pink-500 to-transparent"></div>
            </div>

            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
              <div className="w-1 h-4 bg-gradient-to-b from-pink-500 to-transparent"></div>
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-transparent"></div>
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
          </div>

          {/* Creative subtitle with design principles */}
          <div className="relative max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light relative">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Checklist prático
              </span>{" "}
              para promover acessibilidade digital
              <br />
              em{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
                projetos inclusivos
              </span>{" "}
              e acessíveis
            </p>

            {/* Design elements around subtitle */}
            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
            <div className="absolute -right-4 top-1/2 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto leading-7 px-3 pb-0">
        {sections.map((section) => {
          const IconComponent = section.icon

          return (
            <Link
              key={section.id}
              href={section.href}
              className="block"
              aria-label={`Ir para a seção ${section.title}`}
            >
              <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl border border-gray-200/30 bg-white backdrop-blur-sm overflow-hidden relative shadow-lg hover:shadow-xl h-[220px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-50/20"></div>
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${section.color} opacity-60`}
                ></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white/40 to-transparent rounded-xl opacity-50"></div>
                  </div>

                  <h3 className="text-xl font-bold mb-0 text-gray-800 group-hover:text-gray-900 transition-colors">
                    {section.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Clique para explorar
                  </p>

                  <div
                    className={`w-0 h-1 bg-gradient-to-r ${section.color} mx-auto mt-4 group-hover:w-full transition-all duration-300`}
                  />
                </CardContent>
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gray-100/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-gray-100/40 to-transparent"></div>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Footer */}
      <footer className="mt-20 py-12 border-t backdrop-blur-sm text-slate-600 leading-3 border-teal-300 bg-cyan-400 opacity-100 rounded-none">
        <div className="container mx-auto px-4 text-slate-500 bg-cyan-400">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Universidade de Brasília - UnB
            </h3>
            <p className="text-gray-800 mb-6">Projeto desenvolvido por alunos de Engenharia de Software</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <a
                href="https://github.com/JuliaGabP"
                className="group flex items-center justify-center p-4 rounded-lg bg-cyan-500/40 hover:bg-cyan-500/50 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200/40"
                aria-label="GitHub de Julia Gabriela"
              >
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">JG</span>
                  </div>
                  <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors text-base">Julia Gabriela</p>
                  <p className="text-sm text-gray-500 mt-1">GitHub</p>
                </div>
              </a>

              <a
                href="https://github.com/isacostaf"
                className="group flex items-center justify-center p-4 rounded-lg bg-cyan-500/40 hover:bg-cyan-500/50 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200/40"
                aria-label="GitHub de Isabelle Costa"
              >
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">IC</span>
                  </div>
                  <p className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors text-base">Isabelle Costa</p>
                  <p className="text-sm text-gray-500 mt-1">GitHub</p>
                </div>
              </a>

              <a
                href="https://github.com/Diaxiz"
                className="group flex items-center justify-center p-4 rounded-lg bg-cyan-500/40 hover:bg-cyan-500/50 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200/40"
                aria-label="GitHub de Diassís"
              >
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">DS</span>
                  </div>
                  <p className="font-medium text-gray-800 group-hover:text-green-600 transition-colors text-base">Diassís</p>
                  <p className="text-sm text-gray-500 mt-1">GitHub</p>
                </div>
              </a>

              <a
                href="https://github.com/marcomarquesdc"
                className="group flex items-center justify-center p-4 rounded-lg bg-cyan-500/40 hover:bg-cyan-500/50 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200/40"
                aria-label="GitHub de Marco Marques"
              >
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">MM</span>
                  </div>
                  <p className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors text-base">Marco Marques</p>
                  <p className="text-sm text-gray-500 mt-1">GitHub</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}