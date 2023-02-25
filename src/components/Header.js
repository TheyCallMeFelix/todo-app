import { useEffect, useState } from "react";
import Modal from "./modal";


function Header() {
  const [openModal, setOpenModal] = useState(false)
  
  


  

  return  (
    <> 
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4'>
      <h1 className="text-2xl duration-300 hover:opacity-40 cursor-pointer sm:text-4xl select-none">Todo List</h1>
      <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-2xl duration-300 hover:opacity-40 cursor-pointer sm:text-4xl"></i>
      </div>
    </>
  )
}
export default Header