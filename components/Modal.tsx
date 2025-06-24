import { GrMail } from "react-icons/gr";
import AnimateTxt from "./AnimateTxt";

const Modal = (props) => {
  const info = {
    message: "email me at:",
    email: "jessikagyllstrom@protonmail.com",
  };

  return (
    <>
      <div className="fixed inset-0 opacity-25 dark:bg-black"></div>
      <div className="fixed inset-0 flex justify-center items-center z-10">
        <div className="bg-gray-900 rounded-md px-5 py-3 border border-purple-600 transition duration-300 ease-in-out">
          <div
            className="text-right cursor-pointer text-gray-300 hover:text-purple-600 hover:font-semibold transition duration-300 ease-in-out"
            onClick={() => props.setModalState(false)}
          >
            x
          </div>
          <AnimateTxt>
            <div className="flex flex-col font-xs mb-3 text-center items-center">
              <GrMail
                size={24}
                className="icon mx-2 text-purple-600 hover:text-white transition duration-300 ease-in-out cursor-pointer mb-2"
              />
              <p className="text-white">{info.message}</p>
              <p className="text-white">{info.email}</p>
            </div>
          </AnimateTxt>
        </div>
      </div>
    </>
  );
};

export default Modal;
