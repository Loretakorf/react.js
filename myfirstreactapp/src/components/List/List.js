import "./List.css";
const List = ({ infoMessage, items }) => {
  if(infoMessage) {
    return  <p>{infoMessage}</p>  
  }
  const products = items.map((product) => {
    return <p key={product.id}>{product.name}</p>;
  });
  return <div className={"products"}>{products}</div>;
};
export default List;
