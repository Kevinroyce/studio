import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EducationItem } from "@/components/profile/education-item";
import { ExperienceItem } from "@/components/profile/experience-item";
import { ProfileFooter } from "@/components/profile/profile-footer";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileSection } from "@/components/profile/profile-section";
import { SkillBadge } from "@/components/profile/skill-badge";

const profileData = {
  name: "Alex Doe",
  title: "Senior Software Engineer",
  avatarUrl: "https://placehold.co/128x128.png",
  avatarFallback: "AD",
  contact: {
    email: "alex.doe@example.com",
    linkedin: "linkedin.com/in/alexdoe",
    github: "github.com/alexdoe",
  },
  resumeUrl: "/alex-doe-resume.pdf",
  about: "A passionate Senior Software Engineer with over 10 years of experience in developing scalable web applications. I specialize in front-end technologies and am dedicated to creating intuitive and performant user interfaces. I'm always eager to learn new things and take on challenging projects.",
  experience: [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Software Engineer",
      period: "Jan 2018 - Present",
      description: "Leading the development of the main customer-facing application, architecting new features, and mentoring junior developers. Specialized in React, TypeScript, and Next.js.",
    },
    {
      company: "Innovate Co.",
      role: "Software Engineer",
      period: "Jun 2014 - Dec 2017",
      description: "Developed and maintained features for a large-scale e-commerce platform. Worked with Angular and Node.js, and contributed to improving code quality and test coverage.",
    },
  ],
  education: [
    {
      institution: "State University",
      degree: "B.S. in Computer Science",
      period: "2010 - 2014",
    },
  ],
  skills: ["React", "TypeScript", "Next.js", "Node.js", "JavaScript", "HTML & CSS", "Tailwind CSS", "GraphQL", "CI/CD", "Agile Methodologies"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-4xl p-4 md:p-8">
        <div className="space-y-8">
          <ProfileHeader data={profileData} />

          <ProfileSection title="About Me">
            <p className="text-muted-foreground leading-relaxed">
              {profileData.about}
            </p>
          </ProfileSection>

          <Accordion type="multiple" defaultValue={["experience"]} className="w-full space-y-8">
            <AccordionItem value="experience" className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <AccordionTrigger className="p-6 text-xl font-semibold hover:no-underline">
                Experience
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-8">
                  {profileData.experience.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education" className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <AccordionTrigger className="p-6 text-xl font-semibold hover:no-underline">
                Education
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {profileData.education.map((edu, index) => (
                    <EducationItem key={index} {...edu} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills" className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <AccordionTrigger className="p-6 text-xl font-semibold hover:no-underline">
                Skills
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <ProfileFooter name={profileData.name} />
      </main>
    </div>
  );
}
