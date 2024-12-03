export const url = "https://www.google.com";

type CardProps = {
  title?: string;
  content: string;
  children?: React.ReactNode;
};

const CardComponent: React.FC<CardProps> = ({ title, content, children }) => {
  console.log(title, content);
  return <div>{children}</div>;
};

export default CardComponent;
