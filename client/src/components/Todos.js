import React, { useEffect, useState } from "react"

const Todos = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => (
                <h3 key={todo._id}>{todo.todo}</h3>
            ))}
        </>
    )
}

export default Todos