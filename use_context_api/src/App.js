import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import Team from './page/Team';
import Task from './page/Task';
import { InputProvider } from './context/InputContext';

function App() {
  return (
    <InputProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="team" element={<Team />} />
            <Route path="task" element={<Task />} />
          </Route>
        </Routes>
      </Router>
    </InputProvider>

  );
}

export default App;
