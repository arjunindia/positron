import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago'
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago'
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago'
  }
]
export default function Main() {
  return (
    <div className="my-5 text-slate-100">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl">
        Your Library
      </h1>
      <div className="mt-10">
        <div className="flex flex-wrap gap-6">
          <Card className="max-w-md">
            <CardHeader>
              <img src="https://picsum.photos/200" alt="" className="rounded-t-lg " />
            </CardHeader>
            <CardContent className="grid gap-4">
              <CardTitle className="">BooksBooksBooksBoo s</CardTitle>
              <CardDescription>
                View your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your books
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="max-w-md">
            <CardHeader>
              <img src="https://picsum.photos/200" alt="" className="rounded-t-lg " />
            </CardHeader>
            <CardContent className="grid gap-4">
              <CardTitle className="">BooksBooksBooksBoo s</CardTitle>
              <CardDescription>
                View your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your books
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="max-w-md">
            <CardHeader>
              <img src="https://picsum.photos/200" alt="" className="rounded-t-lg " />
            </CardHeader>
            <CardContent className="grid gap-4">
              <CardTitle className="">BooksBooksBooksBoo s</CardTitle>
              <CardDescription>
                View your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your books
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="max-w-md">
            <CardHeader>
              <img src="https://picsum.photos/200" alt="" className="rounded-t-lg " />
            </CardHeader>
            <CardContent className="grid gap-4">
              <CardTitle className="">BooksBooksBooksBoo s</CardTitle>
              <CardDescription>
                View your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your books
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="max-w-md">
            <CardHeader>
              <img src="https://picsum.photos/200" alt="" className="rounded-t-lg " />
            </CardHeader>
            <CardContent className="grid gap-4">
              <CardTitle className="">BooksBooksBooksBoo s</CardTitle>
              <CardDescription>
                View your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your books
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="max-w-md">
            <CardHeader>
              <img src="https://picsum.photos/200" alt="" className="rounded-t-lg " />
            </CardHeader>
            <CardContent className="grid gap-4">
              <CardTitle className="">BooksBooksBooksBoo s</CardTitle>
              <CardDescription>
                View your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your booksView your
                booksView your booksView your booksView your booksView your booksView your booksView
                your booksView your booksView your booksView your booksView your books
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
