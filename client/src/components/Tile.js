import React from 'react'

export default function Grid(props) {
    return <p className="tile" id={props.id} key={props.id}>{props.letter}</p>
}