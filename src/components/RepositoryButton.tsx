import Link from "next/link"
import GithubIcon from "../../public/github-icon.svg"
import { useRouter } from "next/router"

const RepositoryButton = () => {
  const router = useRouter()

  return (
    <p className="flex gap-2 w-full justify-center">
      Made by
      <Link
        href="https://github.com/GabrielCarames/grammar-checker"
        className={`font-semibold ${
          router.pathname === "/grammar-checker" && "text-pink-1 dark:text-pink-400"
        } ${router.pathname === "/text-summarizer" && "text-green-1 dark:text-green-400"} ${
          router.pathname === "/translator" && "text-orange-500 dark:text-orange-400"
        } `}
        target="_blank"
      >
        <span className="flex justify-center items-center gap-2">
          <GithubIcon className="w-5 h-5" />
          Gabriel Caramés
        </span>
      </Link>
    </p>
  )
}

export default RepositoryButton
