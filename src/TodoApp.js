import React, {useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



function TodoApp() {

    const [todos, setTodos] = useState([])
    const addTodo = newTodo => {
        setTodos([...todos, {id: uuidv4(), task: newTodo, completed: false}])
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
            setTodos(updatedTodos);
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask} : todo
        );
            setTodos(updatedTodos);
    }
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
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
                    <TodoForm 
                    addTodo = {addTodo}
                    />
                    <TodoList 
                    todos={todos} 
                    removeTodo = {removeTodo}
                    toggleTodo = {toggleTodo}
                    editTodo = {editTodo}
                    />
                </Grid>
            </Grid>

        </Paper>
    )
}

export default TodoApp;