'use client';

import { useEffect, useState } from "react";
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

const initialProfileData = {
  name: "P.Arul Kevin Alex",
  title: "Full Stack Developer",
  avatarUrl: "https://placehold.co/128x128.png",
  avatarFallback: "AK",
  contact: {
    email: "arulkevinalex52@gmail.com",
    linkedin: "www.linkedin.com/in/alex-kevin-128ab5306",
    github: "github.com/AK-Alex216",
  },
  resumeUrl: "",
  about: "A results-driven Full Stack Developer with a knack for building beautiful and functional web applications. Proficient in modern JavaScript frameworks and passionate about clean code and user-centric design.",
  experience: [
    {
      company: "Web Weavers LLC",
      role: "Full Stack Developer",
      period: "Feb 2020 - Present",
      description: "Building and maintaining client websites and web applications using React, Node.js, and GraphQL. Collaborating with designers and project managers to create seamless user experiences from concept to deployment.",
    },
    {
      company: "Code Crafters",
      role: "Junior Web Developer",
      period: "Jul 2018 - Jan 2020",
      description: "Assisted in the development of various web projects, focusing on front-end tasks with HTML, CSS, and JavaScript. Gained experience with version control (Git) and agile development methodologies.",
    },
  ],
  education: [
    {
      institution: "Arifa Institute of Technology",
      degree: "B.E. Computer Science and Engineering",
      period: "Pursuing",
    },
  ],
  skills: [ "python","JavaScript", "HTML5", "Git", "SQL","c"],
};

export default function Home() {
  const [profileData, setProfileData] = useState(initialProfileData);

  useEffect(() => {
    const savedResume = localStorage.getItem('resumeUrl');
    if (savedResume) {
      setProfileData((prevData) => ({
        ...prevData,
        resumeUrl: savedResume,
      }));
    }
  }, []);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileData((prevData) => ({
            ...prevData,
            avatarUrl: e.target.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const resumeDataUrl = e.target.result as string;
          localStorage.setItem('resumeUrl', resumeDataUrl);
          setProfileData((prevData) => ({
            ...prevData,
            resumeUrl: resumeDataUrl,
          }));
          window.open(resumeDataUrl, '_blank');
        }
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-4xl p-4 md:p-8">
        <div className="space-y-8">
          <ProfileHeader data={profileData} onAvatarChange={handleAvatarChange} onResumeChange={handleResumeChange} />

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
