import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const CreateNewWorkout = () => {
  return (
    <main className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Create a New Workout
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Customize your workout by filling in the details below.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="workout-name">Workout Name</Label>
            <Input
              id="workout-name"
              placeholder="Enter workout name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="description"
              placeholder="Enter workout description"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                placeholder="Enter duration"
                required
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="intensity">Intensity Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select intensity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="exercise-name">Exercise Name</Label>
            <Input
              id="exercise-name"
              placeholder="Enter exercise name"
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sets">Sets</Label>
              <Input
                id="sets"
                placeholder="Enter sets"
                required
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reps">Reps</Label>
              <Input
                id="reps"
                placeholder="Enter reps"
                required
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rest">Rest Time (seconds)</Label>
              <Input
                id="rest"
                placeholder="Enter rest time"
                required
                type="number"
              />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Save Workout
          </Button>
        </form>
      </div>
    </main>
  );
};

export default CreateNewWorkout;
