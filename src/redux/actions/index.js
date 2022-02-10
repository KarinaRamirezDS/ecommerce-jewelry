import axios from "axios";
import { getConfig } from "../../utils";


// 1. Declarar la propiedad en el objeto actions
// 2. Hacer el case en el switch
// 3. Crear la función en el action generator
// 4. Despachar la función en el componente donde la vayamos a usar

export const actions = {
  setShopList: "SET_SHOP_LIST",
  setShopDetail: "SET_SHOP_DETAIL",
  setIsLoading: "SET_IS_LOADING",
  setCategories: "SET_CATEGORIES",
  setProductos: "SET_PRODUCTOS",
  setUserRegister: "SET_USER_REGISTER"
  
}
export const setShopList = shop =>({
  type: actions.setShopList,
  payload: shop
});

export const setIsLoading = isLoading => ({
  type: actions.setIsLoading,
  payload: isLoading
});

export const setShopDetail = shop => ({
  type: actions.setShopDetail,
  payload: shop
});

export const setCategories = categories => ({
  type: actions.setCategories,
  payload: categories
});
export const setProductos = productos => ({
  type: actions.setProductos,
  payload: productos
});

export const setUserRegister = userRegister => ({
  type: actions.setUserRegister,
  payload: userRegister
});


export const getShopThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get('https://ecommerce-exercise-backend.herokuapp.com/products/', getConfig())
      .then(res => dispatch(setShopList(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
  
      
  };
};

export const getShopDetailThunk = id => {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
      .then(res => dispatch(setShopDetail(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
  
      
  };
};


export const getCategoriesThunk = ()=> {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/categories/`, getConfig())
      .then(res => dispatch(setCategories(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
  
      
  };
};


export const filterCategoryThunk = id => {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
      .then(res => dispatch(setShopList(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)))
  
      
  };
};




export const filterContainNameThunk = name => {
  return dispatch => {
      dispatch(setIsLoading(true));
      axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${name}`, getConfig())
          .then(res => dispatch(setShopList(res.data)))
          .catch(error => console.log(error.response))
          .finally(() => dispatch(setIsLoading(false)));
  }
}
  

export const getProductsThunk = name => {
  return dispatch => {
      dispatch(setIsLoading(true));
      axios.get(`https://ecommerce-exercise-backend.herokuapp.com/cart/`, getConfig())
          .then(res => dispatch(setProductos(res.data)))
          .catch(error => console.log(error.response))
          .finally(() => dispatch(setIsLoading(false)));
  }
}


export const addProductCardThunk = carrito => {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/`, carrito, getConfig())
    .then(() => {
        dispatch(getProductsThunk());
        alert("Agregado")
    })
    .catch(error => console.log(error))
    .finally(() => dispatch(setIsLoading(false)));
  }

}

export const deleteProductCarThunk = id => {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios.delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`, getConfig())
    .then(() => dispatch(getProductsThunk()))
    .catch(error => console.log(error))
    .finally(() => dispatch(setIsLoading(false)))
  }
}

export const userCreateThunk = (user)=> {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`https://ecommerce-exercise-backend.herokuapp.com/users/`, user)
    .then(res => dispatch(setUserRegister(res.data)))
    .catch(error => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
  }
}