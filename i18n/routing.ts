import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/custom-design': '/custom-design',
    '/contact': '/contact',
    '/blog': '/blog',
    '/policies': '/policies',
    '/collections': '/collections',
    '/collections/pendants': '/collections/pendants',
    '/collections/rings': '/collections/rings',
    '/collections/wedding': '/collections/wedding',
  }
});

export const {Link, redirect, usePathname, useRouter, getPathname} = 
  createNavigation(routing);
