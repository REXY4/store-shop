import { Product } from "../../config/api";

const getAllCategory = () => async (dispatch) =>{
    try{
        const response = await Product.get("/products/categories");
        if(response.status === 200){
            dispatch({
                type : "ALL_CATEGORY",
                payload : response.data
            });
        }
    }catch(err){
        console.log(err);
    }
}

export {
    getAllCategory
}