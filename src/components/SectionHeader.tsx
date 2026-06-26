import type { ReactNode } from "react"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    children?: ReactNode  // ex: um link "ver todos" alinhado à direita
}

/**
 * Cabeçalho de seção reutilizável: título + subtítulo opcional.
 * Responsabilidade única: apresentar o título de um bloco de conteúdo.
 * Não navega — um link "ver todos" vai no slot `children` (à direita).
 * Usado em: home (seções de destaque) e páginas de listagem.
 */
export function SectionHeader({ title, subtitle, children }: SectionHeaderProps) {
    return (
        <div className="flex items-end justify-between mb-6">
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
            </div>
            {children}
        </div>
    )
}