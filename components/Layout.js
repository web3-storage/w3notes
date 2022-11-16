import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <main>
      <nav className="flex flex-row items-center px-4 py-2 space-x-8">
        <div className="font-extrabold text-2xl text-gradient">⁂</div>
        <Link className="font-bold text-gradient-with-hover" href="/">create</Link>
        <Link className="font-bold text-gradient-with-hover" href="/notes">list</Link>
      </nav>
      {children}
    </main>
  )
}