export default function ProjectsIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--aqua)" strokeWidth="2" className="transition-transform duration-150 ease-out group-hover:scale-200">
      <path d="M3 7h18" />
      <path d="M6 3h12v4H6z" />
      <path d="M4 11h6v10H4z" />
      <path d="M14 11h6v10h-6z" />
    </svg>
  );
}
