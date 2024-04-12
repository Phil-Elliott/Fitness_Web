import { z } from "zod";

export const templateWorkoutCardioSchema = z.object({
  template_workout_id: z.number(),
  cardio_exercise_id: z.number(),
  duration: z.number(),
  distance: z.number(),
  order_index: z.number(),
});
