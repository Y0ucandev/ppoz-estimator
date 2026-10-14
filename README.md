# Kosztorys PPOŻ

Aplikacja do kosztorysowania instalacji systemów sygnalizacji pożarowej: katalog materiałów i usług, kosztorys z pozycjami osobnymi lub łączonymi („dostawa z montażem”), zestawienie stawek VAT, a docelowo PDF kosztorysu, umowa, faktura proforma i harmonogram prac.

Projekt jest napisany w czystym TypeScript + SCSS, **bez frameworka**. Router, store i komponenty są własne — to celowa decyzja, żeby pokazać, co frameworki robią pod spodem.

## Uruchomienie

```bash
npm install
npm run dev        # http://localhost:5173 (landing) i /app.html (aplikacja)
npm run build      # typecheck + build produkcyjny do dist/
npm run lint       # ESLint, w tym reguły warstw
npm run typecheck  # tylko sprawdzenie typów
npm run validate:catalog  # walidacja src/data/seed/catalog.json
npm run format     # Prettier
```

## Architektura

```
src/
├── core/        mini-framework: Store, Router, Component, h()   — nie zna domeny
├── domain/      typy i logika biznesowa                          — zero DOM, zero localStorage
├── data/        JSON, Zod, localStorage, repozytoria, mappery DTO
├── documents/   generowanie PDF z modelu domeny
├── state/       AppState + akcje
├── features/    ekrany (jeden folder = jedna funkcja)
├── shared/      wspólne UI, formattery, etykiety PL
├── app/         bootstrap, trasy, AppShell
├── landing/     landing page (osobny entry point)
└── styles/      tokeny, mixiny, base, layout, komponenty (BEM)
```

Zasada: **warstwa importuje tylko z warstw niższych**. Kolejność od góry: `app/features/shared` → `state` → `data`, `documents` → `domain`. Z `core/` może korzystać każda warstwa oprócz `domain/`. Naruszenie reguły zatrzymuje `npm run lint`.

Przepływ danych jest jednokierunkowy: komponent → akcja → funkcja domeny → `store.setState()` → subskrybenci renderują się ponownie. Zapis do localStorage robi subskrybent w `app/bootstrap.ts`.

## Kluczowe decyzje

- **Pieniądze w groszach** (`Money`, liczby całkowite). Nigdy `number` z ułamkiem.
- **Stawka VAT należy do pozycji kosztorysu**, nie do produktu. Katalog podpowiada tylko stawkę domyślną.
- **Pozycja kosztorysu to unia** `SingleLine | BundleLine`. Pozycja łączona ma jedną stawkę VAT dla całości.
- **Pozycja kopiuje cenę z katalogu** — zmiana cennika nie zmienia wysłanych kosztorysów.
- **Status kosztorysu to maszyna stanów** (`ESTIMATE_TRANSITIONS`).
- **Hash routing** — działa na GitHub Pages/Netlify bez konfiguracji serwera.

## Co jest gotowe, a co do zrobienia

Gotowe: konfiguracja, typy domeny, wczytywanie i walidacja `catalog.json`, repozytoria localStorage, AppShell, widok katalogu, lista kosztorysów, trasy.

Do napisania w pierwszym miesiącu: `core/` (`h()`, `Component`, `Store`, `Router`). Do tego czasu `/app.html` rzuca błąd w konsoli. Ćwiczenia ze spotkań 2–3 robisz w piaskownicy: `npm run dev` → `/sandbox.html`.

Każde miejsce do uzupełnienia jest oznaczone `TODO(spotkanie N)`. Funkcja, której jeszcze nie ma, rzuca błąd z numerem spotkania. Ekrany-zaślepki (`PlaceholderPage`) pokazują, na którym spotkaniu powstaną.

Odpowiedzi na pytania z każdego spotkania zapisujesz w `ODPOWIEDZI.md`.

## Dane

`src/data/seed/catalog.json` zawiera przykładowe materiały, usługi i szablony pozycji łączonych. Ceny i domyślne stawki VAT są **przykładowe** — która stawka obowiązuje w konkretnym zleceniu, to decyzja księgowa, nie programistyczna.

`src/data/seed/company.json` zawiera fikcyjne dane firmy do dokumentów.
