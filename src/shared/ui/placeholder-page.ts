import { Component } from '@core/component/component';
import { h } from '@core/dom/h';

import { pageHeader } from './page-header';

export interface PlaceholderPageOptions {
  title: string;
  description: string;
  session: number;
}

export class PlaceholderPage extends Component {
  constructor(private readonly options: PlaceholderPageOptions) {
    super();
  }

  protected render(): HTMLElement {
    const { title, description, session } = this.options;

    return h('section', { className: 'page' }, [
      pageHeader(title, description),
      h('p', { className: 'placeholder' }, [`Ten ekran powstaje na spotkaniu nr ${session}.`])
    ]);
  }
}
