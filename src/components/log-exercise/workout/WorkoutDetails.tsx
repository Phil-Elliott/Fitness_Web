import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { NotesIcon, HideIcon } from "@/constants/icons";

const WorkoutDetails = ({ form }: any) => {
  const [showNotes, setShowNotes] = useState(true);

  function toggleNotes() {
    setShowNotes(!showNotes);
  }

  return (
    <>
      <div className="grid w-full grid-cols-5 items-start gap-4">
        <FormField
          control={form.control}
          name="workout.name"
          render={({ field }) => (
            <>
              <FormItem className="space-y-2 col-span-3">
                <FormLabel>Workout Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a name for your workout"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <div className="col-span-2 grid grid-cols-4 items-end gap-4 w-full">
          <FormField
            control={form.control}
            name="workout.date"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            onClick={() => toggleNotes()}
            className="col-span-1 w-10 h-10 p-2 "
          >
            {showNotes ? <HideIcon /> : <NotesIcon />}
          </Button>
        </div>
      </div>
      {showNotes && (
        <FormField
          control={form.control}
          name="workout.notes"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[100px]"
                  placeholder="Enter workout notes"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </>
  );
};

export default WorkoutDetails;
