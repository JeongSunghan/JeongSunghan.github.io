import project1 from "../assets/image/project1.png";
import project4 from "../assets/image/project4.png";
import project5 from "../assets/image/project5.png";
import project6 from "../assets/image/project6.png";

const projectsData = [
  {
    id: 1,
    title: "FlowNary",
    subtitle: "SNS · 팀 프로젝트",
    year: "2024",
    role: "Frontend + Backend",
    description:
      "React, Spring Boot 기반의 SNS 플랫폼. 피드 · 댓글 · 좋아요 · 팔로우 · 실시간 채팅 등 주요 SNS 기능을 구현하며 팀원 간 협업과 Git 플로우, Jira/Notion 기반 이슈 트래킹을 실전에서 경험했습니다.",
    img: project1,
    tags: ["Team", "Full-stack"],
    techStack: ["React", "Spring Boot", "MySQL", "Firebase", "MUI"],
    github: "https://github.com/JeongSunghan/FinalProject-flowNay",
    featured: true,
  },
  {
    id: 2,
    title: "Wordle Clone",
    subtitle: "Toy Project",
    year: "2024",
    role: "Solo",
    description:
      "HTML · CSS · 바닐라 JS만으로 만든 워들 클론. 상태 관리, 키보드 이벤트 처리, 애니메이션 타이밍을 직접 구현하며 DOM API의 기본기를 다졌습니다.",
    img: project5,
    tags: ["Game", "Vanilla JS"],
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JeongSunghan/wordle-game",
  },
  {
    id: 3,
    title: "React Music Player",
    subtitle: "Toy Project",
    year: "2024",
    role: "Solo",
    description:
      "YouTube Data API를 활용한 뮤직 플레이어. 검색 · 재생 큐 · 즐겨찾기 기능을 React 훅으로 구성하고, 컴포넌트 단위로 UI를 재사용 가능하게 설계했습니다.",
    img: project4,
    tags: ["Web App", "API"],
    techStack: ["React", "YouTube API", "CSS Modules"],
    github: "https://github.com/JeongSunghan/react-music-player",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    subtitle: "This very site",
    year: "2026",
    role: "Solo",
    description:
      "React Router · Framer Motion · 직접 설계한 토큰 기반 디자인 시스템으로 만든 포트폴리오. 벤토 그리드 · 글래스모피즘 · 상호작용 모션 등 2026년 트렌드를 반영했습니다.",
    img: project6,
    tags: ["Portfolio", "Motion"],
    techStack: ["React", "Framer Motion", "CSS"],
    github: "https://github.com/JeongSunghan/JeongSunghan.github.io",
    link: "https://jeongsunghan.github.io/",
    featured: true,
  },
];

export default projectsData;
