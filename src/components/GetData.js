import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';

function GetData() {

    const [transactions, setTransactions] = useState([]);

    const transactionCollectionRef = collection(db, "transaction");

   

    
    
  return (
    <div>
        hi
    </div>
  )
}

export default GetData