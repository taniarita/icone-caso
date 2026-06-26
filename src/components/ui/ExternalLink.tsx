// src/components/ui/ExternalLink.tsx
interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
}

/**
 * Wrapper para links EXTERNOS: aplica target="_blank" + rel="noopener noreferrer"
 * num só lugar (segurança contra tabnapping + abrir em nova aba).
 * Para navegação interna use o <Link> do next/link, não este componente.
 * Primitivo genérico (sem tipos do domínio) — candidato à futura lib.
 */
export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    )
}