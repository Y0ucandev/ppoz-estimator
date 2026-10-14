import { todo } from '../todo';

export type Listener<T> = (state: Readonly<T>, previous: Readonly<T>) => void;
export type Unsubscribe = () => void;

export class Store<T extends object> {
  // TODO(spotkanie 3): zapamiętaj stan początkowy.
  constructor(initialState: T) {
    todo('Store', 3);
  }

  // TODO(spotkanie 3)
  getState(): Readonly<T> {
    return todo('Store.getState', 3);
  }

  // TODO(spotkanie 3): połącz patch ze stanem w NOWY obiekt i powiadom słuchaczy (stan, poprzedni stan).
  setState(patch: Partial<T>): void {
    todo('Store.setState', 3);
  }

  // TODO(spotkanie 3): dodaj słuchacza i zwróć funkcję, która go usuwa.
  subscribe(listener: Listener<T>): Unsubscribe {
    return todo('Store.subscribe', 3);
  }

  // TODO(spotkanie 3): wywołaj listener tylko wtedy, gdy wynik selektora zmienił się (Object.is).
  select<R>(selector: (state: Readonly<T>) => R, listener: (value: R) => void): Unsubscribe {
    return todo('Store.select', 3);
  }
}
