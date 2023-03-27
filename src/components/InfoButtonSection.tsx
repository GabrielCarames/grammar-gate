import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import Modal from "./Modal"
import ModalContent from "./ModalContent"

export default function InfoButtonSection() {
  const [showInfo, setShowInfo] = useState(false)
  const handleCloseModal = () => setShowInfo(!showInfo)

  return (
    <div className="w-max h-max rouned-full">
      <button className="w-max h-max rounded-full" onClick={handleCloseModal}>
        <InformationCircleIcon className="text-white w-8 lg:w-10 hover:text-pink-200 duration-150" />
      </button>
      {showInfo && (
        <Modal onClose={handleCloseModal}>
          <ModalContent />
        </Modal>
      )}
    </div>
  )
}
