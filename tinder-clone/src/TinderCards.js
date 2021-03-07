import React , {useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
function TinderCards() {
    const [people, setpeople] = useState([
        {
            name: "Yong",
            url: "https://www.teahub.io/photos/full/74-742948_beautiful-and-cute-girl-model-wallpaper-cute-pic.jpg"
        },
        {
            name: "Pingchifff",
            url: "https://wallpapercave.com/wp/wp7162703.jpg"
        },
        {
            name: "Yulftri",
            url: "https://wallpaperaccess.com/full/2737606.jpg"
        },
        {
            name: "Jeff Bezuz",
            url: "https://images.hdqwalls.com/wallpapers/little-cute-girl-4t.jpg"
        },
        {
            name: "Sania Mirza",
            url: "https://www.hdwallpapers.in/download/smiley_curly_hair_blue_eyes_cute_girl_in_blur_background_wearing_yellow_dress_hd_cute-HD.jpg"
        },
        
    ]) 


    const swiped = (direction , nameToDelete)=>{
        console.log('removing' + nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }

    return (
        <div className='tinderCards'>

            <div className="tinderCard__cardContainer">
                {people.map((person)=>(
                    <TinderCard 
                        className='swipe'
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div
                            style={{backgroundImage: "url("+person.url+")"}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                    
                ))}
            </div>

            
        </div>
    )
}

export default TinderCards
