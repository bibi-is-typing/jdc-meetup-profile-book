import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { FilterSection } from "@/components/FilterSection";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles } from "@/data/profiles";

const Index = () => {
  const [selectedCohort, setSelectedCohort] = useState("전체");
  const [selectedRole, setSelectedRole] = useState("전체");

  // 역할 매핑 함수
  const mapRoleToCategory = (role: string): string => {
    const lowerRole = role.toLowerCase();
    if (lowerRole.includes("백엔드") || lowerRole.includes("be") || lowerRole.includes("서버")) return "백엔드";
    if (lowerRole.includes("프론트") || lowerRole.includes("fe") || lowerRole.includes("프론트엔드")) return "프론트엔드";
    if (lowerRole.includes("풀스택") || lowerRole.includes("웹") && lowerRole.includes("devops")) return "풀스택";
    if (lowerRole.includes("게임") && !lowerRole.includes("기획")) return "게임개발";
    if (lowerRole.includes("기획")) return "게임기획";
    return "기타";
  };

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      // 코호트 매칭 로직 수정
      const cohortMatch = selectedCohort === "전체" || 
        (selectedCohort === "크래프톤" && profile.cohort.includes("크래프톤")) ||
        (selectedCohort === "SW" && (profile.cohort.includes("SW") || profile.cohort.includes("소프트웨어"))) ||
        (selectedCohort === "게임랩" && profile.cohort.includes("게임랩")) ||
        (selectedCohort === "멘토" && profile.cohort.includes("멘토"));
      
      const mappedRole = mapRoleToCategory(profile.role);
      const roleMatch = selectedRole === "전체" || mappedRole === selectedRole;
      return cohortMatch && roleMatch;
    }).sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));
  }, [selectedCohort, selectedRole]);

  const handleClearFilters = () => {
    setSelectedCohort("전체");
    setSelectedRole("전체");
  };

  const hasActiveFilters = selectedCohort !== "전체" || selectedRole !== "전체";

  return (
    <div className="min-h-screen gradient-main">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        
        <div className="mb-12">
          <div className="bg-white/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <FilterSection
              selectedCohort={selectedCohort}
              selectedRole={selectedRole}
              onCohortChange={setSelectedCohort}
              onRoleChange={setSelectedRole}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>

        <main>
          {/* 검색 결과 전체 컨테이너 */}
          <div className="bg-white/35 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-white/10">
            {/* 검색 결과 헤더 */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <h2 className="text-xl font-bold text-black">🔍 검색 결과</h2>
                  <div className="clean-button text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base font-medium bg-black rounded-md">
                    {filteredProfiles.length}명
                  </div>
                  <span className="text-base md:text-lg text-black">의 프로필</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-black/70">
                  {hasActiveFilters && (
                    <div className="flex items-center gap-2">
                      <span>필터링 중</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                  <div>
                    * 정렬 기준은 이름 가나다순입니다.
                  </div>
                </div>
              </div>
            </div>

            {/* 프로필 카드 그리드 */}
            {filteredProfiles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProfiles.map((profile) => (
                  <ProfileCard key={profile.id} profile={profile} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-white/25 rounded-2xl p-8 max-w-md mx-auto shadow-lg backdrop-blur-sm border border-white/20">
                  <div className="text-6xl mb-4">😔</div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    검색 결과가 없습니다
                  </h3>
                  <p className="text-black/80 mb-6 leading-relaxed">
                    선택하신 조건에 맞는 프로필을 찾을 수 없어요.
                    <br />
                    다른 조건으로 검색해보세요.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="text-white bg-black hover:bg-gray-800 font-medium transition-smooth px-6 py-3 rounded-lg"
                  >
                    모든 필터 초기화 →
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="mt-16 py-8 text-center">
          <div className="border-t border-white/20 pt-8">
            <p className="text-black/70 text-sm">
              Jungle Dev Club ∙ 크래프톤 정글 7기 권한비
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
