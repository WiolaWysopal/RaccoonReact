# Projekt topologii sieci światłowodowej — rozwiązanie (notatka)

> Krótkie założenie: projekt przedstawia sieć łączącą 6 lokalizacji w mieście/regionie: 2 centra danych (DC1, DC2), główny POP, 2 biura (Office A, Office B) i kampus edukacyjny (Campus). Wymagane przepustowości: między DC 100/400 G, między POP a biurami 10/40 G, do kampusu 10 G + dostęp PON dla mniejszych placówek.

---

## 1. Podsumowanie projektu

- Cel: zaprojektować niezawodną, skalowalną topologię światłowodową łączącą wymienione lokalizacje, z redundancją i możliwością rozbudowy.
- Główne założenia techniczne:
  - Core: DWDM na single-mode fiber (SMF, G.652.D).
  - Metro: 10/40/100G Ethernet (SMF), część krótszych łączy może używać OM4 jeśli w obrębie kampusu/budynku.
  - Access: PON (GPON/NG-PON2) dla wielu klientów; punkt–punkt (SFP/SFP+/QSFP+) dla dedykowanych łączy.

---

## 2. Topologia (opis)

**Wybrana struktura:** hybrydowy "core ring + metro rings + access".

- **Core ring:** łączący DC1 — POP — DC2 w pierścieniu DWDM (redundancja i ochrona ścieżki). Trasa równoległa (dual fiber) aby umożliwić niezależne ścieżki primary/secondary.
- **Metro rings:** z POP rozchodzą się dwa ringi/metrolinki: jeden do Office A i dalej do Campus; drugi do Office B i do dzielnicowego węzła dystrybucyjnego.
- **Access:** Campus: własny kampusowy rozdział światłowodów (trunk SMF) i wewnętrzne FO OM4 do budynków; mniejsze placówki: PON z OLT węzła miejskiego.

---

## 3. Diagram (schemat)

W notatce zawarłem prosty schemat ASCII oraz wskazówki do rysunku graficznego.

```
     DC1 ----- POP ----- DC2
      |                   |
      |                   |
   (ring)             (ring)
      |                   |
   Office A --- Campus --- Office B
```

**Wskazówka do rysunku w Visio/diagrams.net:** narysuj trzy warstwy poziome: Core (góra), Metro (środek), Access (dół). Oznacz linki jako: DWDM/SMF dla core, 10/40G SMF dla metro, PON/OM4/SMF dla access. Zaznacz miejscówki wzmacniaczy (EDFA) wzdłuż długich tras core (co ~70–100 km) jeśli potrzeba.

---

## 4. Rodzaje łączy i komponenty

### Łącza

- **Core:** Single-Mode Fiber (SMF, ITU-T G.652.D), DWDM (kanały 100 GHz/50 GHz), dual-fiber redundant.
- **Metro:** SMF, CWDM lub DWDM jeśli wiele usług; typowe prędkości 10/40/100G Ethernet.
- **Access (campus):** OM4 (multimode) dla wewnętrznych krótkich połączeń (<=500 m) albo SMF jeśli wymagane dłuższe dystanse.
- **Last-mile:** GPON lub NG-PON2 (w zależności od liczby użytkowników i wymagań).

### Węzły i aktywne urządzenia

- **Core (w DC i POP):** DWDM Mux/Demux, Transpondery / Muxpondery (100G/400G), ROADM (opcjonalnie), 2× redundantne core switches (100/400G) z uplinkami DWDM.
- **Metro (węzły miejskie/office):** agregacyjne przełączniki 10/40/100G, OLT (jeśli PON) w węźle POP/metro, CWDM/DWDM terminale dla agregacji.
- **Access (budynki / kampus):** rozdzielnice krosowe, patchpanels, ONU/ONT dla PON, przełączniki access 1/10G.
- **Wzmacniacze:** EDFA umieszczone w szafach pośrednich co ~80 km transmisji na trasach dłuższych niż ~60–80 km. Alternatywnie moduły Raman lub regeneratory OEO jeśli wymagana regeneracja sygnału.

---

## 5. Rozmieszczenie urządzeń (słownie)

