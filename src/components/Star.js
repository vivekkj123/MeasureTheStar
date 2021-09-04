import React from 'react'
import './Star.css'
function Star(props) {
    let size = props.size
    let fontSize = size>1000?1000:size;
    let text = ''
    if(size===0){
        text = "Gain some stars before hitting me 🙅🏻‍♂"
    }else if(size>1000){
        text = "You made me happy.. You are a MONSTAR!!!!!!"
    }else if(0<size<1000){
        text = `Wow you have ${size} stars, make it a monstar !!!`
    }
    return (
        <div>
        
            <h3 className="congratulateText">{text}</h3>
        <div className="Star" style={{
            fontSize: fontSize 
        }}>
            &#x2B50;
        </div></div>
    )
}

export default Star
