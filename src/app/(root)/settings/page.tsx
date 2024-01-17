import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CameraIcon } from "@/constants/icons";

const Settings = () => {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
      <div className="max-w-6xl w-full mx-auto grid gap-2">
        <h1 className="font-semibold text-3xl">Settings</h1>
      </div>
      <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto">
        <nav className="text-sm text-gray-500 grid gap-4 dark:text-gray-400">
          <Link
            className="font-semibold text-gray-900 dark:text-gray-50"
            href="#"
          >
            Personal Information
          </Link>
          <Link href="#">Notifications</Link>
          <Link href="#">Units of Measurement</Link>
          <Link href="#">Privacy Settings</Link>
          <Link href="#">Account Settings</Link>
        </nav>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image
                    alt="Profile Picture"
                    className="rounded-full border"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <Button className="rounded-full" variant="outline">
                    <CameraIcon className="w-6 h-6" />
                    <span className="sr-only">Change Profile Picture</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" placeholder="Enter your age" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight</Label>
                  <Input
                    id="weight"
                    placeholder="Enter your weight"
                    type="number"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t p-6">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Choose your notification preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox defaultChecked id="workout" />
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="workout"
                  >
                    Workout reminders
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox defaultChecked id="achievement" />
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="achievement"
                  >
                    Achievement updates
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox defaultChecked id="progress" />
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="progress"
                  >
                    Progress tracking
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t p-6">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Units of Measurement</CardTitle>
              <CardDescription>
                Select your preferred units of measurement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight-unit">Weight</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit of weight" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      <SelectItem value="lb">Pounds (lb)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height-unit">Height</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit of height" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cm">Centimeters (cm)</SelectItem>
                      <SelectItem value="ft">Feet (ft)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="distance-unit">Distance</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit of distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="km">Kilometers (km)</SelectItem>
                      <SelectItem value="mi">Miles (mi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t p-6">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Adjust your privacy preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox defaultChecked id="public" />
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="public"
                  >
                    Make my profile public
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t p-6">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Change Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter new password"
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Preferences</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Email Preferences" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Receive all emails</SelectItem>
                      <SelectItem value="important">
                        Only important emails
                      </SelectItem>
                      <SelectItem value="none">No emails</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t p-6">
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Settings;
