"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WorkoutDetails from "./WorkoutDetails";
import { exercisesSchema, workoutSchema } from "@/schemas";
import Exercise from "./exercise/Exercise";

const combinedFormSchema = z.object({
  workout: workoutSchema,
  exercises: z.array(exercisesSchema),
});

const Workout = () => {
  const form = useForm<z.infer<typeof combinedFormSchema>>({
    resolver: zodResolver(combinedFormSchema),
    defaultValues: {
      workout: {
        name: "",
        date: new Date().toISOString().slice(0, 10),
        notes: "",
      },
      exercises: [
        {
          name: "",
          description: "",
          sets: [
            {
              set_number: 1,
              repetitions: 0,
              weight: 0,
              weight_unit: "lbs",
              notes: "",
            },
          ],
        },
      ],
    },
  });

  const {
    fields: exerciseFields,
    append: appendExercise,
    remove: removeExercise,
  } = useFieldArray({
    control: form.control,
    name: "exercises",
  });

  const onSubmit = (values: z.infer<typeof combinedFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="space-y-2 pt-4">
            <WorkoutDetails form={form} />
            {exerciseFields.map((field, index) => (
              <Exercise
                key={field.id}
                form={form}
                index={index}
                onRemove={() => removeExercise(index)}
              />
            ))}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" type="button" variant="outline">
              Add Exercise
            </Button>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default Workout;

/*

change exercise component
- make it into a form
- gotta change the inputs
- button to add set
- maybe need a set component as well
- button to remove set
- button to remove exercise



when done
- clean up the form
- delete schemas you dont need
- hook up to backend
- might need to make a special handler for this

*/
