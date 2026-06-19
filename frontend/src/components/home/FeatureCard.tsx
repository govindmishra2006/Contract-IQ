interface FeatureCardProps {
  title: string;
  description: string;
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
