import { z } from "zod";

export const templateWorkoutsSchema = z.object({
  user_id: z.string(),
  routine_id: z.number().optional(),
  name: z.string(),
  notes: z.string().optional(),
  rest_between_exercises: z.number(),
  template_workout_status: z.enum(["active", "inactive"]),
  frequency: z.enum(["daily", "weekly", "biweekly", "monthly"]),
  duration_type: z.enum(["days", "weeks", "months"]),
  duration_value: z.number(),
});
