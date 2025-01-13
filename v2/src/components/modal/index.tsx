import Button from "../button"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}

export default function Modal({ isOpen, onClose, title, message }: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-md flex flex-col gap-1"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{message}</p>
        <Button
          onClick={onClose}
          className="w-full sm:self-center"
        >
          Fechar
        </Button>
      </div>
    </div>
  )
}
