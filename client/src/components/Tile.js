import React from 'react'

export default function Grid(props) {
    return <span className={`tile ${props.className}`} id={props.id} key={props.id}>{props.letter}</span>
}