import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoDocuments() {

    const nav = useNavigate();

    const clicker = () => {
        nav("/createDoc")
    }

  return (
    <div>
        <h3>There are currently no documents created</h3>
        <button onClick={clicker}>Click here to create a new document!</button>
    </div>
  )
}

export default NoDocuments