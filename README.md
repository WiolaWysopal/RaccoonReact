# RaccoonReact

## Konfiguracja `Priettier`:

W katalogu projektu uruchom poniższe polecenia:

```bash
npm init -y
npm install --save-dev prettier
```

Utwórz plik .prettierrc z podstawową konfiguracją:

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

