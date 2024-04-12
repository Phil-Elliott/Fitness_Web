import { z } from "zod";

export const routineSchema = z.object({
  user_id: z.string(),
  name: z.string(),
  notes: z.string().optional(),
  frequency: z.enum(["daily", "weekly", "biweekly", "monthly"]),
  start_date: z.date(),
  end_date: z.date().optional(),
});
