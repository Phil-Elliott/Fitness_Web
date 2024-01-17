import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { CalendarIcon, ClockIcon, FlagIcon } from "@/constants/icons";
import Link from "next/link";
import FitnessCard from "@/components/home/FitnessCard";

const fitnessCardsData = [
  {
    title: "Current Plan",
    value: "Full Body Workout",
    description: "4 weeks program",
    icon: <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
  },
  {
    title: "Next Workout",
    value: "Back and Chest",
    description: "Wednesday",
    icon: <FlagIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
  },
  {
    title: "Recent Workouts",
    value: "5",
    description: "Workouts this week",
    icon: <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
      <section className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Your Fitness Journey Starts Here
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {`Let's get moving and achieve your fitness goals together!`}
        </p>
        <Link href="/create-new-workout">
          <Button variant="outline">Create a New Workout</Button>
        </Link>
      </section>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {fitnessCardsData.map(({ title, value, description, icon }, i) => (
          <FitnessCard
            key={i}
            title={title}
            value={value}
            description={description}
            icon={icon}
          />
        ))}
      </section>
    </main>
  );
}

/*

Could make this into a customizable dashboard
  - User can choose what to display and also can order and drag and drop the cards and expand and minizmize the cards

*/
