import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Eating</span>
              <span>Wagyu</span>
            </h1>
            <h2>Is my dream</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Wagyu Heaven :)</p>
      </footer>
    </div>
  )
}