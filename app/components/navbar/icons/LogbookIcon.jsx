export default function LogbookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--aqua)" strokeWidth="2" className="transition-transform duration-150 ease-out group-hover:scale-200">
      <path d="M6 4h11a3 3 0 0 1 3 3v13H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
      <path d="M6 8h10" />
      <path d="M6 12h10" />
      <path d="M6 16h10" />
    </svg>
  );
}
