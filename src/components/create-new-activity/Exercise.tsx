import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Exercise = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="exercise-name">Exercise Name</Label>
        <Input id="exercise-name" placeholder="Enter exercise name" required />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="sets">Sets</Label>
          <Input id="sets" placeholder="Enter sets" required type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reps">Reps</Label>
          <Input id="reps" placeholder="Enter reps" required type="number" />
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
    </div>
  );
};

export default Exercise;
