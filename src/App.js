import { HashRouter, Route, Routes, Navigate,Link } from "react-router-dom";
import { ProtectedRoutes, MainLayout, LoadingScreen } from "./components";
import { Card, Login, ShopDetail, Shop, RegisterUser} from './pages';
import { useSelector } from 'react-redux';
import "./App.css"


const App = () => {

  const isLoading = useSelector(state => state.isLoading)
  return (
    <div className="app">

      <HashRouter>
      {isLoading && <LoadingScreen />}
       

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registerUser" element={<RegisterUser />} />
          
          <Route path="/" element={<Navigate to='/shop'/>} /> 
          
         
          <Route element={<ProtectedRoutes />} >

          <Route element={<MainLayout />}>
          
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopDetail />} />
            <Route path="/card" element={<Card />} />

          </Route>
         
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
