import React,{useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Images, TrashSharp } from 'react-ionicons'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { editProduct } from '../../redux/actions/product.action';



const VariantInput = ({setVariant, variant, id, onChange, editProduct }) =>{

    return (
        <Row className='mt-3'>
        <Col >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama</Form.Label>
        <Form.Control onChange={(e)=>onChange(e)}  name={`name${id}`} type="text" placeholder="Masukan Nama" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Harga</Form.Label>
        <Form.Control onChange={(e)=>onChange(e)}  name={`harga${id}`} type="text" placeholder="Masukan Nama Harga" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tipe</Form.Label>
        <Form.Control onChange={(e)=>onChange(e)}  name={`tipe${id}`} type="text" placeholder="Masukan Tipe Product" />
        </Form.Group>
        </Col>
        <Col>
            <Button
            onClick={()=>setVariant(variant.filter(fil=>fil.id !== id))} 
            variant='dark' style={{
                background : "none",
                marginTop : "30px"
            }}>
            <TrashSharp
                color={'#ee4d2d'} 
                beat={false} 
                title={"delete"}
                height="24px"
                width="24px"
            />
            </Button>
        </Col>
        </Row>
    )
}

function FormProduct({product, condition = {id : 0 , edit : false},createProduct,user, setShowAlert, editProduct}) {
    const [variant, setVariant ] = useState([]);
    let navigate = useNavigate();
    let getProduct = product.filter((fil)=>fil.id === condition.id)
    const [form, setForm] = useState({
        userId : user.id,
        nama : !condition.edit ? "": getProduct[0].nama,
        sku :  !condition.edit ? "":getProduct[0].sku,
        brand :  !condition.edit ? "": getProduct[0].brand,
        harga :  !condition.edit ? "": getProduct[0].harga,
        deskripsi :  !condition.edit ? "": getProduct[0].deskripsi,
        variasi :  !condition.edit ? "": getProduct[0].variasi,
    });


    const [image, setImage]= useState([])
    const [imageUrls, setImageUrls] = useState([])

    const onChangeImage = (e) =>{
        setImage([...e.target.files])
    }
 
    const onChange = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value,
            image : imageUrls,
            variansi : variant.map((item)=>{
                return {
                    id : item.id,
                    [`name${item.id}`] : e.target.value,
                    [`sku${item.id}`] : e.target.value,
                    [`tipe${item.id}`] : e.target.value
                }
            })
        });
    }

    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          setImageUrls(fileReader.result);
        }
        fileReader.onerror = (error) => {
          reject(error);
        }
      })
    }
    useEffect(()=>{
      if(image.length < 1) return;
      convertBase64(image[0])
    },[image]);

  return (
    <div className='p-3'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama</Form.Label>
        <Form.Control name="nama" value={form.nama} onChange={(e)=>onChange(e)} type="text" placeholder="Masukan Nama Product" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>BRAND</Form.Label>
      <Form.Control value={form.brand} name="brand" onChange={(e)=>onChange(e)}  type="text" placeholder="Masukan Brand Product" />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>SKU</Form.Label>
        <Form.Control value={form.sku} name="sku" onChange={(e)=>onChange(e)}  type="text" placeholder="Masukan SKU product" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>HARGA</Form.Label>
      <Form.Control value={form.harga} name="harga" onChange={(e)=>onChange(e)}  type="text" placeholder="Masukan SKU product" />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label='masukan deskripsi' >
        <Form.Control value={form.deskripsi} name="deskripsi"
        onChange={(e)=>onChange(e)} 
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Button 
        variant='danger'
        style={{fontWeight : "bold"}}
        onClick={()=>setVariant([...variant,{
            id :variant.length + 1
        }])}
         >+ variasi</Button>
         {variant.map((item,i)=><VariantInput onChange={onChange}  id={item.id} setVariant={setVariant} variant={variant} />)}
      </Form.Group>
      <div className='d-flex justify-content-center'>
      <Button
      onClick={()=>condition.edit ? editProduct(form, setShowAlert, navigate,condition.id) :createProduct(form, setShowAlert, navigate)}
       variant="outline-primary" type="submit">
         {condition && condition.edit ? "Edit":"Submit"}
      </Button>
      </div>
    </div>
  );
}

export default FormProduct;