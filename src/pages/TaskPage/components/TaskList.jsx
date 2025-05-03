import { Task } from './Task';

function TaskList({ tasks, onToggle, onDeleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
          />
        </li>
      ))}
    </ul>
  );
}

export { TaskList };