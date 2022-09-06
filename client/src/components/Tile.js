import React from 'react'

export default function Grid(props) {
    return <p className={`tile ${props.className}`} id={props.id} key={props.id}>{props.letter}</p>
}