import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const WorkoutDetails = ({ form }: any) => {
  return (
    <>
      <div className="grid w-full grid-cols-3 items-center gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <>
              <FormItem className="space-y-2 col-span-2">
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
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="notes"
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
    </>
  );
};

export default WorkoutDetails;
