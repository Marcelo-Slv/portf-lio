import { DOCUMENT, isPlatformServer, PlatformLocation } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const SITE_URL = 'https://marcelo-slv.github.io/portf-lio';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class App {
  readonly currentYear = new Date().getFullYear();

  constructor(
    location: PlatformLocation,
    @Inject(DOCUMENT) document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    if (isPlatformServer(platformId)) {
      const pathname = location.pathname;
      const base = (document.querySelector('base')?.getAttribute('href') ?? '/').replace(/^\/|\/$/g, '');
      const route = (base ? pathname.replace(new RegExp(`^/${base}`), '') : pathname) || '/';
      const href = SITE_URL + (route.startsWith('/') ? route : '/' + route);
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    }
  }
}
