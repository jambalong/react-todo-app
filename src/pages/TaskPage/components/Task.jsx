import { Button } from '../../../components/Button';

function Task({ task, onToggle, onDelete }) {
  return (
    <div>
      <input
        type="checkbox"
      />
      <label>
        {task.name}
      </label>
      <Button>Delete</Button>
    </div>
  );
}

export { Task };