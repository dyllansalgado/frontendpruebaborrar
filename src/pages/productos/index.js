import React, { Component } from 'react';
import axios from 'axios';
import { Container, Navbar,Button,Modal, Form } from 'react-bootstrap';
import ProductList from "../components/producto/ProductosComponents.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class VentanaModal extends Component{
   constructor(props) {
    super(props);
    this.state = {codigoProducto: '',
    nombreProducto: '',
    fechaVencimiento: '',
    categoriaProducto: '',
    precioProducto: ''
  };
  }
  agregar = e => {
    console.log(this.state)
    e.preventDefault();
      axios.post("http://localhost:8000/producto/", {
        codigoProducto: this.state.codigoProducto,
        nombreProducto: this.state.nombreProducto,
        fechaVencimiento: this.state.fechaVencimiento,
        categoriaProducto: this.state.categoriaProducto,
        precioProducto: this.state.precioProducto
      }
      )
      .then( response => {
        this.setState({
            result: response.data.result
        });
        window.location.reload(true);})
      .catch(err=>console.log(err));
  };
  setCodigoProducto = e =>{
    const {value}=e.target
    this.setState({
      codigoProducto : value
    })
  }
  setNombreProducto = e=>{
    const {value}=e.target
    this.setState({
      nombreProducto:value
    });
  }
  setFechaVencimiento = e =>{
    const {value}=e.target
    this.setState({
      fechaVencimiento : value
    })
  }
  setCategoriaProducto = e =>{
    const {value}=e.target
    this.setState({
      categoriaProducto: value
    })
  }
  setPrecioProducto = e =>{
    const {value}=e.target
    this.setState({
      precioProducto : value
    })
  }
  render(){
  return (
    <Modal
     {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Información de producto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form method="post" onSubmit={ this.agregar}>
          <Form.Group className="mb-3">
            <Form.Label>Codigo producto</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Codigo" id="codigo" onChange={this.setCodigoProducto} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>nombreProducto</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre" id="nombre"  onChange={this.setNombreProducto} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha Vencimiento</Form.Label>
            <Form.Control type="date" placeholder="Ingrese Fecha Vencimiento" id="fechaVencimiento" onChange={this.setFechaVencimiento} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="number" placeholder="Ingrese Categoria" min={0} max={1} id="categoria" onChange={this.setCategoriaProducto} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="Ingrese Precio"  min={0} id="precio" onChange={this.setPrecioProducto} required/>
          </Form.Group>
          <Button variant="primary" type="submit" >
            Guardar producto
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );}
}

function AñadirProductos() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Agregar Producto
      </Button>

      <VentanaModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: []
    }
    
  }
  //BORRAR POR ID
  deleteProducto(id) {
    console.log(id);
    axios.delete("http://localhost:8000/producto/" + id)
      .then(res => {
        console.log(res);
        window.location.reload(true);
      })
  };
  componentDidMount() {
    //Obtener productos
    axios.get('http://localhost:8000/producto/').then(res => {
      var productos = res.data;
      console.log(productos)
    
      this.setState({ productos: res.data });
    }).catch(error => {
      console.log(error)
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
        <Navbar.Brand href="http://localhost:3000/home">Volver al inicio</Navbar.Brand>
        <h1 > Productos </h1>
        <AñadirProductos></AñadirProductos>
        </Container>
        </Navbar>
        <ProductList products={this.state.productos} />
      </div>
    )
  }
  
}
