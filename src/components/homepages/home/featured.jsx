import React from 'react'
//img PreApi
import img1 from '../../../assets/imgPreApi/destacados/1.png'
import img2 from '../../../assets/imgPreApi/destacados/2.png'
import img3 from '../../../assets/imgPreApi/destacados/3.png'
const destacados = [img1, img2, img3];

export const Featured = () => {
    return (
        <>
        <h1 className='text-center font-primary text-white my-2 text-xl font-semibold'>DESTACADOS</h1>
        <div className='flex flex-wrap justify-center mx-1'>
            {destacados.map((imagen, index) => (
                <img key={index} src={imagen} alt={`Imagen ${index}`} className="mx-1" />
            ))}
        </div>
        </>
    )
}
