import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  "Desenvolvimento Web",
  "Geração de Conteúdo",
  "Gestão de Projetos",
  "Design"
];

type ExportChecklistModalProps = {
  open: boolean;
  onClose: () => void;
  onExport: (params: {
    projectName: string;
    description: string;
    selectedCategories: string[];
  }) => void;
};

export default function ExportChecklistModal({ open, onClose, onExport }: ExportChecklistModalProps) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(selectedCategories.includes(cat)
      ? selectedCategories.filter(c => c !== cat)
      : [...selectedCategories, cat]
    );
  };

  const selectAll = () => setSelectedCategories(categories);
  const deselectAll = () => setSelectedCategories([]);

  const handleExport = () => {
    onExport({ projectName, description, selectedCategories });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Exportar Checklist</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome do Projeto (opcional):</label>
            <Input value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="Digite o nome do projeto" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Descrição (opcional):</label>
            <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Digite uma descrição" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Selecione os tópicos:</span>
              <div className="space-x-2">
                <Button type="button" size="sm" variant="outline" onClick={selectAll}>Selecionar todos</Button>
                <Button type="button" size="sm" variant="ghost" onClick={deselectAll}>Limpar</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={selectedCategories.includes(cat)}
                    onCheckedChange={() => toggleCategory(cat)}
                    id={`cat-${cat}`}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleExport} disabled={selectedCategories.length === 0}>Exportar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 