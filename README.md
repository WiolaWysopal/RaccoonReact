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

## `Rollup Tree Shaking`:

`Rollup` automatycznie wspiera `tree shaking`, czyli proces usuwania nieużywanego kodu z końcowego bundla. Działa to dzięki analizie statycznej modułów `ECMAScript` (`import/export`) — jeśli jakaś funkcja, zmienna lub klasa nie jest nigdzie używana, `Rollup` jej nie dołącza do pliku wynikowego. Dzięki temu finalny kod ładowany w przeglądarce jest mniejszy, szybszy i bardziej zoptymalizowany.

Aby `tree shaking` działał skutecznie, kod źródłowy powinien być modularny i unikać dynamicznych `require()` czy efektów ubocznych wykonywanych globalnie.

### Uruchamianie:

Ponieważ `Tree shaking` działa automatycznie, wystarczy po prostu uruchomić projekt poleceniem:

```bash
npm run build
```

### Opis działania:

Załóżmy, że w projekcie utworzono kilka modułów, z których tylko część została użyta w pliku głównym. Po zbudowaniu (polecenie: `npm run build`) projektu można zauważyć, że nieużywane funkcje nie trafiły do bundla (pliku wynikowego w folderze `dist`), co potwierdza skuteczność tej optymalizacji.

## Tworzenie własnych wtyczek `Rollup`

Aby stworzyć własną wtyczkę do `Rollupa`, należy skorzystać z interfejsu wtyczki `Rollup`, który umożliwia manipulowanie różnymi etapami procesu bundlowania. Wtyczki w `Rollupie` działają na zasadzie hooków, które są wywoływane w trakcie różnych faz procesu bundlowania. Oto, jak można stworzyć własną wtyczkę:

### 1. Struktura wtyczki:

Wtyczka jest funkcją, która zwraca obiekt z jednym lub wieloma `hookami`. Najczęściej używanymi hookami są:

- `load` – odpowiada za ładowanie plików (np. przetwarzanie plików z dysku).

- `transform` – odpowiada za modyfikowanie kodu źródłowego przed jego zapisaniem do bundla.

- `generateBundle` – pozwala na modyfikowanie końcowego bundla.

### 2. Przykład wtyczki:

Możesz stworzyć wtyczkę, która loguje ścieżkę aktualnie przetwarzanego pliku, korzystając z hooka `load`. `Rollup` automatycznie przekazuje ścieżkę pliku (argument `id` - ścieżkę tę sam pobiera) do wtyczki, co pozwala na łatwe logowanie nazw plików. Przykład:

```js
export default function logModulesPlugin() {
  return {
    name: "log-modules-plugin", // Nazwa wtyczki
    load(id) {
      console.log("Przetwarzam moduł:", id); // Logowanie ścieżki pliku
    },
  };
}
```

### 3. Zastosowanie wtyczki:

Wtyczka powinna być dodana do konfiguracji `Rollupa` w sekcji `plugins`. Przykład konfiguracji:

```js
import logModulesPlugin from "./logModulesPlugin.js";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [logModulesPlugin()],
};
```

### 4. Zasady działania:

Kiedy `Rollup` przetwarza moduły w projekcie, wtyczka będzie wywoływana podczas procesu ładowania plików, a hook `load` otrzyma ścieżkę do każdego przetwarzanego modułu jako `id`. Dzięki temu można wykonać różne operacje, takie jak logowanie, modyfikacja zawartości plików czy też sprawdzanie ich stanu.

## `Webpack`:

`Webpack` to modułowy bundler JavaScript, który umożliwia łączenie wielu plików i modułów w jeden, zoptymalizowany plik wynikowy. Ułatwia zarządzanie zależnościami w projekcie oraz automatyzuje proces budowania aplikacji webowych.

### Instalacja:

```bash
npm install --save-dev webpack webpack-cli
```

- `webpack` – główna biblioteka bundlująca
- `webpack-cli` – interfejs wiersza poleceń do obsługi webpacka

Konfiguracja projektu znajduje się w pliku `webpack.config.js` - zawiera informacje o punkcie wejścia (`entry`), wyjściu (`output`) i trybie działania (`mode`).

### Skrypt w `package.json` do uruchamiania `Webpacka`:

```json
"scripts": {
  "build": "webpack"
}
```

## `Webpack-Dev-Server`

`Webpack Dev Server` to lokalny serwer deweloperski, który automatycznie odświeża stronę w przeglądarce po każdej zmianie kodu źródłowego. Dzięki temu nie trzeba za każdym razem ręcznie budować projektu ani odświeżać strony — serwer robi to za nas w tle.

### Zalety:

- Automatyczne odświeżanie strony po zmianach (`live reloading`)
- Szybsze testowanie zmian w kodzie JavaScript/HTML/CSS
- Działa lokalnie bez konieczności serwowania plików z zewnątrz

### Instalacja:

```bash
npm install --save-dev webpack-dev-server
```

### Uruchomienie servera:

```bash
npm run start
```

**WAŻNE: W `package.json` musi być skrypt start: `"webpack serve"`**

## Integracja `Babel` z `Webpackiem`

Aby umożliwić transpilację nowoczesnego kodu JavaScript (ES6+) do wersji wspieranej przez starsze przeglądarki, należy zintegrować plugin `Babel` z `Webpackiem`.

### Konfiguracja:

