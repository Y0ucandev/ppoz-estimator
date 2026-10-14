import type { Component } from '../component/component';
import { todo } from '../todo';

export type RouteParams = Record<string, string>;

export interface Route {
  path: string;
  page: (params: RouteParams) => Component;
}

export interface RouterOptions {
  routes: Route[];
  outlet: HTMLElement;
  notFound: () => Component;
  onNavigate?: (path: string) => void;
}

// TODO(spotkanie 4): porównaj wzorzec ('/estimates/:id') ze ścieżką ('/estimates/42').
// Zwróć parametry ({ id: '42' }) albo null, gdy ścieżka nie pasuje.
export function matchPath(pattern: string, path: string): RouteParams | null {
  return todo('matchPath', 4);
}

export class Router {
  // TODO(spotkanie 4): zapamiętaj opcje i aktualnie wyświetlaną stronę.
  constructor(options: RouterOptions) {
    todo('Router', 4);
  }

  // TODO(spotkanie 4): nasłuchuj zmian hasha i wyświetl stronę dla bieżącego adresu.
  start(): void {
    todo('Router.start', 4);
  }

  // TODO(spotkanie 4)
  navigate(path: string): void {
    todo('Router.navigate', 4);
  }
}
