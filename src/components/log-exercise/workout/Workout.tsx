"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Label } from "@/components/ui/label";
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
import { workoutSchema } from "@/schemas/WorkoutSchema";

const Workout = () => {
  const form = useForm({
    resolver: zodResolver(workoutSchema),
    defaultValues: {
      name: "",
      notes: "",
      date: new Date().toISOString().slice(0, 10),
    },
  });

  function onSubmit(values: z.infer<typeof workoutSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="space-y-2 pt-4">
            <WorkoutDetails form={form} />
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default Workout;
