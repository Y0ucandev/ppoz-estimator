import { Component } from '@core/component/component';
import { h } from '@core/dom/h';
import { pageHeader } from '@shared/ui/page-header';

export class NotFoundPage extends Component {
  protected render(): HTMLElement {
    return h('section', { className: 'page' }, [
      pageHeader('Nie znaleziono strony'),
      h('a', { className: 'button', attrs: { href: '#/' } }, ['Wróć do kosztorysów'])
    ]);
  }
}
