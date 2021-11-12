import React from 'react'
import { Routes, Route } from 'react-router'
import { DetailScreen } from '../components/items/DetailScreen'
import { ItemsScreen } from '../components/items/ItemsScreen'

export const ItemsRouter = () => {
    return (
        <div>
            <Routes>

                <Route 
                    exact
                    path="/"
                    element={ <ItemsScreen/> }
                />


                <Route 
                    exact
                    path="/:id"
                    element={ <DetailScreen/> }
                />
            </Routes>
        </div>
    )
}
