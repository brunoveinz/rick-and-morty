"use client"

import { useState } from "react"
import Link from "next/link"

const navItems = [
  { name: "Personajes", href: "/personajes" },
  { name: "Capitulos", href: "/capitulos" },
]

export default function PrincipalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-portalGreen shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Tu Empresa</span>
              <span className="ml-2 text-2xl font-bold text-green-400">Rick and Morty</span>
            </Link>
          </div>
          <div className="hidden space-x-8 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <span 
                  aria-hidden="true" 
                  className={`block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></span>
                <span 
                  aria-hidden="true" 
                  className={`block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'mt-1.5'
                  }`}
                ></span>
                <span 
                  aria-hidden="true" 
                  className={`block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'mt-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}