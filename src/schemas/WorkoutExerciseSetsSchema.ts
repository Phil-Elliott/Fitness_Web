import { z } from "zod";

export const workoutExerciseSetsSchema = z.object({
  workout_exercise_id: z.number(),
  set_number: z.number(),
  repetitions: z.number(),
  weight: z.number(),
  weight_unit: z.enum(["lbs", "kg"]),
  notes: z.string().optional(),
});
