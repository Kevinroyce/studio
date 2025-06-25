"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Download, Github, Linkedin, Mail, Share2 } from "lucide-react";

type ProfileHeaderProps = {
  data: {
    name: string;
    title: string;
    avatarUrl: string;
    avatarFallback: string;
    contact: {
      email: string;
      linkedin: string;
      github: string;
    };
    resumeUrl: string;
  };
};

export function ProfileHeader({ data }: ProfileHeaderProps) {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Link Copied!",
        description: "Profile link copied to clipboard.",
      });
    }).catch(err => {
      console.error("Failed to copy: ", err);
      toast({
        title: "Error",
        description: "Failed to copy link.",
        variant: "destructive",
      });
    });
  };

  return (
    <Card className="p-6 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary" data-ai-hint="person">
          <AvatarImage src={data.avatarUrl} alt={data.name} />
          <AvatarFallback className="text-4xl">{data.avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{data.name}</h1>
          <h2 className="text-xl md:text-2xl text-primary font-semibold mt-1">{data.title}</h2>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>{data.contact.email}</span>
            </a>
            <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 mt-4 md:mt-0 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full md:w-auto">
            <a href={data.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={handleShare} className="w-full md:w-auto">
            <Share2 className="mr-2 h-4 w-4" />
            Share Profile
          </Button>
        </div>
      </div>
    </Card>
  );
}
