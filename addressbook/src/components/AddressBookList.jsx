import React from "react";

const bookListStyle = {
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",
  backgroundColor: "black",
  color: "white"
};

const AddressBookList = ({ list, value }) => {
  if (!value) {
    return null;
  }
  const paragraphs = list.map((user) => {
    return  <p key={user.id}>{user.name}</p>;
  });

  return <div style={bookListStyle}>{paragraphs}</div>;
};

export default AddressBookList;
