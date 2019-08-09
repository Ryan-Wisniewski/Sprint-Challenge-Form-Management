import React from 'react'

export default function Food(props){
    console.log(props)
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}