import React from 'react'

export default function Grid(props) {
    return <p className="tile" id={props.id}>{props.word[0]}</p>
}