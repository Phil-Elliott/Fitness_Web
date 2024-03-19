import Header from "@/components/activity/header/Header";
import ActivityInfoCard from "@/components/activity/ActivityInfoCard";
import { auth } from "@clerk/nextjs";

async function getActivityData(token: string | null) {
  const res = await fetch("http://localhost:3000/api/v1/workout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.log("Failed to fetch activity data");
  }

  return res.json();
}

const Activity = async () => {
  const { getToken } = auth();
  const token = await getToken();
  const activityData = await getActivityData(token);

  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <span className="text-2xl font-bold">Continue</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {activities.map((activity) => (
            <ActivityInfoCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Upcoming</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {activities.map((activity) => (
            <ActivityInfoCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">Finished</span>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {activities.map((activity) => (
            <ActivityInfoCard
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

export default Activity;

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





*/
