import Header from "@/components/exercises/header/Header";
import ExercisesInfoCard from "@/components/exercises/ExercisesInfoCard";
import { auth } from "@clerk/nextjs";

async function getExercisesData(token: string | null) {
  const res = await fetch("http://localhost:3000/api/v1/workout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.log("Failed to fetch exercises data");
  }

  return res.json();
}

const Exercises = async () => {
  const { getToken } = auth();
  const token = await getToken();
  const exercisesData = await getExercisesData(token);

  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <span className="text-2xl font-bold">Continue</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {activities.map((exercises) => (
            <ExercisesInfoCard
              key={exercises.id}
              title={exercises.title}
              description={exercises.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Upcoming</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {activities.map((exercises) => (
            <ExercisesInfoCard
              key={exercises.id}
              title={exercises.title}
              description={exercises.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Finished</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {activities.map((exercises) => (
            <ExercisesInfoCard
              key={exercises.id}
              title={exercises.title}
              description={exercises.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Exercises;

const activities = [
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

/*

(exercises)
- exercises (provides all of the exercises, a calendar, and a search bar, and a button to do one of the below)
- exercise (displays a past exercise) - click on edit can take you to log-exercise
- active-exercise (used for planned, and repeated exercises - could provide timers and a special focus mode)
- plan-exercise (provide user options to create an exercise without logging it)
- log-exercise (provide user options to log an exercise that they already did or maybe they dont like the foucus mode and can log as they do it)
*/
