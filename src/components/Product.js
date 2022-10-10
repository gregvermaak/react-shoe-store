import { checkout } from "../services/checkout";
import SizeSelect from "./SizeSelect";

const Product = ({ image, name, description, price, priceId }) => {
  const onClick = () => {
    checkout(priceId);
  };

  return (
    <li className="product-grid-item">
      <img src={image} alt={name} />
      <div className="name-and-price">
        <h3>{name}</h3>
        <div className="price-select-column">
          <p>{price}</p>
          <SizeSelect />
        </div>
      </div>
      <button onClick={onClick}>Buy now</button>
      <p className="description">{description}</p>
    </li>
  );
};

export default Product;
