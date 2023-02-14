const containerStyle = {
  marginLeft: "auto",
  marginRight: "auto",
 
  maxWidth: "960px",
};

const Container = ({ children }) => {
  return <div style={containerStyle}>{children}</div>;
};
export default Container;
