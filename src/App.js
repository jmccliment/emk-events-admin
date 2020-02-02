import React from 'react';
import { Router, Link } from '@reach/router';
import { ButtonAppBar } from './components/ButtonAppBar';
import { Students } from './components/Students'
import { Belts } from './components/Belts';
import { UpdateStudent } from './components/UpdateStudent';

function App() {
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
        <Students path="/students">
          <UpdateStudent path=":studentId" />
        </Students>
        <Belts path="/belts" />
      </Router>
      

    </div>
  );
}

export default App;
