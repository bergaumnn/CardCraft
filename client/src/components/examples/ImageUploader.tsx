import ImageUploader from '../ImageUploader';
import { useState } from 'react';

export default function ImageUploaderExample() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ImageUploader
      image={image}
      onImageChange={setImage}
    />
  );
}
