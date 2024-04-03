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

figure out what each link will take you to

*/
