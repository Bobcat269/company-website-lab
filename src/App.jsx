import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import History from './components/History.jsx'
import Staff from './components/Staff.jsx'
import ContactUs from './components/ContactUs.jsx'
import Footer from './components/Footer.jsx'

// import Footer from './components/Footer.jsx'


function App() {

const rangerInfo = {
  name: 'The Power Rangers',
  email: 'ThePowerRangers@gmail.com',
  address: '1234 Fake Place Beverly Hills, CA 90210',
  phone: '(123)867-5309',
  logoImg: 'src/assets/RangersLogo.webp',
  staff: [
    {name: 'Zordon', 
      position: 'CEO', 
      bio: `Zordon of Eltar was a wise galactic wizard who fought for the side of good against the forces of evil. He was the mentor to the Mighty Morphin Power Rangers, Zeo Rangers, and the first set of Turbo Rangers.`, 
      img: 'src/assets/Zordon.webp', 
      imgAlt: 'Zordon'},
    {name: 'Alpha 5', 
      position: 'Emploee Relations', 
      bio: `Alpha 5 is the fifth model of the Alpha Series who was put into operation to assist the Mighty Morphin Power Rangers and the Zeo Rangers. He briefly assisted the Turbo Rangers until his departure to Eltar.`, 
      img: 'src/assets/Alpha5.jpg', 
      imgAlt: 'asdfas'},
    {name: 'Jason Lee Scott', 
      position: 'Red Ranger', 
      bio: `As a Ranger, Jason's most defining character trait is his desire to be a good leader. When anything goes wrong, Jason is the first of the team to attempt to correct it. Whenever anyone is in danger, Jason is always the first to rally the other rangers to save them.`, 
      img: 'src/assets/RedRanger.webp', 
      imgAlt: 'asdfas'},
    {name: 'Tommy Oliver', 
      position: 'Green Ranger', 
      bio: `Initially, Tommy stays a loner. Though he joins the other Rangers in some activities, he often leaves to go to karate practice and other martial arts up to and including a karate commercial. As the battles increased, Tommy became closer to the team and formed friendships with them. He admired Zack's sense of fun, Trini's dedication, and Billy's intelligence. He also had a crush on Kimberly and they eventually started dating.`, 
      img: 'src/assets/GreenRanger.webp', 
      imgAlt: 'asdfas'},
    {name: 'Zack Taylor', 
      position: 'Black Ranger', 
      bio: `Zack Taylor was a student who attended Angel Grove High School. A very enthusiastic, upbeat person, he was very close with his friends Jason Lee Scott, Billy Cranston, Trini Kwan, and Kimberly Ann Hart. Zack is a prankster and particularly enjoys holidays such as Halloween, to scare his friends; in contrast he was greatly afraid of bugs and snakes, a fear he partially conquered when he fought the monster Spidertron. He enjoys dancing at every chance he gets, and even developed his own fighting style, Hip Hop Kido, which he occasionally taught. As a close friend to both Jason and Tommy, all three liked to work out together and practice their martial arts.`, 
      img: 'src/assets/BlackRanger.webp', 
      imgAlt: 'asdfas'},
    {name: 'Trini Kwan', 
      position: 'Yellow Ranger', 
      bio: `One of Trini's pet causes was the environment. She was always involved in drives to clean up the environment. Not only did Trini clean-up parks, but she also planted seeds for future trees as well. Trini was also involved in the Big Sister program which she did for her little cousin. Trini loves animals as well, trying to help strays find a home. Trini enjoyed life and made time to have fun.`, 
      img: 'src/assets/YellowRanger.webp', 
      imgAlt: 'asdfas'},
    {name: 'Billy Cranston', 
      position: 'Blue Ranger', 
      bio: `Until his departure, he was considered the brains of the Power Rangers team, creating many gadgets with which to solve problems that not even Zordon foresaw, and even invented the first team's wrist-worn communication devices `, 
      img: 'src/assets/BlueRanger.webp', 
      imgAlt: 'asdfas'},
    {name: 'Kimberly Ann Hart', 
      position: 'Pink Ranger', 
      bio: `All the members of the team possessed unique fighting styles. She used a blend of gymnastic maneuvers followed by punches, elbows, and kicks. She often used the environment around her as a springboard for her attacks. Kimberly was often called upon to finish off monsters with physically visible weaknesses such as the Terror Toad's second mouth once he had been weakened by losing his horn and the Snizzard’s golden apple on top of its head.`, 
      img: 'src/assets/PinkRanger.webp', 
      imgAlt: 'asdfas'},
  ],
  history: {
    plot: 
    [`The Mighty Morphin Power Rangers is a beloved American television series that premiered on August 28, 1993, and became a cultural phenomenon. Here’s a brief history:`,
    `A group of five teenagers—Jason, Kimberly, Zack, Trini, and Billy—are chosen by the wise alien Zordon and his robotic assistant Alpha 5 to become the Power Rangers and protect Earth from the evil sorceress Rita Repulsa.`,
    `The Rangers gain special suits, weapons, and access to colossal fighting machines called Zords, which can combine into a giant robot called the Megazord.`,
    `“It’s Morphin Time!” became an iconic line when the Rangers transformed into their powered-up forms.`,
    `Mighty Morphin Power Rangers introduced a unique blend of action, humor, and life lessons that made it a defining part of 1990s pop culture.`
    ],
    villains: [
      `Rita Repulsa: The primary antagonist in the first season, known for her dramatic and humorous behavior.`,
      `Lord Zedd: Introduced in Season 2, a more menacing villain who became a fan favorite.`

    ],
    realMission: 'Protect the world from evil'
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
    <Header rangerInfo={rangerInfo}/>
    <Navbar handleSection={handleSection}/>
    <main>
      {page === "Home"? <Home rangerInfo={rangerInfo}/>:''}
      {page === "History"? <History rangerInfo={rangerInfo}/>:''}
      {page === "Staff"? <Staff rangerInfo={rangerInfo}/>:''}
      {page === "ContactUs"? <ContactUs rangerInfo={rangerInfo}/>:''}
      </main>
    <Footer/>
    </>
  )
}

export default App
