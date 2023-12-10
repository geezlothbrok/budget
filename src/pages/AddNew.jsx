import React from "react";
import "./AddNew.css";

function AddNew() {
  return (
    <div className="main-container">
      <form action="" className="expense-form">
        <h1 className="title">add transaction</h1>
        <section className="input-section">
          <label htmlFor="" className="description" id="">
            Item
          </label>
          <input type="text" placeholder="description" required/>

          <label htmlFor="" className="description" id="">
            Amount
          </label>
          <input type="number" placeholder="Amount" required className="input"/>
        </section>

        <section className="radio-section">
          <div>
            <label htmlFor="expense" className="description">
            Expense
          </label>
          <input type="radio" required id="expense" value="expense" />
          </div>
          
          <div>
            <label htmlFor="income" className="description">
            Income
          </label>
          <input type="radio" required id="income" value="income" />
          </div>
          
        </section>

        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default AddNew;
