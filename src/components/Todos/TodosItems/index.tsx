import React from 'react';
import classes from './styles.module.css'

const TodosItems: React.FC<{ text: string, id : string}> = (props) => {
    return (
        <li className={classes.item} key={props.id}>{props.text}</li>
    )
}

export default TodosItems