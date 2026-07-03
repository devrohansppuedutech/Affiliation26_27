import React, { useState } from "react";

function EmployeeTable() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ketan Gundre",
      department: "IT",
      designation: "Software Developer",
      salary: 35000,
    },
    {
      id: 2,
      name: "Rohan Patil",
      department: "HR",
      designation: "HR Executive",
      salary: 30000,
    },
    {
      id: 3,
      name: "Rahul Sharma",
      department: "Accounts",
      designation: "Accountant",
      salary: 40000,
    },
    {
      id: 4,
      name: "Sneha Joshi",
      department: "Sales",
      designation: "Sales Executive",
      salary: 28000,
    },
  ]);

  // Edit Employee
  const handleEdit = (id) => {
    const newName = prompt("Enter Employee Name:");

    if (!newName) return;

    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, name: newName } : emp
      )
    );
  };

  // Delete Employee
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee List</h2>

      <table className="table table-bordered table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th width="180">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>₹ {emp.salary}</td>

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

          {employees.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No Employee Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;