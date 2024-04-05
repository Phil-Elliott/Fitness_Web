"use client";

import * as React from "react";
import {
  PlusIcon,
  PencilIcon,
  ClipboardListIcon,
  RedoIcon,
} from "@/constants/icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const AddExerciseDropdownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full text-xl" size="icon" variant="ghost">
          <PlusIcon />
          <span className="sr-only">Add new activity</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/log-exercise">
          <DropdownMenuItem className="cursor-pointer">
            <PencilIcon className="mr-3 h-3 w-3" />
            <span>Log Exercise</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/plan-exercise">
          <DropdownMenuItem className="cursor-pointer">
            <ClipboardListIcon className="mr-3 h-3 w-3" />
            <span>Plan Exercise</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/active-exercise">
          <DropdownMenuItem className="cursor-pointer">
            <RedoIcon className="mr-3 h-3 w-3" />
            <span>Repeat Exercise</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddExerciseDropdownButton;
