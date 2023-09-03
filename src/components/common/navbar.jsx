import React, { useState } from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsTrophy } from 'react-icons/bs';
import { GoHomeFill, GoBellFill } from 'react-icons/go';
import { BiSolidUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // Estado para el enlace activo
  const navigate = useNavigate(); // Obtener la función de navegación

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    // Utiliza navigate para redirigir a la ruta correspondiente según el nombre del enlace
    switch (linkName) {
      case 'home':
        navigate('/user');
        break;
      case 'trophy':
        navigate('/user'); // Reemplaza '/trophy' con la ruta deseada para 'trophy'
        break;
      case 'bell':
        navigate('/user'); // Reemplaza '/bell' con la ruta deseada para 'bell'
        break;
      case 'user':
        navigate('/user'); // Reemplaza '/user' con la ruta deseada para 'user'
        break;
      default:
        break;
    }
  };

  // Función para aplicar un estilo condicionalmente al icono en función del enlace activo
  const getIconStyle = (linkName) => {
    return activeLink === linkName ? { color: '#C3003C' } : {};
  };

  return (
    <nav className='fixed bottom-0 lg:bottom-8 w-full overflow-hidden z-50 bg-primary'>
      <div className='container mx-auto'>
        <div className='w-full h-[75px] backdrop-blur-2x1 max-w-[460px] mx-auto px-5 flex justify-between items-center text-secondary'>
          <div
            onClick={() => handleLinkClick('home')}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <GoHomeFill size={30} style={getIconStyle('home')} />
          </div>
          <div
            onClick={() => handleLinkClick('trophy')}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsTrophy size={25} style={getIconStyle('trophy')} />
          </div>
          <div
            onClick={() => handleLinkClick('bell')}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <GoBellFill size={25} style={getIconStyle('bell')} />
          </div>
          <div
            onClick={() => handleLinkClick('user')}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiSolidUser size={25} style={getIconStyle('user')} />
          </div>
        </div>
      </div>
    </nav>
  );
};
