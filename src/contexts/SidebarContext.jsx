/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarProvider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarProvider>
  );
};

export default SidebarProvider;
