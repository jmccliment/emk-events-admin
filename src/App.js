import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { ButtonAppBar } from './components/ButtonAppBar';
import { MenuDrawer } from './components/MenuDrawer';
import { Students } from './components/Students'
import { Belts } from './components/Belts';
import { UpdateStudent } from './components/UpdateStudent';


function App() {
  const [studentRefreshToken, setStudentRefreshToken] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if(studentRefreshToken) {
      setStudentRefreshToken(false);
    }
  }, [studentRefreshToken]);

  return (

    <div className="App">
      <ButtonAppBar openDrawer={() => setOpenDrawer(true)} />
      <MenuDrawer isOpen={openDrawer} closeDrawer={() => setOpenDrawer(false)} />
      <Router>
        <Students path="/students" refreshToken={studentRefreshToken}>
          <UpdateStudent path=":studentId" onSave={() => setStudentRefreshToken(true)} />
        </Students>
        <Belts path="/belts" />
      </Router>
      

    </div>
  );
}

export default App;
