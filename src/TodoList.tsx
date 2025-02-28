import { useState } from "react";
import { Todo } from "./types";
import TodoTable from "./TodoTable";


function TodoList() {

    const [todo, setTodo] = useState<Todo>({ description: '', date: '' });
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [event.target.id]: event.target.value });

    }

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ description: "", date: "" });
    }

    const deleteElement = (index: number) => {
        setTodos(todos.filter((todo, id) => id !== index))
    }

    return (
        <>
            <input
                placeholder="Description"
                onChange={handleChange}
                value={todo.description}
                id="description"
            />
            <input
                placeholder="Date"
                onChange={handleChange}
                value={todo.date}
                id="date"
            />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteElement={deleteElement} />
        </>
    );
}

export default TodoList;