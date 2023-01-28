import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React,{useState} from "react"


const Login = ({onChange}) =>{
    return(
    <Form>
      <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"  onChange={(e)=>onChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3"  controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password"  onChange={(e)=>onChange(e)}/>
      </Form.Group>
    </Form>
    )
}

const Registers = ({onChange}) =>{
    return(
    <Form>
      <Form.Group className="mb-3" name="email" controlId="formBasicEmail" onChange={(e)=>onChange(e)}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" name="password" controlId="formBasicPassword" onChange={(e)=>onChange(e)}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
    </Form>
    )
}



const Register = ({onChange}) =>{
    return(
    <Form>
      <Form.Group className="mb-3" name="email" controlId="formBasicEmail" onChange={(e)=>onChange(e)}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" name="password" controlId="formBasicPassword" onChange={(e)=>onChange(e)}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" name="password" controlId="formBasicPassword" onChange={(e)=>onChange(e)}>
      <Form.Label>Password Confirmation</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    )
}

function MyVerticallyCenteredModal(props) {
    const onChange = (e) =>{
        e.preventDefault(e);
        props.setForm({
            ...props.form,
            [e.target.name] : e.target.value
        })
    }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{
            fontWeight : "bold"
        }}>
          {props.name.toUpperCase()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            {
                props.name === "login" ? <Login  onChange={onChange}/> : <Register/>
            }
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button 
         onClick={()=>props.login(props.form, props.setShow)}
         variant={props.name === "login" ? "primary" : "danger"}>{props.name.toUpperCase()}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function BasicModal({show, setShow,login, logout}) {
    const [form, setForm ] = useState({
        email : "",
        password : ""
    });
    
  return (
      <MyVerticallyCenteredModal
        show={show.status}
        name={show.name}
        form={form}
        setShow={setShow}
        setForm={setForm}
        login={login}
        onHide={() => setShow({
            status : false,
            name : ""
        })}
      />
  );
}

