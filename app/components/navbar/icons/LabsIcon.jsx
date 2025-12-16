export default function LabsIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--purple)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-150 ease-out group-hover:scale-200"
    >
      <path d="M8 4h8" />
      <path d="M10 4v4" />
      <path d="M14 4v4" />
      <path d="M10 8L6 17" />
      <path d="M14 8L18 17" />
      <path d="M6 17h12" />
      <path d="M7.8 15.6c2-2 6 1.5 8.4-.6" />
      <circle cx="12" cy="3" r="1" />
      <circle cx="12" cy="5" r="0.7" />
    </svg>
  );
}
