import React, {useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { TodosProvider } from "./contexts/todos.context"

function TodoApp() {
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                marginBottom: "2em",
                height: "100%",
                backgroundColor: "#eeeeee"
            }}
            elevation={0}
        >
            <AppBar color="success" position="static">
                <Toolbar>
                    <Typography color="inherit">Todo List</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center">
                <Grid item xs={10} md={6} lg={4}>
                    <TodosProvider>
                        <TodoForm/>
                        <TodoList/>
                    </TodosProvider>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default TodoApp;