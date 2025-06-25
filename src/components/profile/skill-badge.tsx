import { Badge } from "@/components/ui/badge";

type SkillBadgeProps = {
  skill: string;
};

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="text-sm font-medium py-1 px-3 bg-primary/10 text-primary-foreground/80 hover:bg-primary/20 transition-colors cursor-default">
      {skill}
    </Badge>
  );
}
