import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}: {requestLocale: Promise<string | undefined>}) => {
  let locale = await requestLocale;
  
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  
  const [
    common,
    navigation, 
    home,
    about,
    customDesign,
    contact,
    footer,
  ] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/navigation.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/about.json`),
    import(`../messages/${locale}/custom-design.json`),
    import(`../messages/${locale}/contact.json`),
    import(`../messages/${locale}/footer.json`),
  ]);

  return {
    locale,
    messages: {
      common: common.default,
      navigation: navigation.default,
      home: home.default,
      about: about.default,
      customDesign: customDesign.default,
      contact: contact.default,
      footer: footer.default,
    },
    timeZone: 'Asia/Amman'
  };
});
