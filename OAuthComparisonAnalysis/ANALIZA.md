# RAPORT PORÓWNAWCZY: OAuth 2.0, JWT, OpenID Connect oraz SAML

## 1. Wprowadzenie

Celem raportu jest porównanie czterech popularnych metod autoryzacji i uwierzytelniania:

- OAuth 2.0
- JSON Web Tokens (JWT)
- OpenID Connect (OIDC)
- Security Assertion Markup Language (SAML)

Analizie poddano ich architekturę, główne cechy, zalety, wady oraz typowe scenariusze użycia.

---

## 2. Architektura i kluczowe cechy

### 2.1 OAuth 2.0

- Framework autoryzacji, nie system uwierzytelniania użytkownika.
- Pozwala aplikacjom uzyskać ograniczony dostęp do zasobów w imieniu użytkownika.
- Opiera się na tokenach dostępu przekazywanych między serwerem autoryzacji, klientem i API.
- Obsługuje różne "grant types" (Authorization Code, Client Credentials, Device Code, itp.).

### 2.2 JWT (JSON Web Token)

- Format tokena, nie protokół.
- Służy do bezstanowej autoryzacji i przesyłania informacji.
- Token zawiera nagłówek, payload i podpis.
- Może być użyty z OAuth lub samodzielnie.

### 2.3 OpenID Connect (OIDC)

- Warstwa uwierzytelniania zbudowana na OAuth 2.0.
- Dodaje ID Token zawierający dane o użytkowniku.
- Standaryzuje discovery, endpointy i skope'y.
- Umożliwia SSO i silne potwierdzanie tożsamości.

### 2.4 SAML

- Protokół XML do federacyjnego logowania i SSO.
- Wykorzystuje assertion przesyłane między Identity Provider a Service Provider.
- Popularny w organizacjach i w środowiskach enterprise.
- Starszy, cięższy niż OIDC, ale bardzo dojrzały.

---

## 3. Zalety i wady (bezpieczeństwo, elastyczność, skalowalność)

### 3.1 OAuth 2.0

Zalety:

- Bardzo elastyczny.
- Idealny do autoryzacji API.
- Szeroka adopcja, dużo bibliotek.

Wady:

- Nie zapewnia uwierzytelniania, co bywa mylące.
- Wymaga poprawnej konfiguracji (`redirect_uri`, `grant types`).

### 3.2 JWT

Zalety:

- Lekki, szybki, `stateless`.
- Łatwy do przenoszenia między usługami.
- Można go użyć bez serwera sesji.

Wady:

- Brak możliwości unieważnienia bez dodatkowej infrastruktury.
- Duża powierzchnia ataku przy wycieku klucza prywatnego.
- Łatwo zrobić błędy konfiguracyjne (np. akceptacja niepodpisanego algorytmu).

### 3.3 OpenID Connect

Zalety:

- Dodaje identyfikację użytkownika na bazie OAuth.
- Bardziej nowoczesny i lekki niż SAML.
- Dobrze działa z aplikacjami web/mobile.

Wady:

- Wciąż wymaga zrozumienia OAuth.
- Nie wszystkie systemy korporacyjne go wspierają.

### 3.4 SAML

Zalety:

- Standard enterprise do federacji tożsamości.
- Bardzo bezpieczny i dobrze przetestowany.
- Świetny do SSO w środowisku korporacyjnym.

Wady:

- Ciężki, oparty o XML.
- Trudniejszy w konfiguracji.
- Niepraktyczny w aplikacjach mobilnych.

---

## 4. Typowe scenariusze zastosowania

### OAuth 2.0

- Autoryzacja API.
- Delegowanie dostępu (np. "Zaloguj się przez Google i udziel dostępu do kalendarza").
- Systemy microservices potrzebujące modelu tokenów dostępu.

### JWT

- Logowanie w aplikacjach SPA.
- Autoryzacja w architekturze microservices.
- Przechowywanie krótkotrwałych danych sesyjnych.

### OpenID Connect

- Logowanie użytkowników (SSO).
- Aplikacje mobilne i webowe wymagające tożsamości.
- Federacja z nowoczesnymi providerami: Google, Azure AD, Auth0.

### SAML

- SSO w dużych organizacjach.
- Integracja z korporacyjnymi IdP (ADFS, Okta).
- Starsze lub silnie regulowane systemy enterprise.

---

## 5. Podsumowanie

- OAuth 2.0 = autoryzacja.
- OIDC = uwierzytelnianie + autoryzacja na bazie OAuth.
- JWT = format tokena używany przez oba powyższe.
- SAML = SSO dla `enterprise`, cięższe, ale stabilne.

Każda metoda ma sens w innym kontekście. W nowoczesnych aplikacjach web/mobile dominują OAuth 2.0 + OIDC. W środowiskach korporacyjnych nadal często wygrywa SAML.
