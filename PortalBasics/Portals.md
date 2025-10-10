# WebPortals

## Co to jest portal?

Portal w React (i web w ogóle) to mechanizm pozwalający na renderowanie komponentu **poza głównym drzewem DOM**. Mimo że fizycznie znajduje się w innym miejscu DOM, logika Reacta i propsy działają normalnie.

## Kiedy używamy portali?

- Modale (okna dialogowe) – aby były nad wszystkimi elementami i nie były ograniczone stylem rodzica.
- Tooltipy i pop-upy – aby uniknąć problemów z `overflow:hidden`.
- Powiadomienia / Toasty – łatwe renderowanie w stałym miejscu `DOM`.
- Menu kontekstowe – niezależne od układu rodzica.

## Działanie w React

1. Tworzymy kontener w DOM, np. w `index.html`:

   ```html
   <div id="modal-root"></div>
   ```

2. W komponencie używamy `ReactDOM.createPortal()`:

   ```js
   ReactDOM.createPortal(
     <ModalContent />,
     document.getElementById("modal-root"),
   );
   ```

3. Portal renderuje zawartość w podanym kontenerze, ale komponent nadal zachowuje się jakby był w swoim miejscu w hierarchii Reacta.

## Zalety portali:

- Zachowanie logiki komponentu niezależnie od DOM
- Łatwiejsze zarządzanie modalami i tooltipami
- Rozdzielenie struktury DOM od logiki UI

### Przykład

App DOM:

```js
<div id="root">
  <Header />
  <Main />
  <Footer />
</div>
```

Modal DOM (portal):

```js
<div id="modal-root">
  <ModalContent />
</div>
```

Chociaż `ModalContent` fizycznie jest w `modal-root`, w React działa jakby był w `Main` lub `Header`.
