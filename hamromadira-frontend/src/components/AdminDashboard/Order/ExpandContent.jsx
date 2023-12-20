import React from 'react'
import "./order.css"

const ExpandContent = () => {
  return (
    <div className="expand-content">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fanta</td>
            <td>4</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Fanta</td>
            <td>4</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Fanta</td>
            <td>4</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpandContent;
