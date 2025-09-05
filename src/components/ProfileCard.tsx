import { Github, Linkedin, Globe, Instagram, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Profile } from "@/data/profiles";

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const renderSocialIcon = (type: string, url: string) => {
    const iconSize = 16;
    const iconProps = { size: iconSize, className: "text-foreground" };

    switch (type) {
      case "github":
        return <Github {...iconProps} />;
      case "linkedin":
        return <Linkedin {...iconProps} />;
      case "website":
        return <Globe {...iconProps} />;
      case "instagram":
        return <Instagram {...iconProps} />;
      default:
        return <ExternalLink {...iconProps} />;
    }
  };

  const getSocialLinks = () => {
    if (!profile.links) return [];
    
    return Object.entries(profile.links).map(([type, url]) => ({
      type,
      url,
      icon: renderSocialIcon(type, url)
    }));
  };

  return (
    <Card className="h-full transition-smooth hover:shadow-hover bg-gradient-card border-0 shadow-card group">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
              {profile.name}
            </h3>
            <Badge variant="secondary" className="mt-2 text-xs">
              {profile.cohort}
            </Badge>
          </div>
          {getSocialLinks().length > 0 && (
            <div className="flex gap-2">
              {getSocialLinks().map(({ type, url, icon }, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={`${profile.name}의 ${type}`}
                  >
                    {icon}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <Badge variant="outline" className="mb-3 font-medium border-accent text-accent-foreground">
            {profile.role}
          </Badge>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {profile.introduction}
          </p>
        </div>
        
        {profile.matchingPreference && (
          <div className="pt-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground/80 italic">
              "매칭 희망: {profile.matchingPreference}"
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};