import React from 'react';
import axios from 'axios';
import { Card, Button, Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//Se crea la constante de ProductList el cual mostrara en forma enlistada todas las tablas 
//obtenidas en la funcion product.
const ProductList = ({ products }) => {
    return (
      <Container >
        <Row>
            {products && products.map((product) => <Product key={product.id} {...product} />)}
        </Row>
      </Container>
  
    );
  };
  //Funcion que permite obtener los productos con sus respectivos atributos.
  function Product({ id, nombreProducto, codigoProducto, fechaVencimiento, categoriaProducto, precioProducto }) {
    //Se crea la funcion delete para poder borrar los productos por su ID.
    function deleteProducto(id) {
      //Utilizamos axios y el metodo delete para borrar los productos.
      axios.delete("http://localhost:8000/producto/" + id)
        .then(res => {
          console.log(res);
          window.location.reload(true);
        })
    }
    //Como respuesta se tiene la tabla con sus respectivos atributos, y ademas se tiene un boton de borrar
    //Donde se utiliza la funcion deleteProducto para elminar la tabla o producto seleccionado.
    return (
      <Col className="pt-1" >
        <Card border="primary" style={{ width: '18rem' }} className="mb-5"  >
          <Card.Img src="https://i.pinimg.com/736x/bf/32/73/bf3273c849cc88371fec87df94130b8e.jpg" />
          <Card.Body>
            <Card.Title> {"Codigo: " + codigoProducto}</Card.Title>
            <Card.Text>
              {"Nombre Producto: " + nombreProducto}
            </Card.Text>
            <Card.Text>
              {"FechaVencimiento: " + fechaVencimiento}
            </Card.Text>
            <Card.Text>
              {"Categoria (0 = importado_ 1 = nacional): " + categoriaProducto}
            </Card.Text>
            <Card.Text>
              {"Precio: " + precioProducto}
            </Card.Text>
            <Button onClick={() => deleteProducto(id)} variant="primary">Eliminar</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  

  export default ProductList;