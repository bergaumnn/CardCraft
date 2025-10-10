import BusinessCardForm, { BusinessCardData } from '../BusinessCardForm';
import { useState } from 'react';

export default function BusinessCardFormExample() {
  const [data, setData] = useState<BusinessCardData>({
    firstName: "Олена",
    lastName: "Коваль",
    profession: "Графічний дизайнер",
    phone: "+380 50 123 45 67",
    email: "olena.koval@gmail.com",
    website: "www.olena-design.com",
  });

  return (
    <BusinessCardForm
      data={data}
      onDataChange={setData}
    />
  );
}
