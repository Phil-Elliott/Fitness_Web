import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import { CiClock1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";

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
        <Button variant="outline">Start a New Workout</Button>
      </section>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Recent Workouts
            </CardTitle>
            <CiClock1 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">5</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Workouts this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
            <CiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Full Body Workout</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              4 weeks program
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Fitness Goals</CardTitle>
            <CiFlag1 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Lose 5kg</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              60% progress
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
