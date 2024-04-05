import { z } from "zod";

export const workoutCardioSchema = z.object({
  cardio_id: z.number(),
  workout_id: z.number(),
  order_index: z.number(),
});
