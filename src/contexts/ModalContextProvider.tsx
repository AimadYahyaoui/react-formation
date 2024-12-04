import { createContext, useState } from "react";
import ModalComponent from "../components/ModalComponent";

export const ModalContext = createContext({});

type ModalContextProviderProps = {
  children: React.ReactNode;
};

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (title: string) => {
    setTitle(title);
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <ModalComponent
        title={title}
        content="This is a modal"
        isOpen={true}
        onClose={() => {
          console.log("close");
        }}
      ></ModalComponent>
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
