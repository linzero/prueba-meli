import React from 'react'

export const DetailComponent = ({ item = {}, description = {} }) => {
    return (
        <div className="bg-white p-6 border-rounded">
            <div className="d-block d-m-flex content-detail mb-3">
                <div className="detailImage">
                    <img src={ item.thumbnail } alt={ item.title } />
                </div>
                <div className="descItem">
                    <p className="text-dark-gray"><small>{ (item.condition === 'new') ? 'Nuevo' : 'Usado' } - { item.sold_quantity } vendidos</small></p>
                    <h1 className="mb-3">{ item.title }</h1>
                    <p className="price-content mb-3">${new Intl.NumberFormat().format(item.price)}</p>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>

            <div className="detailDescriptionContent">
                <h2 className="mb-3 fs-6">Descripción del producto</h2>
                <p className="text-dark-gray">{ description.plain_text }</p>
            </div>
        </div>
    )
}
