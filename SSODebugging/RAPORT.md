# Scenariusze błędów i debugowanie integracji `SSO`

## 1. Najczęstsze błędy w SSO:

- `redirect_uri_mismatch` - aplikacja przekazuje inny adres niż ten zarejestrowany u dostawcy tożsamości.

  - Powody: literowki, inny port, http vs https.

- `invalid_client` - dostawca SSO nie rozpoznaje `client_id` lub `client_secret` (błąd w `.env`).

- `unauthorized_client` - aplikacja próbuje użyć niedozwolonego `flow` lub `scope`.

- Błąd wymiany tokenu - `scope` `openid` nie został podany albo `endpoint` tokenu jest niepoprawny.

- Błąd `401 - brak sesji`
  - Backend nie widzi sesji użytkownika.
  - Najczęstsze powody: brak `cookies` (`credentials=include`), złe `CORS`, wygasła sesja.

## 2. Mechanizmy logowania i debugowania:

- logowanie wszystkich zapytań HTTP (`metoda`, `endpoint`, `status`)
- logowanie operacji sesji (tworzenie, wygaśnięcie, odczyt)
- logowanie błędow `OAuth2` / `OpenID Connect` (opisy, kody, parametry)
- walidacja pliku `.env` przy starcie aplikacji
- tryb debugowania `Passport.js: DEBUG=passport:*`
- narzędzia w przeglądarce: `Network`, `Cookies`, przekierowania, `CORS`

## Podsumowanie:

Integracja `SSO` najczęściej zawodzi przez błędy konfiguracji:
`redirect_uri`, dane klienta, brak `scope openid` albo problemy z sesją. Proste logowanie pozwala szybko wykryć przyczyny i skrócić czas debugowania.
