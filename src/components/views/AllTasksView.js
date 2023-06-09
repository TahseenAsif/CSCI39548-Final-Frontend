import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  console.log(props);

  let {tasks, deleteTask} = props;
  //tasks = [{id: 300, title: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h1>{description}</h1>
          </Link>
          <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        );
      }
      )}
      <div>
        <Link to={`/newtask`}>
          <button>Add New Task</button>
        </Link>
      </div>
      <Link to={`/`}>
        <button>Back to home</button>
      </Link>
    </div>
  );
};


export default AllTasksView;