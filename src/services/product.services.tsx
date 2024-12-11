import {Producto} from '../types/producto.type';

export async function getProducts(): Promise<Producto[]> {
    try {
        const url = 'https://localhost:7176/api/Productos';

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json() as Producto[];
        let response: Producto[] = [];

        data.forEach(element => {
            element.fechaCreacion = new Date(element.fechaCreacion).toLocaleDateString();
            response.push(element);
        });

        return response;

    } catch (e) {
        console.log(e);
        throw e; 
    }
}

export async function postProduct(nombre:string, precio:number): Promise<Boolean> {
    const url = 'https://localhost:7176/api/Productos';
    const post = {
        nombre: nombre,
        precio: precio,
    };

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        });

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}