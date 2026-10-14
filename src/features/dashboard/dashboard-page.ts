import { Component } from '@core/component/component';
import { h } from '@core/dom/h';
import type { Estimate } from '@domain/estimate/estimate.model';
import { formatDate } from '@shared/formatters/format';
import { STATUS_LABELS } from '@shared/labels';
import { emptyState } from '@shared/ui/empty-state';
import { pageHeader } from '@shared/ui/page-header';
import { appStore } from '@state/app-state';

export class DashboardPage extends Component {
  protected override onMount(): void {
    this.track(
      appStore.select(
        state => state.estimates,
        () => this.update()
      )
    );
  }

  protected render(): HTMLElement {
    const { estimates } = appStore.getState();
    const newEstimateLink = h('a', { className: 'button', attrs: { href: '#/estimates/new' } }, [
      'Nowy kosztorys'
    ]);

    return h('section', { className: 'page' }, [
      pageHeader('Kosztorysy', 'Wszystkie kosztorysy zapisane w tej przeglądarce', [
        newEstimateLink
      ]),
      estimates.length
        ? this.renderList(estimates)
        : emptyState('Nie ma jeszcze żadnego kosztorysu.')
    ]);
  }

  private renderList(estimates: readonly Estimate[]): HTMLElement {
    return h(
      'ul',
      { className: 'estimate-list' },
      estimates.map(estimate => this.renderItem(estimate))
    );
  }

  private renderItem({ id, number, title, status, createdAt }: Estimate): HTMLElement {
    return h('li', { className: 'estimate-list__item' }, [
      h('a', { className: 'estimate-list__link', attrs: { href: `#/estimates/${id}` } }, [number]),
      h('span', { className: 'estimate-list__title' }, [title]),
      h('span', { className: `badge badge--${status}` }, [STATUS_LABELS[status]]),
      h('time', { className: 'estimate-list__date', attrs: { datetime: createdAt } }, [
        formatDate(createdAt)
      ])
    ]);
  }
}
