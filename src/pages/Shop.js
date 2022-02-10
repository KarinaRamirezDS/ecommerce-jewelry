import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { getShopThunk, filterCategoryThunk, getCategoriesThunk, filterContainNameThunk } from "../redux/actions";

const Shop = () => {

    

    const dispatch = useDispatch();

    const shopList = useSelector(state => state.shopList);
    const categories = useSelector(state => state.categories);

    const [ search, setSearch ] = useState("");

    useEffect(() => {
      dispatch(getShopThunk());
      dispatch(getCategoriesThunk());
    }, [dispatch]);

    const filterCategory = id => dispatch(filterCategoryThunk(id));

    const filterHeadline = e => {
        e.preventDefault();
        dispatch(filterContainNameThunk(search));
    }

    

    return (
        <div>
         <section> </section>
         
            <p className='frase'>"Jewelry is not meant to make you feel rich and ostentatious, but to adorn you in a delicate and classy way." <br></br><b>Coco Chanel</b> </p> <hr></hr>
          
          <div className="category">

            <ul>
                {
                    categories.map(category => ( 
                        <li key={category.id}>
                            <button onClick={() => filterCategory(category.id)}>
                               |{category.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
            
        </div>

            <form onSubmit={filterHeadline} className="search">
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Search...'/>
                <button> <i className="fas fa-search"></i></button>
            </form>


            <div className="productos">
                {
                shopList.map(shop => (
                    <div className='card' key={shop.id}>
                    <Link className="linkCard" to={`/shop/${shop.id}`}  >
                        
                        

                        <div className="cardImage">
                            <img className="imagenLista" src={shop.images[0]?.url} alt='jewrely'/>
                            <img className="imagenLista2" src={shop.images[1]?.url} alt='jewrely'/>
                        </div>
                        <h1 >{shop.name}</h1> 
                       
                        <p>$ {shop.price}</p>
                      
                    </Link>
                  
                    </div>
                    
                ))
                
                }

            </div>
        
            
        </div>
    );
};

export default Shop;

