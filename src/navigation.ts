import {createNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'de', 'uk'] as const;
 
export const {Link, redirect, usePathname, useRouter} =
  createNavigation({locales});