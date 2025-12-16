 "use client";
 import Link from "next/link";
 
 export default function NavLink({ href, onClick, children, ariaLabel }) {
   return (
     <Link
       href={href}
       onClick={onClick}
       className="group p-2 rounded-md transition-colors duration-150 hover:bg-[var(--surface-muted)]"
       aria-label={ariaLabel}
     >
       {children}
     </Link>
   );
 }
