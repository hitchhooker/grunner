import { defineConfig } from '@unocss/vite';
import attributify from '@unocss/preset-attributify';
import icons from '@unocss/preset-icons';
import uno from '@unocss/preset-uno';
import typography from '@unocss/preset-typography';
import fonts from '@unocss/preset-web-fonts';

export default defineConfig({
  presets: [
    attributify(),
    icons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    uno(),
    typography(),
    fonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        tron: [{
          name: 'Orbitron',
          weights: ['400', '800']
        }],
      }
    })
  ],
});
