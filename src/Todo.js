import React from "react";
import EditForm from "./EditForm"
import './todo.css'
import useToggle from "./hooks/useToggleState";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';


function Todo(props) {
    const [isEditing, toggle] = useToggle()
    return (
        <ListItem>
            {isEditing ? 
            <EditForm 
            id={props.id} 
            task={props.task} 
            toggle={toggle} 
            editTodo={props.editTodo}/> :
            <>
                <Checkbox checked={props.completed} onClick={()=> props.toggleTodo(props.id)}/>
                <ListItemText 
                    style={{textDecoration: props.completed ? "line-through" : "none"}}
                >
                    {props.task}
                </ListItemText>
                <ListItemIcon>
                    <IconButton onClick={()=> {
                        props.removeTodo(props.id)
                    }}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton onClick={() => {
                        toggle();
                    }}>
                        <EditIcon/>
                    </IconButton>
                </ListItemIcon>
                </>
            }
        </ListItem>

    )
}

export default Todo;