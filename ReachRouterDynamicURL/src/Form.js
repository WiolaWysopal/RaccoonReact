import { useNavigate } from "@reach/router";
import { useState } from "react";

const Form = () => {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productId.trim()) {
      navigate(`/productpage/${productId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="form-example">
      <div className="form-example">
        <label for="name">Wprowadź nazwę produktu: </label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <button>Wyszukaj</button>
    </form>
  );
};

export default Form;
