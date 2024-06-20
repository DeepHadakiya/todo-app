import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./Task.css";

export const Task = ({ id, title, tasks, setTasks }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    const deleteTask = (id) => {
        const updatedTodos = tasks.filter(todo => todo.id !== id);
        setTasks(updatedTodos);
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="task"
        >
            <input type="checkbox" className="checkbox" />
            {title}
            <button type="button" class="btn" onClick={() => deleteTask(id)}>Delete</button>

        </div>
    );
};
