import { FormEvent, useRef } from "react";

const CreateBeer = () => {
  const name = useRef<HTMLInputElement | null>(null);
  const degree = useRef<HTMLInputElement | null>(null);
  const producer = useRef<HTMLInputElement | null>(null);
  const description = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      name.current?.value,
      degree.current?.value,
      producer.current?.value,
      description.current?.value
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
