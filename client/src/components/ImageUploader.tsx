import { Upload, X } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  image: string | null;
  onImageChange: (image: string | null) => void;
}

export default function ImageUploader({
  image,
  onImageChange,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Фото / Логотип
      </label>
      <div className="flex items-start gap-4">
        {image ? (
          <div className="relative">
            <img
              src={image}
              alt="Завантажене зображення"
              className="w-24 h-24 rounded-md object-cover border"
            />
            <Button
              size="icon"
              variant="destructive"
              className="absolute -top-2 -right-2 h-6 w-6"
              onClick={handleRemove}
              data-testid="button-remove-image"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-24 h-24 rounded-md border-2 border-dashed flex flex-col items-center justify-center gap-1 hover-elevate active-elevate-2 transition-all"
            data-testid="button-upload-image"
          >
            <Upload className="w-6 h-6 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Завантажити</span>
          </button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          data-testid="input-file-upload"
        />
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">
            Завантажте фото або логотип для візитки. Рекомендований розмір:
            400x400 пікселів.
          </p>
        </div>
      </div>
    </div>
  );
}
