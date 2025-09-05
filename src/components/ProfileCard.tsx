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
    const iconProps = { 
      size: iconSize, 
      className: "text-current transition-colors" 
    };

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

  const getCohortBorderClass = () => {
    if (profile.cohort.includes("크래프톤")) return "border-crafton";
    if (profile.cohort.includes("SW") || profile.cohort.includes("소프트웨어")) return "border-sw-academy";
    if (profile.cohort.includes("게임")) return "border-game-lab";
    if (profile.cohort.includes("멘토")) return "border-mentor";
    return "border-crafton";
  };

  const getRoleColor = () => {
    const role = profile.role.toLowerCase();
    if (role.includes("백엔드") || role.includes("be")) return "bg-role-backend text-white";
    if (role.includes("프론트") || role.includes("fe")) return "bg-role-frontend text-white";
    if (role.includes("게임")) return "bg-role-gamedev text-white";
    return "bg-role-fullstack text-white";
  };

  const isMentor = profile.cohort.includes("멘토");
  
  const cardClassName = isMentor 
    ? "h-full transition-card hover:shadow-hover gradient-mentor shadow-glass group cursor-pointer hover:scale-[1.02]"
    : "h-full transition-card hover:shadow-hover bg-card shadow-card group cursor-pointer hover:scale-[1.02] hover:bg-card-hover";

  const textColor = isMentor ? "text-white" : "text-card-foreground";
  const mutedTextColor = isMentor ? "text-white/70" : "text-muted-foreground";

  return (
    <Card className={`${cardClassName} ${getCohortBorderClass()} border-0 overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      <CardHeader className="space-y-3 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className={`text-xl font-bold ${textColor} group-hover:text-highlight transition-colors leading-tight`}>
              {profile.name}
            </h3>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <Badge 
                variant="secondary" 
                className={`text-xs font-medium ${isMentor ? 'bg-white/20 text-white border-white/30' : 'bg-muted/50'}`}
              >
                {profile.cohort}
              </Badge>
              <Badge 
                className={`text-xs font-medium px-2 py-1 ${getRoleColor()}`}
              >
                {profile.role}
              </Badge>
            </div>
          </div>
          {getSocialLinks().length > 0 && (
            <div className="flex gap-1 ml-3">
              {getSocialLinks().map(({ type, url, icon }, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`h-8 w-8 p-0 rounded-lg ${
                    isMentor 
                      ? 'hover:bg-white/10 text-white/80 hover:text-white focus:shadow-focus' 
                      : 'hover:bg-primary/10 hover:text-primary text-muted-foreground focus:shadow-focus'
                  } transition-all`}
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
      
      <CardContent className="space-y-4 relative z-10">
        <div>
          <p className={`text-sm ${mutedTextColor} leading-relaxed`}>
            {profile.introduction}
          </p>
        </div>
        
        {profile.matchingPreference && (
          <div className={`pt-3 border-t ${isMentor ? 'border-white/20' : 'border-border/50'}`}>
            <p className={`text-xs ${mutedTextColor} italic leading-relaxed`}>
              💬 매칭 희망: {profile.matchingPreference}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};