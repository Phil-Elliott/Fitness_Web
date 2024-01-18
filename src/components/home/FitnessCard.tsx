import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

type FitnessCardProps = {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
};

const FitnessCard = ({ title, value, description, icon }: FitnessCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold">{value}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FitnessCard;
