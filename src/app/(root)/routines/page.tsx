import React from "react";
import RoutineInfoCard from "@/components/routines/RoutineInfoCard";
import Header from "@/components/routines/Header";

const workouts = [
  {
    id: 1,
    title: "Cardio Blast",
    description: "30 minutes, 200 calories",
  },
  {
    id: 2,
    title: "Strength Training",
    description: "45 minutes, 300 calories",
  },
  {
    id: 3,
    title: "Yoga Flow",
    description: "60 minutes, 150 calories",
  },
];

const Routines = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <span className="text-2xl font-bold">Current</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {workouts.map((workout) => (
            <RoutineInfoCard
              key={workout.id}
              title={workout.title}
              description={workout.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Past</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {workouts.map((workout) => (
            <RoutineInfoCard
              key={workout.id}
              title={workout.title}
              description={workout.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Routines;
