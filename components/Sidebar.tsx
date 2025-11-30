"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="flex h-full flex-col overflow-y-auto p-4">
        <div className="mb-6">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            JavaScript30
          </Link>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            React Edition
          </p>
        </div>
        <nav className="space-y-1">
          {projects.map((project) => {
            const isActive = pathname === `/project/${project.slug}`;
            return (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                )}
              >
                <span className="mr-2 text-gray-500 dark:text-gray-400">
                  {project.id.toString().padStart(2, "0")}.
                </span>
                {project.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
