import { Button } from "@/components/ui/button";
import {
  SearchIcon,
  FilterIcon,
  PlusIcon,
  CalendarIcon,
} from "@/constants/icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="text-lg font-semibold sm:text-base mr-4">
        <h2 className="text-lg font-bold">January 12, 2024</h2>
        {/* <span className="text-2xl font-bold">{`Today's Workouts`}</span> */}
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
        <Link href="/create-new-workout">
          <Button className="rounded-full text-xl" size="icon" variant="ghost">
            <PlusIcon />
            <span className="sr-only">Add new workout</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
