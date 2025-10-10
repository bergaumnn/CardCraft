import { Mail, Phone, Globe, User } from "lucide-react";
import type { BusinessCardData } from "./BusinessCardForm";
import type { ColorScheme } from "./ColorSchemeSelector";
import type { Template } from "./TemplateSelector";

interface BusinessCardPreviewProps {
  data: BusinessCardData;
  image: string | null;
  colorScheme: ColorScheme;
  template: Template;
}

export default function BusinessCardPreview({
  data,
  image,
  colorScheme,
  template,
}: BusinessCardPreviewProps) {
  const renderMinimalTemplate = () => (
    <div className="w-full h-full flex items-center gap-8 p-8" style={{ backgroundColor: "#ffffff" }}>
      {image ? (
        <img
          src={image}
          alt="Avatar"
          className="w-32 h-32 rounded-full object-cover border-4"
          style={{ borderColor: colorScheme.primary }}
        />
      ) : (
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center border-4"
          style={{ borderColor: colorScheme.primary, backgroundColor: colorScheme.primary + "20" }}
        >
          <User className="w-16 h-16" style={{ color: colorScheme.primary }} />
        </div>
      )}
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-3xl font-bold" style={{ color: colorScheme.text }}>
            {data.firstName} {data.lastName}
          </h2>
          <p className="text-lg mt-1" style={{ color: colorScheme.secondary }}>
            {data.profession}
          </p>
        </div>
        <div className="space-y-2 text-sm" style={{ color: colorScheme.text }}>
          {data.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" style={{ color: colorScheme.primary }} />
              <span>{data.phone}</span>
            </div>
          )}
          {data.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" style={{ color: colorScheme.primary }} />
              <span>{data.email}</span>
            </div>
          )}
          {data.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" style={{ color: colorScheme.primary }} />
              <span>{data.website}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderCreativeTemplate = () => (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      <div
        className="absolute top-0 right-0 w-2/3 h-full"
        style={{
          background: `linear-gradient(135deg, ${colorScheme.primary} 0%, ${colorScheme.secondary} 100%)`,
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full p-8">
        <div>
          {image ? (
            <img
              src={image}
              alt="Avatar"
              className="w-24 h-24 rounded-lg object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-lg flex items-center justify-center border-4 border-white shadow-lg" style={{ backgroundColor: colorScheme.primary }}>
              <User className="w-12 h-12 text-white" />
            </div>
          )}
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            {data.firstName}
          </h2>
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            {data.lastName}
          </h2>
          <p className="text-lg mt-2 text-white/90">
            {data.profession}
          </p>
        </div>
        <div className="space-y-1.5 text-sm text-white">
          {data.phone && <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" />{data.phone}</div>}
          {data.email && <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" />{data.email}</div>}
          {data.website && <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5" />{data.website}</div>}
        </div>
      </div>
    </div>
  );

  const renderCorporateTemplate = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8" style={{ backgroundColor: "#ffffff" }}>
      {image ? (
        <img
          src={image}
          alt="Avatar"
          className="w-28 h-28 rounded-full object-cover border-2"
          style={{ borderColor: colorScheme.secondary }}
        />
      ) : (
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center border-2"
          style={{ borderColor: colorScheme.secondary, backgroundColor: colorScheme.primary + "15" }}
        >
          <User className="w-14 h-14" style={{ color: colorScheme.primary }} />
        </div>
      )}
      <div className="text-center">
        <h2 className="text-3xl font-bold" style={{ color: colorScheme.text }}>
          {data.firstName} {data.lastName}
        </h2>
        <div className="w-16 h-1 mx-auto my-3" style={{ backgroundColor: colorScheme.primary }} />
        <p className="text-lg" style={{ color: colorScheme.secondary }}>
          {data.profession}
        </p>
      </div>
      <div className="space-y-2 text-sm text-center" style={{ color: colorScheme.text }}>
        {data.phone && <div>{data.phone}</div>}
        {data.email && <div>{data.email}</div>}
        {data.website && <div>{data.website}</div>}
      </div>
    </div>
  );

  const renderModernTemplate = () => (
    <div className="w-full h-full relative" style={{ backgroundColor: colorScheme.primary }}>
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30"
        style={{
          background: `linear-gradient(45deg, transparent 0%, ${colorScheme.accent} 100%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              {data.firstName}
            </h2>
            <h2 className="text-4xl font-bold text-white/80 leading-tight">
              {data.lastName}
            </h2>
          </div>
          {image ? (
            <img
              src={image}
              alt="Avatar"
              className="w-20 h-20 rounded-lg object-cover border-2 border-white/50"
            />
          ) : (
            <div className="w-20 h-20 rounded-lg flex items-center justify-center border-2 border-white/50 bg-white/20">
              <User className="w-10 h-10 text-white" />
            </div>
          )}
        </div>
        <div>
          <p className="text-lg text-white/90 mb-4">
            {data.profession}
          </p>
          <div className="space-y-1.5 text-sm text-white/80">
            {data.phone && <div>{data.phone}</div>}
            {data.email && <div>{data.email}</div>}
            {data.website && <div>{data.website}</div>}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTemplate = () => {
    switch (template.id) {
      case "minimal":
        return renderMinimalTemplate();
      case "creative":
        return renderCreativeTemplate();
      case "corporate":
        return renderCorporateTemplate();
      case "modern":
        return renderModernTemplate();
      default:
        return renderMinimalTemplate();
    }
  };

  return (
    <div
      id="business-card-preview"
      className="w-full aspect-[16/9] shadow-2xl rounded-lg overflow-hidden"
      data-testid="preview-business-card"
    >
      {renderTemplate()}
    </div>
  );
}
