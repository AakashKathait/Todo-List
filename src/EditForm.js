import React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import useInputState from "./hooks/useInputState";

function EditForm(props) {
    const [value, handleChange, reset] = useInputState(props.task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.editTodo(props.id, value)
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
                    props.editTodo(props.id, value)
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