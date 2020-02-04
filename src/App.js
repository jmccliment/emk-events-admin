import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import { ButtonAppBar } from './components/ButtonAppBar';
import { Students } from './components/Students'
import { Belts } from './components/Belts';
import { UpdateStudent } from './components/UpdateStudent';


function App() {
  const [refreshToken, setRefreshToken] = useState(false);
  useEffect(() => {
    if(refreshToken) {
      setRefreshToken(false);
    }
  }, [refreshToken]);
  return (

    <div className="App">
      <ButtonAppBar />
      <nav>
        <ul>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/belts">Belts</Link></li>
        </ul>
      </nav>
      <Router>
        <Students path="/students" refreshToken={refreshToken}>
          <UpdateStudent path=":studentId" onSave={() => setRefreshToken(true)} />
        </Students>
        <Belts path="/belts" />
      </Router>
      

    </div>
  );
}

export default App;
