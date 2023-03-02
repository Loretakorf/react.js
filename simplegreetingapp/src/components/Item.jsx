import { Link } from "react-router-dom";


const Item = ({ img, label, description, price, id }) => {
  return (
    <div>
      <img src={img} alt={label} />
      <h3>{label}</h3>
      <p>{description}</p>
      <b>{price}</b>
      <div>
        <Link to={id.toString()}>Details</Link>
      </div>
    </div>
  );
};
export default Item;
