import { useLocalStorage } from 'usehooks-ts'
import type { Movie } from '@/lib/types'
export default function Details() {
  const [library, setLibrary] = useLocalStorage<Movie[]>('library', [])
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl"></h1>
    </div>
  )
}
