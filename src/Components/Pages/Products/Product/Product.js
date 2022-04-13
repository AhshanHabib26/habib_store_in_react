import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Product.css'

const Product = ({ product }) => {

    const navigate = useNavigate()
    
    const handleButton = () =>{
        navigate('/login')
    }

    const {Name, Image, Price} = product

  return (
    <div>
      <Card style={{ width: "22rem" ,borderRadius: "15px" }}>
        <Card.Img className="w-75 hover_image mx-auto" variant="top" src={Image} />
        <Card.Body>
          <Card.Title>{Name}</Card.Title>
          <Card.Text>
            {Price}
          </Card.Text>
          <Button onClick={handleButton} variant="success">Shop Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
