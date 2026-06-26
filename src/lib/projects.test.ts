import { getAllProjects, getFeaturedProjects, validateProject } from "./projects"

describe("getAllProjects", () => {
    it("retorna um array de projetos com os campos obrigatórios", () => {
        const projects = getAllProjects()
        expect(projects.length).toBeGreaterThan(0)
        projects.forEach((p) => {
            expect(p.name).toBeDefined()
            expect(p.description).toBeDefined()
            expect(Array.isArray(p.techs)).toBe(true)
            expect(p.githubUrl).toBeDefined()
        })
    })
})

describe("getFeaturedProjects", () => {
    it("retorna apenas projetos com featured === true", () => {
        const featured = getFeaturedProjects()
        featured.forEach((p) => {
            expect(p.featured).toBe(true)
        })
    })
})

describe("validateProject", () => {
    it("lança erro quando um campo obrigatório está ausente", () => {
        const semGithub = { name: "X", description: "Y", techs: ["TS"] } // falta githubUrl
        expect(() => validateProject(semGithub, 0)).toThrow()
    })

    it("lança erro quando techs não é um array de strings", () => {
        const techsErrado = { name: "X", description: "Y", techs: "TS", githubUrl: "https://gh/x" }
        expect(() => validateProject(techsErrado, 0)).toThrow()
    })

    it("retorna o projeto tipado quando a entrada é válida", () => {
        const valido = { name: "X", description: "Y", techs: ["TS"], githubUrl: "https://gh/x" }
        expect(validateProject(valido, 0)).toEqual(valido)
    })

    it("preserva campos opcionais (featured, imageUrl)", () => {
        const completo = {
            name: "X", description: "Y", techs: ["TS"], githubUrl: "https://gh/x",
            featured: true, imageUrl: "https://img/x.png",
        }
        expect(validateProject(completo, 0)).toEqual(completo)
    })

    it("preserva campos opcionais (featured, imageUrl)", () => {
        const completo = {
            name: "X", description: "Y", techs: ["TS"], githubUrl: "https://gh/x",
            featured: true, imageUrl: "https://img/x.png",
        }
        expect(validateProject(completo, 0)).toEqual(completo)
    })
})