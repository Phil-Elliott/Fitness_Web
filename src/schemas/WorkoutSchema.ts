import { z } from "zod";
import { exercisesSchema } from "./ExercisesSchema";

export const workoutSchema = z.object({
  routine_id: z.number().optional(),
  name: z.string().min(3, {
    message: "Workout name must be at least 3 characters.",
  }),
  notes: z.string().optional(),
  date: z.string(), // z.date() doesn't work with react-hook-form - be sure to convert to date before sending to server
  exercises: z.array(exercisesSchema),
  // workout_status: z.enum(["not_started", "incomplete", "finished"]), //- can add on submit
});
