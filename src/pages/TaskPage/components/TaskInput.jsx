import { useState } from 'react';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import './TaskInput.css';

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCreateTask();
    }
  };

  const isInputFilled = taskName.trim() !== '';

  return (
    <div className="task-input-container">
      <Input
        className="input-box"
        value={taskName}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        onKeyDown={handleKeyPress}
      />
      <Button
        className={`create-button ${isInputFilled ? 'create-button--active' : ''}`}
        onClick={handleCreateTask}
      >
        Create
      </Button>
    </div>
  );
}

export { TaskInput };