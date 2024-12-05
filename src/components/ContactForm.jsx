import { useState } from "react"

const ContactForm = ({displayMsg}) => {
  const style = {
    form: {
        display: 'flex', 
        gap: '10px',
        justifyContent: 'center'
    }
  }
     
    const [formData, setFormData] = useState({
        name: '', 
        email: ''
    })
    // const formIsInvalid = Object.values(errors).some(Boolean); //Error handling for input
    const formHasMissingData = !Object.values(formData).every(Boolean);
    
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        // props.logContact(formData) //logs the contact to imaginary DB
        setFormData({name: '', email: ''})
        // console.log('Form was submitted');
        displayMsg()
    }

    return (
        <form style={style.form} onSubmit={handleSubmit}>
            <label htmlFor="nameInput">Name: </label>
            <input
                id='nameInput'
                name='name'
                value={formData.name}
                type='text'
                onChange={handleInputChange}
                />
            <label htmlFor="emailInput">Email: </label>
            <input
                id='emailInput'
                name='email'
                value={formData.email}
                type='text'
                onChange={handleInputChange}
                />
                <button disabled={formHasMissingData} type="submit">Submit</button>

        </form>
    )
}

export default ContactForm