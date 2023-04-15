export default function SkeletonText() {
  return (
    <div className="flex flex-col gap-2 w-full max-h-[240px] md:max-h-[480px] bg-white dark:bg-gray-1 h-max md:h-screen text-base lg:text-lg animate-pulse">
      <div className="w-full h-4 lg:h-5 bg-white-2 dark:bg-gray-2 rounded-md"></div>
      <div className="w-[75%] h-4 lg:h-5 bg-white-2 dark:bg-gray-2 rounded-md"></div>
      <div className="w-[25%] h-4 lg:h-5 bg-white-2 dark:bg-gray-2 rounded-md"></div>
      <div className="w-[50%] h-4 lg:h-5 bg-white-2 dark:bg-gray-2 rounded-md"></div>
    </div>
  )
}
