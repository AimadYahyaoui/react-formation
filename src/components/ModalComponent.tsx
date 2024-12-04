type ModalComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
};

const ModalComponent = ({
  isOpen,
  onClose,
  title,
  content,
}: ModalComponentProps) => {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
        width: "50vw",
        height: "50vh",
        backgroundColor: "white",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClose}>close</button>
    </div>
  );
};

export default ModalComponent;
