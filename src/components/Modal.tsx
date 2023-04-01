import { XCircleIcon } from "@heroicons/react/24/solid"
import ReactDOM from "react-dom"

function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center items-center w-full h-screen z-10 bg-black bg-opacity-70">
      <section className="absolute w-full max-w-[400px] h-[650px] bg-white dark:bg-gray-2 z-10 px-1 text-gray-1 dark:text-white">
        <div className="h-full relative p-5">
          <button className="absolute right-5 top-3" onClick={onClose}>
            <XCircleIcon className="w-10 text-pink-300 hover:text-pink-400 duration-150" />
          </button>
          {children}
        </div>
      </section>
    </div>,
    document.getElementById("modal-root")!
  )
}

export default Modal
