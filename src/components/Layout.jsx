import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({ children }) {
return (
<div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
<Navbar />
<main className="flex-1 max-w-5xl mx-auto px-4 py-6 w-full">{children}</main>
<Footer />
</div>
)
}