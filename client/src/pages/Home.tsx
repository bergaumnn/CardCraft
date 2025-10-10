import { useState } from "react";
import { Download, RotateCcw } from "lucide-react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "@/components/ThemeToggle";
import BusinessCardForm, {
  type BusinessCardData,
} from "@/components/BusinessCardForm";
import BusinessCardPreview from "@/components/BusinessCardPreview";
import ColorSchemeSelector, {
  colorSchemes,
  type ColorScheme,
} from "@/components/ColorSchemeSelector";
import TemplateSelector, {
  templates,
  type Template,
} from "@/components/TemplateSelector";
import ImageUploader from "@/components/ImageUploader";

export default function Home() {
  const { toast } = useToast();
  const [data, setData] = useState<BusinessCardData>({
    firstName: "",
    lastName: "",
    profession: "",
    phone: "",
    email: "",
    website: "",
  });
  const [image, setImage] = useState<string | null>(null);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(colorSchemes[0]);
  const [template, setTemplate] = useState<Template>(templates[0]);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    const element = document.getElementById("business-card-preview");
    if (!element) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(element, {
        backgroundColor: "#ffffff",
        scale: 2,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = `vizytka-${data.firstName || "card"}-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      toast({
        title: "Успішно завантажено!",
        description: "Ваша візитка збережена на пристрої.",
      });
    } catch (error) {
      toast({
        title: "Помилка",
        description: "Не вдалося завантажити візитку. Спробуйте ще раз.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleReset = () => {
    setData({
      firstName: "",
      lastName: "",
      profession: "",
      phone: "",
      email: "",
      website: "",
    });
    setImage(null);
    setColorScheme(colorSchemes[0]);
    setTemplate(templates[0]);
    toast({
      title: "Скинуто",
      description: "Всі поля очищено.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">
            Генератор Візиток та Плакатів
          </h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="lg:sticky lg:top-24 h-fit">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  Особисті дані
                </h2>
                <BusinessCardForm data={data} onDataChange={setData} />
              </div>

              <Separator />

              <ImageUploader image={image} onImageChange={setImage} />

              <Separator />

              <ColorSchemeSelector
                selectedScheme={colorScheme}
                onSchemeChange={setColorScheme}
              />

              <Separator />

              <TemplateSelector
                selectedTemplate={template}
                onTemplateChange={setTemplate}
              />

              <Separator />

              <div className="flex gap-3">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex-1"
                  data-testid="button-download"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isDownloading ? "Завантаження..." : "Завантажити PNG"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  data-testid="button-reset"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Скинути
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Попередній перегляд
              </h2>
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <BusinessCardPreview
                  data={data}
                  image={image}
                  colorScheme={colorScheme}
                  template={template}
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Введіть свої дані зліва, щоб побачити результат у реальному часі
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
