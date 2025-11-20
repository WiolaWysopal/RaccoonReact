# RAPORT DIAGNOSTYCZNY – Integracja OAuth (Google) + Node.js + Vercel

Celem było znalezienie i wyeliminowanie błędów w integracji `OAuth 2.0` w aplikacji backendowej.

## PRZEPŁYW OAUTH (TESTOWANY)

1. `/auth/google` - przekierowanie do Google OAuth
2. `google.com/auth` - logowanie użytkownika
3. `redirect_uri/callback` - Google odsyła kod `code`
4. `backend` - wymiana `code` → `access_token + id_token`
5. `backend` → `klient` → `końcowa odpowiedź`
6. NARZĘDZIA TESTOWE

### Postman:

- Testowanie żądań `HTTP` `GET/POST`
- Symulowanie `redirect_uri`
- Weryfikacja kodów błędów (`400/401`)

## WYKRYTE BŁĘDY I DIAGNOZA

### BŁĄD: `redirect_uri_mismatch` (`400`)

- Objawy: Błąd 400 po logowaniu Google, komunikat _redirect_uri_mismatch_
- Przyczyna: `redirect_uri` użyte przez aplikację NIE BYŁO identyczne z tym wpisanym w Google Cloud Console.
  Naprawa: Dodać wszystkie `redirect_uri` używane w aplikacji.

### BŁĄD: `access blocked – invalid request`

- Objawy: Google blokował logowanie po uruchomieniu `node app.js`
- Przyczyna: Niewłaściwa wartość `CLIENT_URI` w aplikacji.
- Naprawa: `CLIENT_URI = URL` aplikacji frontendowej (np. [https://searchemon-iota.vercel.app](https://searchemon-iota.vercel.app))

### BŁĄD: `Zły format żądania tokenowego`

- Objawy: błąd 400 przy wymianie `code` → `access_token`
- Przyczyna: brak odpowiedniej konfiguracji `redirect_uri`, niezgodny param `code`, brak `urlencode` w body POST
- Naprawa: Wysłać `grant_type=authorization_code`, `client_id`, `client_secret`, `redirect_uri` identyczny, `code`
