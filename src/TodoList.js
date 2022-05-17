import React from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';



function TodoList() {
    const {todos} = useContext(TodosContext)
    if(todos.length > 0) {
        return (
            <Paper>
                <List>
                    {todos.map( (todo, index) => {
                        return (
                        <div key={todo.id}>
                            <Todo 
                            id={todo.id} 
                            task={todo.task} 
                            completed={todo.completed}
                            />
                            {index < todos.length - 1 && <Divider/>}
                        </div>
                        )

                    })  }
                </List>
            </Paper>
        ) 
    }
}

export default TodoList;