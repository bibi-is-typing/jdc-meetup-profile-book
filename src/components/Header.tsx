import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="text-center py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <Badge 
            variant="secondary" 
            className="px-4 py-2 text-sm glass-effect border-white/30 text-foreground"
          >
            JDC Meetup 2024
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight drop-shadow-sm">
          정글 개발자 커뮤니티
          <br />
          <span className="bg-gradient-to-r from-highlight to-coral-pink bg-clip-text text-transparent">
            프로필 북
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          정글에서 만난 개발자들의 이야기를 만나보세요.
          <br />
          새로운 인연과 협업의 기회를 찾아보세요.
        </p>
        
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="h-1 w-16 bg-gradient-to-r from-highlight to-coral-pink rounded-full"></div>
          <span className="text-2xl">🌟</span>
          <div className="h-1 w-16 bg-gradient-to-r from-coral-pink to-highlight rounded-full"></div>
        </div>
      </div>
    </header>
  );
};