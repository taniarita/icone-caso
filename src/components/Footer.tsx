import Link from "next/link"

/**
 * Rodapé do site (chrome). Renderizado uma vez no layout raiz, aparece em
 * todas as páginas.
 */
export function Footer() {
  return (
    <footer className="border-t">
      {/* container mx-auto centraliza; flex-wrap evita overflow no mobile */}
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 px-4 py-4">
        <Link href="/" className="font-bold">Ícone Caso</Link>
      </div>
    </footer>
  )
}