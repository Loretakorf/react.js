const sectionStyle = {
  marginBottom: "16px",
  textAlign: "center",
};

const Section = ({ children }) => {
  return <div style={sectionStyle}>{children}</div>;
};
export default Section;
