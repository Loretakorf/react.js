import { useState } from "react";
const pageStyle = {
  width: "100%",
  marginTop: "16px",
};
const sectionStyle = {
  marginBottom: "16px",
  textAlign: "center",
};
const buttonStyle = {
  borderRadius: 0,
  border: 0,
  backgroundColor: "#14e355",
  padding: "0.9rem",
  fontWeight: "bold",
  color: "#eee",
};

const Pages = () => {
  const [text, setText] = useState();
  const myText = "Sveiki atvyke!"
  const handleClick = () => {
    setText(myText);
  };

  return (
    <div style={pageStyle}>
      <section style={sectionStyle}>
        <img
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg"
          alt=""
        />
      </section>
      <section style={sectionStyle}>
        <button onClick={handleClick} style={buttonStyle}>
          Spustelk
        </button>
      </section>
      <section>{text}</section>
    </div>
  );
};
export default Pages;
