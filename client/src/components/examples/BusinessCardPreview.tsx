import BusinessCardPreview from '../BusinessCardPreview';
import { colorSchemes } from '../ColorSchemeSelector';
import { templates } from '../TemplateSelector';

export default function BusinessCardPreviewExample() {
  const sampleData = {
    firstName: "Олена",
    lastName: "Коваль",
    profession: "Графічний дизайнер",
    phone: "+380 50 123 45 67",
    email: "olena.koval@gmail.com",
    website: "www.olena-design.com",
  };

  return (
    <BusinessCardPreview
      data={sampleData}
      image={null}
      colorScheme={colorSchemes[0]}
      template={templates[0]}
    />
  );
}
