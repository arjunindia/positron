import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { useLocalStorage } from 'usehooks-ts'
import type { Movie } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { Link } from 'wouter'
export default function Main() {
  const [library, setLibrary] = useLocalStorage<Movie[]>('library', [])
  return (
    <div className="my-5 text-slate-100">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl">
        Your Library
      </h1>
      <div className="mt-10">
        <div className="flex flex-wrap gap-6">
          {library.map((movie: Movie) => (
            <Link href={`/details/${movie['#IMDB_ID']}`} key={movie['#IMDB_ID']}>
              <Card className="max-w-md relative cursor-pointer">
                <CardHeader>
                  <img
                    src={movie['#IMG_POSTER']}
                    alt=""
                    className=" object-cover rounded-t-lg h-52"
                  />
                  <Button
                    className={`ml-auto mr-12 p-4 rounded-full bg-pink-600 text-white border hover:bg-opacity-20 absolute top-0 right-0`}
                    onClick={() => {
                      setLibrary((library: Movie[]) => {
                        if (library.find((each) => each['#IMDB_ID'] === movie['#IMDB_ID'])) {
                          return library.filter((each) => each['#IMDB_ID'] !== movie['#IMDB_ID'])
                        }
                        return [...library, movie]
                      })
                    }}
                  >
                    <Heart />
                  </Button>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <CardTitle className="">{movie['#TITLE']}</CardTitle>
                  <CardDescription>{movie['#ACTORS']}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
