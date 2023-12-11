import React from "react";
import "./AddNew.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

function AddNew() {

  const [Description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactiontType, setTransactionType] = useState("expense");


  const transactionCollectionRef = collection(db, "transaction")

  const addTransaction = async (e) => {
    e.preventDefault();

    await addDoc(transactionCollectionRef, {
      description : "",
      transactionAmount : 0,
      transactiontType : "",
      createdAt : serverTimestamp()
    })
  };
  return (
    <div className="main-container">
      <form action="" className="expense-form" onSubmit={addTransaction}>
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

        <button type="submit" onClick={addTransaction}>add</button>
      </form>
    </div>
  );
}

export default AddNew;
