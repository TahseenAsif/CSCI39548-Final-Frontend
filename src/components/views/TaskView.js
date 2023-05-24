import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <h1>{task.description}</h1>
      {task.employee ? <h2>{task.employee.firstname + " " + task.employee.lastname}</h2>: <h2>staff</h2>}
      <p>Priority: {task.priority}</p>
      <p>Status: {task.isComplete ? "Completed" : "Not Completed"}</p>
      <Link to={`/edittask/${task.id}`}><button>Edit task information</button></Link>
      <br/>
      <Link to={`/tasks`}><button>View all tasks</button></Link>
    </div>
  );

};

export default TaskView;