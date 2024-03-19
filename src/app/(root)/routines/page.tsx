import RoutineInfoCard from "@/components/routines/RoutineInfoCard";
import Header from "@/components/routines/Header";
import { auth } from "@clerk/nextjs";

async function getRoutineData(token: string | null) {
  const res = await fetch("http://localhost:3000/api/v1/routine", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.log("Failed to fetch activitys");
  }

  return res.json();
}

const Routines = async () => {
  const { getToken } = auth();
  const token = await getToken();
  const routinesData = await getRoutineData(token);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <span className="text-2xl font-bold">Current</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {activitys.map((activity) => (
            <RoutineInfoCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Past</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {activitys.map((activity) => (
            <RoutineInfoCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Routines;

/*

Need to add current boolean to the routine schema or maybe call it active

*/

const activitys = [
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
