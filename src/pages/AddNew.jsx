import React from "react";
import "./AddNew.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";

function AddNew() {

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactiontType, setTransactionType] = useState("expense");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate()


  const transactionCollectionRef = collection(db, "transaction")

  const addTransaction = async (e) => {
    e.preventDefault();

    if (description === "") {
      toast.error("Add a purpose for this transaction");
      return false
    } else if (transactionAmount <= 0) {
      toast.error("Enter a valid amount for this transaction");
      return false
    } 
    

    await addDoc(transactionCollectionRef, {
      description,
      transactionAmount,
      transactiontType,
      createdAt : serverTimestamp()
    });
    setIsLoading(true)
    toast.success("Transaction was added");
    setIsLoading(false);
    navigate("/");
  }
  return (
    <>
    {isLoading && <Loader />}
    <div className="main-container">
      <form action="" className="expense-form" onSubmit={addTransaction}>
        <h1 className="title">add transaction</h1>
        <section className="input-section">
          <label htmlFor="" className="description" id="">
            Item
          </label>
          <input type="text" placeholder="description" required value={description} onChange={(e) => setDescription(e.target.value)}/>

          <label htmlFor="" className="description" id="">
            Amount
          </label>
          <input type="number" placeholder="Amount" required className="input" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)}/>
        </section>

        <section className="radio-section">
          <div>
            <label htmlFor="expense" className="description">
            Expense
          </label>
          <input type="radio" required id="expense" value="expense"  checked={transactiontType === "expense"} onChange={(e) => setTransactionType(e.target.value)}/>
          </div>
          
          <div>
            <label htmlFor="income" className="description">
            Income
          </label>
          <input type="radio" required id="income" value="income" checked={transactiontType === "income"} onChange={(e) => setTransactionType(e.target.value)}/>
          </div>
          
        </section>

        <button type="submit" onClick={addTransaction}>add</button>
      </form>
    </div>
    </>
  );
}

export default AddNew;
