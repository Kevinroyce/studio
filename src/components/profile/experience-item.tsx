type ExperienceItemProps = {
  company: string;
  role: string;
  period?: string;
  description: string;
};

export function ExperienceItem({ company, role, period, description }: ExperienceItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[-1px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background"></div>
      <div className="absolute left-[5px] top-1.5 h-full w-px bg-border"></div>
      {period && <p className="text-sm text-muted-foreground mb-1">{period}</p>}
      <h3 className="font-semibold text-base">{role}</h3>
      <p className="text-sm text-primary font-medium">{company}</p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
