import { Task } from './Task';
import { EmptyTasks } from './EmptyTasks';

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    return <EmptyTasks />;
  }

  return (
    <ul>
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
  );
}

export { TaskList };