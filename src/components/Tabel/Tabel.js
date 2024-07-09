// TableComponent.js
import React from 'react';
import "../Tabel/Tabel.css"
const TableComponent = () => {
    return (
       <table>
            <tr>
                <th>sNo</th>
                <th>Name</th>
                <th>PhNumber</th>
                <th>mail</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Anil</td>
                <td>9390015040</td>
                <td>anilkumar.boddeti@gmail.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Chinnu</td>
                <td>8074549459</td>
                <td>chinnu.boddeti@gmail.com</td>
            </tr>
       </table>
    );
};

export default TableComponent;
