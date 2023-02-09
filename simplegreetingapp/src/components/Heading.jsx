const headingStyle = {
  backgroundColor: "#716d6d",
  width: "100%",
  height: "100px",
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
    <div style={headingStyle}>
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
    </div>
  );
};
export default Heading;
