import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { createBeer } from "../services/beers.service";

const BeerSchema = z.object({
  name: z.string().min(2, "trop court").max(15, "trop long"),
  degree: z.coerce.number(),
  producer: z.string(),
  description: z.string(),
});

type BeerForm = z.infer<typeof BeerSchema>;

const CreateBeer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BeerForm>({
    resolver: zodResolver(BeerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: BeerForm) => {
    console.log(data);

    createBeer(data).then((response) => {
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
        <button>submit</button>
      </form>
    </div>
  );
};

export default CreateBeer;
