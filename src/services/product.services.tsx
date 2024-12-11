import {Producto} from '../types/producto.type';

export default async function getProducts(): Promise<Producto[]> {
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
