// src/components/TexturePicker.jsx
import React from 'react';
import { texturesLogos } from '../config/constants';

const TexturePicker = ({ handleTextureClick }) => {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      {texturesLogos.map((texture) => (
        <div
          key={texture.name}
          className="cursor-pointer border-2 border-gray-300 rounded"
          onClick={() => handleTextureClick(texture.image)}
        >
          <img src={texture.image} alt={texture.name} className="w-12 h-12 object-cover" />
        </div>
      ))}
    </div>
  );
};

export default TexturePicker;
