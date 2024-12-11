import React, {useEffect, useState} from 'react'
import ProductIcon from '../components/icons/ProductIcon.tsx';
import { editProd, getById } from '../services/product.services.tsx';
import { NavLink, useLocation } from 'react-router-dom';
import { Producto } from '../types/producto.type.ts';

export default function DetailsProduct() {
    const [nombre, setNombre] = useState(''); 
    const [mensaje, setMensaje] = useState(''); 
    const [precio, setPrecio] = useState(0); 
    const [id, setId] = useState(0);
    const [isEdit, setIsEdit] = useState(false);

    const [producto, setProducto] = useState<Producto>()
    const navLinkData = useLocation();

    useEffect(()=>{
        const productData = async () =>{
            let id = navLinkData.state["productoId"];
            const data = await getById(id);
            console.log(data);
            setProducto(data as Producto);   
            if(producto !== undefined){
                setNombre(producto.nombre);
                setPrecio(producto.precio);
            }

            setId(id);      
        }

        productData();

    },[])

    const edit = async (event)=>{
        try{
            event.preventDefault(); 
            const editProduct = async () => {
                if(isEdit){
                    if(nombre === ''){
                        setMensaje('El campo nombre no puede estar vacío');
                    }else{
                        const res = await editProd(id, nombre, precio);
                        if(res !== null ){
                            setMensaje('Producto actualizado con éxito');
    
                            const editedProduct: Producto = res as Producto;
                            setProducto(editedProduct);
                            setIsEdit(false);
                        }else{
                            setMensaje('Ha ocurrido un error al editar el producto :(');
                        }
                    }
                }

            };
            editProduct();

        }catch(e){
            console.log(e);
        }

    };

  return (
    <div className="border border-gray-200 rounded-lg bg-white p-8">
        <NavLink to="/">
            <p className='text-xl text-cyan-800 mb-8 font-semibold'> Volver atrás</p>
        </NavLink>
        <div className='flex'>
            <ProductIcon />
            <h1 className="ml-4 font-bold text-3xl text-cyan-600 mb-8">
                {isEdit ? 
                    "EDITAR PRODUCTO"
                    :
                    "DETALLES DEL PRODUCTO"
                }
            
        </h1>
        </div>
   
        <form onSubmit={edit}>
          <div className='mb-6 text-lg'>
            <label className='block mb-2' htmlFor="nombre">Nombre</label>
            {
                isEdit?
                    <input
                        className='border w-48 h-8 p-2'
                        type="text"
                        id="nombre"
                        value={nombre || producto?.nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    
                    />
                :
                <p className='font-semibold text-cyan-700'>{producto?.nombre}</p>
            }
          </div>
          <div className='mb-6 text-lg'>
            <label className='block mb-2' htmlFor="precio">Precio</label>
            {
                isEdit?
                    <input
                        className='border w-28 h-8 p-2'
                        type="number"
                        id="precio"
                        min={1}
                        value={precio || producto?.precio}
                        onChange={(e) => setPrecio(Number(e.target.value))}
                    />
                :
                <div>
                    <p className='font-semibold text-cyan-700'>{producto?.precio}</p>

                    <label className='block mb-2 mt-2' htmlFor="precio">Fecha de creación</label>
                    <p className='font-semibold text-cyan-700'>{producto?.fechaCreacion}</p>
                </div>


            }
          </div>
            {
                mensaje ? 
                <p className='text-lg text-cyan-600 my-2'>{mensaje}</p> :
                ''
            }
            {
                isEdit ?
                <div>
                    <button type='submit'
                    className="mr-8 p-2 border-b rounded-xl w-40 text-cyan-100 border-cyan-700 font-semibold bg-cyan-600 hover:bg-cyan-700 hover:text-cyan-200"
                    >
                        Editar
                    </button>
                    <button 
                    onClick={()=> {setIsEdit(false); setMensaje('')}}
                    className="p-2 border-b rounded-xl w-40 text-cyan-100 border-cyan-700 font-semibold bg-blue-950  hover:bg-cyan-700 hover:text-cyan-200"
                    >
                        Volver a detalles
                </button>
                </div>

                
                :
                <button 
                onClick={()=> {setIsEdit(true); setMensaje('')}}
                className="p-2 border-b rounded-xl w-80 text-cyan-100 border-cyan-700 font-semibold bg-cyan-600 hover:bg-cyan-700 hover:text-cyan-200"
                >
                    Cambiar a modo edición
                </button>
            }

        </form>
    </div>
  )
}
