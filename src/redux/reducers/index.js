import { actions } from "../actions";

const INITIAL_STATE = {
    shopList: [],
    isLoading: false,
    shopDetail: {},
    categories: [],
    productos: [], 
    userRegister: {}
  };
  
  const reducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
       case actions.setShopList:
        return{
          ...state,
          shopList: action.payload
        };

        case actions.setIsLoading:
         return {
           ...state,
           isLoading: action.payload
         }
         case actions.setShopDetail:
         return{
           ...state,
           shopDetail: action.payload
         }
         case actions.setCategories:
          return{
            ...state,
            categories: action.payload
          }
          case actions.setProductos:
          return{
            ...state,
            productos: action.payload
          }
          case actions.setUserRegister:
            return{
              ...state,
              userRegister: action.payload
            }
        
     
       default:
         return state;
     }
   
    
  };
  
  export default reducer;
  