import { useParams } from "react-router";

const Demo = () => {
  const { id } = useParams<{
    id: string;
  }>();
  return (
    <div>
      <h1>Update</h1>
    </div>
  );
};

export default Demo;
