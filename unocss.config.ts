import { defineConfig } from '@unocss/vite';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import presetTypography from '@unocss/preset-typography';
import presetFonts from '@unocss/preset-web-fonts';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetUno(),
    presetTypography(),
    presetFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto'
      }
    })
  ],
});
