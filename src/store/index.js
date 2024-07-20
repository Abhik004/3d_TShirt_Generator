import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#00A3E0', 
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;
