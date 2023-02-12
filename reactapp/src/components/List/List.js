export const List = ({ items }) => {
return (<ol>
   {items.map((item) => {
    return <li key={item.name}>{item.name}</li>;
   })} 
</ol>
);
};