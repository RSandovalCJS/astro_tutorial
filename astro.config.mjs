// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ['es', 'en'],  // lista de idiomas soportados
        defaultLocale: 'es',    // Idioma predeterminado
    },
});
