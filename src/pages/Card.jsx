import "./styles/Card.styles.css";
import React, { useEffect } from 'react';
import { getProductsThunk, deleteProductCarThunk } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Card = () => {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.productos);
  //console.log(productos);

  useEffect(() => dispatch(getProductsThunk()), [dispatch]);

  const deleteProductCar = id => {
    dispatch(deleteProductCarThunk(id));
  }

  return (
    <div className="contenidoShop">
     <h1><i className="fas fa-clipboard-list"></i> List of articles </h1>
      <div className="cardShop">
         
      
        <ul >
        {
          productos.map(producto => (
            <li className='cardCar' key={producto.id}>
            <img className="imagenCard" src={producto?.product?.images?.[0]?.url} alt='jewrely'/>
            <Link className='linkListaCar'  to={`/shop/${producto.product.id}`} >{producto.product.name} <p>${producto.product.price}</p></Link>
            <button onClick={() => deleteProductCar(producto.id)}><i className="fas fa-trash-alt"></i></button>
            </li>
           
          ) )
          
        }
        <p>{productos.length}</p>
        <p>{productos?.price}</p>

        </ul>
       
      </div>
     
    </div>
  );
};

export default Card;
