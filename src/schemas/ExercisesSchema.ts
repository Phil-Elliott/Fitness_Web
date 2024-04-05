import { z } from "zod";

export const exercisesSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});
