import React, { useState, useEffect } from 'react';
import './App.css';
import { Producto } from './types/producto.type';

function App() {
  const [data, setData] = useState<Producto[]>([]); 
  const url = 'https://localhost:7176/api/Productos';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Hubo un error');
        }


        const response = await res.json() as Producto[];
        setData(response);
        console.log(response);
        
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <hr />
      <h3>Agregar producto</h3>
      
      <table>
        <thead>
          <tr>
            <th>ProductoId</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Fecha Creación</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td>Sin datos</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.productoId}>
                <td>{item.productoId}</td>
                <td>{item.nombre}</td>
                <td>${item.precio}</td>
                <td>{new Date(item.fechaCreacion).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
