import { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
export const TodosContext = createContext()


export function TodosProvider(props) {
    const todoMethods = useTodoState([]);

    return (
        <TodosContext.Provider value={todoMethods}>
            {props.children}
        </TodosContext.Provider>
    )
}

