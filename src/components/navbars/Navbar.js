import "../../styles/components/navbars.css";
import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartSharp,StorefrontSharp,HomeSharp } from 'react-ionicons';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';


const BeforeLogin = ({setHoverButtonRegister,hoverButtonRegister, setShowModal}) =>{
  return (
    <Navbar.Text >
      <Button 
      variant="outline-light" 
      style={{
        marginRight : "20px"
      }}
      onClick={()=>setShowModal({status : true,name:"login"})}
      >Login</Button>
      <Button
      onClick={()=>setShowModal({status : true, name : 'register'})} 
      variant="danger" 
      style={{
        background : "#ee2c4a",
        color : "white",
        opacity : hoverButtonRegister ?  "0.7" : ""
      }}
      onMouseLeave={()=>setHoverButtonRegister(false)}
      onMouseEnter={()=>setHoverButtonRegister(true)}
      >Register</Button>{' '}
      </Navbar.Text>
  )
};

const AfterLogin = ({user, logout}) =>{
  const [show, setShow] = useState(false)
  return (
    <div>
    <Dropdown className="d-inline mx-2">
     
      <Dropdown.Toggle id="dropdown-autoclose-true" style={{
        background : "none",
        border : "none"
      }}>
      <Image roundedCircle src={user.image} style={{
        background : "white",
        width : "50px",
        height : "50px"
      }}/>
    </Dropdown.Toggle>
      <Dropdown.Menu className="mt-4">
      <Dropdown.Item href="#">PROFILE</Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item onClick={logout}>LOGOUT</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

function NavbarBasic({login,cart, setShowModal, user, logout}) {
  const [hoverButtonRegister, setHoverButtonRegister] = useState(false);
  const [cartShake, setCartShake] = useState(false);
  const [storeShake, setStoreShake] = useState(false);
  const [homeShake, setHomeShake] = useState(false);

  return (
    <Navbar 
    expand="lg" 
    variant="dark"
    bg="dark"
    className="main-nav">
      <Container>
        <Navbar.Brand href="/store-shop">Shoping Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
        <Nav.Link href="/store-shop"   onMouseEnter={()=>setHomeShake(true)}
        onMouseLeave={()=>setHomeShake(false)}>
        <HomeSharp
        color={'white'} 
        shake={homeShake} 
        title={"title"}
        height="24px"
        width="24px"
      />
      
        </Nav.Link>
        <Nav.Link href="#/store"
        onMouseEnter={()=>setStoreShake(true)}
        onMouseLeave={()=>setStoreShake(false)}>
        <StorefrontSharp
          color={'white'} 
          shake={storeShake} 
          title={"store"}
          height="24px"
          width="24px"
          />
        </Nav.Link>
      </Nav>
      {user.isLogin && 
      <Nav.Link href="#/cart" 
      onMouseEnter={()=>setCartShake(true)}
      onMouseLeave={()=>setCartShake(false)}
      >
        <div>
        <Badge bg="danger" text="ligth" style={{
          borderRadius : "50%",
          fontSize : "8px",
          position : "absolute",
          marginLeft : "17px",
          marginTop: "-5px",
        }}>
        {cart && (cart) }
        </Badge>{' '}
        <CartSharp
        color={'white'} 
        shake={cartShake} 
        title={"cart"}
        height="24px"
        width="24px"
      />
        </div>
      </Nav.Link>
      }
          {
           user && (!user.isLogin ? <BeforeLogin 
             setHoverButtonRegister={setHoverButtonRegister} 
             hoverButtonRegister={hoverButtonRegister} 
             setShowModal={setShowModal}
             /> : <AfterLogin logout={logout} user={user.users}/>)
          }
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBasic;

// <Navbar.Text>
// Signed in as: <a href="#login">Mark Otto</a>
// </Navbar.Text>
        