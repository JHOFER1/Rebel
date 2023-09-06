import React from 'react'
//categorias
import comida from '../../../assets/imgPreApi/categorias/comida.png'
import eventos from '../../../assets/imgPreApi/categorias/eventos.png'
import juegos from '../../../assets/imgPreApi/categorias/juegos.png'
import lifeStyle from '../../../assets/imgPreApi/categorias/lifeStyle.png'
import ropa from '../../../assets/imgPreApi/categorias/ropa.png'
import tecnologia from '../../../assets/imgPreApi/categorias/tecnologia.png'
import { Link } from 'react-router-dom'

const imagenes = [juegos, comida, eventos, lifeStyle, ropa, tecnologia];
const links = ['Juegos','Comida', 'Eventos', 'LifeStyle', 'Ropa', 'Tecnologia'];


export const Categories = () => {
    return (
        <div className='flex'>
            {imagenes.map((imagen, index) => (
                
                <Link key={index} to={`categories/${links[index]}`}>
                <img key={index} src={imagen} alt={`Imagen ${index}`} className="mx-1" />
                </Link>
            ))}
        </div>
    )
}
