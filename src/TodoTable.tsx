import { TodoTableProps } from "./types";

function TodoTable(props: TodoTableProps) {
    return (
        <>
            <table>
                <thead >
                    <tr>
                        <td className="otsikko">Description</td>
                        <td className="otsikko">Date</td>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() => props.deleteElement(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoTable;