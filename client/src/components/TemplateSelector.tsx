import { Check } from "lucide-react";

export interface Template {
  id: string;
  name: string;
  description: string;
}

export const templates: Template[] = [
  {
    id: "minimal",
    name: "Мінімалістична",
    description: "Чистий дизайн з акцентом на текст",
  },
  {
    id: "creative",
    name: "Креативна",
    description: "Діагональні блоки та сміливі шрифти",
  },
  {
    id: "corporate",
    name: "Корпоративна",
    description: "Традиційна структура для бізнесу",
  },
  {
    id: "modern",
    name: "Сучасна",
    description: "Асиметричний дизайн з градієнтами",
  },
];

interface TemplateSelectorProps {
  selectedTemplate: Template;
  onTemplateChange: (template: Template) => void;
}

export default function TemplateSelector({
  selectedTemplate,
  onTemplateChange,
}: TemplateSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Шаблон дизайну
      </label>
      <div className="grid grid-cols-1 gap-2">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateChange(template)}
            className="relative flex items-start gap-3 p-4 rounded-md border hover-elevate active-elevate-2 transition-all text-left"
            data-testid={`button-template-${template.id}`}
          >
            <div className="flex-1">
              <div className="font-medium text-sm">{template.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {template.description}
              </div>
            </div>
            {selectedTemplate.id === template.id && (
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
