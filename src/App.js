import React,{useState,useEffect} from "react";
import {
  RouterProvider,
} from "react-router-dom";
import NavbarBasic from "./components/navbars/Navbar";
import router from './routes';
import { connect } from "react-redux";
import { getAllProduct } from "./redux/actions/product.action";
import {getAllCategory} from "./redux/actions/category.aciton";
import {login, logOut} from "./redux/actions/auth.action";
import FormModal from "./components/modal/FormModal";


function App({
  getAllProduct,
  getAllCategory,
  cart,
  login,
  user,
  logOut
}) {
  const [showModal, setShowModal] = useState({
    status : false,
    name : ""
  });
  useEffect(()=>{
    getAllProduct()
    getAllCategory();
  },[]);

 
  return (
    <div className="app">
        <NavbarBasic setShowModal={setShowModal} logout={logOut} user={user ? user : {isLogin : false, users : null} } login={login} cart={cart && cart.cart}/>
        <RouterProvider router={router}/>
        <FormModal show={showModal} login={login}  setShow={setShowModal}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    product : state.product,
    cart : state.cart.cart,
    user : state.auth
  }
}
export default connect(mapStateToProps,{getAllProduct,getAllCategory, login, logOut})(App);
//  