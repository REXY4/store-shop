import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';{}
function CardBasic({
    image,
    title,
    desc,
    addCart,
    setCart,
    cart,
    items,
    handleCart
}) {
   

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{
        height : "200px"
      }} />
      <Card.Body>
        <Card.Title style={{
            fontWeight : "bold"
        }}>{title.substring(0, 20)}...</Card.Title>
        <Card.Text style={{
            height : "50px"
        }}>
            {String(desc).substring(0, 50)}...
        </Card.Text>
        <Button 
        variant="primary"
         onClick={()=>{
          setCart([...cart, items]);
          handleCart()
        }}
        >+ Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBasic;