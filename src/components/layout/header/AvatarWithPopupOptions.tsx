"use client";

import { useState } from "react";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SettingsIcon, SignOutIcon } from "@/constants/icons";

const AvatarWithPopupOptions = () => {
  const [avatarOptionsOpen, setAvatarOptionsOpen] = useState(false);

  return (
    <div>
      <Popover open={avatarOptionsOpen} onOpenChange={setAvatarOptionsOpen}>
        <PopoverTrigger asChild>
          <Button
            className="flex items-center space-x-3"
            size="icon"
            variant="ghost"
          >
            <Avatar className="h-7 w-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <p className="text-base font-semibold">Phil</p>
            <span className="sr-only">Open user options</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="end">
          <div className="grid gap-0">
            <div className="flex gap-4 items-center p-4 pb-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Phillip Elliott</p>
                <p className="text-sm">phil-elliott</p>
              </div>
            </div>
            <div className="flex flex-col gap-0 text-sm">
              <Link
                href="/settings"
                className="flex items-center space-x-4 hover:bg-secondary py-3 pr-4 pl-7"
                onClick={() => setAvatarOptionsOpen(false)}
              >
                <SettingsIcon />
                <p>Manage account</p>
              </Link>
              <SignOutButton>
                <div
                  className="flex items-center space-x-4 hover:bg-secondary py-3 pr-4 pl-7 cursor-pointer"
                  onClick={() => setAvatarOptionsOpen(false)}
                >
                  <SignOutIcon />
                  <p>Sign out</p>
                </div>
              </SignOutButton>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AvatarWithPopupOptions;
