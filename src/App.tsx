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
        
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <p>Sin datos</p>
      ) : (
        data.map((item) => (
          <p key={item.productoId}>{item.nombre}</p>
        ))
      )}
    </div>
  );
}

export default App;
