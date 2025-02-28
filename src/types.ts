export type Todo = {
    description: string; 
    date: string; 
}

export type TodoTableProps = {
    todos: Todo[];
    deleteElement: (index: number) => void; 
}