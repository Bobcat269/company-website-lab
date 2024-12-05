import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import History from './components/History.jsx'
import Staff from './components/Staff.jsx'
import ContactUs from './components/ContactUs.jsx'
import Footer from './components/Footer.jsx'

// import Footer from './components/Footer.jsx'


function App() {

const companyInfo = {
  name: 'OurCompany',
  email: 'Ourcompany@gmail.com',
  address: '1234 Fake Place Beverly Hills, CA 90210',
  phone: '(123)867-5309',
  staff: [
    {name: 'placeholder1', position: 'lorem', bio: 'blurb', img: 'link', imgAlt: 'asdfas'},
    {name: 'placeholder2', position: 'lorem', bio: 'blurb', img: 'link', imgAlt: 'asdfas'},
    {name: 'placeholder3', position: 'lorem', bio: 'blurb', img: 'link', imgAlt: 'asdfas'},
    {name: 'placeholder4', position: 'lorem', bio: 'blurb', img: 'link', imgAlt: 'asdfas'},
    {name: 'placeholder5', position: 'lorem', bio: 'blurb', img: 'link', imgAlt: 'asdfas'}
  ],
  history: {
    mission: 'save the kids',
    realMission: 'get the shareholders rich'
  }

}


  //use state
  const [page, setPage] = useState('Home')

  //handler
  const handleSection = (event) => {
    setPage(event.target.value)
  }

  return (
    <>
    <Navbar handleSection={handleSection}/>
    <main>
      {page === "Home"? <Home companyInfo={companyInfo}/>:''}
      {page === "History"? <History companyInfo={companyInfo}/>:''}
      {page === "Staff"? <Staff companyInfo={companyInfo}/>:''}
      {page === "ContactUs"? <ContactUs companyInfo={companyInfo}/>:''}
      </main>
    <Footer/>
    </>
  )
}

export default App
