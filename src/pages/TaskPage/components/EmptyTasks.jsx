import EmptyTasksGraphic from '../../../assets/graphics/empty-tasks.svg';

function EmptyTasks() {
  return (
    <div className="empty-tasks-container">
      <img src={EmptyTasksGraphic} alt="No tasks" className="empty-tasks-graphic" />
      <p className="empty-tasks-text">No tasks yet!</p>
    </div>
  );
}

export { EmptyTasks };