import {  Row, Button, Col } from "react-bootstrap"

const ListCategories = ({handleCategory,category, setStateCategory, stateCategory}) =>{

    return (
        <div>
            <Row>
                <h1 style={{
                    fontWeight : "bold"
                }}>List Of Categories</h1>
            </Row>
            <Row className="mt-4 mb-5">
            <Col md={2} className="mb-3">
            <Button variant="btn-primary" 
            onClick={()=>{
                setStateCategory("all")
                handleCategory();
        }}
            style={{
                backgroundColor : stateCategory === "all" ?  "#ee2c4a" : "#595959",
                color : "white",
                fontWeight : "bold"
            }}>All</Button>
        </Col>
                {category && category.map((item,index)=>{
                    return (
                        <Col md={2} className="mb-3" key={index}>
                            <Button variant="btn-primary" 
                            onClick={()=>{
                                setStateCategory(item);
                                handleCategory();
                            }}
                            style={{
                                backgroundColor : stateCategory === item ?  "#ee2c4a" : "#595959",
                                color : "white",
                                fontWeight : "bold"
                            }}>{item}</Button>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default ListCategories;