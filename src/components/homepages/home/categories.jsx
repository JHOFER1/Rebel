import React from 'react'
//categorias
import comida from '../../../assets/imgPreApi/categorias/comida.png'
import eventos from '../../../assets/imgPreApi/categorias/eventos.png'
import juegos from '../../../assets/imgPreApi/categorias/juegos.png'
import lifeStyle from '../../../assets/imgPreApi/categorias/lifeStyle.png'
import ropa from '../../../assets/imgPreApi/categorias/ropa.png'
import tecnologia from '../../../assets/imgPreApi/categorias/tecnologia.png'

const imagenes = [juegos,comida, eventos,  lifeStyle, ropa, tecnologia];


export const Categories = () => {
    return (
        <div className='flex'>
            {imagenes.map((imagen, index) => (
                <img key={index} src={imagen} alt={`Imagen ${index}`} className="mx-1" />
            ))}
        </div>
    )
}
