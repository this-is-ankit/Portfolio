import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const deviconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

  // Fallback SVG creator for logos not easily found on CDNs
  const getFallbackSvg = (text, bgColor) => {
    const encoded = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="20" fill="${bgColor}" />
        <text x="50" y="55" font-family="sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
          ${text}
        </text>
      </svg>
    `.trim());
    return `data:image/svg+xml;charset=utf-8,${encoded}`;
  };

  const skills = [
    { name: "cplusplus", src: deviconUrl("cplusplus") },
    { name: "javascript", src: deviconUrl("javascript") },
    { name: "html5", src: deviconUrl("html5") },
    { name: "css3", src: deviconUrl("css3") },
    { name: "react", src: deviconUrl("react") },
    { name: "tailwindcss", src: deviconUrl("tailwindcss") },
    { name: "git", src: deviconUrl("git") },
    { name: "vitejs", src: deviconUrl("vitejs") },
    { name: "python", src: deviconUrl("python") },
    { name: "c", src: deviconUrl("c") },
    { name: "sql", src: "https://symbols.getvecta.com/stencil_27/81_sql-database.712f6a994f.svg" },
    { name: "typescript", src: deviconUrl("typescript") },
    { name: "nodejs", src: deviconUrl("nodejs") },
    { name: "express", src: deviconUrl("express") },
    { name: "postgresql", src: deviconUrl("postgresql") },
    { name: "mongodb", src: deviconUrl("mongodb") },
    { name: "redis", src: deviconUrl("redis") },
    { name: "github", src: deviconUrl("github") },
    { name: "Linux", src: "https://www.svgrepo.com/show/448236/linux.svg" },
    { name: "postman", src: deviconUrl("postman") },
    { name: "prisma", src: "https://www.svgrepo.com/show/354210/prisma.svg" }, 
    { name: "reactnative", src: "https://icon.icepanel.io/Technology/svg/React.svg" },
    { name: "expogo", src: getFallbackSvg("Expo Go", "#000020") },
    { name: "archlinux", src: deviconUrl("archlinux") },
    { name: "render", src: "https://cdn.brandfetch.io/id8LeMTX5r/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "vercel", src: "https://upload.vectorlogo.zone/logos/vercel/images/c47cbee7-4d4f-439b-95ea-cc8da7809a0a.svg" },
    { name: "cloudinary", src: "https://www.svgrepo.com/show/353566/cloudinary.svg" },
    { name: "hyprland", src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/hyprland.svg" },
    { name: "neontech", src: "https://neon.com/brand/neon-logomark-light-color.svg?updated=2026-06-03&dpl=dpl_99CLmzr8DSLqwoKJ7Xv3a4DtZWQi" },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={skill.src} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={skill.src} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
