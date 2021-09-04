import React from 'react'
import './Star.css'
function Star(props) {
    return (
        <div className="Star" style={{
            fontSize: props.size
        }}>
            ⭐
        </div>
    )
}

export default Star
