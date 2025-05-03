import { useEffect } from 'react';
import { GarbageCan } from '../../../components/GarbageCan';

function Task({ task, onToggle, onDelete }) {
  useEffect(() => {
    if (task.completed) {
      const timer = setTimeout(() => {
        onDelete(task.id);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [task.completed, onDelete, task.id]);

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
      <GarbageCan onClick={() => onDelete(task.id)} />
    </div>
  );
}

export { Task };