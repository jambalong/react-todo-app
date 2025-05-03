import { Task } from './Task';

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
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