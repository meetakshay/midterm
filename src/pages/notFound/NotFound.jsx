import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col h-[84vh] bg-gray-100 dark:bg-blue-100">
       
    <main className="flex-1 flex flex-col items-center justify-center gap-4 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">Oops! Page not found.</h1>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to='/'
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
       
      >
        Go back to homepage
      </Link>
    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© Shoplane E-commerce. All rights reserved.</p>
    </footer>
  </div>
  )
}

export default NotFound;




// function ShoppingCartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="21" r="1" />
//       <circle cx="19" cy="21" r="1" />
//       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//     </svg>
//   )
// }
