import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import unocss from '@unocss/vite';
import attributify from '@unocss/preset-attributify';
import icons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import typography from '@unocss/preset-typography';
import fonts from '@unocss/preset-web-fonts';

export default defineConfig({
  plugins: [
    solidPlugin(),
    unocss({
      shortcuts: [
        { logo: 'w-10 h-10 i-logos-solidjs transform transition-800 hover:rotate-960' },
      ],
      presets: [
        attributify(),
        icons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle'
          }
        }),
        presetUno(),
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
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
