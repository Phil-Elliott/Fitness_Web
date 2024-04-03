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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AddExerciseDropdownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full text-xl" size="icon" variant="ghost">
          <PlusIcon />
          <span className="sr-only">Add new activity</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PencilIcon className="mr-3 h-3 w-3" />
            <span>Log Exercise</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ClipboardListIcon className="mr-3 h-3 w-3" />
            <span>Plan Exercise</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RedoIcon className="mr-3 h-3 w-3" />
            <span>Repeat Exercise</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddExerciseDropdownButton;

/*
(exercises)
- exercises (provides all of the exercises, a calendar, and a search bar, and a button to do one of the below)
- exercise (displays a past exercise) - click on edit can take you to log-exercise
- active-exercise (used for planned, and repeated exercises - could provide timers and a special focus mode)
- plan-exercise (provide user options to create an exercise without logging it)
- log-exercise (provide user options to log an exercise that they already did or maybe they dont like the foucus mode and can log as they do it)
*/
