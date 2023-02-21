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
  <div style={bookListStyle}>
    {lists.map((list) => {
      return <li key={list.value}>{list.value}</li>;
    })}
  </div>;
};

export default AddressBookList;
