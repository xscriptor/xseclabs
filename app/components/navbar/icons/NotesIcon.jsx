export default function NotesIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--link)" strokeWidth="2" className="transition-transform duration-150 ease-out group-hover:scale-200">
      <path d="M4 3h12l4 4v14H4z" />
      <path d="M16 3v4h4" />
      <path d="M7 12h10" />
      <path d="M7 16h10" />
    </svg>
  );
}
