// InputContext.js
import React, { createContext, useState } from 'react';

const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    teamName: '',
    teamAddress: '',
    taskSomething: '',
    taskAlso: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <InputContext.Provider value={{ inputs, handleInputChange }}>
      {children}
    </InputContext.Provider>
  );
};

export { InputContext, InputProvider };