W tym celu należy przede wszystkim utworzyć plk `.babelrc`:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Następnie do pliku `webpack.config.js` lub `webpack.config.mjs` należy dodać następującą regułę:

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
  ];
}
```

### Test:

```
npm run build
```

Jeśli kompilacja przez `webpack` działa bez błędów, w konsoli pojawi się komunikat `compiled successfully`.

## ESbuild

`ESBuild` to superszybki bundler i minifier JavaScript/TypeScript, który pozwala szybko łączyć pliki i tworzyć zoptymalizowaną wersję kodu.

### Instalacja:

```bash
npm install --save-dev esbuild
```

Przykład użycia do zbudowania pliku `index.js`:

```bash
npx esbuild index.js --bundle --outfile=bundle.js
```

Alternatywnie można też dodać skrypt do `package.json`:

```json
"scripts": {
  "build": "esbuild index.js --bundle --outfile=bundle.js"
}
```

### Uruchamianie:

```bash
npm run build
```

## `Vite`

`Vite` to szybki bundler i `dev server` stworzony z myślą o projektach frontendowych. Wykorzystuje natywne moduły `ES` (`ESM`) w przeglądarce, dzięki czemu zapewnia błyskawiczny start aplikacji i szybkie odświeżanie podczas developmentu (`HMR`). Podczas budowania produkcyjnego używa `Rollupa`, ale w czasie pracy deweloperskiej działa inaczej niż klasyczne bundlery. Jest alternatywą dla `Webpacka` i `Rollupa`, oferując prostszą konfigurację i dużo lepszą wydajność w fazie developmentu.

### Podstawowa zawartość

```pgsql
vite-project/
├── index.html            <-- punkt wejścia aplikacji
├── package.json          <-- konfiguracja projektu i zależności
├── vite.config.js        <-- opcjonalna konfiguracja Vite
├── public/               <-- statyczne zasoby serwowane bezpośrednio (np. favicony, obrazy)
└── src/
    ├── App.jsx           <-- główny komponent Reacta
    ├── main.jsx          <-- punkt wejścia JS do aplikacji
    └── assets/           <-- folder na obrazy, style i inne zasoby importowane do kodu

```

### Kluczowe mechanizmy działania

- Vite używa natywnych `ES Modules` → szybki start aplikacji
- `npm run dev` uruchamia lokalny serwer z automatycznym odświeżaniem (`HMR`)
- Nie trzeba ustawiać ręcznie `webpacka` – Vite działa „zero-config”
- `index.html` jest bezpośrednio używany jako szablon, z dynamicznym wstrzykiwaniem skryptów przez Vite

### `Aliasy` i `pluginy`

#### Aliasy

Alias w Vite to sposób na skrócenie i uproszczenie ścieżek do plików w projekcie. Dzięki aliasom, zamiast podawać pełne ścieżki, takie jak `src/assets/logo.svg`, można używać krótkich i łatwiejszych do zarządzania ścieżek, jak `@/assets/logo.svg`.

Alias definiuje się w pliku konfiguracyjnym `vite.config.js` za pomocą opcji `resolve.alias`. Na przykład, aby ustawić alias `@` do folderu `src`, można użyć takiej konfiguracji (`vite.config.js`):

```js
import path from "path";

export default {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
```

Wówczas w plikach projektu można używać aliasu `@` do odwołania się do folderu `src`. Przykład:

```js
import reactLogo from "@/assets/react.svg";
```

#### Pluginy

Pluginy w Vite to dodatkowe moduły, które rozszerzają funkcjonalność bundlera, umożliwiając integrację z różnymi technologiami i frameworkami, jak React, Vue, TypeScript, czy autoloading komponentów. Pluginy są dodawane do pliku konfiguracyjnego `vite.config.js`.

Przykład:

Dodawanie pluginu `react`

**1. Instalacja:**

```bash
npm install --save-dev @vitejs/plugin-react
```

**2. Dodanie do pliku konfiguracyjnego (`vite.config.js`):**

```js
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
};
```

## Optymalizacja i wdrożenie aplikacji Vite

Warto, aby projekt został zoptymalizowany pod kątem wydajności i gotowości do wdrożenia produkcyjnego.

### Proces optymalizacji

- Minifikacja kodu - wykorzystano `esbuild`, domyślny i szybki minifier w Vite.
- Podział na `chunki` (`code splitting`) - zależności z `node_modules` wydzielane są do osobnego pliku `vendor.js`, co poprawia cache’owanie.
- `Lazy loading` - komponenty ładują się dynamicznie tylko wtedy, gdy są potrzebne (z użyciem `React.lazy` i `Suspense`), co skraca czas początkowego ładowania.

### Budowanie aplikacji

```bash
npm run build
```

Wygenerowane pliki znajdują się w katalogu `dist/`.

### `vendor`

`vendor` to umowna nazwa `chunku` (porcji kodu), do którego Vite (i narzędzia bundlujące jak `Rollup` czy `Webpack`) wydzielają zewnętrzne biblioteki — takie jak `React`, `ReactDOM`, `lodash` itp. — czyli wszystko, co pochodzi z folderu `node_modules`.

## Komponenty

Komponent funkcyjny to podstawowy sposób tworzenia interfejsów w React. Może być zapisany jako **zwykła funkcja** lub **funkcja strzałkowa**.

Przykład 1 - zwykła funkcja:

```js
function MyComponent() {
  return <p>To jest statyczny tekst w komponencie.</p>;
}
```

Przykład 2 - funkcja strzałkowa

```js
const MyComponent = () => {
  return <p>To jest statyczny tekst w komponencie.</p>;
};
```

### Eksportowanie komponentu

Aby móc używać komponentu w innych plikach, należy go wyeksportować:

```js
export default MyComponent;
```

### Użycie komponentu

1. Zaimportuj komponent w innym pliku (np. w `App.js`):

```js
import MyComponent from "./MyComponent";
```

2. Wywołaj go w JSX (czyli w kodzie HTML wewnątrz Reacta):

```jsx
function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

### Uruchomienie aplikacji

Aplikację należy uruchomić standardowo w katalogu projektu wpisując polecenie:

```bash
npm start
```
