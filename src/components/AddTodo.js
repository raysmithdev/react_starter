import React from 'react'

const AddTodo = ({ AddTodo }) => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()

            const userInput = event.target.userInput.value
        
        }}>
            <input type="text" name="userInput"/>
            <button>Add</button>
        </form>
    )
}

export default AddTodo