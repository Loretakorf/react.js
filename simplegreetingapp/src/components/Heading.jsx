const headingStyle = {
  backgroundColor: "#716d6d",
  width: "100%",
  height: "80px",
  // position: 'fixed',
  // top: '0',
  // left: '0',
  // right: "0",
};
const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "10px",
  listStyle: "none",
};
const linkStyle = {
  
  color: "#131212",
  fontSize: "18px",
};
const Heading = ({ pages }) => {
  return (
    <header style={headingStyle}>
      <div style={listStyle}>
        {pages?.map((page) => {
          return (
            <button onClick={page.onClick} key={page.label} style={linkStyle}>
              {page.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
export default Heading;