- **DC1, DC2:** pełne wyposażenie core — DWDM, mux/demux, transpondery, redundantne przełączniki, UPS, klimatyzacja, monitoring.
- **POP (centralny węzeł):** agregacja ruchu metro, OLT dla PON, urządzenia ochrony (ROADM opcjonalnie), miejsce na EDFA jeśli trasa między DC >80 km.
- **Office A/B:** lokalne przełączniki access, patchpanel, moduły SFP/SFP+ uplink do metro.
- **Campus:** główny trunk SMF z POP do kampusu; w kampusie rozdzielnica i OM4 do budynków; OLT/ONUs w węźle kampusowym, redundancja krytycznych łączy.

---

## 6. Link budget — przykładowe obliczenie (prosty)

**Przykład:** połączenie DC1 — POP: długość 60 km, SMF α = 0.2 dB/km.

- Tłumienie włókna: 60 km × 0.2 dB/km = 12.0 dB
- Straty złączy/patchy: 6 złączy × 0.5 dB = 3.0 dB
- Dodatkowe tłumienie (spare margin): 2.0 dB
- **Suma strat:** 17.0 dB
- Jeśli nadajnik: 0 dBm, odbiornik (sensivity) wymaga −28 dBm → margin = −28 dBm − (0 dBm − 17 dB) = 17 − 28 = −11 dB → oznacza, że bez wzmacniacza nie ma wystarczającej mocy. Należy dodać EDFA (gain ~20 dB) lub użyć transpondera z mocniejszym nadajnikiem.

> Uwaga: powyższe wartości są przykładowe — w raporcie rozpisz szczegóły dla każdej krytycznej trasy (dystans, liczba złączy, wymagania receiver sensitivity dla wybranych modulacji i typów SFP).

---

## 7. Redundancja i ochrona

- Core w formie pierścienia z automatycznym przełączeniem (np. ochronny ring, protokoły routingu BGP/OSPF + MLPS/RSVP jeśli potrzeba).
- Zapasowe ścieżki fizyczne (route diversity) dla krytycznych par DC.
- Dublowanie kluczowych elementów w węzłach (2× core switch, 2× zasilanie, 2× OLT gdzie krytyczne).

---

## 8. Testy akceptacyjne i dokumentacja po instalacji

- OTDR (pomiar dystansu i zdarzeń, spawów), pomiar tłumienia end-to-end, pomiary mocy optycznej, testy BER (jeśli wymagane), testy PON (split ratio i margin).
- Dokumentacja as-built: mapa kabli, numeracja włókien, lista spawów i złącz, wyniki pomiarów.

---

## 9. Krótka lista materiałów (BOM) — przykładowo

- SMF G.652.D — X km
- Patchpanels, mufy spawane — kilka sztuk
- DWDM Mux/Demux + transpondery 100G — 3 kanały (przykład)
- EDFA (stacje wzmacniające) — 2 szt. (jeśli potrzebne)
- Core switches 2× redundantne (100/400G)
- Aggregation switches 2× (40/100G)
- Access switches (1/10G) — zależnie od liczby lokacji
- OLT + ONU (GPON/NG-PON2) jeśli PON

---

## 10. Wnioski i rekomendacje

- Dla niezawodności użyj ringów w warstwie core/metro oraz zdublowanego sprzętu w kluczowych węzłach.
- Dla przyszłej rozbudowy preferuj SMF (G.652.D) nawet w krótkich trasach kampusowych, jeśli budżet pozwala.
- Przeprowadź dokładne link-budget i OSNR calculations dla każdej dłuższej trasy; zaplanuj EDFA/regenerative nodes zgodnie z wynikami.

---

### Gotowe do oddania

Ta notatka zawiera kompletny, przystępny opis projektu topologii (diagram, komponenty, link budget, rozmieszczenie urządzeń, testy i BOM). Jeśli chcesz, mogę:

- wygenerować estetyczny diagram (PNG/SVG) na podstawie powyższego schematu,
- rozwinąć link-budget w arkuszu Excel dla wszystkich tras (potrzebuję dystansów),
- przygotować listę zamówieniową z przykładowymi modelami urządzeń.

Powiedz, którą z tych opcji chcesz — zrobię to dalej.
