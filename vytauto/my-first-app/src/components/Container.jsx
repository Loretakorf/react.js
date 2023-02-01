const containerStyle = {
    paddingLeft: '1em',
    paddingRight: '1em',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth:"960px",
}

const Container = ({children}) => {
   
    return <div style={containerStyle}>
        {children}
    </div>
};
export default Container;