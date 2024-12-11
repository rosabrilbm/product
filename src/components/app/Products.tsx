import React, { useEffect, useState } from 'react';
import ListHeader from '../list/ListHeader.tsx';
import ListTable from '../list/ListTable.tsx';
import getProducts from '../../services/product.services.tsx';
import { Producto } from '../../types/producto.type.ts';

export default function Products() {
    const [data, setData] = useState<Producto[]>([]);

    useEffect(() => {
        try{
            const fetchProducts = async () =>{
                const response = await getProducts();
                setData(response);
            };
            
            fetchProducts();
        }catch(e){
            console.log(`GetStudents: ${e}`)
        }
    },[]);
    
    let column = ["ID del producto","Nombre","Precio","Fecha de creación"]
    let dataRows = ["productoId", "nombre", "precio", "fechaCreacion"]
    
  return (
    <section>
        <ListHeader headerTitle="LISTA DE PRODUCTOS" dataLength={data.length}/> 
        <div className='mt-4'>
            <ListTable data={data} columns={column} dataRows={dataRows} />
        </div>
    </section>

  );
}