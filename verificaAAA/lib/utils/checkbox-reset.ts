export function resetPageCheckboxes() {
  // Detecta a página atual considerando o deploy em /IHCGrupo05/
  const path = window.location.pathname
  const segments = path.split('/').filter(Boolean)
  let currentPath = ''
  if (segments.length > 1 && segments[0] === 'IHCGrupo05') {
    currentPath = segments[1]
  } else {
    currentPath = segments[segments.length - 1] || ''
  }

  // Prefixos de cada página (deve ser igual ao ProgressWidget)
  const CHECKBOX_PREFIXES: Record<string, string[]> = {
    objetivos: ['term', 'text', 'img', 'icon', 'video', 'auto', 'pod', 'link'],
    equipe: ['item'],
    inovacao: ['item'],
    metodologia: ['persona', 'cons', 'plan']
  }
  const pagePrefixes = CHECKBOX_PREFIXES[currentPath] || []

  // Get all localStorage keys
  const keys = Object.keys(localStorage)
  // Filter keys that start with 'checkbox-' and pertencem à página
  const checkboxKeys = keys.filter(key => {
    if (!key.startsWith('checkbox-')) return false
    const checkboxId = key.replace('checkbox-', '')
    return pagePrefixes.some(prefix => checkboxId.startsWith(prefix))
  })

  // Remove only checkbox states da página atual
  checkboxKeys.forEach(key => {
    localStorage.removeItem(key)
  })

  // Reload the page to reflect changes
  window.location.reload()
} 