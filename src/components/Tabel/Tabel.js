// TableComponent.js
import React from 'react';

const TableComponent = ({ formDataList }) => {
    return (
        <div className="container">
            <h2>Submitted Data:</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {formDataList.map((formData, index) => (
                        <tr key={index}>
                            <td>{formData.firstName}</td>
                            <td>{formData.lastName}</td>
                            <td>{formData.email}</td>
                            <td>{formData.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
