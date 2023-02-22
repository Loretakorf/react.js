import { Link } from "react-router-dom"
import { routes } from "../constants/routes"
const ContactUsPage =() => {
    return (
        <>
        <h1>Contact us</h1>
        <Link to={routes.pages}></Link>
        </>)
    
}
export default ContactUsPage