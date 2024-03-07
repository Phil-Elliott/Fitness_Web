import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

import Exercise from "@/components/create-new-activity/Exercise";

const CreateNewActivity = () => {
  return (
    <main className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Create a New Activity
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Customize your activity by filling in the details below.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="activity-name">activity Name</Label>
            <Input
              id="activity-name"
              placeholder="Enter activity name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              className="min-h-[100px]"
              id="notes"
              placeholder="Enter activity notes"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rest between exercises">
                Rest between exercises
              </Label>
              <Input
                id="restBetweenExercises"
                placeholder="Enter rest time"
                required
                type="number"
              />
            </div>
          </div>

          <Exercise />

          <Button className="w-full" type="button" variant={"outline"}>
            Add Exercise
          </Button>
          <Button className="w-full" type="submit">
            Save activity
          </Button>
        </form>
      </div>
    </main>
  );
};

export default CreateNewActivity;

/*
components
- questions
  - Do you want to start now or schedule for later?
  - If later, what date and time or just later today?
  - Select the type of activity you would like to create (Strength, Cardio, or both)
  - Do you want to use a previous activity?

  move user to
  - form to fill out and plan
  - active activity





questions:
1) Would you like to copy a previous activity?
2) Select the type of activity you would like to create (Strength, Cardio, or both)
3) Is this for now or for a future date?
     - If for a future time or date, select the date
     - Display the form to fill out and plan
    //  - if for now, ask if they would like to use a timer and if yes then ask for prefered time

maybe just allow adding frequency and duration type and duration length to routines that use a activity template
Need to include start date somewhere
1) Might want to wrap in a form from shadcn
2) Use example from https://ui.shadcn.com/docs/components/calendar to add a calendar popover

1) Add a day and possibly a time
2) If routine - could add a day of the week
3) Do an add exercise button thats similar to the add activity button in routines


export const statusEnum = pgEnum("template_activity_status", [
  "active",
  "inactive",
]);

export const frequencyEnum = pgEnum("frequency", [
  "daily",
  "weekly",
  "biweekly",
  "monthly",
]);

export const durationTypeEnum = pgEnum("duration_type", [
  "days",
  "weeks",
  "months",
]);

export const templateactivitys = pgTable("templateactivitys", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 256 })
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  routine_id: integer("routine_id").references(() => routines.id, {
    onDelete: "cascade",
  }),
  name: varchar("name", { length: 256 }).notNull(),
  notes: text("notes"),
  rest_between_exercises: integer("rest_between_exercises"),
  template_activity_status: statusEnum("template_activity_status"),
  frequency: frequencyEnum("frequency"),
  duration_type: durationTypeEnum("duration_type"),
  duration_value: integer("duration"),
  created_at: timestamp("created_at").defaultNow(),
});

<div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Biweekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration type">Duration Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="days">Days</SelectItem>
                  <SelectItem value="weeks">Weeks</SelectItem>
                  <SelectItem value="months">Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration length">Duration Length</Label>
              <Input
                id="durationLength"
                placeholder="Enter duration length"
                required
                type="number"
              />
            </div>
          </div>


          <div className="space-y-2">
              <Label htmlFor="repeat">Repeat</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Repeat activity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="No">No</SelectItem>
                  <SelectItem value="Yes">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>

*/
