import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            JavaScript30 - React Edition
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            30 vanilla JavaScript projects rebuilt with React, TypeScript, and
            Tailwind CSS
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.slug}`}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {project.id.toString().padStart(2, "0")}
                </span>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {project.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
