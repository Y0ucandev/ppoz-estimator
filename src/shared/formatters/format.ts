import type { Money } from '@domain/money/money';

const currencyFormatter = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' });

const dateFormatter = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'medium' });

export function formatMoney(money: Money): string {
  return currencyFormatter.format(money.toZloty());
}

export function formatDate(isoDate: string): string {
  return dateFormatter.format(new Date(isoDate));
}
