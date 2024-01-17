import React from "react";
import WorkoutInfoCard from "@/components/workouts/WorkoutInfoCard";
import Header from "@/components/workouts/header/Header";

const workouts = [
  {
    id: 1,
    title: "Cardio Blast",
    description: "30 minutes",
  },
  {
    id: 2,
    title: "Strength Training",
    description: "45 minutes",
  },
  {
    id: 3,
    title: "Yoga Flow",
    description: "60 minutes",
  },
];

const Workouts = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <span className="text-2xl font-bold">Continue Workout</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {workouts.map((workout) => (
            <WorkoutInfoCard
              key={workout.id}
              title={workout.title}
              description={workout.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Upcoming Workouts</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {workouts.map((workout) => (
            <WorkoutInfoCard
              key={workout.id}
              title={workout.title}
              description={workout.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Activity</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {workouts.map((workout) => (
            <WorkoutInfoCard
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

export default Workouts;

/*





*/
