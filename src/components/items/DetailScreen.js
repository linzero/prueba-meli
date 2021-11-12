import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { enviroment } from '../../enviroment/enviroment';
import { DetailComponent } from './detail/DetailComponent';

export const DetailScreen = () => {

    let { id } = useParams();

    const [description, setDescription] = useState([])
    const [item, setItem] = useState(false)
    // const [categories, setCategories] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect( () => {


        const getDetail = async () => {
            try{
                setLoading(true)
                const url = `${ enviroment.api_base_url }/items/${ id }`;
                const resp = await fetch( url ) ;
                const { item, description } = await resp.json(); 

                setDescription( description );
                setItem( item );
                // setCategories( item );
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }

        getDetail();
    }, [id])


    return (
        <div className="items_screen_content">
            <div className="container p-3">
                {/* <div className="mb-3">
                    {   
                        categories.map((cat, index) => {
                            if (index < 6) {
                                if (index < categories.length-1 && index !== 5) {
                                    return <span className="text-dark-gray" key={cat['id']}> {cat['name']} <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg> </span>
                                } else {
                                    return <span className="text-dark-gray" key={cat['id']}> {cat['name']} </span>
                                }
                            }
                        })
                    }
                </div> */}
                {
                   (item && !isLoading) ?  <DetailComponent item={item} description={description} /> : !isLoading && <div>No se encontraron resultados</div>
                }
            </div>
        </div>
    )
}
