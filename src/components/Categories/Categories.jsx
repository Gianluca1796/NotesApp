import React from 'react'
import './Categories.css'

const Categories = () => {
    return (
        <>
            <h2>Utiliza estas categorías para ordenar tus notas!</h2>
            <div className='categories-container'>
                <p>Hogar</p>
                <div className='category-color-home'></div>
                <p>Trabajo</p>
                <div className='category-color-work'></div>
                <p>Ocio</p>
                <div className='category-color-hobby'></div>
                <p>Trámites</p>
                <div className='category-color-formalities'></div>
                <p>Recordatorios</p>
                <div className='category-color-remember'></div>
                <p>Compras</p>
                <div className='category-color-shop'></div>
            </div>
        </>
    )
}

export default Categories