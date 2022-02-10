import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getShopDetailThunk, filterCategoryThunk,addProductCardThunk } from '../redux/actions';
import "./styles/ShopDetail.styles.css";

const ShopDetail = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const { id } = useParams();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0);

    const shopSelected = useSelector(state => state.shopDetail);
    const shopList = useSelector(state => state.shopList);


    useEffect(() => {
        dispatch(getShopDetailThunk(id));
    }, [ dispatch, id ]);

    
    //console.log(shop);
    
    useEffect(() => {
        if(shopSelected.category){
            dispatch(filterCategoryThunk(shopSelected.category?.id));
        }
    }, [ dispatch, shopSelected ]);

    const addToCart = () => {
        const carrito = {
            quantity: quantity,
            product: id
        }
        dispatch(addProductCardThunk((carrito)))
    }

    return (
        <div className="contenidoDetail">

            <div className='contenidoImagen'>
            <img className="imagenDetail" src={shopSelected?.images?.[0]?.url} alt='jewrely' alt={shopSelected.name}/>
            </div>

            <div className='contenidoDescription'> 
                <div>
                    <h1>{shopSelected.name}</h1>
                    <p>{shopSelected.description}</p>
                    <p> <b> $ {shopSelected.price} </b></p>
                </div>

                <div style={{display: "flex"}}>

                    <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 0}> <i className="fas fa-minus-circle"></i> </button>
                    <div><b> {quantity}  </b></div>
                    <button onClick={() => setQuantity(quantity + 1)}><i className="fas fa-plus-circle"></i></button>
                 </div>

                 <button onClick={addToCart}>Add to car  <i className="fas fa-cart-plus"></i></button><br></br>     
            
            
            </div>
           
               
            

            

            <div  className="relacion"> 
            <h3> Related </h3>
             <hr></hr>

                <div >
                    <ul className='relacionados'>
                    {
                        shopList.map(shops => (
                            <li key={shops.id}>
                                <Link to={`/shop/${shops.id}`}> 
                        
                                <img className="shopImage" src={shops?.images?.[0]?.url} alt='jewrely'/>
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ShopDetail;
