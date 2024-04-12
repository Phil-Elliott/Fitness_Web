import { z } from "zod";

export const templateSchedulesSchema = z.object({
  template_workout_id: z.number().optional(),
  template_cardio_id: z.number().optional(),
  day_of_week: z.enum(["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"]),
  start_time: z.string(),
  end_time: z.string(),
});
