import React from "react";
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { ActivityIcon } from "@/constants/icons";

type activityInfoCardProps = {
  title: string;
  description: string;
};

const activityInfoCard = ({ title, description }: activityInfoCardProps) => {
  return (
    <Link
      href="/display-past-activity"
      className="hover:shadow-lg transition-shadow duration-200 ease-in-out"
    >
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <ActivityIcon className="w-8 h-8" />
          <div className="grid gap-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default activityInfoCard;

/*
To do
2) Fix link to individual activity once setup


Consider
1) Change play button
2) Chang icons based on type of activity
3) 


*/

{
  /* <Button className="ml-auto" size="icon" variant="ghost">
          <PlayIcon className="w-4 h-4" />
          <span className="sr-only">Start activity</span>
        </Button> */
}
