export interface Profile {
  id: string;
  name: string;
  cohort: string;
  role: string;
  introduction: string;
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
    instagram?: string;
    other?: string;
  };
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "소경현",
    cohort: "크래프톤 정글 3기",
    role: "개인 개발자",
    introduction: "인디 게임 개발에 관심이 많은 개발자입니다!",
    links: {
      github: "https://github.com/dev-diver"
    },
  },
  {
    id: "2",
    name: "최승현",
    cohort: "SW 사관학교 정글 7기",
    role: "백엔드 개발자",
    introduction: "옵시디언, 도메인주도개발, 이벤트 소싱 전도사",
    links: {
      website: "https://www.choiwheatley.com"
    },
  },
  {
    id: "3",
    name: "홍용재",
    cohort: "크래프톤 정글 7기",
    role: "BE 취준생",
    introduction: "안녕하세요! 백엔드 개발자를 목표로 취업을 준비 하고 있는 홍용재 라고 합니다! 좋은 설계는 무엇인가에 대해 생각해보는것을 좋아하고 시스템의 안정적인 운영 위해 어떤 기술들을 접목 시킬수 있는지 에 대해 관심이 많습니다!",
    links: {
      github: "https://github.com/develsvai"
    },
  },
  {
    id: "4",
    name: "남재희",
    cohort: "크래프톤 정글 4기",
    role: "백엔드 개발자",
    introduction: "AB180 데이터 파이프라인 팀",
    links: {
      github: "https://github.com/jaenam615"
    },
  },
  {
    id: "5",
    name: "최도의",
    cohort: "크래프톤 정글 2기",
    role: "언리얼 게임 클라이언트 취준생",
    introduction: "언리얼 게임 클라이언트를 희망합니다",
  },
  {
    id: "6",
    name: "박강",
    cohort: "게임랩 3기",
    role: "게임 프로그래머, 게임 기획자",
    introduction: "인디 게임 개발 지망생",
    links: {
      github: "https://github.com/urbanmaid"
    },
  },
  {
    id: "7",
    name: "안준형",
    cohort: "게임랩 1기",
    role: "게임 기획자",
    introduction: "열심히 인디 게임 만들고 있는 게임 개발자 안준형입니다",
  },
  {
    id: "8",
    name: "나병한",
    cohort: "게임랩 1기",
    role: "게임 개발자",
    introduction: "슈퍼크리에이티브 재직",
  },
  {
    id: "9",
    name: "이승민",
    cohort: "크래프톤 정글 6기",
    role: "게임 클라이언트 개발 지망생",
    introduction: "안녕하세요! 게임 클라이언트 개발 지망생 이승민입니다. 게임을 진심으로 바라보고 달려왔고, 앞으로도 게임을 꾸준히 하고 싶습니다.",
    links: {
      instagram: "https://www.instagram.com/lorkhan_kr"
    },
  },
  {
    id: "10",
    name: "김진교",
    cohort: "정글 게임랩 2기",
    role: "게임 기획자, 게임 클라이언트 개발자, 취준생",
    introduction: "정글 게임랩 2기 수료 후 IT 산업기능요원 취업을 준비중입니다."
  },
  {
    id: "11",
    name: "장효범",
    cohort: "소프트웨어 사관학교 정글 9기",
    role: "백엔드 개발자",
    introduction: "1.5년차 백엔드 개발자 장효범입니다. 도메인은 해양/드론 분야입니다.",
    links: {
      github: "https://github.com/InfraWhale"
    },
  },
  {
    id: "12",
    name: "백강민",
    cohort: "크래프톤 정글 4기",
    role: "게임 서버 개발자",
    introduction: "벨로프 아틀란티카 서버 개발자 백강민 입니다. 잘부탁드려요",
    links: {
      linkedin: "https://www.linkedin.com/in/강민-백-702a40261"
    },
  },
  {
    id: "13",
    name: "임채승",
    cohort: "크래프톤 정글 6기",
    role: "프론트엔드 개발자",
    introduction: "안녕하세요, 이제 막 실무에 들어가는 임채승입니다.",
    links: {
      github: "https://github.com/loopy-lim"
    },
  },
  {
    id: "14",
    name: "이승현",
    cohort: "멘토",
    role: "게임 기획자",
    introduction: "18년차 게임 디자이너로 현재 펍지 스튜디오에서 프로젝트 블랙버짓의 아웃게임 디자인팀 리드를 맡고 있습니다.",
    links: {
      linkedin: "https://www.linkedin.com/in/ventran"
    },
  },
  {
    id: "15",
    name: "장홍표",
    cohort: "크래프톤 정글 1기",
    role: "임베디드 개발자",
    introduction: "정글 1기 장홍표입니다."
  },
  {
    id: "16",
    name: "장종현",
    cohort: "SW사관학교 정글 7기",
    role: "XR 취준생",
    introduction: "현재 애플 visionOS 앱 하나를 개발 중입니다. 건축학전공 + iOS 공부 후 VR게임회사에서 공간디자이너 및 Unity개발자로 커리어를 시작했다가 사정이 생겨 다시 취준을 하게 되었습니다.",
    links: {
      linkedin: "https://www.linkedin.com/in/jonghyeonchang"
    },
  },
  {
    id: "17",
    name: "김아람",
    cohort: "크래프톤 정글 5기",
    role: "FE",
    introduction: "안녕하세요! llm 활용을 좋아하는 프론트엔드 개발자에요! 취미는 커스텀 키보드 만들기, 최근에는 3d프린터 사서 직접 키보두 하우징도 만들고 jlcpcb에서 pcb도 주문해서 키보드 만들고 있어요",
    links: {
      github: "https://github.com/chenjingdev"
    },
  },
  {
    id: "18",
    name: "이유정",
    cohort: "sw사관학교 정글 7기",
    role: "웹 풀스택, DevOps",
    introduction: "제조업의 IT 팀에서 일하고 있는 이유정이라고 합니다! 웹 풀스택 개발을 하며, DevOps 및 인프라 아키텍처 설계도 하고있습니다. 8월부로 딱 입사 1년이 되었습니다.",
  },
  {
    id: "19",
    name: "조영후",
    cohort: "SW사관학교 정글 1기",
    role: "백엔드 개발자",
    introduction: "FE, BE 두 분야의 경력을 모두 가지고 있는 4년차 웹 개발자입니다. 창업과 AI에 관심이 많습니다",
  },
  {
    id: "20",
    name: "신민기",
    cohort: "게임랩 2기",
    role: "게임 기획자 / 학생",
    introduction: "정글게임랩 2기를 수료하고, 현재 SPACE REVOLVER라는 퍼즐 게임을 제작하고 있는 대학생 신민기입니다.",
    links: {
      other: "https://x.com/MKstudio0404"
    },
  },
  {
    id: "21",
    name: "정현우",
    cohort: "크래프톤 정글 6기",
    role: "1인 창업 및 개발",
    introduction: "AI를 적극 활용해 새로운 분야에 과감히 뛰어드는 개발자를 목표로 합니다.",
  },
  {
    id: "22",
    name: "권한비",
    cohort: "크래프톤 정글 7기",
    role: "프론트엔드 개발자",
    introduction: "낮에는 일 하고, 밤에는 코드를 씁니다.",
    links: {
      linkedin: "https://www.linkedin.com/in/hanbi-kwon/"
    },
  },
  {
    id: "23",
    name: "김예람",
    cohort: "크래프톤 정글 6기",
    role: "백엔드 개발자",
    introduction: "게임학부 졸업 후 백엔드 개발자 준비 중인 김예람입니다.",
    links: {
      github: "https://github.com/Yeram522"
    },
  },
  {
    id: "24",
    name: "김성희",
    cohort: "크래프톤 정글 6기",
    role: "게임 클라이언트 개발 취준생",
    introduction: "게임 클라이언트 개발과 엔진 개발에 관심이 많은 취준생입니다. 아직 대학 졸업은 하지 않은...",
  },
  {
    id: "25",
    name: "서장우",
    cohort: "크래프톤 정글 6기",
    role: "게임 클라이언트 이직 준비",
    introduction: "정글을 수료하고 지금은 개발과 다른 분야에서 일하고 있지만 언젠가 개발자가 되기위해 퇴근 후 꾸준히 공부하는 준비생입니다.",
    links: {
      other: "https://velog.io/@tonny0305/posts"
    },
  },
  {
    id: "26",
    name: "이민형",
    cohort: "SW사관학교 정글 8기",
    role: "웹 개발자",
    introduction: "안녕하세요. 웹 개발하고 있는 이민형입니다. 책과 커피를 좋아합니다. 새로운 것, 잘 모르는 분야를 배우러 다니는 것도 좋아합니다. 최근에는 플러터에 관심이 생겨서 간단한 앱 만들기 도전 중입니다.",
    links: {
      github: "https://github.com/hyeong1"
    },
  }
];

