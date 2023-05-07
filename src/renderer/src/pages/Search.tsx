import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/badge'
const SearchPage = () => {
  return (
    <div className="my-5 text-slate-100 w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl">Search</h1>
      <Input className="mt-6 w-full" placeholder="Search..."></Input>
      <Card className="mt-6 flex items-center hover:bg-slate-800 cursor-pointer">
        <CardHeader>
          <img
            src="https://picsum.photos/seed/picsum/200/200"
            alt=""
            className="w-28 h-28 rounded"
          />
        </CardHeader>
        <CardContent className="flex gap-6 justify-start items-baseline">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Movie</h2>
          <div className="flex gap-4">
            <Badge className="">Brad Pitt</Badge>
            <Badge className="">Brad Pitt</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SearchPage
