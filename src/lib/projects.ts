import projectsData from "@/data/projects.json"
import type { Project } from "./types"

export function validateProject(raw: unknown, index: number): Project {
    const p = raw as Record<string, unknown>
    const erro = (campo: string) =>
        new Error(`Projeto inválido em projects.json [índice ${index}]: campo "${campo}" ausente ou com tipo errado`)

    if (typeof p.name !== "string") throw erro("name")
    if (typeof p.description !== "string") throw erro("description")
    if (!Array.isArray(p.techs) || !p.techs.every((t) => typeof t === "string")) throw erro("techs")
    if (typeof p.githubUrl !== "string") throw erro("githubUrl")

    return p as unknown as Project
}

// Retorna todos os projetos na ordem definida no JSON, já validados.
export function getAllProjects(): Project[] {
    return (projectsData as unknown[]).map(validateProject)
}

// Retorna apenas os projetos marcados como destaque
export function getFeaturedProjects(): Project[] {
    return getAllProjects().filter((p) => p.featured === true)
}