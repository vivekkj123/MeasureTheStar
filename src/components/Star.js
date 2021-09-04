import React from 'react'
import './Star.css'
function Star(props) {
    let size = props.size
    let fontSize = size>500?500:size
    return (
        <div className="Star" style={{
            fontSize: fontSize 
        }}>
            &#x2B50;
        </div>
    )
}

export default Star
