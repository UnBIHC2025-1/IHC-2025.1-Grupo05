"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

// Total number of checkboxes in the project
const TOTAL_CHECKBOXES = {
  objetivos: 45,  // Total checkboxes in objetivos page
  equipe: 67,     // Total checkboxes em equipe page (corrigido)
  inovacao: 34,   // Total checkboxes em inovacao page (corrigido)
  metodologia: 41 // Total checkboxes em metodologia page (corrigido)
}

// Page name mapping
const PAGE_NAMES = {
  objetivos: "Geração de Conteúdo",
  equipe: "Desenvolvimento Web",
  inovacao: "Design",
  metodologia: "Gestão de Projetos"
}

// Checkbox ID prefixes for each page
const CHECKBOX_PREFIXES = {
  objetivos: ['term', 'text', 'img', 'icon', 'video', 'auto', 'pod', 'link'],
  equipe: ['item'],
  inovacao: ['item'],
  metodologia: ['persona', 'cons', 'plan']
}

export function ProgressWidget() {
  const [progress, setProgress] = useState({ checked: 0, total: 0 })
  const [pageProgress, setPageProgress] = useState({ checked: 0, total: 0 })
  const [currentPage, setCurrentPage] = useState("")

  useEffect(() => {
    const updateProgress = () => {
      // Calculate total checkboxes across all pages
      const totalCheckboxes = Object.values(TOTAL_CHECKBOXES).reduce((a, b) => a + b, 0)
      
      // Get checked count from localStorage
      const keys = Object.keys(localStorage)
      const checkboxKeys = keys.filter(key => key.startsWith('checkbox-'))
      const checkedCount = checkboxKeys.filter(key => localStorage.getItem(key) === 'true').length
      
      setProgress({ checked: checkedCount, total: totalCheckboxes })

      // Get current page path
      const path = window.location.pathname
      const segments = path.split('/').filter(Boolean)
      let currentPath = ''
      if (segments.length > 1 && segments[0] === 'IHCGrupo05') {
        currentPath = segments[1]
      } else {
        currentPath = segments[segments.length - 1] || ''
      }
      const pageName = PAGE_NAMES[currentPath as keyof typeof PAGE_NAMES] || ''
      setCurrentPage(pageName)

      // Get total checkboxes for current page
      const pageCheckboxes = TOTAL_CHECKBOXES[currentPath as keyof typeof TOTAL_CHECKBOXES] || 0
      
      // Get prefixes for current page
      const pagePrefixes = CHECKBOX_PREFIXES[currentPath as keyof typeof CHECKBOX_PREFIXES] || []
      
      // Count checked checkboxes for current page
      const pageCheckedCount = checkboxKeys
        .filter(key => {
          const checkboxId = key.replace('checkbox-', '')
          return pagePrefixes.some(prefix => checkboxId.startsWith(prefix))
        })
        .filter(key => localStorage.getItem(key) === 'true').length

      setPageProgress({ checked: pageCheckedCount, total: pageCheckboxes })
    }

    // Initial update
    updateProgress()

    // Update when storage changes
    window.addEventListener('storage', updateProgress)
    
    // Create a custom event for checkbox changes
    const handleCheckboxChange = () => {
      updateProgress()
    }
    window.addEventListener('checkboxChange', handleCheckboxChange)

    // Update when path changes
    window.addEventListener('popstate', updateProgress)

    return () => {
      window.removeEventListener('storage', updateProgress)
      window.removeEventListener('checkboxChange', handleCheckboxChange)
      window.removeEventListener('popstate', updateProgress)
    }
  }, [])

  const percentage = progress.total > 0 ? (progress.checked / progress.total) * 100 : 0
  const pagePercentage = pageProgress.total > 0 ? (pageProgress.checked / pageProgress.total) * 100 : 0

  return (
    <div className="fixed top-4 right-4 flex flex-col gap-4">
      <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50 z-50">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16" viewBox="0 0 36 36" aria-label={`Gráfico circular mostrando ${percentage.toFixed(0)}% de progresso total do site`}>
              {/* Background circle */}
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
                aria-hidden="true"
              />
              {/* Progress circle */}
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeDasharray={`${percentage} 100`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                aria-hidden="true"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-pink-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {progress.checked}/{progress.total}
            </span>
            <span className="text-sm text-gray-500">Itens marcados</span>
            <span className="text-sm text-gray-500 -mt-1">em todo o site</span>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50 z-50">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16" viewBox="0 0 36 36" aria-label={`Gráfico circular mostrando ${pagePercentage.toFixed(0)}% de progresso da página atual (${currentPage})`}>
              {/* Background circle */}
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
                aria-hidden="true"
              />
              {/* Progress circle */}
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="3"
                strokeDasharray={`${pagePercentage} 100`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                aria-hidden="true"
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {pageProgress.checked}/{pageProgress.total}
            </span>
            <span className="text-sm text-gray-500">Itens marcados</span>
            <span className="text-sm text-gray-500 -mt-1">em {currentPage}</span>
          </div>
        </div>
      </Card>
    </div>
  )
} 