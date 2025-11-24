function App() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/login"; // backend rozpoczyna SAML SSO
  };

  const handleProfile = async () => {
    const res = await fetch("http://localhost:3001/profile", {
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      alert(JSON.stringify(data, null, 2));
    } else {
      alert("Nie jesteś zalogowany");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + SAML SSO</h1>
      <button onClick={handleLogin} style={{ margin: "10px", padding: "10px" }}>
        Zaloguj się przez SSO
      </button>
      <button
        onClick={handleProfile}
        style={{ margin: "10px", padding: "10px" }}
      >
        Pobierz profil
      </button>
    </div>
  );
}

export default App;
