import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "@/components/ui/ExternalLink"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
    project: Project
}

/**
 * Card visual de um projeto: thumbnail (opcional), nome, descrição, techs e
 * botão "Ver no GitHub". Componente de apresentação puro — recebe `project`
 * via props, sem lógica de negócio nem busca de dados.
 * Usado em: /projects (lista completa) e home (destaques).
 */
export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card>
            {/* Thumbnail opcional — só renderiza se o projeto tiver imageUrl no projects.json */}
            {project.imageUrl && (
                <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
                    <Image
                        src={project.imageUrl}
                        alt={`Thumbnail do projeto ${project.name}`}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.techs.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline">
                    <ExternalLink href={project.githubUrl}>Ver no GitHub</ExternalLink>
                </Button>
            </CardFooter>
        </Card>
    )
}