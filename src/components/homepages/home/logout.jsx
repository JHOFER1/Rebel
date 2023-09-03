import React from 'react'
import { useAuthContext } from '../../../context/authContex'

export const Logout = () => {
    const { logout } = useAuthContext()
    const handelLogout = () => {
        logout();
    }

    return (
        <div className='flex justify-center'>
            <button
                className='w-2/4 p-1 flex items-center justify-center rounded-full bg-rose-600'
                onClick={handelLogout}>
                Logout
            </button>
        </div>
    )
}