// 단순화된 코호트 카테고리 (버튼용)
export const cohortFilters = [
  { label: "전체", value: "전체", color: "bg-white" },
  { label: "크래프톤 정글", value: "크래프톤", color: "bg-crafton-jungle" },
  { label: "SW 사관학교", value: "SW", color: "bg-sw-academy" },
  { label: "게임랩", value: "게임랩", color: "bg-game-lab" },
  { label: "멘토", value: "멘토", color: "bg-mentor-color" }
];

export const cohorts = [
  "전체",
  "크래프톤 정글 1기",
  "크래프톤 정글 2기", 
  "크래프톤 정글 3기",
  "크래프톤 정글 4기",
  "크래프톤 정글 5기",
  "크래프톤 정글 6기",
  "크래프톤 정글 7기",
  "SW 사관학교 정글 7기",
  "SW사관학교 정글 1기",
  "SW사관학교 정글 7기", 
  "SW사관학교 정글 8기",
  "소프트웨어 사관학교 정글 9기",
  "게임랩 1기",
  "게임랩 2기", 
  "게임랩 3기",
  "정글 게임랩 2기",
  "멘토"
];

// 단순화된 직무 카테고리
export const roles = [
  "전체",
  "백엔드",
  "프론트엔드", 
  "풀스택",
  "게임개발",
  "게임기획",
  "기타"
];