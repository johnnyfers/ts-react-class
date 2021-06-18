import React from "react"
import TodosItems from "./TodosItems"
import classes from './styles.module.css'

interface Todo {
    id: string,
    text: string
}

const Todos: React.FC<{ items: Todo[]; onDeleteRow: (id: string)=> void }> = (props) => {

    return (
        <ul className={classes.todos}>
           {props.items.map((item)=> 
               <TodosItems onDeleteRow={props.onDeleteRow.bind(null, item.id)} id={item.id} text={item.text} />
           )}
        </ul>

    )
}

export default Todos