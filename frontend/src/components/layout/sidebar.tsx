"use client";

import { links } from "@/constants/sidebar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white w-64 overflow-y-auto">
      <div className="flex flex-col mx-2">
        <h1 className="text-2xl font-bold my-6 text-center">App Sidebar</h1>
        <ul>
          {links.map((link) => (
            <li key={link.name} className="mb-4">
              <Link href={link.url} passHref>
                <div
                  className={`flex items-center space-x-3 p-2 rounded-lg 
                    ${
                      pathname === link.url
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-700"
                    }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
