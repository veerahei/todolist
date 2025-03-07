import { useRef, useState } from "react";
import { Todo } from "./types";
//import TodoTable from "./TodoTable";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { ColDef } from "ag-grid-community";


ModuleRegistry.registerModules([AllCommunityModule]);

function TodoList() {

    const [todo, setTodo] = useState<Todo>({ description: '', date: '', priority: '' });
    const [todos, setTodos] = useState<Todo[]>([]);
    const gridRef = useRef<AgGridReact<Todo>>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [event.target.id]: event.target.value });

    }

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ description: "", date: "", priority: "" });
    }

    const deleteElement = () => {
        if (gridRef.current?.api.getSelectedNodes().length) {
            setTodos(
                todos.filter(
                    (_todo, index) => index !== Number(gridRef.current?.api.getSelectedNodes()[0].id)
                )
            )
        } else {
            alert("Select a row first!")
        }
    }

    const [columnDefs] = useState<ColDef<Todo>[]>([
        {
            field: "description",
            filter: true,
            sortable: false,
            floatingFilter: true
        },
        {
            field: "priority",
            filter: true,
            floatingFilter: true,
            cellStyle: (params) =>
                params.value === "High" ? { color: "red" } : { color: "black" },
        },
        {
            field: "date",
            filter: true,
            floatingFilter: true
        },
    ])

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
            <input
                placeholder="Priority"
                onChange={handleChange}
                value={todo.priority}
                id="priority"

            />
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteElement}>Delete</button>
            <div style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={todos}
                    columnDefs={columnDefs}
                    animateRows={true}
                    rowSelection="single"
                />
            </div>

            {/*Todotable commented out, for using AgGrid table */}
            {/*<TodoTable todos={todos} deleteElement={deleteElement} /> */}
        </>
    );
}

export default TodoList;