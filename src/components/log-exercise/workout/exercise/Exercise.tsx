import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { NotesIcon, HideIcon } from "@/constants/icons";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Exercise = ({ form }: any) => {
  const [showDescription, setShowDescription] = useState(true);

  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <>
      <div className="flex items-end gap-4 w-full">
        <FormField
          control={form.control}
          name="exercises.name"
          render={({ field }) => (
            <>
              <FormItem className="space-y-2 w-full">
                <FormLabel>Exercise Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a name for your exercise"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button
          type="button"
          onClick={() => toggleDescription()}
          className="w-10 h-10 p-2"
        >
          {showDescription ? <HideIcon /> : <NotesIcon />}
        </Button>
      </div>
      {showDescription && (
        <FormField
          control={form.control}
          name="exercises.description"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[100px]"
                  placeholder="Enter exercise description"
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

export default Exercise;

/*
  name
  description (optional - and add hide button - could also have some to choose from later)
  sets (make into a component - first do it here - start with 1 set)
  add buttons



  change exercise component
- make it into a form
- gotta change the inputs
- button to add set
- maybe need a set component as well
- button to remove set
- button to remove exercise



<div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="exercise-name">Exercise Name</Label>
        <Input id="exercise-name" placeholder="Enter exercise name" required />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="sets">Sets</Label>
          <Input id="sets" placeholder="Enter sets" required type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reps">Reps</Label>
          <Input id="reps" placeholder="Enter reps" required type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rest">Rest Time (seconds)</Label>
          <Input
            id="rest"
            placeholder="Enter rest time"
            required
            type="number"
          />
        </div>
      </div>
    </div>
*/
