import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services/firebase/FireStore.js';

function ItemDetailContainer({ greeting, items }) {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    useEffect(() => {
        getItem(itemid).then(respuestaPromise => {
            setProducto(respuestaPromise);
        });
        // .catch(errorPromise => {
        //     console.error(errorPromise);
        // });
    }, [itemid]);

    return (
        <section id="menu" className="text-center container">

            <div className="album bg-degrade">
                <div className="container">
                    <div className="">
                        <ItemDetail detalle={producto} />
                    </div></div></div>
        </section>


    );
}

export default ItemDetailContainer;