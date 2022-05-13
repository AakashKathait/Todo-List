import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useInputState("")
    return (
        <Paper style={{margin: '1rem 0', padding: "0.5rem 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
                }}
            >
                <TextField required fullWidth value={value} onChange={handleChange} id="standard-basic" label="Add a task" variant="standard"  />
            </form>
        </Paper>
    )
}

export default TodoForm;