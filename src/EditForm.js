import React from "react";
import { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import useInputState from "./hooks/useInputState";

function EditForm(props) {
    const {editTodo} = useContext(TodosContext)
    const [value, handleChange, reset] = useInputState(props.task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(props.id, value)
            reset();
            props.toggle();
        }} 
        style={{display: "flex", flex: 1, marginLeft: "1rem"}}>
            <TextField 
            fullWidth 
            autoFocus
            required 
            onChange={handleChange} 
            value={value} 
            id="standard-basic" 
            variant="standard"  />
            <IconButton onClick={() => {
                    editTodo(props.id, value)
                    reset();
                    props.toggle();
                }
            }>
                <DoneIcon color="success"/>
            </IconButton>
        </form>
        )
}

export default EditForm;