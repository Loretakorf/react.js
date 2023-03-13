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

// import { useEffect } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
// const ShoppingCart = ({ isAuthenticated }) => {
//   const navigate = useNavigate();
//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }
//   const onSubmit = (e) => {
//     e.preventDefault();
//     // send data to back end
//     navigate("/");
//   };
//   return (
//     <form>      <input type="text" />      <button onClick={onSubmit}>save</button>    </form>  );
// };
// export default ShoppingCart;
