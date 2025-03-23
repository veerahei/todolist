import { Dayjs } from "dayjs";

export type Todo = {
    description: string;
    date: Dayjs | null;
    priority: string;
}

export type TodoTableProps = {
    todos: Todo[];
    deleteElement: (index: number) => void;
}