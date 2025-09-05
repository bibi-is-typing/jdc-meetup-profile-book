import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="text-center py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-16">

        <div className="relative">
          <div className="bg-black rounded-2xl px-8 py-6 transform -rotate-1">
            <div className="space-y-4">
              <div className="text-4xl md:text-6xl font-black text-white tracking-tight">
                제 1회 JDC 밋업
              </div>
              <div className="text-2xl md:text-4xl font-medium text-white/90">
                이번엔 누구를 만날 수 있을까요?
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <img 
            src="/jdc-meetup.jpg" 
            alt="JDC Meetup"
            className="w-full object-cover"
          />
        </div>


        <div className="relative max-w-2xl mx-auto">
          <div className="bg-black rounded-xl px-6 py-4 relative">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              이번 밋업에 참여하는 정글러들의 프로필을 미리 확인해 보세요.
              <br />
              새로운 인연과 협업의 기회를 찾을 수 있습니다.
            </p>
            {/* 말풍선 꼬리 */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};