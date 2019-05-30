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
  content: { }
};
