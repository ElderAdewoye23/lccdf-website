import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

function NotFound() {
  return (
    <section className="flex flex-grow flex-col items-center justify-center p-4 text-center">
      <div className="max-w-lg">
        <FaExclamationTriangle className="mx-auto mb-6 h-16 w-16 text-accent" />
        <h1 className="text-7xl font-bold font-heading text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-primary px-8 py-3.5 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
