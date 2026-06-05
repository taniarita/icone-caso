import Link from "next/link"

export function NavBar() {
  return (
    <nav className="border-b">
      {/* container mx-auto centraliza; flex-wrap evita overflow no mobile */}
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-bold">Ícone Caso</Link>
        <div className="flex flex-wrap gap-4">
          <Link href="/texts">Textos</Link>
          <Link href="/projects">Projetos</Link>
          <Link href="/about">Sobre</Link>
        </div>
      </div>
    </nav>
  )
}