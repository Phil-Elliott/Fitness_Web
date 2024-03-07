import React from "react";
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { ActivityIcon } from "@/constants/icons";

type RoutineInfoCardProps = {
  title: string;
  description: string;
};

const RoutineInfoCard = ({ title, description }: RoutineInfoCardProps) => {
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

export default RoutineInfoCard;
