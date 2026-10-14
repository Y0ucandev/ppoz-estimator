import '../styles/main.scss';

// Piaskownica do ćwiczeń ze spotkań 2–3. Dostępna tylko w trybie dev: npm run dev → /sandbox.html
// Nie trafia do buildu produkcyjnego.

const root = document.querySelector<HTMLElement>('#sandbox');

if (!root) {
  throw new Error('Missing #sandbox root element in sandbox.html');
}

// TODO(spotkanie 2): utwórz CounterComponent i zamontuj go w `root`.
// TODO(spotkanie 2, praca domowa): SearchBox + MaterialTable z danymi z JsonCatalogRepository.
// TODO(spotkanie 3, praca domowa): sandboxStore, SelectionSummary, przycisk usuwający tabelę.
