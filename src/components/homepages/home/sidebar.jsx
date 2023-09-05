import React, { useEffect, useState, useRef } from 'react'
import { useAuthContext } from '../../../context/authContex'

import imgUser from '../../../assets/imgPreApi/usuario.png'

import { BiSolidUser } from 'react-icons/bi';
import { BsTrophy } from 'react-icons/bs';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { RiCoupon2Fill } from 'react-icons/ri';
import { BiSolidGift } from 'react-icons/bi';
import { IoIosHelpCircle } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';


export const Sidebar = (props) => {
    const containerRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const { logout } = useAuthContext()

    const handleSelected = (item) => {
        setSelectedItem(item)
        if (item === '7') {
            logout()
        }

    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                props.handleClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Remover el event listener cuando el componente se desmonta
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div className='fixed z-10'>
            <div
                className={` ${props.sideBarOpen ? "w-60" : "w-[0px] "
                    } bg-white h-screen   pt-8 relative duration-300`}
                ref={containerRef}
            >

                <div className="flex flex-col gap-x-4 items-center mt-6">
                    <img
                        src={imgUser}
                        className={`h-[10vh] rounded-full cursor-pointer duration-500 ${props.sideBarOpen && "rotate-[360deg] bg-red-600 p-1"
                            }`}
                    />
                    <h1
                        className={`text-black  text-md font-thin duration-200 ${!props.sideBarOpen && "scale-0"
                            }`}
                    >
                        Hola, <span className='font-bold'>Juan Gonzales</span>
                    </h1>
                </div>

                <ul className={`mt-4 ${!props.sideBarOpen && "hidden"} `}>
                    <li>
                        <div
                            onClick={() => handleSelected('1')}
                            className={`flex w-full pl-8 justify-left items-center h-[10vh] border-b border-gray-500 
                            ${selectedItem === '1' ? 'bg-red-600 text-white' : null}`}
                        >
                            <BiSolidUser size={25} className={`text-black  ${selectedItem === '1' ? ' text-white' : null}`} />
                            <h1 className='font-thin mx-2'>Mi cuenta</h1>
                        </div>
                    </li>

                    <li>
                        <div
                            onClick={() => handleSelected('2')}
                            className={`flex w-full pl-8 justify-left items-center h-[10vh] border-b border-gray-500 
                        ${selectedItem === '2' ? 'bg-red-600 text-white' : null}`}>
                            <BsTrophy size={25} className='' />
                            <h1 className='font-thin mx-2'>Recompensas</h1>
                        </div>
                    </li>

                    <li>
                        <div
                            onClick={() => handleSelected('3')}
                            className={`flex w-full pl-8 justify-left items-center h-[10vh] border-b border-gray-500 
                        ${selectedItem === '3' ? 'bg-red-600 text-white' : null}`}>
                            <LiaFileInvoiceSolid size={25} className='' />
                            <h1 className='font-thin mx-2'>Mis compras</h1>
                        </div>
                    </li>


                    <li>
                        <div
                            onClick={() => handleSelected('4')}
                            className={`flex w-full pl-8 justify-left items-center h-[10vh] border-b border-gray-500 
                        ${selectedItem === '4' ? 'bg-red-600 text-white' : null}`}>
                            <RiCoupon2Fill size={25} className='rotate-90' />
                            <h1 className='font-thin mx-2'>Mis compras</h1>
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => handleSelected('5')}
                            className={`flex w-full pl-8 justify-left items-center h-[10vh] border-b border-gray-500 
                        ${selectedItem === '5' ? 'bg-red-600 text-white' : null}`} >
                            <BiSolidGift size={25} />
                            <h1 className='font-thin mx-2'>Invitar amigos</h1>
                        </div>
                    </li>

                    <li>
                        <div
                            onClick={() => handleSelected('6')}
                            className={`flex w-full pl-8 justify-left items-center h-[10vh] border-b border-gray-500 
                            ${selectedItem === '6' ? 'bg-red-600 text-white' : null}`}>
                            <IoIosHelpCircle size={25} />
                            <h1 className='font-thin mx-2'>¿Necesitas Ayuda?</h1>
                        </div>
                    </li>


                    <li>
                        <div
                            onClick={() => handleSelected('7')}
                            className={`flex w-full pl-8 justify-left items-center h-[10vh] border-b border-gray-500 
                            ${selectedItem === '7' ? 'bg-red-600 text-white' : null}`}>
                            <FiLogOut size={25} />
                            <h1 className='font-thin mx-2'>Cerrar sesión</h1>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}
