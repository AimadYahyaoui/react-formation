import { useState } from "react";

const CreateBeer = () => {
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [producer, setProducer] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, degree, producer, description);
  };

  return (
    <div>
      <h1>Create Beer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="degree"
          placeholder="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <input
          type="text"
          placeholder="producer"
          value={producer}
          name="producer"
          onChange={(e) => setProducer(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default CreateBeer;
