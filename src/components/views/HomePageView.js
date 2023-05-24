

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1>Final Project</h1>
      <Link to={'/employees'} > <button>All Employees</button> </Link>
      <Link to={'/tasks'} > <button>All Tasks</button> </Link>
      
    </div>
  );    
}




export default HomePageView;
