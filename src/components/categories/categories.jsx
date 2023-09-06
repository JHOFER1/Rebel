import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { Banners } from './banners'

function Categories(){
    const params=useParams()
    
    return(
     <div className='bg-primary font-primary min-h-screen'>
        <div className=' text-xl text-white flex justify-center font-semibold py-4'>
            {`${params.category}`} 
        </div>
        <div className=''>
        <Banners/>
        </div>
        
     </div>
    )
} 

export default Categories