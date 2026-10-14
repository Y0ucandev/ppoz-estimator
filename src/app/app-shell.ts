import { Component } from '@core/component/component';
import { h } from '@core/dom/h';

import { NAVIGATION_LINKS } from './routes';

export class AppShell extends Component {
  readonly outlet = h('main', { className: 'app-shell__main', attrs: { id: 'main' } });

  private readonly links = NAVIGATION_LINKS.map(link =>
    h(
      'a',
      {
        className: 'app-shell__link',
        attrs: { href: `#${link.path}` },
        dataset: { path: link.path }
      },
      [link.label]
    )
  );

  setActivePath(path: string): void {
    this.links.forEach(link => {
      const linkPath = link.dataset.path ?? '';
      const isActive = linkPath === '/' ? path === '/' : path.startsWith(linkPath);

      link.classList.toggle('app-shell__link--active', isActive);
      link.toggleAttribute('aria-current', isActive);
    });
  }

  protected render(): HTMLElement {
    return h('div', { className: 'app-shell' }, [
      h('a', { className: 'skip-link', attrs: { href: '#main' } }, ['Przejdź do treści']),
      h('header', { className: 'app-shell__header' }, [
        h('a', { className: 'app-shell__brand', attrs: { href: '#/' } }, ['Kosztorys PPOŻ']),
        h(
          'nav',
          { className: 'app-shell__nav', attrs: { 'aria-label': 'Główna nawigacja' } },
          this.links
        )
      ]),
      this.outlet
    ]);
  }
}
