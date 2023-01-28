import { Product } from "../../config/api";
import {store} from "../../redux/stores"


const getAllProduct = (skip, setLoading) => async (dispatch) =>{
   let data = !setLoading ? false :  true
    try{   
        await data && setLoading(true) 
        let skips =  !skip ? 0 : skip;
        const response = await Product.get(`/products?limit=${8}&skip=${skips}`);
        console.log(response.data)
        if(response.status === 200){
           await data && setLoading(false)
          return  dispatch({
                type : "ALL_PRODUCT",
                payload : response.data
            })  
        }    
    }catch(err){
        console.log(err);
    }
}

const getByCategory = (category, setLoading) => async (dispatch) =>{
    setLoading(true)
    try{   
        const response = await Product.get(`/products/category/${category}`);
        if(response.status === 200){
            setLoading(false)
           return dispatch({
                type : "ALL_PRODUCT",
                payload : response.data
            })  
        }else{
            setLoading(true)
        }    
    }catch(err){
        setLoading(false)
    }
}


const createProduct = (data, setShow, navigate) => async(dispatch)=>{
    try{
        
        const id = store.getState().product.product.length;
        const body = { 
        id : id,
        userId : data.userId,
        image : data.image,
        nama : data.nama,
        sku : data.sku,
        brand : data.brand,
        deskripsi : data.deskripsi,
        harga : data.harga,
        variasi : data.variasi
        };
        dispatch({
            type : "ADD_PRODUCT",
            payload : body  
        })
        setShow(true)
        setTimeout(()=>{
            setShow(false)
            navigate("/store-shop/store")
        },1000)
    }catch(err){
        console.log(err)
    }
} 


const deleteProduct = (id)=>async(dispatch) =>{
    try{
        console.log("dong",id)
        dispatch({
            type : "DELETE",
            payload : id
        })
    }catch(err){
        console.log(err)
    }
}



const editProduct = (data, setShow, navigate, id) => async(dispatch)=>{
    try{
       console.log("edit")
        // const id = store.getState().product.product.length;
        const body = { 
        id : id,
        userId : data.userId,
        image : data.image,
        nama : data.nama,
        sku : data.sku,
        brand : data.brand,
        deskripsi : data.deskripsi,
        harga : data.harga,
        variasi : data.variasi
        };
        dispatch({
            type : "EDIT_PRODUCT",
            payload : body  
        })
        setShow(true)
        setTimeout(()=>{
            setShow(false)
            navigate("/store-shop/store")
        },1000)
    }catch(err){
        console.log(err)
    }
} 





export  {
    getAllProduct,
    getByCategory,
    createProduct,
    deleteProduct,
    editProduct
}