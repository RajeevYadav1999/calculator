import React, { createContext, useState, useContext } from 'react';

const ActiveContext = createContext();

export const useActive = () => {
  return useContext(ActiveContext);
};

export const ActiveProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
