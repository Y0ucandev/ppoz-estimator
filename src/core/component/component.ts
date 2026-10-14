import type { Unsubscribe } from '../store/store';
import { todo } from '../todo';

export abstract class Component {
  // TODO(spotkanie 2): wyrenderuj komponent i podmień zawartość `container`, potem wywołaj onMount().
  mount(container: HTMLElement): void {
    todo('Component.mount', 2);
  }

  // TODO(spotkanie 2): wyrenderuj komponent ponownie i podmień stary element na nowy.
  // Przed mount() metoda nic nie robi.
  update(): void {
    todo('Component.update', 2);
  }

  // TODO(spotkanie 2): usuń element z DOM.
  // TODO(spotkanie 3): anuluj wszystkie subskrypcje zarejestrowane przez track().
  destroy(): void {
    todo('Component.destroy', 2);
  }

  protected abstract render(): HTMLElement;

  protected onMount(): void {}

  // TODO(spotkanie 3): zapamiętaj funkcję anulującą subskrypcję, żeby destroy() mogło ją wywołać.
  protected track(unsubscribe: Unsubscribe): void {
    todo('Component.track', 3);
  }
}
