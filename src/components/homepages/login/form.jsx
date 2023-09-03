import { React, useState } from 'react'
import { AiOutlineGoogle, AiFillApple } from 'react-icons/ai'

import ImageLogin from '../../../assets/imgPreApi/login.png'
import logo from '../../../assets/imgPreApi/logo.png'
import CountrySelector from './selector'
import { useAuthContext } from '../../../context/authContex'



//
export const Form = () => {
  const [selectedCountryName, setSelectedCountryName] = useState('');
  const [offer, setOffer] = useState('');
  const { login, setAuthToken, setUserId } = useAuthContext();

  const handleCountryChange = (countryName) => {
    setSelectedCountryName(countryName);
    // console.log(countryName)
  };

  const handleLogin = () => {
    login('client');
  }


  return (
    <div className='font-primary' >
      <div
        className='flex h-[100vh] flex-col relative'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${ImageLogin})`,
          backgroundSize: 'cover',

        }} >
        <div className='w-full'>
          <CountrySelector onCountryChange={handleCountryChange} />
        </div>
        <div className='flex items-center justify-center'>
          <img src={logo} alt="" />
        </div>

        <div className='absolute top-1/2  text-white  text-lg w-full '>
          <h1 className='text-center my-2 font-semibold'>Registrándote ahora tienes</h1>
          <h1 className='text-center text-5xl font-bold'>30% de</h1>
          <h1 className='text-center text-6xl font-bold font-londrina'>Cashback</h1>
          <h1 className='text-center my-2 font-thin text-sm'>*Válido para nuevos usuarios </h1>
          <div className='w-full flex  flex-col justify-center items-center'>
            
            <button
              className='w-3/4 bg-blue-400 p-1 flex items-center justify-center rounded-full mt-4'
              onClick={handleLogin}>
              <AiOutlineGoogle size={30} />
              <h1 className='font-bold ml-4'>Continúa con Google</h1>
            </button>

            <button
              className='w-3/4 bg-black p-1 flex items-center justify-center rounded-full my-4'
              onClick={handleLogin}>
              <AiFillApple size={30} />
              <h1 className='font-bold ml-4'>Continúa con Apple</h1>
            </button>

            <button
              className='w-3/4 p-1 flex items-center justify-center rounded-full bg-rose-600'
              onClick={handleLogin}>
              <h1 className='font-bold ml-4'>Ya tengo cuenta</h1>
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

