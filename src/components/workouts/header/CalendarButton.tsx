import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@/constants/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type CalendarButtonProps = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
};

const CalendarButton = ({ date, setDate }: CalendarButtonProps) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded-full text-xl" size="icon" variant="ghost">
            <CalendarIcon />
            <span className="sr-only">Open calendar</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => setDate(date)}
            disabled={(date) =>
              date > new Date() || date < new Date("2000-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CalendarButton;
