import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cohorts, roles } from "@/data/profiles";

interface FilterSectionProps {
  selectedCohort: string;
  selectedRole: string;
  onCohortChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onClearFilters: () => void;
  resultCount: number;
}

export const FilterSection = ({
  selectedCohort,
  selectedRole,
  onCohortChange,
  onRoleChange,
  onClearFilters,
  resultCount
}: FilterSectionProps) => {
  const hasActiveFilters = selectedCohort !== "전체" || selectedRole !== "전체";

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-white/20">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">수료 기수</label>
            <Select value={selectedCohort} onValueChange={onCohortChange}>
              <SelectTrigger className="w-full sm:w-[200px] bg-background border-border">
                <SelectValue placeholder="기수 선택" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {cohorts.map((cohort) => (
                  <SelectItem key={cohort} value={cohort}>
                    {cohort}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">직무</label>
            <Select value={selectedRole} onValueChange={onRoleChange}>
              <SelectTrigger className="w-full sm:w-[250px] bg-background border-border">
                <SelectValue placeholder="직무 선택" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border max-h-[300px]">
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <Badge variant="secondary" className="bg-highlight text-highlight-foreground">
              {resultCount}명
            </Badge>
            의 프로필
          </div>
          
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="gap-2 border-muted hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
            >
              <X size={14} />
              필터 초기화
            </Button>
          )}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {selectedCohort !== "전체" && (
            <Badge variant="secondary" className="gap-2">
              기수: {selectedCohort}
              <button
                onClick={() => onCohortChange("전체")}
                className="hover:text-destructive"
              >
                <X size={12} />
              </button>
            </Badge>
          )}
          {selectedRole !== "전체" && (
            <Badge variant="secondary" className="gap-2">
              직무: {selectedRole}
              <button
                onClick={() => onRoleChange("전체")}
                className="hover:text-destructive"
              >
                <X size={12} />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};