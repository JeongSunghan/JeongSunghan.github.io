import musicPlayer from "../assets/image/project4.png";
import wordle from "../assets/image/project5.png";
import portfolio from "../assets/image/project6.png";
import promptcraft from "../assets/image/promptcraft.png";
import moneycatcher from "../assets/image/moneycatcher.png";
import deathton from "../assets/image/deathton.png";

// 최신순으로 정렬 — 2026 → 2024
const projectsData = [
  {
    id: "deathton",
    title: "DEATHON",
    subtitle: "멀티플레이어 웹 게임",
    year: "2026",
    role: "Solo",
    description:
      "'Hack or Die' 컨셉의 러시안 룰렛 서바이벌 게임. Three.js로 POV 1인칭 해킹 아레나를 구현하고, Socket.IO로 3~6인 실시간 멀티플레이와 턴 동기화, GSAP·Howler로 몰입 연출을 구성했습니다. Buckshot Roulette 스타일의 UI와 CTF/DEF CON 모티브 세계관을 갖춘 인디 프로토타입입니다.",
    img: deathton,
    tags: ["Game", "Solo", "WebGL"],
    techStack: [
      "Three.js",
      "Socket.IO",
      "GSAP",
      "Howler",
      "Postprocessing",
      "Express",
      "Vite",
    ],
    github: "https://github.com/JeongSunghan/Deathton",
    featured: true,
  },
  {
    id: "promptcraft",
    title: "PromptCraft",
    subtitle: "AI 콘텐츠 생성 SaaS · MVP - 제작 중",
    year: "2026",
    role: "Solo",
    description:
      "블로그·SNS·마케팅 카피까지 브랜드 톤에 맞춰 생성하는 AI 콘텐츠 SaaS MVP. Vite + Express 풀스택 구조에 shadcn/ui·Radix 기반 디자인 시스템을 얹고, Drizzle ORM으로 요금제·사용량·콘텐츠 히스토리 대시보드를 구현했습니다.",
    img: promptcraft,
    tags: ["Solo", "Full-stack", "SaaS"],
    techStack: [
      "TypeScript",
      "React",
      "Express",
      "Drizzle ORM",
      "Tailwind",
      "shadcn/ui",
      "Vite",
    ],
    github: "https://github.com/JeongSunghan/promptcraft",
    featured: true,
  },
  
  {
    id: "moneycatcher",
    title: "머니캐쳐",
    subtitle: "HTML5 아케이드 게임",
    year: "2025",
    role: "Solo",
    description:
      "토스 HTML5 with.넵튠 공모전 테마로 제작한 네온 아케이드 머니 캐칭 게임. 떨어지는 돈을 모으고 세금·빚을 피하는 구조로, 캐릭터·입력·아이템·콤보를 모듈 단위로 분리해 바닐라 JS만으로 게임 루프와 상태 머신을 설계했습니다.",
    img: moneycatcher,
    tags: ["Game", "Solo", "Vanilla JS"],
    techStack: ["HTML5", "CSS3", "Vanilla JS", "Canvas"],
    github: "https://github.com/JeongSunghan/toss-MoneyCatcher",
    link: "https://toos-money-catcher.vercel.app/",
    featured: true,
  },
  
  {
    id: "music-player",
    title: "React Music Player",
    subtitle: "Toy Project",
    year: "2024",
    role: "Solo",
    description:
      "YouTube Data API를 활용한 뮤직 플레이어. 검색·재생 큐·즐겨찾기 기능을 React 훅으로 구성하고, 컴포넌트 단위로 UI를 재사용 가능하게 설계했습니다.",
    img: musicPlayer,
    tags: ["Solo", "Web App"],
    techStack: ["React", "YouTube API", "CSS Modules"],
    github: "https://github.com/JeongSunghan/react-music-player",
  },
  {
    id: "wordle",
    title: "Wordle Clone",
    subtitle: "Toy Project",
    year: "2024",
    role: "Solo",
    description:
      "HTML·CSS·바닐라 JS만으로 만든 워들 클론. 상태 관리, 키보드 이벤트 처리, 애니메이션 타이밍을 직접 구현하며 DOM API의 기본기를 다졌습니다.",
    img: wordle,
    tags: ["Game", "Solo", "Vanilla JS"],
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JeongSunghan/wordle-game",
    link: "https://jeongsunghan.github.io/wordle-game/",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    subtitle: "This very site",
    year: "2026",
    role: "Solo",
    description:
      "React Router · Framer Motion · 직접 설계한 토큰 기반 디자인 시스템으로 만든 포트폴리오. 벤토 그리드·글래스모피즘·상호작용 모션 등 2026년 트렌드를 반영했습니다.",
    img: portfolio,
    tags: ["Solo", "Portfolio", "Motion"],
    techStack: ["React", "Framer Motion", "CSS", "Pretendard"],
    github: "https://github.com/JeongSunghan/JeongSunghan.github.io",
    link: "https://jeongsunghan.github.io/",
  },
];

export default projectsData;
