import FitnessCard from "@/components/home/FitnessCard";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, FlagIcon } from "@/constants/icons";

async function getUserData(
  token: string | null,
  id: string | undefined,
  email: string | undefined,
  username: string | null | undefined
) {
  const res = await fetch("http://localhost:3000/api/v1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      clerk_user_id: id,
      email,
      display_name: username,
    }),
  });

  if (!res.ok) {
    console.log("Failed to fetch data");
  }

  console.log("Data fetched successfully");

  return res.json();
}

const Dashboard = async () => {
  const { getToken } = auth();
  const token = await getToken();
  const user = await currentUser();
  const userData = await getUserData(
    token,
    user?.id,
    user!.emailAddresses[0].emailAddress,
    user?.username
  );

  return (
    <div className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
      <section className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Your Fitness Journey Starts Here
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {`Let's get moving and achieve your fitness goals together!`}
        </p>
        <Link href="/create-new-activity">
          <Button variant="outline">Create a New activity</Button>
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
    </div>
  );
};

export default Dashboard;

/*
- cache data

- later you can maybe call from the create user to also fetch the dashboard data to be displayed

- maybe add the token to a cookie and then use it to fetch the data through the app
*/

const fitnessCardsData = [
  {
    title: "Current Plan",
    value: "Full Body activity",
    description: "4 weeks program",
    icon: <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
  },
  {
    title: "Next activity",
    value: "Back and Chest",
    description: "Wednesday",
    icon: <FlagIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
  },
  {
    title: "Recent activitys",
    value: "5",
    description: "activitys this week",
    icon: <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
  },
];
