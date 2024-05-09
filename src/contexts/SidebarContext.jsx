/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // sidebar State
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
