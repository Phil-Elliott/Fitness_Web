import React from "react";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { ActivityIcon, PlayIcon } from "@/constants/icons";

type ActivityCardProps = {
  title: string;
  description: string;
};

const ActivityCard = ({ title, description }: ActivityCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <ActivityIcon className="w-8 h-8" />
        <div className="grid gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button className="ml-auto" size="icon" variant="ghost">
          <PlayIcon className="w-4 h-4" />
          <span className="sr-only">Start workout</span>
        </Button>
      </CardHeader>
    </Card>
  );
};

export default ActivityCard;
