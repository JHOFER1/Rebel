import React from 'react'
//img PreApi
import img1 from '../../../assets/imgPreApi/recargas/1.png'
import img2 from '../../../assets/imgPreApi/recargas/2.png'
import img3 from '../../../assets/imgPreApi/recargas/3.png'
import img4 from '../../../assets/imgPreApi/recargas/4.png'
import img5 from '../../../assets/imgPreApi/recargas/5.png'
import img6 from '../../../assets/imgPreApi/recargas/6.png'
import img7 from '../../../assets/imgPreApi/recargas/7.png'
import img8 from '../../../assets/imgPreApi/recargas/8.png'
import img9 from '../../../assets/imgPreApi/recargas/9.png'
import img10 from '../../../assets/imgPreApi/recargas/10.png'
import img11 from '../../../assets/imgPreApi/recargas/11.png'
import img12 from '../../../assets/imgPreApi/recargas/12.png'

const destacados = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
const name=[ 'Free Fire', 'COD mobile', 'Clash Royale', 'Nintendo Shop', 'Fifa Mobile', 'PS Store', 'Game', 'Stumble Guys', 'Pug Mobile', 'Xbox', 'Minecraft', 'Game2']

export const Recharge = () => {
    return (
        <>
            <h1 className='text-center font-primary text-white my-2 text-xl font-semibold'>Recargas</h1>
            <div className='flex flex-wrap justify-center mx-1 '>
                {destacados.map((imagen, index) => (
                    <div key={index} className='flex flex-col'>
                    <img key={index} src={imagen} alt={`Imagen ${index}`} className="m-1" />
                    <h1 className='text-white text-xs text-center'>{name[index]}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}
