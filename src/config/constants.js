// src/config/constants.js
import { swatch, fileIcon, logoShirt, stylishShirt, texture1, texture2, texture3, texture4, texture5, download } from '../assets';

export const EditorTabs = [
  {
    name: 'colorpicker',
    icon: swatch,
  },
  {
    name: 'filepicker',
    icon: fileIcon,
  },
  {
    name: 'texturepicker',
    icon: stylishShirt, // Assuming you have an appropriate icon
  },
];

export const FilterTabs = [
  {
    name: 'logoShirt',
    icon: logoShirt,
  },
  {
    name: 'stylishShirt',
    icon: stylishShirt,
  },
  
];

export const DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
};

export const texturesLogos = [
  { name: 'Texture 1', image: texture1, type: 'texture' },
  { name: 'Texture 2', image: texture2, type: 'texture' },
  { name: 'Texture 3', image: texture3, type: 'texture' },
  { name: 'Texture 4', image: texture4, type: 'texture' },
  { name: 'Texture 5', image: texture5, type: 'texture' },
  // Add more textures as needed
];
