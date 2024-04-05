import { z } from "zod";

export const cardioSchema = z.object({
  user_id: z.string(),
  routine_id: z.number().optional(),
  cardio_exercise_id: z.number().optional(),
  duration: z.number(),
  distance: z.number(),
  date: z.date(),
  notes: z.string().optional(),
});
