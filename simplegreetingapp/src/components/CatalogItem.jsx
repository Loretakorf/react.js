import { useParams } from "react-router-dom";
import { items } from "../constants/items";

// const t = require("./sample.JSON");
// console.log(t);
// console.log(JSON.parse(JSON.stringify(t)));


const CatalogItem = () => {
  const { id } = useParams();
  console.log(id);
  const item = items.find((item) => item.id === Number.parseInt(id));
  return (
    <div>
      <div>
        <img src={item.img} alt={item.label} />
        <h3>{item.label}</h3>
        <p>{item.description}</p>
        <b>{item.price}</b>
        <button>Buy</button>
      </div>
    </div>
  );
};
export default CatalogItem;
