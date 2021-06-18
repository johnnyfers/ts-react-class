import React, { useRef } from "react"
import classes from './styles.module.css'

const NewTodo: React.FC<{onAddTodo: (id: string, text: string) => void}> = (props) => {
    const todoTextInput = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInput.current!.value

        if(enteredText.trim().length === 0){
            return;
        }

        props.onAddTodo( Math.random().toString(),enteredText)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInput} />
            <button>Add todo</button>
        </form>
    )
}

export default NewTodo