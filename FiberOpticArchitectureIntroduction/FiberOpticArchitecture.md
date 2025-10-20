## 1. ELEMENTY SYSTEMU ŚWIATŁOWODOWEGO

### Nadajniki (`Transmitter`):

- Generują sygnał świetlny. Mogą to być:
  - Lasery półprzewodnikowe (wysoka moc i precyzja, używane w systemach single-mode)
  - Diody LED (często w systemach multi-mode)

### Włókna optyczne (`Optical Fiber`):

- Przenoszą światło od nadajnika do odbiornika.
  - `Single-mode` (SMF): mały rdzeń, przeznaczone do przesyłu na duże odległości
  - `Multi-mode` (MMF): większy rdzeń, stosowane na krótsze odległości
- Włókno składa się z rdzenia (`core`), płaszcza (`cladding`) i powłoki ochronnej.
- Światło propaguje się w rdzeniu dzięki całkowitemu wewnętrznemu odbiciu (TIR)

### Odbiorniki (`Receiver`):

- Konwertują sygnał świetlny z powrotem na sygnał elektryczny.
- Najczęściej stosuje się fotodetektory PIN lub APD

Złącza i sprzęt pomocniczy:

- Złącza (SC, LC, ST) umożliwiają łączenie włókien
- Splittery rozdzielają sygnał w sieciach pasywnych (PON)
- Amplifikatory i repeatery wzmacniają sygnał na dużych odległościach

## 2. ZASADY DZIAŁANIA SYSTEMÓW ŚWIATŁOWODOWYCH

- Sygnał świetlny propaguje się w rdzeniu włókna dzięki zjawisku
  całkowitego wewnętrznego odbicia

- Tłumienie sygnału (attenuation) powoduje, że moc sygnału zmniejsza się
  w miarę przesyłu

- Dyspersja to rozmycie impulsów świetlnych w czasie, co ogranicza
  prędkość przesyłu i długość transmisji

- Długość fali światła wpływa na zasięg i jakość transmisji
  np. światło 1310 nm i 1550 nm jest standardowe w systemach
  telekomunikacyjnych

## 3. ARCHITEKTURA SYSTEMÓW ŚWIATŁOWODOWYCH

1. Punkt-punkt (`P2P`):

   - Bezpośrednie połączenie nadajnika z odbiornikiem, prosty układ, stosowany np. w sieciach firmowych

2. Sieci pasywne (`PON`):

   - Użycie splitterów do dystrybucji sygnału do wielu odbiorców.
   - Brak aktywnych urządzeń po drodze, mniejszy koszt utrzymania

3. Sieci aktywne:
   - Węzły pośrednie wzmacniają i przekierowują sygnał.
   - Pozwalają na bardziej elastyczną konfigurację sieci
