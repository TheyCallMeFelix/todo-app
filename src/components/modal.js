import {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import { useAuth } from 'context/AuthContext.js'


function Modal (props) {
    const {setOpenModal} = props
    const[_document, set_document] = useState(null)
    const { logout } = useAuth()

    useEffect(() => {
        set_document(document)
    }, [])

    if (!_document) { return null }

    return ReactDom.createPortal (
    <div className='fixed w-screen h-screen top-0 left-0 bg-white text-slate-900 flex flex-col'>
        <div className='flex items-center justify-between border-b border-solid border-slate-900 p-4'>
            <h1 className='font-extrabold select-none text-2xl sm:text-4xl'>Menu</h1>
            <i onClick={() => setOpenModal(false)} className="fa-solid fa-xmark select-none cursor-pointer duration-300 hover:rotate-90"></i>
        </div>
        <div className='p-4 flex flex-col gap-3'>
        <h2 onClick={() => {
            logout()
            setOpenModal(false)
        }} className='select-none duration-300 hover:pl-2 cursor-pointer'>Logout</h2>
        </div>
    </div>, 
    _document.getElementById('portal')
  )
}
export default Modal;