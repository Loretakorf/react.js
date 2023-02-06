import React from "react";

const TodoList = (props) => {
  if (!props.list || !props.list.length) {
    return null;
  }
 
  const paragraphs = props.list.map((text, index) => {
    return <p key={text + "-" + index}>{text}</p>;
  });

  return <div>{paragraphs}</div>;
};
export default TodoList;
