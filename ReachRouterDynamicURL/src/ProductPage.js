import { Link, useParams } from "@reach/router";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <nav>
        <Link to="/"> 🏠︎ </Link>
        <Link to="/aboutus"> O nas </Link>
        <Link to="/contact"> Kontakt </Link>
      </nav>
      <div className="productpagecontainer">
        <h3>Szukasz produktu o nazwie {id}</h3>
      </div>
    </div>
  );
};
export default ProductPage;
