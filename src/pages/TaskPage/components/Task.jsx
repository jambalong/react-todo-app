import { Button } from '../../../components/Button';

function Task({ task, onToggle, onDelete }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </label>
      <Button onClick={() => onDelete(task.id)}>Delete</Button>
    </div>
  );
}

export { Task };