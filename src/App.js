import logo from './logo.svg';
import './App.css';
import Productos from './pages/Productos/ProductosPage';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className="App">
      <Productos />
    </div>
  );
}

export default App;
