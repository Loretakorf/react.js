import React from "react";

const bookListStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",
};

const AddressBookList = (props) => {
  if (!props.state || !props.state.length) {
    return null;
  }

  const paragraphs = props.state.map((text) => {
    return <p key={text}>{text}</p>;
  });
  return <div Style={bookListStyle}>{paragraphs}</div>;
};
export default AddressBookList;
