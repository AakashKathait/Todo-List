import React from "react";
import EditForm from "./EditForm"
import { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import useToggle from "./hooks/useToggleState";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';


function Todo(props) {
    const {removeTodo, toggleTodo} = useContext(TodosContext)
    const [isEditing, toggle] = useToggle()
    return (
        <ListItem>
            {isEditing ? 
            <EditForm 
            id={props.id} 
            task={props.task} 
            toggle={toggle}/> :
            <>
                <Checkbox checked={props.completed} onClick={()=> toggleTodo(props.id)}/>
                <ListItemText 
                    style={{textDecoration: props.completed ? "line-through" : "none"}}
                >
                    {props.task}
                </ListItemText>
                <ListItemIcon>
                    <IconButton onClick={()=> {
                        removeTodo(props.id)
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