import { Link } from "@reach/router";
import Form from "./Form";

const StronaGlowna = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/aboutus"> O nas </Link>
        <Link to="/contact"> Kontakt </Link>
      </nav>

      <h1>Strona Główna</h1>

      <div className="mainpagecontainer">
        <Form />
      </div>
    </div>
  );
};

export default StronaGlowna;
