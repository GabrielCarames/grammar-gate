import Link from "next/link"
import { type FC } from "react"

const NotFound: FC = () => {
  return (
    <div className="bg-white dark:bg-black">
      <main className="w-full h-screen flex justify-center items-center">
        <section className="flex flex-col items-center gap-5 px-5">
          <header className="flex flex-col gap-4 text-center">
            <h1 className="flex flex-col gap-10 items-center text-4xl font-bold text-text-gray dark:text-white">
              <span className="text-pink-1 text-7xl"> 404 </span>Page not found
            </h1>
            <p>The page you are looking for does not exist.</p>
          </header>
          <Link
            href="/"
            className="w-max p-5 py-2 rounded-full text-sm md:text-md font-bold duration-200 bg-pink-1 hover:bg-pink-2"
          >
            Go to Homepage
          </Link>
        </section>
      </main>
    </div>
  )
}

export default NotFound
