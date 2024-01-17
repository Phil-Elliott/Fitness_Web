import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";

const CreateNewRoutine = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        Create New Routine
      </h1>
      <Card className="w-full py-4">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="routine-name">Routine Name</Label>
            <Input id="routine-name" placeholder="Enter routine name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="routine-description">Routine Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="routine-description"
              placeholder="Enter routine description"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Workouts</h2>
            <div className="space-y-4">
              <Button className="w-full" variant="outline">
                Add a Workout
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Save Routine</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateNewRoutine;

/*

Need to add a day and possibly a time

*/
