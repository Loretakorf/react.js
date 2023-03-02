import Item from "./Item";
import { items} from "../constants/items"
const Catalog = () => {
  return (
    <div>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            img={item.img}
            label={item.label}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
export default Catalog;
