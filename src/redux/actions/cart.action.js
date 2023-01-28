const AddCart = (item) => async (dispatch) =>{
    try{
        let payload = {
            product : item,
            cart : item.length
        }
        console.log(item)
        dispatch({
            type : "ADD_CART",
            payload,
        })
    }catch(err){
        console.log(err);
    }
}

const deleteCart = (product,item) => async (dispatch)=>{
    try{
        let payload = {
            product : product.filter(fil=>fil.id !== item.id),
            cart : product.filter(fil=>fil.id !== item.id).length
        }
        dispatch({
            type : "DELETE_CART",
            payload
        })
    }catch(err){
        console.log(err);
    }
}

export {
AddCart,
deleteCart
}