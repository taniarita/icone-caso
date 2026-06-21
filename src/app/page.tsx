import { getFeaturedProjects } from "@/lib/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { SectionHeader } from "@/components/SectionHeader"

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  return (
    <div>
      <main className="container mx-auto py-12">
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold">Ícone Caso</h1>
        </section>

        <section className="py-8">
          <SectionHeader title="Projetos em destaque" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.githubUrl} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
