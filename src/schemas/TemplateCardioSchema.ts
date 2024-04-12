import { z } from "zod";

export const templateCardioSchema = z.object({
  user_id: z.string(),
  routine_id: z.number().optional(),
  cardio_exercise_id: z.number().optional(),
  notes: z.string().optional(),
  template_cardio_status: z.enum(["active", "inactive"]),
  frequency: z.enum(["daily", "weekly", "biweekly", "monthly"]),
  duration_type: z.enum(["days", "weeks", "months"]),
  duration_value: z.number(),
});
