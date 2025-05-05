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

## `Hot Module Replacement`

`Hot Module Replacement` (`HMR`) to funkcja narzędzi takich jak `Parcel`, która umożliwia automatyczne podmienianie zmodyfikowanych modułów (np. JavaScript lub CSS) w działającej aplikacji bez przeładowywania całej strony, co pozwala zachować jej stan (np. dane w formularzach) i znacznie przyspiesza proces programowania, ponieważ zmiany widoczne są od razu po zapisaniu pliku.

`Parcel` ma `HMR` wbudowany automatycznie i należy go uruchomić:

```bash
npx parcel index.html
```

## Tworzenie własnej wtyczki

Aby rozszerzyć `Parcel` o własną funkcjonalność, można stworzyć i podpiąć własną wtyczkę (plugin). Poniżej opis krok po kroku:

1. Utworzenie folderu na wtyczkę

W katalogu głównym projektu utwórz folder na wtyczki:

```bash
my-parcel-plugins/
```

2. Utworzenie pliku z wtyczką

W folderze `my-parcel-plugins` dodaj plik MyTransformer.js z prostą definicją wtyczki. Przykład:

```js
const { Transformer } = require("@parcel/plugin");

module.exports = new Transformer({
  async transform({ asset }) {
    console.log("Wtyczka działa dla pliku:", asset.filePath);
    return [asset];
  },
});
```

3. Konfiguracja `.parcelrc`:

W katalogu głównym dodaj plik `.parcelrc` (jeśli jeszcze go nie ma) i zarejestruj swoją wtyczkę:

```js
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.js": ["...", "./my-parcel-plugins/MyTransformer.js"]
  }
}
```

4. Uruchomienie i testowanie

Uruchom aplikację:

```bash
npm start
```

W terminalu powinien pojawić się komunikat:

```bash
Wtyczka działa dla pliku: ./index.js
```

## `Rollup`:

`Rollup` to narzędzie służące do bundlowania kodu JavaScript – czyli łączenia wielu plików źródłowych w jeden plik wynikowy. Ułatwia to zarządzanie kodem i jego wdrażanie, szczególnie w projektach frontendowych, gdzie przeglądarka powinna otrzymać jak najmniej i jak najprostszych plików do załadowania. `Rollup` wspiera moduły ES6 (`import/export`) i umożliwia optymalizację kodu, np. przez usuwanie nieużywanych fragmentów (`tree shaking`).

`Bundle` to jeden scalony plik JavaScript, który zawiera kod z wielu źródeł. Zamiast ładować wiele osobnych plików `.js`, aplikacja może korzystać z jednego gotowego pliku, co przyspiesza działanie i upraszcza strukturę projektu.

### Uruchomienie budowania w środowisku `npm`:

```bash
npm run bild
```

## Plugin `Babel`:

Aby zapewnić kompatybilność aplikacji z przeglądarkami, które nie wspierają nowoczesnych funkcji JavaScript (np. funkcji strzałkowych, `let/const`, `template literals`), użyto w projekcie pluginu `@rollup/plugin-babel`. Plugin ten integruje narzędzie `Babel` z bundlerem `Rollup`, umożliwiając automatyczne przekształcanie kodu `ES6+` do wersji `ES5`, która działa w starszym środowisku uruchomieniowym.

W konfiguracji zastosowano preset `@babel/preset-env`, który dynamicznie dobiera odpowiednie transformacje na podstawie użytych funkcji. Dzięki temu możliwe jest pisanie nowoczesnego, czytelnego kodu w plikach źródłowych, a `Rollup` i `Babel` zajmują się przygotowaniem wersji produkcyjnej — zgodnej z szerokim zakresem przeglądarek i środowisk.
