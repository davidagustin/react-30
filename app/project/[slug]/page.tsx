import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Dynamically import the project component
  const ProjectComponent = await import(
    `@/components/projects/${project.slug}`
  ).catch(() => null);

  if (!ProjectComponent) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-center text-gray-500 dark:text-gray-400">
              Component coming soon...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const Component = ProjectComponent.default;

  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mt-8">
          <Component />
        </div>
      </div>
    </div>
  );
}
