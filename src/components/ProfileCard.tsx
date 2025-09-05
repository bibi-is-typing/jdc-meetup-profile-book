import { Github, Linkedin, Globe, Instagram, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Profile } from "@/data/profiles";

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const renderSocialIcon = (type: string, url: string) => {
    const iconSize = 20;
    const iconProps = { 
      size: iconSize, 
      className: "text-white transition-all duration-200" 
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

  const getCohortBackgroundClass = () => {
    if (profile.cohort.includes("크래프톤")) return "bg-light-blue";
    if (profile.cohort.includes("SW") || profile.cohort.includes("소프트웨어")) return "bg-coral-pink";
    if (profile.cohort.includes("게임")) return "bg-bright-yellow";
    if (profile.cohort.includes("멘토")) return "gradient-mentor";
    return "bg-light-blue";
  };

  const getCohortTagColor = () => {
    return "bg-gray-100 text-black";
  };

  const getRoleTagColor = () => {
    return "bg-black text-white";
  };


  const isMentor = profile.cohort.includes("멘토");
  
  const cardClassName = isMentor 
    ? "h-full transition-card hover:shadow-hover gradient-mentor shadow-glass group cursor-pointer hover:scale-[1.02]"
    : `h-full transition-card hover:shadow-hover ${getCohortBackgroundClass()} shadow-card group cursor-pointer hover:scale-[1.02]`;

  const textColor = "text-black";
  const mutedTextColor = "text-black";

  return (
    <Card className={`${cardClassName} clean-card overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      <CardHeader className="space-y-3 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className={`text-4xl font-bold ${textColor} leading-tight`}>
              {profile.name}
            </h3>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <div className={`clean-button px-3 py-1 text-s font-medium rounded-md ${getCohortTagColor()}`}>
                {profile.cohort}
              </div>
              <div className={`clean-button px-3 py-1 text-s font-medium rounded-md ${getRoleTagColor()}`}>
                {profile.role}
              </div>
            </div>
          </div>
          {getSocialLinks().length > 0 && (
            <div className="flex gap-2 ml-3">
              {getSocialLinks().map(({ type, url, icon }, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`h-10 w-10 p-0 rounded-full bg-black hover:bg-gray-800 hover:scale-110 transition-all duration-200 shadow-lg`}
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
          <p className={`text-xl ${mutedTextColor} leading-relaxed`}>
            {profile.introduction}
          </p>
        </div>
        
      </CardContent>
    </Card>
  );
};