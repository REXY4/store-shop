import Pagination from 'react-bootstrap/Pagination';


const PaginationBasic = ({total, active, setActive, handlePage}) =>{
    let items = [];
    for (let number = 1; number <=  Math.ceil(total / 8); number++) {
    items.push(
    <Pagination.Item key={number} active={number === active} onClick={()=>{
        setActive(number);
        handlePage();
    }}>
      {number}
    </Pagination.Item>,
    );
    }

    return(
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}
 

export default PaginationBasic;