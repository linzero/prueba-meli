import React from 'react'
import queryString from 'query-string'

export const SearchComponent = () => {

    const search = queryString.parse(window.location.search).search  

    return (
        <>
            <form action="/items" className="content_search">
                <input defaultValue={ search } name="search" className="input_search" placeholder="Buscar productos..." />
                <button className="button_search">
                    <img alt="Logo Mercadolibre" src={'../assets/images/icone-loupe-gris.png' } />
                </button>
            </form>   
        </>
    )
}
