import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserTable = ({ formDataList, onEdit, onDelete }) => {
  const handleEdit = (index) => {
    onEdit(index);
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h2>User Data</h2>
      <table className="table table-striped table-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{formData.firstName}</td>
              <td>{formData.lastName}</td>
              <td>{formData.mobileNo}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
