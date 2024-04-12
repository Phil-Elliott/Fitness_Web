import React from "react";
import Header from "@/components/log-exercise/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Workout from "@/components/log-exercise/workout/Workout";

const LogExercise = () => {
  return (
    <main className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <Header />
        <Tabs defaultValue="workout">
          <TabsList className="grid w-full grid-cols-2 bg-black text-white">
            <TabsTrigger value="workout">Workout</TabsTrigger>
            <TabsTrigger value="cardio">Cardio</TabsTrigger>
          </TabsList>
          <TabsContent value="workout">
            <Workout />
          </TabsContent>
          <TabsContent value="cardio"></TabsContent>
        </Tabs>
        <form className="space-y-6"></form>
      </div>
    </main>
  );
};

export default LogExercise;

/*

<Exercise />
<Button className="w-full" type="button" variant={"outline"}>
            Add Exercise
          </Button>
          <Button className="w-full" type="submit">
            Save activity
          </Button>
Can I put a form in a tab and a card



Could do date to the left and then name of exercise to the right or opposite might actually look better


Need to make it drag and drop as well

Only difference with plan - no weight or reps but have times with exercise, cardio could probably be the same

Have tabs at the top to choose between workout, cardio
Could make a cardio component to list a cardio
Could also make an exercise component to list an exercise
Could have ability to add both in workout
Only use cardio if they want to log a cardio

- Date
Cardio component to include below
- Cardio Type
- Duration
- Distance
- Notes

- Date
- Workout name
- Notes
- Rest between exercises (optional)
- Add exercises and cardio

Exercise component to include below
- Exercise name
- Sets (should start at 1 then have option to add more sets as you fill out the form)
- Reps
- Weight - need option to choose lbs or kg or bw(body weight)
- Rest between sets (optional)
- Notes


Maybe just have buttons at the top to choose what type of exercise they want to log
Could start it out at today's date 

- log-exercise (provide user options to log an exercise that they already did or maybe they dont like the foucus mode and can log as they do it)
*/
