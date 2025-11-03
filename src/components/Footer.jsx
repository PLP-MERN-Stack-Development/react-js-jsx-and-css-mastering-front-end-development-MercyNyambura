import React from 'react'


export default function Footer() {
const year = new Date().getFullYear()
return (
<footer className="w-full border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mt-8">
<div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
<div>© {year} TaskApp. All rights reserved.</div>
<div className="space-x-3">
<a href="#">Privacy</a>
<a href="#">Terms</a>
</div>
</div>
</footer>
)
}