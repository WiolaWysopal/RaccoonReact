import { Link } from "@reach/router";

const Kontakt = () => {
  return (
    <div>
      <nav>
        <Link to="/"> 🏠︎ </Link>
        <Link to="/aboutus"> O nas </Link>
      </nav>

      <h1>Kontakt</h1>

      <div className="contactcontainer"></div>
    </div>
  );
};

export default Kontakt;
