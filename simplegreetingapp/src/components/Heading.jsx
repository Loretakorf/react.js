import {Link} from 'react-router-dom'
const headingStyle = {
  backgroundColor: "#778d45",
  width: "100%",
  height: "80px",
};
const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "10px",
  listStyle: "none",
};
const linkStyle = {
  marginTop: "25px",
  color: "#ede6e6",
  fontSize: "18px",
};
const Heading = ({ pages }) => {
  return (
    <header style={headingStyle}>
      <div style={listStyle}>
        {pages?.map((page) => {
          return <Link key={page.to} to={page.to} style={linkStyle}>{page.label}</Link>
       
        })}
      </div>
    </header>
  );
};
export default Heading;
