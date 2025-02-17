import React from 'react'
import '../style/createdoc.css'

function CreateDoc() {

  const getFormData = () => {
    return {
        documentId: document.getElementById("doc-id").value,
        sender: document.getElementById("sender").value,
        receiver: document.getElementById("receiver").value,
        transactionId: document.getElementById("transaction-id").value,
        amount: document.getElementById("amount").value,
        currency: document.getElementById("currency").value,
        status: document.getElementById("status").value,
        date: document.getElementById("date").value,
        notes: document.getElementById("notes").value
    };
}

  const submitter = async () => { 

    const userdata = getFormData();

    const response = await fetch("http://localhost:8000/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userdata)

    })

    const result = await response.json();
    console.log(result);

  }

  return (
    <form onSubmit={submitter}>

      <h2>Create Document</h2>
        
        <label for="doc-id">Document ID</label>
        <input type="text" id="doc-id" name="doc-id" readonly/>
        
        <label for="sender">Sender</label>
        <input type="text" id="sender" name="sender"/>
        
        <label for="receiver">Receiver</label>
        <input type="text" id="receiver" name="receiver" />
        
        <label for="transaction-id">Transaction ID</label>
        <input type="text" id="transaction-id" name="transaction-id" />
        
        <label for="amount">Amount</label>
        <input type="number" id="amount" name="amount"/>
        
        <label for="currency">Currency</label>
        <select id="currency" name="currency">
            <option >USD</option>
            <option >EUR</option>
            <option >GBP</option>
        </select>
        
        <label for="status">Status</label>
        <select id="status" name="status">
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
        </select>
        
        <label for="date">Date</label>
        <input type="date" id="date" name="date"/>
        
        <label for="notes">Additional Notes</label>
        <textarea id="notes" name="notes" rows="4"></textarea>
        
        <button type="submit">Submit</button>

    </form>
  )
}

export default CreateDoc