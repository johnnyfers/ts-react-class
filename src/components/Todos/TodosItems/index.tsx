import React from 'react';
import classes from './styles.module.css'

const TodosItems: React.FC<
    {
        text: string;
        id: string;
        onDeleteRow: () => void
    }> = (props) => {
        return (
            <li onClick={props.onDeleteRow} className={classes.item} key={props.id}>{props.text}</li>
        )
    }

export default TodosItems