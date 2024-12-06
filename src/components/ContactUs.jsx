import { useState } from "react"
import ContactForm from "./ContactForm"

const ContactUs = ({rangerInfo}) => {
    // use state to display message if user has entered a contact
    const [msg, setMsg] = useState(false)
    // function being passed down to allow ContactForm.jsx to setMsg
    const displayMsg = () => {
        setMsg(true)
    }
    return(
        <>
            <h1>Hello Contact Us!</h1>
        <div>
            {/* <h2>Name: {rangerInfo.name}</h2> */}
            <h3>{rangerInfo.email}</h3>
            <h3>{rangerInfo.address}</h3>
            <h3>{rangerInfo.phone}</h3>
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