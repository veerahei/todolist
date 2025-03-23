import { TodoTableProps } from "./types";

function TodoTable(props: TodoTableProps) {
    return (
        <>
            <table>
                <thead >
                    <tr>
                        <td className="otsikko">Description</td>
                        <td className="otsikko">Date</td>
                        <td className="otsikko">Priority</td>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date ? (todo.date).format("YYYY-MM-DD") : ""}</td>
                            <td>{todo.priority}</td>
                            <td><button onClick={() => props.deleteElement(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoTable;