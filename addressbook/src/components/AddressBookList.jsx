import React from "react";

const bookListStyle = {
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",
  backgroundColor: "black",
  color: "white",
};

const AddressBookList = ({ lists, value }) => {
  if (!value) {
    return null;
  }
  const users = lists.map((list) => {
    return <p key={list.name}>{list.value}</p>;
  });
  return <div style={bookListStyle}>{users}</div>;
};
 


export default AddressBookList;
