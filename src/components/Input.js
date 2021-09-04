import React from 'react'
import './Input.css'

function Input() {
    return (
        <div className="Input">
            <input placeholder="Github Repo URL" className='Input__box' type="text" />
            <input type="button" value="Submit" />
        </div>
    )
}

export default Input
