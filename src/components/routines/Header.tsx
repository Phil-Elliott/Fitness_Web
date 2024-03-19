import { Button } from "@/components/ui/button";
import { SearchIcon, FilterIcon, PlusIcon } from "@/constants/icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="text-lg font-semibold sm:text-base mr-4">
        <h2 className="text-lg font-bold">Routines</h2>
      </div>
      <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
        {/* <Button className="rounded-full text-xl" size="icon" variant="ghost">
          <SearchIcon />
          <span className="sr-only">Search activitys</span>
        </Button>
        <Button className="rounded-full text-xl" size="icon" variant="ghost">
          <FilterIcon />
          <span className="sr-only">Filter activitys</span>
        </Button> */}
        <Link href="/create-new-activity">
          <Button className="rounded-full text-xl" size="icon" variant="ghost">
            <PlusIcon />
            <span className="sr-only">Add new activity</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
