import ColorSchemeSelector, { colorSchemes } from '../ColorSchemeSelector';
import { useState } from 'react';

export default function ColorSchemeSelectorExample() {
  const [selectedScheme, setSelectedScheme] = useState(colorSchemes[0]);

  return (
    <ColorSchemeSelector
      selectedScheme={selectedScheme}
      onSchemeChange={setSelectedScheme}
    />
  );
}
