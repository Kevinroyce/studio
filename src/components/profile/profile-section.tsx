import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";

type ProfileSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function ProfileSection({ title, children, className }: ProfileSectionProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
