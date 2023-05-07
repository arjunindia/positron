import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/badge'
import type { FormEvent } from 'react'
import { useState } from 'react'

interface Movie {
  '#TITLE': string
  '#YEAR': number
  '#IMDB_ID': string
  '#RANK': number
  '#ACTORS': string
  '#AKA'?: string
  '#IMDB_URL': string
  '#IMDB_IV': string
  '#IMG_POSTER': string
  photo_width: number
  photo_height: number
}
interface DataFetched {
  ok: boolean
  description: Array<Movie>
  error_code: number
}

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([])

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
  }
  return (
    <div className="my-5 text-slate-100 w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl">Search</h1>
      <Input className="mt-6 w-full" placeholder="Search..." onChange={inputHandler}></Input>
      {searchResults ? (
        searchResults.map((movie) => (
          <Card className="mt-6 flex items-center hover:bg-slate-800 cursor-pointer">
            <CardHeader>
              <img src={movie['#IMG_POSTER']} alt="" className="w-28 h-28 rounded" />
            </CardHeader>
            <CardContent className="flex gap-6 justify-start items-baseline">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {movie['#TITLE']}
              </h2>
              <div className="flex gap-4">
                {movie['#ACTORS'].split(',').map((each) => (
                  <Badge>{each}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="mt-6 flex items-center hover:bg-slate-800 cursor-pointer">
          <h1>No results</h1>
        </div>
      )}
    </div>
  )
}

export default SearchPage
