import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="text-center py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <Badge 
            variant="secondary" 
            className="px-4 py-2 text-sm bg-secondary/20 backdrop-blur-sm border border-secondary/30"
          >
            JDC Meetup 2024
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          정글 개발자 커뮤니티
          <br />
          <span className="gradient-vibrant bg-clip-text text-transparent">
            프로필 북
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          정글에서 만난 개발자들의 이야기를 만나보세요.
          <br />
          새로운 인연과 협업의 기회를 찾아보세요.
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-24 bg-gradient-vibrant rounded-full shadow-neon"></div>
        </div>
      </div>
    </header>
  );
};