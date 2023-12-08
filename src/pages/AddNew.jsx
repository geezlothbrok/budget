import React from 'react'

function AddNew() {
  return (
    <div>
      <form action="" className="expense-form">
        <h1 className="title">add transaction</h1>

        <label htmlFor="" className="description" id="">Item</label>
        <input type="text" placeholder='description' required />

        <label htmlFor="" className="description" id="">Amount</label>
        <input type="number" placeholder='Amount' required />

        <label htmlFor="expense" className="description" >Expense</label>
        <input type="radio" required id="expense" value="expense"/>

        <label htmlFor="income" className="description" >Income</label>
        <input type="radio" required id="income" value="income" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default AddNew