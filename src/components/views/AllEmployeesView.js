import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  console.log(props);
  let {employees, deleteEmployee} = props;
  
  if (!props.employees.length) {
    return (
      <div>
          <div>There are no employees. </div>
          <Link to={`/newemployee`}>
            <button>Add New Employee</button>
          </Link>
      </div>
    );
  }

  return (
    <div>
      {props.employees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{employee.department}</p>
          <button onClick={() => deleteEmployee(employee.id)}>X</button>
        </div>
        );

      })}
      <div>
        <Link to={`/newemployee`}>
          <button>Add New Employee</button>
        </Link>
      </div>
      <Link to={`/`}>
        <button>Back to home</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default AllEmployeesView;