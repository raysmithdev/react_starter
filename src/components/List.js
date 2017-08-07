import React from 'react'

const List =  ({ todos }) => (
    <li>
        {todos.map((todo, index) =>(
            <li key={index}>{todo.text}</li>
        ))}
    </li>
)

export default List