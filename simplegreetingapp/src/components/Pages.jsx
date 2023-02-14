import { useState } from "react";
import Section from "./Section";

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "16px",
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
  const [text, setText] = useState(false);
 
  const handleClick = () => {
    setText(true);
  };

  return (
    <div style={pageStyle}>
      <Section>
        <img
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg"
          alt=""
        />
      </Section>
      <Section>
        <button onClick={handleClick} style={buttonStyle}>
          Spustelk
        </button>
      </Section>
      <Section>{text && <p>Sveiki atvyke!</p>}</Section>
    </div>
  );
};
export default Pages;
