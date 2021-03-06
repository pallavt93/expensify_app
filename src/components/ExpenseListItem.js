import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt })=>(
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} {createdAt}</p>    
    </div>
);

export default ExpenseListItem;

// import React from 'react';
// import { removeExpense } from '../actions/expenses';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// const ExpenseListItem = ({ dispatch, id, description, amount, createdAt })=>(
//     <div>
//         <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
//         <p>{amount} {createdAt}</p>
//         <button onClick = {()=>{ 
//             dispatch(removeExpense({ id }));
//         }}>remove</button>
//     </div>
// );

// export default connect()(ExpenseListItem);;