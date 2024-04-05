import { z } from "zod";

export const workoutExercisesSchema = z.object({
  workout_id: z.number(),
  exercise_id: z.number(),
  order_index: z.number(),
});
