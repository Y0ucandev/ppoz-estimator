import { h } from '@core/dom/h';

export function emptyState(message: string): HTMLElement {
  return h('p', { className: 'empty-state' }, [message]);
}
