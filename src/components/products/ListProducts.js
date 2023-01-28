import { Row, Col } from "react-bootstrap";
import CardBasic from "../card/Cards";
import BasicSpinners from "../loading/Spinners";
import PaginationBasic from "../pagination/pagination";
import React,{useState, useEffect} from "react";


const ListProduct = ({addCart,loading,product,totalProduct, page, setPage, handlePage}) =>{
    const [cart,setCart] = useState([])
    
    const handleCart = () =>{
        addCart(cart)
    }

    return(
        <div>
        <Row>
             <h1 style={{
                fontWeight : "bold"
             }}>List Of Product</h1>
        </Row>
        {loading ? 
            <Row>
            <Col className="d-flex justify-content-center">
            <BasicSpinners />
            </Col>
            </Row>
            :
        <div>
        <Row className="mt-5">
            { product && (
                product.map((item)=>{
                    return (
                            <Col className="mb-5 d-flex justify-content-center">
                                <CardBasic
                                items={item}
                                setCart={setCart}
                                cart={cart}
                                handleCart={handleCart}
                                image={item.thumbnail} 
                                title={item.title} 
                                desc={item.description}/>
                            </Col>
                    )
                })
            )}
        </Row>
        <Row>

            <Col className="d-flex justify-content-center">
                <PaginationBasic handlePage={handlePage} total={totalProduct} active={page} setActive={setPage} />
            </Col>
            
        </Row>
        </div>
            }
        </div>
    )
}

export default ListProduct;