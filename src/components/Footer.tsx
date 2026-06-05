import Link from "next/link"

export function Footer() {
  return (
    <nav className="border-b">
      {/* container mx-auto centraliza; flex-wrap evita overflow no mobile */}
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 px-4 py-4">
        <Link href="/" className="font-bold">Tania Rita</Link>
      </div>
    </nav>
  )
}