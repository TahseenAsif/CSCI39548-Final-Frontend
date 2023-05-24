import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllEmployeesThunk, deleteEmployeeThunk } from "../../store/thunks";
import { AllEmployeesView } from "../views";
import { employee } from "../../store/reducers";


function AllEmployeesContainer() {
  const allEmployees = useSelector((state) => state.allEmployees);
  const dispatch = useDispatch();

  //replaces componentDidMount
  useEffect(() => {
    dispatch(fetchAllEmployeesThunk());
  }, [dispatch]);


  return <AllEmployeesView allEmployees={allEmployees}/>;
}

// Map state to props;
const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
    deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId)),
  };
};

export default connect(mapState, mapDispatch)(AllEmployeesContainer);

//export default AllEmployeesContainer;

