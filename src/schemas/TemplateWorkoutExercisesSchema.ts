import { z } from "zod";

export const templateWorkoutExercisesSchema = z.object({
  template_workout_id: z.number(),
  exercise_id: z.number(),
  order_index: z.number(),
  sets: z.number(),
  rest_between_sets: z.number(),
});
