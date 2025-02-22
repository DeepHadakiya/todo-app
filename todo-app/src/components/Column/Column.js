import {
    SortableContext,
    verticalListSortingStrategy,
  } from "@dnd-kit/sortable";
  
  import { Task } from "../Task/Task";
  
  import "./Column.css";
  
  export const Column = ({ tasks, setTasks }) => {
    return (
      <div className="column">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <Task key={task.id} id={task.id} title={task.title} tasks={tasks} setTasks={setTasks} />
          ))}
        </SortableContext>
      </div>
    );
  };
  