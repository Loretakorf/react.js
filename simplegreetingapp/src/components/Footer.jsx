const footerStyle = {
    backgroundColor: "#716d6d",
    width: "100%",
    height: "100px",
    display: 'flex',
    alignItems: 'center',
    color: "white",
    justifyContent: 'center'
}

const Footer = () => {
    return (
      <div style={footerStyle}>
        <span>© 2023 by Your Name. Proudly created with react.</span>
      </div>
    );
  };
  export default Footer;