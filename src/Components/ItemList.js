import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'
import '../index.css'

const url = 'https://dummyjson.com/products';
const options = {

    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
    params: {
        country: 'us',
        lang: 'en',
        currentpage: '0',
        pagesize: '30',
    },
    headers: {
        'X-RapidAPI-Key': '786f2d1c44msh787c645bf650a0bp1049bfjsn2b8f004236fb',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }

}

const ItemList = () => {

    const [items, setItems] = useState([]);
    
    // const getItems = async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     console.log(data)

    //     return data;
    // }

    // useEffect(() => {
    //     const fetchItems = async () => {
    //         const data = await getItems();
    //         setItems(data.products);
    //     }

    //     fetchItems();
    // },[]);

    const fetchItems = () => {
        
        return axios.request(options)
            .then(response => response.data.results)
            .catch(e => {
                console.log(e);
            })

    }

    useEffect(() => {

        fetchItems()
            .then(data => {
                setItems(data);
            })
            .catch( e => {
                throw e
            })

    }, []);

    return(
        <div className='item_list_holder'>
            {items.map((item) => {
                return (
                    <Item key={item.pk}
                         title={item.name}
                         rating={0}
                         description={'pepe'}
                         price={item.price.value}
                         stock={item.stock.stockLevel}
                         thumbnail={item.images[0].baseUrl}/>
                )
            })}
        </div>
    );

}
// id, thumbnail, title, rating, description, price, stock
export default ItemList;