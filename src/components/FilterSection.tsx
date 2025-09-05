import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { roles, cohortFilters } from "@/data/profiles";

interface FilterSectionProps {
  selectedCohort: string;
  selectedRole: string;
  onCohortChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onClearFilters: () => void;
}

export const FilterSection = ({
  selectedCohort,
  selectedRole,
  onCohortChange,
  onRoleChange,
  onClearFilters
}: FilterSectionProps) => {
  const hasActiveFilters = selectedCohort !== "전체" || selectedRole !== "전체";

  return (
    <div className="space-y-8">
      {/* 코호트 필터 */}
      <div className="space-y-3">
        <label className="text-xl font-bold text-black flex items-center gap-2">
          🎓 수료 프로그램
        </label>
        <div className="flex flex-wrap gap-2">
          {cohortFilters.map((filter) => {
            // 선택된 코호트가 해당 카테고리에 속하는지 확인
            const isActive = filter.value === "전체" 
              ? selectedCohort === "전체"
              : selectedCohort.includes(filter.value);
              
            return (
              <Button
                key={filter.value}
                variant={isActive ? "default" : "outline"}
                onClick={() => onCohortChange(filter.value)}
                className={`clean-button text-black px-4 py-2 text-base font-medium ${
                  isActive
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white hover:bg-gray-100"
                }`}
                size="default"
              >
                {filter.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* 구분선 */}
      <div className="border-t border-black"></div>

      {/* 직무 필터 */}
      <div className="space-y-3">
        <label className="text-xl font-bold text-black flex items-center gap-2">
          💼 현재 또는 희망 직무
        </label>
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <Button
              key={role}
              variant={selectedRole === role ? "default" : "outline"}
              onClick={() => onRoleChange(role)}
              className={`clean-button text-black px-4 py-2 text-base font-medium ${
                selectedRole === role 
                  ? "bg-black text-white hover:bg-gray-800" 
                  : "bg-white hover:bg-gray-100"
              }`}
              size="default"
            >
              {role}
            </Button>
          ))}
        </div>
      </div>

      {/* 필터 초기화 */}
      {hasActiveFilters && (
        <div className="flex justify-end pt-2">
          <Button
            variant="outline"
            size="default"
            onClick={onClearFilters}
            className="gap-2 bg-red-100 clean-button hover:bg-red-200 text-red-700 border-red-300 px-4 py-2 text-base font-medium rounded-md"
          >
            <X size={14} />
            필터 초기화
          </Button>
        </div>
      )}
    </div>
  );
};