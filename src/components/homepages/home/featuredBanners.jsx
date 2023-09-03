import React from 'react'
//img PreApi
import img1 from '../../../assets/imgPreApi/destacadosbanner/1.png'
import img2 from '../../../assets/imgPreApi/destacadosbanner/2.png'
const destacados = [img1, img2];

export const FeaturedBanner = () => {
    return (
        <>
        {/* <h1 className='text-center font-primary text-white my-2 text-xl'>DESTACADOS</h1> */}
        <div className='flex flex-col justify-center px-2 '>
            {destacados.map((imagen, index) => (
                <img key={index} src={imagen} alt={`Imagen ${index}`} className="mx-1 my-1" />
            ))}
        </div>
        </>
    )
}
