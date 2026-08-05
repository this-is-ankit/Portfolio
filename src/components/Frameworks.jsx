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
    { name: "sql", src: getFallbackSvg("SQL", "#00758F") },
    { name: "typescript", src: deviconUrl("typescript") },
    { name: "nodejs", src: deviconUrl("nodejs") },
    { name: "express", src: deviconUrl("express") },
    { name: "postgresql", src: deviconUrl("postgresql") },
    { name: "mongodb", src: deviconUrl("mongodb") },
    { name: "redis", src: deviconUrl("redis") },
    { name: "github", src: deviconUrl("github") },
    { name: "postman", src: deviconUrl("postman") },
    { name: "prisma", src: getFallbackSvg("Prisma", "#2D3748") }, 
    { name: "reactnative", src: getFallbackSvg("Native", "#61DAFB") },
    { name: "expogo", src: getFallbackSvg("Expo Go", "#000020") },
    { name: "archlinux", src: deviconUrl("archlinux") },
    { name: "render", src: getFallbackSvg("Render", "#46E3B7") },
    { name: "vercel", src: deviconUrl("vercel") },
    { name: "cloudinary", src: getFallbackSvg("Cloudinary", "#3448C5") },
    { name: "hyprland", src: getFallbackSvg("Hyprland", "#00A79D") },
    { name: "neontech", src: getFallbackSvg("Neon Tech", "#00E599") },
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
