import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { FilterSection } from "@/components/FilterSection";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles } from "@/data/profiles";

const Index = () => {
  const [selectedCohort, setSelectedCohort] = useState("전체");
  const [selectedRole, setSelectedRole] = useState("전체");

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const cohortMatch = selectedCohort === "전체" || profile.cohort === selectedCohort;
      const roleMatch = selectedRole === "전체" || profile.role === selectedRole;
      return cohortMatch && roleMatch;
    });
  }, [selectedCohort, selectedRole]);

  const handleClearFilters = () => {
    setSelectedCohort("전체");
    setSelectedRole("전체");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        
        <div className="mb-8">
          <FilterSection
            selectedCohort={selectedCohort}
            selectedRole={selectedRole}
            onCohortChange={setSelectedCohort}
            onRoleChange={setSelectedRole}
            onClearFilters={handleClearFilters}
            resultCount={filteredProfiles.length}
          />
        </div>

        <main>
          {filteredProfiles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  검색 결과가 없습니다
                </h3>
                <p className="text-muted-foreground mb-6">
                  선택하신 조건에 맞는 프로필을 찾을 수 없어요.
                  <br />
                  다른 조건으로 검색해보세요.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-primary hover:text-primary-hover font-medium transition-smooth"
                >
                  모든 필터 초기화 →
                </button>
              </div>
            </div>
          )}
        </main>

        <footer className="mt-16 py-8 text-center">
          <div className="border-t border-border/30 pt-8">
            <p className="text-muted-foreground text-sm">
              JDC Meetup Profile Book • 정글 개발자 커뮤니티
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
