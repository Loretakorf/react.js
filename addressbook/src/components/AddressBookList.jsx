import React from "react";

const bookListStyle = {
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",
  border: "1px solid grey",
};

const AddressBookList = (props) => {
  if (!props.list || !props.list.length) {
    return null;
  }
  const paragraphs = props.list.map((text) => {
    return <p key={text}>{text}</p>;
  });

  return <div style={bookListStyle}>{paragraphs}</div>;
};

export default AddressBookList;
