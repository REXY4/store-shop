import React, {useState} from "react";
import {Card, Container, Row, Col} from "react-bootstrap";
import { AddCircleSharp, HomeSharp } from 'react-ionicons';
import { useNavigate } from "react-router-dom";
import {connect} from "react-redux";
import ListProduct from "../components/products/ListProducts";
import TableProduct from "../components/products/TableProduct";
import { deleteProduct } from "../redux/actions/product.action";

const StorePages = ({
    product,
    deleteProduct
}) =>{
    const [addButton, setAddButton] = useState(false);
    const [homeButton, setHomeButton] = useState(false);
    let navigate = useNavigate();

    return(
        <Container>
            <Row className="mt-5">
            <Col className="md-4">
                <Card style={{
                    background : "#ee4d2d"
                }}>
                    <Card.Body className="d-flex">
                    <div 
                    onClick={()=>navigate("/store-shop/products")}
                    onMouseEnter={()=>setAddButton(true)}
                    onMouseLeave={()=>setAddButton(false)}
                    style={{
                        cursor :"pointer",
                    }}>
                    <AddCircleSharp
                    color={'white'} 
                    beat={addButton} 
                    title={"add product"}
                     height="100px"
                    width="100px"
                    />
                    </div>
                    <h1 className="mt-4" style={{paddingLeft :"10px", color : "white", fontWeight : "bold"}}>Add Product</h1>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="md-4">
            <Card style={{
                background : "#151515"
            }}>
                <Card.Body  className="d-flex">
                <div 
                onMouseEnter={()=>setHomeButton(true)}
                onMouseLeave={()=>setHomeButton(false)}
                style={{
                    cursor :"pointer",
                }}>
                <HomeSharp
                color={'white'} 
                beat={homeButton} 
                title={"add product"}
                 height="100px"
                width="100px"
                />
                </div>
                <h1 className="mt-4" style={{paddingLeft :"10px", color : "white", fontWeight : "bold"}}>Home</h1> 
                </Card.Body>
            </Card>
        </Col>        
            </Row>
            <Row className="mt-5">
                <TableProduct deleteProduct={deleteProduct} product={product}/>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        product : state.product.product
    }
}
export default connect(mapStateToProps,{deleteProduct})(StorePages);