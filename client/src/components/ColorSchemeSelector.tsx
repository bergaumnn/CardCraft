import { Check } from "lucide-react";

export interface ColorScheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
}

export const colorSchemes: ColorScheme[] = [
  {
    id: "professional",
    name: "Професійний",
    primary: "#2563eb",
    secondary: "#64748b",
    accent: "#3b82f6",
    text: "#1e293b",
  },
  {
    id: "creative",
    name: "Креативний",
    primary: "#9333ea",
    secondary: "#f97316",
    accent: "#a855f7",
    text: "#7c2d12",
  },
  {
    id: "natural",
    name: "Природній",
    primary: "#059669",
    secondary: "#84cc16",
    accent: "#10b981",
    text: "#14532d",
  },
  {
    id: "elegant",
    name: "Елегантний",
    primary: "#0f172a",
    secondary: "#d4af37",
    accent: "#1e293b",
    text: "#0f172a",
  },
];

interface ColorSchemeSelectorProps {
  selectedScheme: ColorScheme;
  onSchemeChange: (scheme: ColorScheme) => void;
}

export default function ColorSchemeSelector({
  selectedScheme,
  onSchemeChange,
}: ColorSchemeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Кольорова схема
      </label>
      <div className="grid grid-cols-2 gap-3">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme.id}
            onClick={() => onSchemeChange(scheme)}
            className="relative flex items-center gap-3 p-3 rounded-md border hover-elevate active-elevate-2 transition-all"
            data-testid={`button-color-scheme-${scheme.id}`}
          >
            <div className="flex gap-1.5">
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: scheme.primary }}
              />
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: scheme.secondary }}
              />
            </div>
            <span className="text-sm font-medium flex-1 text-left">
              {scheme.name}
            </span>
            {selectedScheme.id === scheme.id && (
              <Check className="w-4 h-4 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
