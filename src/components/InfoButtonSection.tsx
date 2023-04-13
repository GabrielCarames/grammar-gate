import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { type FC, useState } from "react"
import Modal from "./Modal"
import ModalContent from "./ModalContent"

const InfoButtonSection: FC = () => {
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

export default InfoButtonSection
