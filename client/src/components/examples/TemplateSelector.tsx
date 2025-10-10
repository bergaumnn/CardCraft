import TemplateSelector, { templates } from '../TemplateSelector';
import { useState } from 'react';

export default function TemplateSelectorExample() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  return (
    <TemplateSelector
      selectedTemplate={selectedTemplate}
      onTemplateChange={setSelectedTemplate}
    />
  );
}
