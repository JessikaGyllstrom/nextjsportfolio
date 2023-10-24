import { GrMail } from 'react-icons/gr'

const Modal = props => {

  const info = {
    message: "Contact me at:",
    email: "jessikagyllstrom@protonmail.com"

  }
  return (
    <>
      <div className="fixed inset-0 opacity-25 bg-black">
      </div>
      <div className="fixed inset-0 flex justify-center items-center z-10">
        <div className="bg-gray-900 rounded-md p-3">
          <div className="text-right cursor-pointer text-gray-500 bg-gray-900" onClick={() => props.setModalState(false)}>
            x
          </div>
          <div className="flex flex-col text-white font-xs mb-3 text-center items-center">
            <GrMail size={24} className='icon mx-2 text-purple-600 hover:text-white' />
            <p>{info.message}</p>
            <p>{info.email}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal