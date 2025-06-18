import { Link } from "@reach/router";

const Onas = () => {
  return (
    <div>
      <nav>
        <Link to="/"> 🏠︎ </Link>
        <Link to="/contact"> Kontakt </Link>
      </nav>

      <h1>O nas</h1>
      <div className="aboutuscontainer"></div>
    </div>
  );
};

export default Onas;
