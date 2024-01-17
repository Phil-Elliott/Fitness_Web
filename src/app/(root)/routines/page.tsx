import React from "react";
import ActivityCard from "@/components/workouts/ActivityCard";
import { Button } from "@/components/ui/button";
import { SearchIcon, FilterIcon, PlusIcon } from "@/constants/icons";
import Link from "next/link";

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
      <header className="flex items-center justify-between">
        <div className="text-lg font-semibold sm:text-base mr-4">
          <span className="text-lg font-bold">Routines</span>
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
          <Link href="/create-new-routine">
            <Button
              className="rounded-full text-xl"
              size="icon"
              variant="ghost"
            >
              <PlusIcon />
              <span className="sr-only">Add new workout</span>
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <span className="text-2xl font-bold">Current</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {workouts.map((workout) => (
            <ActivityCard
              key={workout.id}
              title={workout.title}
              description={workout.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Past</span>
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

export default Routines;
