import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Description: {description}</h3>
    </Link>
    <p>Amount: {amount}</p>
    <p>Date: {createdAt}</p>
  </div>
);

export default ExpenseListItem;
