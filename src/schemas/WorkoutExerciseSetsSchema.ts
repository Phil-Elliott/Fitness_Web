import { z } from "zod";

export const workoutExerciseSetsSchema = z.object({
  set_number: z.number(),
  repetitions: z.number(),
  weight: z.number(),
  weight_unit: z.enum(["lbs", "kg"]), // need to add body weight as an option
  notes: z.string().optional(),
});
