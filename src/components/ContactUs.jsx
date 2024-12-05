import { useState } from "react"
import ContactForm from "./ContactForm"

const ContactUs = ({companyInfo}) => {
    // use state to display message if user has entered a contact
    const [msg, setMsg] = useState(false)
    // function being passed down to allow ContactForm.jsx to setMsg
    const displayMsg = () => {
        setMsg(true)
    }
    return(
        <>
            <h1>Hello ContactUs</h1>
        <div>
            <h2>Name: {companyInfo.name}</h2>
            <h2>Email: {companyInfo.email}</h2>
            <h2>Address: {companyInfo.address}</h2>
            <h2>Phone: {companyInfo.phone}</h2>
        </div>
        <div>
        <ContactForm displayMsg={displayMsg}/>
        </div>
        {/* This is a ternary */}
        <p>{msg? 'Thank you for contacting us!': ''}</p>

    </>
    )
}

export default ContactUs