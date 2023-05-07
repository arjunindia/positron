import { Input } from '@/components/ui/Input'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { useLocalStorage, useDebounce } from 'usehooks-ts'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { Heart } from 'lucide-react'
import type { Movie } from '@/lib/types'
import { Link } from 'wouter'
interface DataFetched {
  ok: boolean
  description: Array<Movie>
  error_code: number
}

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([])
  const debouncedSearchResults = useDebounce(searchResults, 500)
  const [library, setLibrary] = useLocalStorage<Movie[]>('library', [])
  const inputHandler = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.trim() === '') {
      return
    }
    console.log(e.currentTarget.value.trim())
    fetch(
      `https://search.imdbot.workers.dev/?q=${encodeURIComponent(e.currentTarget.value.trim())}`
    )
      .then((res) => res.json())
      .then((data: DataFetched) => {
        if (data.ok) {
          setSearchResults(data.description)
        } else {
          console.log(data.error_code)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="my-5 text-slate-100 w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl ">Search</h1>
      <Input className="mt-6 w-full" placeholder="Search..." onChange={inputHandler}></Input>
      {debouncedSearchResults ? (
        debouncedSearchResults.map((movie) => (
          <SearchResult
            key={movie['#IMDB_ID']}
            imgSrc={movie['#IMG_POSTER']}
            title={movie['#TITLE']}
            actors={movie['#ACTORS']}
            library={library}
            setLibrary={setLibrary}
            movie={movie}
          />
        ))
      ) : (
        <div className="mt-6 flex items-center hover:bg-slate-800 cursor-pointer">
          <h1>No results</h1>
        </div>
      )}
    </div>
  )
}
function SearchResult({
  imgSrc,
  title,
  actors,
  library,
  setLibrary,
  movie
}: {
  imgSrc: string
  title: string
  actors: string
  library: Movie[]
  setLibrary: React.Dispatch<React.SetStateAction<Movie[]>>
  movie: Movie
}) {
  const [found, setFound] = useState(false)
  useDeepCompareEffect(() => {
    if (library.find((each) => each['#IMDB_ID'] === movie['#IMDB_ID'])) {
      setFound(true)
    }
  }, [library])
  return (
    <Link href={`/details/${movie['#IMDB_ID']}`}>
      <Card className="mt-6 flex items-center hover:bg-slate-800 cursor-pointer">
        <CardHeader className="w-28">
          <img src={imgSrc} alt="" className="w-28 h-28 object-cover rounded" />
        </CardHeader>
        <CardContent className="flex gap-6 justify-start items-baseline">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight whitespace-nowrap">
            {title}
          </h2>
          <div className="flex gap-4">
            {actors.split(',').map((each) => (
              <Badge>{each}</Badge>
            ))}
          </div>
        </CardContent>
        <Button
          className={`ml-auto mr-12 p-4 rounded-full ${
            found ? 'bg-pink-600' : 'bg-transparent'
          } text-white border hover:bg-opacity-20 h-full`}
          onClick={() => {
            setLibrary((library: Movie[]) => {
              if (library.find((each) => each['#IMDB_ID'] === movie['#IMDB_ID'])) {
                setFound(false)
                return library.filter((each) => each['#IMDB_ID'] !== movie['#IMDB_ID'])
              }
              setFound(true)
              return [...library, movie]
            })
          }}
        >
          <Heart />
        </Button>
      </Card>
    </Link>
  )
}
export default SearchPage
