import config from '../data/config.json';

export const siteConfig = {
  name: config.siteName,
  phone: process.env.NEXT_PUBLIC_PHONE || config.phoneNumber,
  social: config.social,
  location: config.location
};