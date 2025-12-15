 "use client";
 import Link from "next/link";
 
 export default function NavLink({ href, onClick, children }) {
   return (
     <Link
       href={href}
       onClick={onClick}
       className="p-2 rounded-md hover:bg-black/5"
     >
       {children}
     </Link>
   );
 }
