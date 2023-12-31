import i18n from 'sveltekit-i18n'

const config = ({
    loaders: [
      {
        locale: 'en',
        key: 'home',
        loader: async () => (
          await import('./en/home.json')
        ).default,
      },
      {
        locale: 'en',
        key: 'about',
        loader: async () => (
          await import('./en/about.json')
        ).default,
      },
      {
        locale: 'fr',
        key: 'home',
        loader: async () => (
          await import('./fr/home.json')
        ).default,
      },
      {
        locale: 'fr',
        key: 'about',
        loader: async () => (
          await import('./fr/about.json')
        ).default,
      },
    ],
  });
  
  export const { t, locale, locales, loading, loadTranslations } = new i18n(config);