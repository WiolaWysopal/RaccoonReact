# RaccoonReact

## Konfiguracja `Priettier`:

W katalogu projektu uruchom poniższe polecenia:

```bash
npm init -y
npm install --save-dev prettier
```

Utwórz plik `.prettierrc` z podstawową konfiguracją:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

Dodaj również wpis do `.gitignore`, by wykluczyć folder `node_modules`:

```bash
echo "node_modules/" >> .gitignore
```

Do pliku `package.json` dodaj następujący skrypt:

```json
npm run format
```

## Konfiguracja `ESlint` z `Priettier`:

W projekcie skonfigurowano narzędzia ESLint i Prettier tak, aby współpracowały bez konfliktów.

Zainstalowane paczki (`devDependencies`):

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react
```

Skrypty w `package.json`:

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

### Rozwiązywanie problemów:

Podczas uruchamiania `npm run lint` pojawiał się błąd:

```bash
TypeError: Plugin "plugin:react" not found.
```

Rozwiązanie:

brakowało paczki `eslint-plugin-react`. Błąd naprawiono komendą:

```bash
npm install --save-dev eslint-plugin-react
```

### Walidacja:

- `npm run lint` — uruchamia `ESLint` na wszystkich plikach w projekcie
- `npm run format` — formatuje pliki zgodnie z zasadami `Prettier`'a
- `npx eslint` — alternatywna ręczna kontrola `ESLint`

### `Linter` a `formatter`:

- Linter analizuje kod pod kątem:
  - błędów składniowych i logicznych (np. nieużywane zmienne, błędna kolejność importów),
  - zgodności ze stylem (np. pojedynczy vs podwójny cudzysłów, spacje vs taby),
  - może też wymuszać dobre praktyki programistyczne (np. nie używaj any w TypeScript).
- Formatter automatycznie formatuje kod:
  - dodaje/usuwa przecinki,
  - ustawia odpowiednie wcięcia i odstępy,
  - łamie linie zgodnie z max długością,
  - poprawia cudzysłowy, średniki itp.

## Zaawansowane opcje `Priettier`:

- szerokość linii (`printWidth`),
- styl cudzysłowów (`singleQuote`),
- wcięcia (`tabWidth`, `useTabs`),
- średniki (`semi`),
- styl nawiasów (`bracketSpacing`),
- sposób formatowania funkcji strzałkowych (`arrowParens`).

## `Parcel`:

`Parcel` to narzędzie typu bundler, które automatycznie łączy, przetwarza i optymalizuje pliki aplikacji webowej (takie jak JavaScript, CSS, HTML czy obrazy), tworząc gotowe do użycia paczki wynikowe. Jest szybki, łatwy w konfiguracji, ponieważ nie wymaga plików konfiguracyjnych, a także obsługuje funkcje takie jak automatyczne ładowanie modułów, kodowanie źródłowe czy kompresję zasobów. Dzięki wbudowanej funkcji serwera deweloperskiego umożliwia szybkie testowanie aplikacji na lokalnym serwerze, co czyni go wygodnym narzędziem do tworzenia nowoczesnych aplikacji internetowych.

### Instalacja `Parcel`:

```bash
npm install --save-dev parcel
```

### Tworzenie plików projektu:

Aby `Parcel` mógł działać, niezbędne są odpowiednie pliki wejściowe:

- `index.html` - główna strona aplikacji, którą `Parcel` będzie serwował; powinien zawierać odpowiednią strukturę HTML oraz link do pliku JavaScript.
- `index.js` - zawiera kod JavaScript, który `Parcel` zbundluje (połączy wiele plików (np. JavaScript, CSS, obrazy) w jeden lub kilka zoptymalizowanych plików wynikowych).
