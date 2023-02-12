const containerStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: "20px",
    maxWidth:"960px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
}

const Container = ({children}) => {
    return <div style={containerStyle}>
        {children}
    </div>
};
export default Container;