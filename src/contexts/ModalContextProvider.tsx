import { createContext, useState } from "react";
import ModalComponent from "../components/ModalComponent";

type ModalContextType = {
  openModal: (title: string, content: string) => void;
};

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

type ModalContextProviderProps = {
  children: React.ReactNode;
};

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (title: string, content: string) => {
    setTitle(title);
    setContent(content);
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <ModalComponent
        title={title}
        content={content}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      ></ModalComponent>
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
