import { Task } from './Task';
import { EmptyTasks } from './EmptyTasks';
import './TaskList.css';

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    return <EmptyTasks />;
  }

  return (
    <div className="task-list-container">
       <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <Task
              task={task}
              onToggle={onToggleComplete}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { TaskList };