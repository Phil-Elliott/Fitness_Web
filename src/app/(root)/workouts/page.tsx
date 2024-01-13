import React from "react";
import ActivityCard from "@/components/workouts/ActivityCard";
import { Button } from "@/components/ui/button";
import {
  SearchIcon,
  FilterIcon,
  PlusIcon,
  CalendarIcon,
} from "@/constants/icons";

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

const Workouts = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center justify-between h-16 border-b">
        <div className="text-lg font-semibold sm:text-base mr-4">
          {/* <span className="ml-2">January 12, 2024</span> */}
          <span className="text-2xl font-bold">{`Today's Workouts`}</span>
        </div>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <Button className="rounded-full text-xl" size="icon" variant="ghost">
            <SearchIcon />
            <span className="sr-only">Search workouts</span>
          </Button>
          <Button className="rounded-full text-xl" size="icon" variant="ghost">
            <FilterIcon />
            <span className="sr-only">Filter workouts</span>
          </Button>
          <Button className="rounded-full text-xl" size="icon" variant="ghost">
            <CalendarIcon />
            <span className="sr-only">Open calendar</span>
          </Button>
          <Button className="rounded-full text-xl" size="icon" variant="ghost">
            <PlusIcon />
            <span className="sr-only">Add new workout</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {workouts.map((workout) => (
            <ActivityCard
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
