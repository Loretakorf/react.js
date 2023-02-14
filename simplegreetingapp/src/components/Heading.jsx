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
   
}
const linkStyle = {
    textDecoration: "none",
    color: "#eee",
    fontSize: '18px',
}
const Heading = () => {
  return (
    <header style={headingStyle}>
        <ul style={listStyle}>
            <li >
            <a href="#react" style={linkStyle}>About</a>
            </li>
            <li >
            <a href="#react" style={linkStyle}>React</a>
            </li>
            <li >
            <a href="#react" style={linkStyle}>Contacts</a>
            </li>
        </ul>
    </header>
  );
};
export default Heading;
