import { useEffect } from 'react';
import logo from './logo.svg';
import './style/App.css';
import { useState } from 'react';
import { Routes, Router, BrowserRouter, Route } from 'react-router';
import NoDocuments from './view/components/NoDocuments';
import Sidebar from './view/components/Sidebar';
import CreateDoc from './view/components/CreateDoc';

function App() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/documents').then(response => response.json()).then(users => setUserData(users))
  })
  if(userData.length < 1){
    return(
      
      <BrowserRouter>
          <Routes>
          <Route path='/' Component={NoDocuments}>
          
          </Route>
          <Route path='/createDoc' Component={CreateDoc}></Route>
        </Routes>
      </BrowserRouter>

      
      
    )
  } else {

    return(
      <div className="App">
      </div>
    )

  }

}
export default App;
