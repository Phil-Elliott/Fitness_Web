"use client";

import { useState } from "react";
import CalendarButton from "./CalendarButton";
import AddExerciseDropdownButton from "./AddExerciseDropdownButton";

const Header = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const today = new Date();
  const displayDate =
    date?.toDateString() === today.toDateString()
      ? `Today's Activity`
      : date?.toDateString();

  return (
    <header className="flex items-center justify-between">
      <div className="text-lg font-semibold sm:text-base mr-4">
        <h2 className="text-lg font-bold">{displayDate}</h2>
      </div>
      <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
        <CalendarButton date={date} setDate={setDate} />
        <AddExerciseDropdownButton />
      </div>
    </header>
  );
};

export default Header;

/*
import { Button } from "@/components/ui/button";

import Link from "next/link";
- Could use a dropdown for the plus icon
      - Could show options (log workout, start new workout, plan workout)
<Button className="rounded-full text-xl" size="icon" variant="ghost">
          <SearchIcon />
          <span className="sr-only">Search activitys</span>
        </Button>
        <Button className="rounded-full text-xl" size="icon" variant="ghost">
          <FilterIcon />
          <span className="sr-only">Filter activitys</span>
        </Button>

*/
