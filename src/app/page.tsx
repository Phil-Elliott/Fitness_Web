"use client";

import { Button } from "@/components/ui/button";
import { SignUpButton, useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-32">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Personal Trainer in your Pocket
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get fit with our easy-to-use fitness app. Track your activitys,
                plan your meals, and connect with others on their fitness
                journey.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <SignUpButton>
                <Button className="px-8">Get Started Today</Button>
              </SignUpButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// export default function Home() {
//   return (
//     <main className="flex flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10"></main>
//   );
// }

/*

Could make this into a customizable dashboard
  - User can choose what to display and also can order and drag and drop the cards and expand and minizmize the cards


might need to add this back in 
- min-h-[calc(100vh_-_theme(spacing.16))]

https://dribbble.com/shots/22652742-Banking-App-Landing-Page
*/

// const { getToken } = useAuth();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = await getToken({ template: "Testing" });
//         const response = await fetch("http://localhost:3000/api/v1/exercise", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();
//         console.log("result", result);
//         console.log("token", token);

//         // setData(result);
//         // setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         // setError(err);
//         // setLoading(false);
//       }
//     };

//     fetchData();
//   }, [getToken]);
