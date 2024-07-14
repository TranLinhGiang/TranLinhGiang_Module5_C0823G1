// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/HomePage';
import Team from './page/Team';
import Task from './page/Task';
import { InputProvider } from './context/InputContext';

function App() {
  return (
    <InputProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Homepage />}>
            <Route path='team' element={<Team />}></Route>
            <Route path='task' element={<Task />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </InputProvider>
  );
}

export default App;
