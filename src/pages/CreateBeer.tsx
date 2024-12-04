import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { Beer, BeerSchema } from "../schemas/beer.schema";
import useBeersStore from "../store/useBeersStore";

const CreateBeer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Beer, "_id">>({
    resolver: zodResolver(BeerSchema),
  });
  const navigate = useNavigate();
  const { addBeer } = useBeersStore();

  const onSubmit = (data: Omit<Beer, "_id">) => {
    console.log(data);

    addBeer(data).then((response) => {
      console.log(response);
      navigate("/beers");
    });
  };

  return (
    <div>
      <h1>Create Beer</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <input placeholder="degree" {...register("degree")} />
        {errors.degree && <p>{errors.degree.message}</p>}
        <input placeholder="producer" {...register("producer")} />
        {errors.producer && <p>{errors.producer.message}</p>}
        <input placeholder="description" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
        <select {...register("country")}>
          <option value="France">France</option>
          <option value="Belgium">Belgium</option>
          <option value="Irlande">Irlande</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
};

export default CreateBeer;
