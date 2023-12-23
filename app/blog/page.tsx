// 

// export default function Page() {
//   return (
//     <>
//     
//       <h1>This is my blog page.</h1>


//     </>
//   );
// }



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0pZ1gwMbTtV
 */
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Navbar from '@/components/Navbar';


export default function Component() {
  return (
    <div className="flex flex-col h-screen justify-between bg-black">
      <Navbar />
      <header className="flex h-20 w-full items-center px-4 md:px-6">
        <Link href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Blog Inc</span>
        </Link>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 grid gap-4 lg:grid-cols-[2fr_1fr]">
        <section>
          <h1 className="text-4xl font-bold mb-8 text-white">Latest Posts</h1>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Blog Post Title</h2>
              <p className="text-sm text-gray-500">Posted on December 23, 2023</p>
            </CardHeader>
            <CardContent>
              <p>This is a brief excerpt from the blog post. Click on the title to read more.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Another Blog Post Title</h2>
              <p className="text-sm text-gray-500">Posted on December 22, 2023</p>
            </CardHeader>
            <CardContent>
              <p>This is a brief excerpt from another blog post. Click on the title to read more.</p>
            </CardContent>
          </Card>
        </section>
        <aside>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Categories</h2>
            <Link className="block mb-2" href="#">
              Category 1
            </Link>
            <Link className="block mb-2" href="#">
              Category 2
            </Link>
            <Link className="block mb-2" href="#">
              Category 3
            </Link>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Recent Posts</h2>
            <Link className="block mb-2" href="#">
              Recent Post 1
            </Link>
            <Link className="block mb-2" href="#">
              Recent Post 2
            </Link>
            <Link className="block mb-2" href="#">
              Recent Post 3
            </Link>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Search</h2>
            <input aria-label="Search" className="w-full p-2 border rounded-md" placeholder="Search..." type="text" />
          </div>
        </aside>
      </main>
      <footer className="h-20 flex items-center justify-center border-t">
        <p className="text-center text-sm">© 2023 Blog Inc</p>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
