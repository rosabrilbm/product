import React, { useState, useEffect } from 'react';
import './App.css';
import { Producto } from './types/producto.type';

function App() {
  const [data, setData] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState(''); 
  const [precio, setPrecio] = useState(0); 
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

  const send = async ()=>{
    try {

      const post = {
        nombre: nombre,
        precio: precio,
    };
    
    const url = 'https://localhost:7176/api/Productos';
    
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
    });

      setNombre(''); 
      setPrecio(0); 
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <hr />
      <h3>Agregar producto</h3>
      <div>
        <form onSubmit={send}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(Number(e.target.value))}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <hr />
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
