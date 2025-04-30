import { useState } from 'react';
import './TaskPage.css';

function TaskPage() {
    // TODO: Render task page components
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTaskName) => {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    };

    return (
        <div>
          <h1 className="header">Task List</h1>
        </div>
    );
}

export { TaskPage };
