import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const [inputs, setInputs] = useState({
        teamName: '',
        teamAddress: '',
        taskSomething: '',
        taskAlso: '',
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      console.log('name, value', name, value);
      setInputs((prevState) => ({
          ...prevState,
          [name]: value,
      }));
  };
  const resetInputs = () => {
    setInputs({
        teamName: '',
        teamAddress: '',
        taskSomething: '',
        taskAlso: '',
    });
};

    return (
        <InputContext.Provider value={{ inputs, handleInputChange, resetInputs }}>
            {children}
        </InputContext.Provider>
    );
};
