import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface BusinessCardData {
  firstName: string;
  lastName: string;
  profession: string;
  phone: string;
  email: string;
  website: string;
}

interface BusinessCardFormProps {
  data: BusinessCardData;
  onDataChange: (data: BusinessCardData) => void;
}

export default function BusinessCardForm({
  data,
  onDataChange,
}: BusinessCardFormProps) {
  const handleChange = (field: keyof BusinessCardData, value: string) => {
    onDataChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Ім'я</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="Іван"
            data-testid="input-first-name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Прізвище</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Петренко"
            data-testid="input-last-name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profession">Професія / Посада</Label>
        <Input
          id="profession"
          value={data.profession}
          onChange={(e) => handleChange("profession", e.target.value)}
          placeholder="Веб-розробник"
          data-testid="input-profession"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Телефон</Label>
        <Input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+380 XX XXX XX XX"
          data-testid="input-phone"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="example@gmail.com"
          data-testid="input-email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Веб-сайт</Label>
        <Input
          id="website"
          type="url"
          value={data.website}
          onChange={(e) => handleChange("website", e.target.value)}
          placeholder="www.example.com"
          data-testid="input-website"
        />
      </div>
    </div>
  );
}
