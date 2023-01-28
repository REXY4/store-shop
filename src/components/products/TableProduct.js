import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { TrashSharp , PencilSharp} from 'react-ionicons';
import { useNavigate, Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

function TableProduct({product, deleteProduct}) {
    let navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>BRAND</th>
          <th>SKU</th>
          <th>DESKRIPSI</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
      {product && product.map((item,i)=>
        <tr>
        <td>{i+1}</td>
        <td>{item.nama}</td>
        <td>{item.brand}</td>
        <td>{item.sku}</td>
        <td>{item.deskripsi}</td>
        <td className='d-flex justify-content-center'>
            <Button variant='outline-danger' onClick={()=>deleteProduct(item.id)}>
            <TrashSharp
              color={'#ee4d2d'} 
              beat 
              title={"delete"}
              height="24px"
              width="24px"
            />
            </Button>
            <Link to="/products" state={{ id: item.id, edit : true }} >
            <Button
             variant='primary' style={{
                marginLeft : "20px"
            }}>
            <PencilSharp
            color={'white'} 
            beat 
            title={"pen"}
            height="24px"
            width="24px"
          />
            </Button>
            </Link>
        </td>
      </tr>
      )}
       
      </tbody>
    </Table>
  );
}

export default TableProduct;