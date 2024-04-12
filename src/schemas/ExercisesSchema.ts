import { z } from "zod";
import { workoutExerciseSetsSchema } from "./WorkoutExerciseSetsSchema";

export const exercisesSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  sets: z.array(workoutExerciseSetsSchema),
});
