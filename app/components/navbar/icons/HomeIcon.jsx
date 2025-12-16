export default function HomeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--link)" strokeWidth="2" className="transition-transform duration-150 ease-out group-hover:scale-200">
      <path d="M3 10.5l9-7 9 7" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}
