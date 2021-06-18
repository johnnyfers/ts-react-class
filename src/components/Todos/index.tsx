import React from "react"
import TodosItems from "./TodosItems"
import classes from './styles.module.css'

interface Todo {
    id: string,
    text: string
}

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={classes.todos}>
           {props.items.map((item)=> 
               <TodosItems id={item.id} text={item.text} />
           )}
        </ul>

    )
}

export default Todos