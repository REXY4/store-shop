import React,{useState} from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import FormProduct from "../components/products/FormProduct";
import { connect } from "react-redux";
import {createProduct, editProduct} from "../redux/actions/product.action"
import AlertMessage from "../components/Toast/ToastAlert";
import { useLocation } from "react-router-dom";

const ProductPages = ({
    createProduct,
    product,
    user,
    editProduct
}) =>{
    const [show, setShow] = useState(false);
    let location = useLocation();
    let condition = location.state;
    return (
        <Container>
            <Row className="mt-5 mb-5">
            <Col className="d-flex justify-content-center">
                <Card style={{
                    width : "50%"
                }}>
                <Card.Body>
                    <FormProduct editProduct={editProduct} product={product} condition={condition === null ? {id : 0,edit : false} : condition} setShowAlert={setShow} user={user} createProduct={createProduct}/>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            <AlertMessage show={show} message="create data success"/>
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.product.product,
        user : state.auth.users
    }
}
export default connect(mapStateToProps,{createProduct,editProduct})(ProductPages);