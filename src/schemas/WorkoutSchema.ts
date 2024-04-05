import { z } from "zod";

export const workoutSchema = z.object({
  // user_id: z.string(),
  routine_id: z.number().optional(),
  name: z.string(),
  notes: z.string().optional(),
  date: z.string(), // z.date() doesn't work with react-hook-form - be sure to convert to date before sending to server
  // workout_status: z.enum(["not_started", "incomplete", "finished"]), //- can add on submit
});
