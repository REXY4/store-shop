import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import {connect} from "react-redux";
import { deleteCart } from "../redux/actions/cart.action";

const CartPages = ({
    product,
    cart,
    deleteCart
}) =>{
    return (
        <Container className="mb-5">
            <Row className="mt-5 mb-3">
                <h1>Cart {
                    product && (
                        `(${cart} items)`
                    )
                }</h1>
            </Row>
            <Row>
                {cart === 0 ? 
                    <Col md={8}>
                        <Card>
                        <Card.Body >
                        <h1 style={{textAlign : "center"}}>Belum ada cart</h1>
                        </Card.Body>
                        </Card>
                    </Col>
                    :
                <Col md={8}>
                <Card>
                <Card.Body>
                    {product && (
                        product.map((item, i)=>{
                            return (
                                <Row>
                                <Col key={i} className={"d-flex"}>
                                    <Image src={item.thumbnail} style={{
                                        width : "200px",
                                        height : "250px"
                                    }}/>
                                    <div style={{
                                        marginLeft : "20px"
                                    }}>
                                        <h3>{item.title}</h3>
                                        <p >{item.description}</p>
                                        <div>
                                           $ {item.price}
                                        </div>
                                    <div className="mt-5">
                                    <Button variant="danger" onClick={()=>deleteCart(product,item)} >Remove Item</Button>{' '}
                                    </div>
                                    </div>
                                    
                                </Col>
                                <hr style={{
                                    marginTop : "40px"
                                }}/>
                                </Row>
                            )
                        })
                    )}
                    </Card.Body>
            </Card>
            </Col>
                    }
            <Col md={4}>
                        <Card>
                            <Card.Body>
                                <h5>The Total Amount Of</h5>
                                <div className="d-flex justify-content-between mt-3">
                                    <p>Temporary amount</p>
                                    <p>
                                       $ {product.map((item)=>item.price).reduce((partialSum, a) => partialSum + a, 0).toLocaleString()}
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                <p>Shipping</p>
                                <p>
                                   Free
                                </p>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between">
                                <p>The Total Amount of (Including VAT)</p>
                                <p>
                                $ {product.map((item)=>item.price).reduce((partialSum, a) => partialSum + a, 0).toLocaleString()}
                                </p>
                                </div>
                                <div className="mt-3 d-flex justify-content-center">
                                <Button variant="primary" >GO TO CHECKOUT</Button>{' '}
                                </div>
                            </Card.Body>
                        </Card>
            </Col>
            </Row>

        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        product : state.cart.cart.product,
        cart : state.cart.cart.cart
    }
}
export default connect(mapStateToProps,{deleteCart})(CartPages);