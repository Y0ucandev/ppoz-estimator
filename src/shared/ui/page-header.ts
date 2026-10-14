import { h } from '@core/dom/h';
import type { Child } from '@core/dom/h';

export function pageHeader(title: string, subtitle?: string, actions: Child[] = []): HTMLElement {
  return h('header', { className: 'page-header' }, [
    h('div', { className: 'page-header__text' }, [
      h('h1', { className: 'page-header__title' }, [title]),
      subtitle ? h('p', { className: 'page-header__subtitle' }, [subtitle]) : null
    ]),
    actions.length ? h('div', { className: 'page-header__actions' }, actions) : null
  ]);
}
