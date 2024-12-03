import { useRef, useState } from "react";

const CreateBeer = () => {
  const name = useRef();
  const degree = useRef();
  const producer = useRef();
  const description = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      name.current.value,
      degree.current.value,
      producer.current.value,
      description.current.value
    );
  };

  return (
    <div>
      <h1>Create Beer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" ref={name} />
        <input type="text" name="degree" placeholder="degree" ref={degree} />
        <input type="text" placeholder="producer" ref={producer} />
        <input type="text" placeholder="description" ref={description} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default CreateBeer;
