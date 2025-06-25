type EducationItemProps = {
  institution: string;
  degree: string;
  period: string;
};

export function EducationItem({ institution, degree, period }: EducationItemProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1 sm:gap-4">
      <div>
        <h3 className="font-semibold">{degree}</h3>
        <p className="text-primary">{institution}</p>
      </div>
      <p className="text-sm text-muted-foreground text-left sm:text-right shrink-0">{period}</p>
    </div>
  );
}
