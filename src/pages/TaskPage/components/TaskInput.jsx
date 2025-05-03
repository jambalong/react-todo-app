import { useState } from 'react';
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

function TaskInput({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleCreateTask = () => {
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div>
      <Input
        value={taskName}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <Button onClick={handleCreateTask}>Create</Button>
    </div>
  );
}

export { TaskInput };