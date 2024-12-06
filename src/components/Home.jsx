import { useState } from "react"
import theme from '../assets/theme.mp3'


const Home = ({rangerInfo}) => {
    return(
    <>
        <div>
            <audio controls loop> {/* took wuto play out so it does not keep trying to play on refresh autoPlay */}
                <source src={theme} type="audio/mpeg"></source>
                Your browsers does not support the audio element.
            </audio>
        </div>
        <div>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/videoseries?si=MguxwYHaTOS5rw4k&amp;list=PLbt09tWqepBRQWLlWke5Quc425jpPc_p4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
            </iframe>
        </div>

     </>
    )
}

export default Home