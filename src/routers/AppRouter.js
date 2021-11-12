import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { SearchComponent } from '../components/search/SearchComponent';
import { ItemsRouter } from './ItemsRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    
                    <div className="container d-flex">
                        <ul className="p-0">
                            <Link to="/">
                                <img alt="Logo Mercadolibre" src={'../assets/images/logo_mercadolibre.png' } />
                            </Link>
                        </ul>

                        <SearchComponent/>
                    </div>
                    
                </nav>
                <Routes> 
                    {/* Products Route */}
                    <Route 
                        path="items/*"
                        element={ <ItemsRouter/> }
                    />
                </Routes>
            </div>
        </Router>
    )
}
