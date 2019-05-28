import { NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { environment } from './../environments/environment';

export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.cookieDomain
  },
  position: 'bottom',
  theme: 'edgeless',
  palette: {
    popup: {
      background: '#cddc39',
      text: '#ffffff',
      link: '#ffffff'
    },
    button: {
      background: '#f1d600',
      text: '#050505',
      border: 'transparent'
    }
  },
  type: 'info',
  content: {
    message: 'Този сайт използва бисквитки (\'cookies\'), които ни помагат, за да предоставим някои функционалности.',
    dismiss: 'ОК',
    deny: 'Откажи',
    link: 'Научи повече',
    href: 'https://bg.wikipedia.org/wiki/HTTP-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82%D0%BA%D0%B0',
    policy: 'Cookie Политика'
  }
};
