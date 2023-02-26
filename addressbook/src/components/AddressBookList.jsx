import React from "react";

const bookListStyle = {
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",
  // backgroundColor: "lightgrey",
  color: "black",
};

const AddressBookList = ({ lists }) => {
  // if (!value) {
  //   return null;
  // }
  const users = lists.map((list) => {
    return (
      <div>
         <p key={list.name}>{list.name}</p>
         <p key={list.surname}>{list.surname}</p>
         <p key={list.phone}>{list.phone}</p> 
         
      </div>
   )
  });

  return <div style={bookListStyle}>{users}</div>;
};

export default AddressBookList;
