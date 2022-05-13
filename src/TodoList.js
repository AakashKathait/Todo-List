import React from "react";
import Todo from "./Todo";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';



function TodoList(props) {
    if(props.todos.length > 0) {
        return (
            <Paper>
                <List>
                    {props.todos.map( (todo, index) => {
                        return (
                        <div key={todo.id}>
                            <Todo 
                            id={todo.id} 
                            task={todo.task} 
                            toggleTodo={props.toggleTodo}
                            removeTodo={props.removeTodo}
                            editTodo={props.editTodo} 
                            completed={todo.completed}
                            />
                            {index < props.todos.length - 1 && <Divider/>}
                        </div>
                        )

                    })  }
                </List>
            </Paper>
        ) 
    }
}

export default TodoList;