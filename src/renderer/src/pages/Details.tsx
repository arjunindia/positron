import { useLocalStorage } from 'usehooks-ts'
import type { Movie } from '@/lib/types'
import { useLocation } from 'wouter'
import { useEffect, useState } from 'react'
export default function Details() {
  const [library, _] = useLocalStorage<Movie[]>('library', [])
  const [location, setLocation] = useLocation()
  const [moreInfo, setMoreInfo] = useState<any>()

  useEffect(() => {
    fetch(`https://search.imdbot.workers.dev/?tt=${location.split('/')[2]}`)
      .then((res) => res.json())
      .then((data: any) => {
        setMoreInfo(data)
      })
  }, [])
  useEffect(() => {
    if (location.split('/')[2] === undefined) {
      setLocation('/')
    }
  }, [location])
  const thisMovie = library.find((each) => each['#IMDB_ID'] === location.split('/')[2])
  return (
    <div className="my-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl mb-10">
        {thisMovie?.['#TITLE']}
      </h1>
      {moreInfo ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Plot</h1>
            <p>{moreInfo.top.plot.plotText.plainText}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Actors</h1>
            <p>{moreInfo.short.actor.map((ac) => `${ac.name},`)}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Genre</h1>
            <p>{moreInfo.short.genre.join(', ')}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Date Published</h1>
            <p>{moreInfo.short.datePublished}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      )}
    </div>
  )
}
