'use client'
import Link from "next/link"
import { links } from "./header"
import { usePathname } from "next/navigation"

const nav = () => {
  const Pathname = usePathname();
  return (
    <nav className="">
      <div className="text-white flex flex-row space-x-4 text-bold text-xl">
      {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className={`${Pathname === link.link ? 'text-blue-500' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          </div>
    </nav>
  )
}

export default nav