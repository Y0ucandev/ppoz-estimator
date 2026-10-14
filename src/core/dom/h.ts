import { todo } from '../todo';

export type Child = Node | string | number | null | undefined | false;

export type EventHandlers = {
  [K in keyof HTMLElementEventMap]?: (event: HTMLElementEventMap[K]) => void;
};

export interface ElementProps {
  className?: string;
  attrs?: Record<string, string | number | boolean>;
  dataset?: Record<string, string>;
  on?: EventHandlers;
}

// TODO(spotkanie 2): utwórz element `tag`, ustaw className, atrybuty (true = pusty atrybut,
// false = brak atrybutu), dataset i nasłuchiwacze zdarzeń, a na końcu dołącz dzieci.
// string i number zamieniają się w węzły tekstowe, null / undefined / false są pomijane.
// Nie używaj innerHTML.
export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: ElementProps = {},
  children: Child[] = []
): HTMLElementTagNameMap[K] {
  return todo('h', 2);
}
