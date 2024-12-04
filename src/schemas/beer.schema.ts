import { z } from "zod";

export const BeerSchema = z.object({
  _id: z.string(),
  name: z.string().min(2, "trop court").max(35, "trop long"),
  degree: z.coerce.number(),
  producer: z.string(),
  description: z.string(),
  country: z.enum(["France", "Belgium", "Irlande"]),
});

export type Beer = z.infer<typeof BeerSchema> & { _id: string };

/*export type Beer = {
  _id: string;
  name: string;
  degree: number;
  producer: string;
  description: string;
  country: string;
};
*/
