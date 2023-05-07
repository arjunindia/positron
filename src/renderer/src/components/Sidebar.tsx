import { Link } from 'wouter'
// Tailwind sidebar that works with @shadcn/ui
const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 fixed">
      <nav className="flex flex-col justify-start flex-1 mt-6">
        <Link href="/">
          <span className="mx-2 my-3 cursor-pointer">Library</span>
        </Link>
        <Link href="/search">
          <span className="mx-2 my-3 cursor-pointer">Search</span>
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar
