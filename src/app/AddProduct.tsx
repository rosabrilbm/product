import React, {useState} from 'react'
import ProductIcon from '../components/icons/ProductIcon.tsx';
import { postProduct } from '../services/product.services.tsx';
import { NavLink } from 'react-router-dom';

export default function AddProduct() {
    const [nombre, setNombre] = useState(''); 
    const [mensaje, setMensaje] = useState(''); 
    const [precio, setPrecio] = useState(0); 

    const send = async (event)=>{
        try{
            event.preventDefault(); 
            const sendProduct = async () => {
                if(nombre === ''){
                    setMensaje('El campo nombre no puede estar vacío');
                }else{
                    const res= await postProduct(nombre, precio);
                    if(res === true ){
                        setMensaje('Producto agregado con éxito');
                        setNombre(''); 
                        setPrecio(1); 
                    }else{
                        setMensaje('Ha ocurrido un error al crear el producto :(');
                    }
                }

            };
            sendProduct();

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
            AGREGAR PRODUCTO
        </h1>
        </div>
   
        <form onSubmit={send}>
          <div className='mb-6 text-lg'>
            <label className='block mb-2' htmlFor="nombre">Nombre</label>
            <input
                className='border w-48 h-8 p-2'
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className='mb-6 text-lg'>
            <label className='block mb-2' htmlFor="precio">Precio</label>
            <input
            className='border w-28 h-8 p-2'
                type="number"
                id="precio"
                min={1}
                value={precio}
                onChange={(e) => setPrecio(Number(e.target.value))}
            />
          </div>
            {
                mensaje ? 
                <p className='text-lg text-cyan-600 my-2'>{mensaje}</p> :
                ''
            }
            <button 
            type='submit'
            className="p-2 border-b rounded-xl w-40 text-cyan-100 border-cyan-700 font-semibold bg-cyan-600 hover:bg-cyan-700 hover:text-cyan-200"
            >
                Enviar
            </button>
        </form>
    </div>
  )
}
