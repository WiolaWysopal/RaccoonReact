function App() {
  return (
    <div>
      {/* poprawiony alt */}
      <img
        src="https://via.placeholder.com/200"
        alt="Przykładowy obraz testowy"
      />

      {/* poprawiona hierarchia nagłówków */}
      <h1>Artykuł o dostępności</h1>
      <h2>Wprowadzenie</h2>

      {/* opisowy link */}
      <p>
        <a href="/report.pdf">Pobierz raport roczny (PDF)</a>
      </p>

      {/* formularz z label */}
      <form>
        <label htmlFor="name">Imię</label>
        <input id="name" type="text" placeholder="np. Anna" />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default App;
