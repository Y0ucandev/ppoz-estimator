import { Component } from '@core/component/component';
import { h } from '@core/dom/h';
import type { CatalogItem } from '@domain/catalog/catalog-item.model';
import { formatMoney } from '@shared/formatters/format';
import { CATEGORY_LABELS, UNIT_LABELS, VAT_RATE_LABELS } from '@shared/labels';
import { emptyState } from '@shared/ui/empty-state';
import { pageHeader } from '@shared/ui/page-header';
import { appStore } from '@state/app-state';

interface Column {
  label: string;
  isNumeric?: boolean;
}

const COLUMNS: readonly Column[] = [
  { label: 'Nazwa' },
  { label: 'Kategoria' },
  { label: 'Rodzaj' },
  { label: 'J.m.' },
  { label: 'Cena netto', isNumeric: true },
  { label: 'VAT domyślny', isNumeric: true }
];

export class CatalogPage extends Component {
  protected override onMount(): void {
    this.track(
      appStore.select(
        state => state.catalog,
        () => this.update()
      )
    );
  }

  protected render(): HTMLElement {
    const { catalog, isLoading, error } = appStore.getState();

    return h('section', { className: 'page' }, [
      pageHeader(
        'Katalog',
        `${catalog.items.length} pozycji, ${catalog.bundles.length} szablonów łączonych`
      ),
      error ? h('p', { className: 'alert alert--error' }, [error]) : null,
      isLoading ? emptyState('Wczytywanie katalogu…') : this.renderTable(catalog.items)
    ]);
  }

  private renderTable(items: readonly CatalogItem[]): HTMLElement {
    const head = h('thead', {}, [
      h(
        'tr',
        {},
        COLUMNS.map(({ label, isNumeric }) =>
          h('th', { className: isNumeric ? 'data-table__number' : '', attrs: { scope: 'col' } }, [
            label
          ])
        )
      )
    ]);
    const body = h(
      'tbody',
      {},
      items.map(item => this.renderRow(item))
    );

    return h('div', { className: 'table-wrapper' }, [
      h('table', { className: 'data-table' }, [head, body])
    ]);
  }

  private renderRow(item: CatalogItem): HTMLElement {
    return h('tr', {}, [
      h('td', {}, [item.name]),
      h('td', {}, [CATEGORY_LABELS[item.category]]),
      h('td', {}, [item.kind === 'material' ? 'Materiał' : 'Usługa']),
      h('td', {}, [UNIT_LABELS[item.unit]]),
      h('td', { className: 'data-table__number' }, [formatMoney(item.unitNetPrice)]),
      h('td', { className: 'data-table__number' }, [VAT_RATE_LABELS[item.defaultVatRate]])
    ]);
  }
}
