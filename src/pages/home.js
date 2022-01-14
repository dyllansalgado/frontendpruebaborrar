import Head from 'next/head'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div className="jumbotron ">
       <div className="container">
           <h1 className="display-3">Supermercado Mingeso </h1>
           <p>
              Trabajo número dos del ramo Metodos de Ingenieria de Software.
           </p>
           <p><a className="btn btn-primary btn-lg" href="http://localhost:3000/productos" target="_blank" role="button">Ir a productos</a></p>
       </div>
    </div>
  )}
