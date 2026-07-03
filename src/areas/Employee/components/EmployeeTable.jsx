import React, { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete Employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter Employee Name");

    if (!newName) return;

    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? { ...emp, name: newName }
          : emp
      )
    );
  };

  return (
    <div className="container mt-4">

      <h2>Employee List</h2>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.username}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.website}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(emp.id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;